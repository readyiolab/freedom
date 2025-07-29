import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { setSelectedLead, setInteractions } from '../../store/slices/leadsSlice';
import { api } from '../../lib/api';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export default function LeadsTable({ leads, page, pageSize, total, setPage }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleSelectLead = async (lead) => {
    dispatch(setSelectedLead(lead));
    try {
      const response = await api.get(`/leads/interactions/${lead.id}`);
      dispatch(setInteractions(response.data));
      await api.post('/admin/audit', { action: 'view_lead', metadata: { leadId: lead.id, userId: user?.id }, data: { _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) } });
    } catch (err) {
      toast({ title: 'Error', description: 'Failed to fetch interactions', variant: 'destructive' });
    }
  };

  const reactivateMutation = useMutation({
    mutationFn: async () => {
      const csrfToken = await api.get('/auth/csrf').then(res => res.data.csrfToken);
      await api.post('/leads/reactivate', { _csrf: csrfToken });
      await api.post('/admin/audit', { action: 'reactivate_leads', metadata: { userId: user?.id }, data: { _csrf: csrfToken } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['leads']);
      toast({ title: 'Success', description: 'Leads reactivated' });
    },
    onError: () => toast({ title: 'Error', description: 'Failed to reactivate leads', variant: 'destructive' }),
  });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      <Button
        onClick={() => reactivateMutation.mutate()}
        className="mb-4 bg-black text-white hover:bg-gray-800"
        disabled={reactivateMutation.isLoading}
      >
        {reactivateMutation.isLoading ? 'Reactivating...' : 'Reactivate Inactive Leads'}
      </Button>
      <Table className="border-black">
        <TableHeader>
          <TableRow>
            <TableHead className="text-black">Name</TableHead>
            <TableHead className="text-black">Email</TableHead>
            <TableHead className="text-black">Phone</TableHead>
            <TableHead className="text-black">Segment</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="text-black">{lead.name}</TableCell>
              <TableCell className="text-black">{lead.email}</TableCell>
              <TableCell className="text-black">{lead.phone || 'N/A'}</TableCell>
              <TableCell className="text-black">{lead.segment}</TableCell>
              <TableCell className="text-black">{lead.status}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                  onClick={() => handleSelectLead(lead)}
                >
                  View
                </Button>
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
                className={page === i + 1 ? 'bg-black text-white' : 'border-black text-black hover:bg-black hover:text-white'}
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

LeadsTable.propTypes = {
  leads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
      segment: PropTypes.oneOf(['investor', 'advisor', 'partner', 'prospect']).isRequired,
      status: PropTypes.oneOf(['new', 'active', 'inactive', 'reactivated']).isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};