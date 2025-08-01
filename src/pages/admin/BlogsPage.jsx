import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../components/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BlogTable from '../../components/admin/Blogs/BlogTable';
import BlogForm from '../../components/admin/Blogs/BlogForm';

export default function BlogsPage() {
  const [page, setPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility
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
        <Button
          className="mb-4 bg-black text-white hover:bg-gray-800"
          onClick={() => setIsFormVisible(!isFormVisible)} // Toggle form visibility
        >
          {isFormVisible ? 'Hide Form' : 'Create Blog'}
        </Button>
        {isFormVisible && (
          <div className="mb-4 p-4 bg-white border border-black rounded">
            <BlogForm setIsDialogOpen={setIsFormVisible} />
          </div>
        )}
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