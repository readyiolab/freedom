import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

export default function BlogForm({ setIsDialogOpen, blog = {} }) {
  const [formData, setFormData] = useState({
    title: blog.title || '',
    excerpt: blog.excerpt || '',
    content: blog.content || '',
    category: blog.category || '',
    image: blog.image || '',
    author: blog.author || '',
    author_bio: blog.author_bio || '',
    status: blog.status || 'draft',
    read_time: blog.read_time || 5,
    tags: blog.tags ? blog.tags.join(', ') : '', // Convert array to comma-separated string
    is_featured: blog.is_featured || false,
  });
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [], // Convert string to array
        _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken),
      };
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
          required
        />
      </div>
      <div>
        <Label className="text-black">Excerpt</Label>
        <Textarea
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          className="border-black text-black placeholder-gray-500"
          placeholder="A short summary of the blog"
        />
      </div>
      <div>
        <Label className="text-black">Content</Label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="border-black text-black placeholder-gray-500"
          required
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
        <Label className="text-black">Image URL</Label>
        <Input
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="border-black text-black placeholder-gray-500"
          placeholder="URL to the blog image"
        />
      </div>
      <div>
        <Label className="text-black">Author</Label>
        <Input
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className="border-black text-black placeholder-gray-500"
        />
      </div>
      <div>
        <Label className="text-black">Author Bio</Label>
        <Textarea
          value={formData.author_bio}
          onChange={(e) => setFormData({ ...formData, author_bio: e.target.value })}
          className="border-black text-black placeholder-gray-500"
          placeholder="Brief bio of the author"
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
      <div>
        <Label className="text-black">Read Time (minutes)</Label>
        <Input
          type="number"
          value={formData.read_time}
          onChange={(e) => setFormData({ ...formData, read_time: parseInt(e.target.value) || 5 })}
          className="border-black text-black placeholder-gray-500"
          min="1"
        />
      </div>
      <div>
        <Label className="text-black">Tags (comma-separated)</Label>
        <Input
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          className="border-black text-black placeholder-gray-500"
          placeholder="e.g., tech, programming, tutorial"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Label className="text-black">Featured</Label>
        <Switch
          checked={formData.is_featured}
          onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
        />
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
    excerpt: PropTypes.string,
    content: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
    author_bio: PropTypes.string,
    status: PropTypes.oneOf(['draft', 'published', 'archived']),
    read_time: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    is_featured: PropTypes.bool,
  }),
};