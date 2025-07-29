import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../components/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import LeadsTable from '../../components/admin/Leads/LeadsTable';
import LeadForm from '../../components/admin/Leads/LeadForm';
import LeadDetails from '../../components/admin/Leads/LeadDetails';
import { useSelector } from 'react-redux';

export default function LeadsPage() {
  const [page, setPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pageSize = 10;
  const { toast } = useToast();
  const { selectedLead } = useSelector((state) => state.leads);

  const { data, isLoading, error } = useQuery({
    queryKey: ['leads', page],
    queryFn: async () => {
      const response = await api.get(`/leads?page=${page}&pageSize=${pageSize}`);
      return response.data;
    },
  });

  if (isLoading) return <div className="text-black">Loading...</div>;
  if (error) {
    toast({ title: 'Error', description: 'Failed to fetch leads', variant: 'destructive' });
    return <div className="text-black">Error loading leads</div>;
  }

  return (
    <Card className="border-black">
      <CardHeader>
        <CardTitle className="text-black">Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mb-4 bg-black text-white hover:bg-gray-800">Create Lead</Button>
          </DialogTrigger>
          <DialogContent className="bg-white text-black border-black">
            <LeadForm setIsDialogOpen={setIsDialogOpen} />
          </DialogContent>
        </Dialog>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <LeadsTable
              leads={data?.leads || []}
              page={page}
              pageSize={pageSize}
              total={data?.total || 0}
              setPage={setPage}
            />
          </div>
          {selectedLead && (
            <div>
              <LeadDetails />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}