import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../../hooks/useAuth';

export default function Index() {
  const { user } = useAuth();

  return (
    <Card className="border-black">
      <CardHeader>
        <CardTitle className="text-black">Welcome, {user?.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black">Select an option from the sidebar to manage leads, blogs, comments, newsletters, appointments, or view metrics.</p>
      </CardContent>
    </Card>
  );
}