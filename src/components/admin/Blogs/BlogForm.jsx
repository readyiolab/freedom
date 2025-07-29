import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

export default function BlogForm({ setIsDialogOpen, blog = {} }) {
  const [formData, setFormData] = useState({
    title: blog.title || '',
    content: blog.content || '',
    category: blog.category || '',
    status: blog.status || 'draft',
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { ...formData, _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) };
      if (blog.id) {
        await api.put(`/blogs/${blog.id}`, data);
      } else {
        await api.post('/blogs', data);
      }
      queryClient.invalidateQueries(['blogs']);
      toast({ title: 'Success', description: blog.id ? 'Blog updated' : 'Blog created' });
      setIsDialogOpen(false);
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to save blog', variant: 'destructive' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label className="text-black">Title</Label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border-black text-black placeholder-gray-500"
        />
      </div>
      <div>
        <Label className="text-black">Content</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="border-black text-black placeholder-gray-500"
        />
      </div>
      <div>
        <Label className="text-black">Category</Label>
        <Input
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="border-black text-black placeholder-gray-500"
        />
      </div>
      <div>
        <Label className="text-black">Status</Label>
        <Select
          value={formData.status}
          onValueChange={(value) => setFormData({ ...formData, status: value })}
        >
          <SelectTrigger className="border-black text-black">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-white text-black border-black">
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="bg-black text-white hover:bg-gray-800">
        {blog.id ? 'Update Blog' : 'Create Blog'}
      </Button>
    </form>
  );
}

BlogForm.propTypes = {
  setIsDialogOpen: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    category: PropTypes.string,
    status: PropTypes.oneOf(['draft', 'published', 'archived']),
  }),
};