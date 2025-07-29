import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from '../../lib/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BlogForm from "./BlogForm";

export default function BlogTable({ blogs, page, pageSize, total, setPage }) {
  const { user } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (blogId) => {
      const csrfToken = await api
        .get("/auth/csrf")
        .then((res) => res.data.csrfToken);
      await api.delete(`/blogs/${blogId}`, { data: { _csrf: csrfToken } });
      await api.post("/admin/audit", {
        action: "delete_blog",
        metadata: { blogId, userId: user?.id },
        data: { _csrf: csrfToken },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
      toast({ title: "Success", description: "Blog deleted" });
    },
    onError: () =>
      toast({
        title: "Error",
        description: "Failed to delete blog",
        variant: "destructive",
      }),
  });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <Table className="border-black">
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Title</TableHead>
            <TableHead className="text-black">Category</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black">Likes</TableHead>
            <TableHead className="text-black">Shares</TableHead>
            <TableHead className="text-black">Comments</TableHead>
            <TableHead className="text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="text-black">{blog.title}</TableCell>
              <TableCell className="text-black">{blog.category}</TableCell>
              <TableCell className="text-black">{blog.status}</TableCell>
              <TableCell className="text-black">{blog.likes}</TableCell>
              <TableCell className="text-black">{blog.shares}</TableCell>
              <TableCell className="text-black">
                {blog.comments_count}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white"
                      >
                        Edit
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white text-black border-black">
                      <BlogForm blog={blog} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white"
                    onClick={() => deleteMutation.mutate(blog.id)}
                    disabled={deleteMutation.isLoading}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(page > 1 ? page - 1 : 1)}
              className="border-black text-black hover:bg-black hover:text-white"
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => setPage(i + 1)}
                isActive={page === i + 1}
                className={
                  page === i + 1
                    ? "bg-black text-white"
                    : "border-black text-black hover:bg-black hover:text-white"
                }
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
              className="border-black text-black hover:bg-black hover:text-white"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

BlogTable.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["draft", "published", "archived"]).isRequired,
      likes: PropTypes.number.isRequired,
      shares: PropTypes.number.isRequired,
      comments_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
