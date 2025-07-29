import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setInteractions } from '../../store/slices/leadsSlice';
import { api } from '../../lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

export default function LeadDetails() {
  const { selectedLead, interactions } = useSelector((state) => state.leads);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const addInteractionMutation = useMutation({
    mutationFn: async (data) => {
      const response = await api.post('/leads/interactions', { ...data, _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) });
      await api.post('/admin/audit', { action: 'add_interaction', metadata: { leadId: data.lead_id, userId: user?.id }, data: { _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) } });
      return response.data;
    },
    onSuccess: (data) => {
      dispatch(setInteractions([...interactions, data]));
      setNotes('');
      toast({ title: 'Success', description: 'Interaction added' });
    },
    onError: () => toast({ title: 'Error', description: 'Failed to add interaction', variant: 'destructive' }),
  });

  const sendSurveyMutation = useMutation({
    mutationFn: async () => {
      await api.post(`/leads/survey/${selectedLead?.id}`, { _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) });
      await api.post('/admin/audit', { action: 'send_survey', metadata: { leadId: selectedLead?.id, userId: user?.id }, data: { _csrf: await api.get('/auth/csrf').then(res => res.data.csrfToken) } });
    },
    onSuccess: () => toast({ title: 'Success', description: 'Feedback survey sent' }),
    onError: () => toast({ title: 'Error', description: 'Failed to send survey', variant: 'destructive' }),
  });

  const handleAddInteraction = () => {
    if (selectedLead && notes) {
      addInteractionMutation.mutate({ lead_id: selectedLead.id, notes });
    }
  };

  return (
    <Card className="border-black">
      <CardHeader>
        <CardTitle className="text-black">Lead Details: {selectedLead?.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-black"><strong>Email:</strong> {selectedLead?.email}</p>
          <p className="text-black"><strong>Phone:</strong> {selectedLead?.phone || 'N/A'}</p>
          <p className="text-black"><strong>Segment:</strong> {selectedLead?.segment}</p>
          <p className="text-black"><strong>Status:</strong> {selectedLead?.status}</p>
        </div>
        <Button
          onClick={() => sendSurveyMutation.mutate()}
          className="bg-black text-white hover:bg-gray-800"
          disabled={sendSurveyMutation.isLoading}
        >
          {sendSurveyMutation.isLoading ? 'Sending...' : 'Send Feedback Survey'}
        </Button>
        <div>
          <h3 className="text-black font-semibold">Add Interaction</h3>
          <Input
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add interaction notes"
            className="border-black text-black placeholder-gray-500"
          />
          <Button
            onClick={handleAddInteraction}
            className="mt-2 bg-black text-white hover:bg-gray-800"
            disabled={!notes || addInteractionMutation.isLoading}
          >
            {addInteractionMutation.isLoading ? 'Adding...' : 'Add Interaction'}
          </Button>
        </div>
        <div>
          <h3 className="text-black font-semibold">Interactions</h3>
          {interactions.map((interaction) => (
            <p key={interaction.id} className="text-black">
              {new Date(interaction.created_at).toLocaleString()}: {interaction.notes}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}