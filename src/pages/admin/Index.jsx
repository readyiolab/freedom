import React from 'react';
import { useAuth } from '../../components/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Index() {
  const { user } = useAuth();

  return (
    <Card className="border-black">
      <CardHeader>
        <CardTitle className="text-black">Welcome, {user?.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black">
          Use the sidebar to manage leads, blogs, comments, newsletters, appointments, or view metrics.
        </p>
      </CardContent>
    </Card>
  );
}