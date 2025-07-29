import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../components/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import BlogTable from '../../components/admin/Blogs/BlogTable';
import BlogForm from '../../components/admin/Blogs/BlogForm';

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pageSize = 10;
  const { toast } = useToast();

  const { data, isLoading, error } = useQuery({
    queryKey: ['blogs', page],
    queryFn: async () => {
      const response = await api.get(`/blogs?page=${page}&pageSize=${pageSize}`);
      return response.data;
    },
  });

  if (isLoading) return <div className="text-black">Loading...</div>;
  if (error) {
    toast({ title: 'Error', description: 'Failed to fetch blogs', variant: 'destructive' });
    return <div className="text-black">Error loading blogs</div>;
  }

  return (
    <Card className="border-black">
      <CardHeader>
        <CardTitle className="text-black">Blogs</CardTitle>
      </CardHeader>
      <CardContent>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4 bg-black text-white hover:bg-gray-800">Create Blog</Button>
          </DialogTrigger>
          <DialogContent className="bg-white text-black border-black">
            <BlogForm setIsDialogOpen={setIsDialogOpen} />
          </DialogContent>
        </Dialog>
        <BlogTable
          blogs={data?.blogs || []}
          page={page}
          pageSize={pageSize}
          total={data?.total || 0}
          setPage={setPage}
        />
      </CardContent>
    </Card>
  );
}