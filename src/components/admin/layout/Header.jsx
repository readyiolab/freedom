import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { handleLogout, user } = useAuth();

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center border-b border-white">
      <h1 className="text-xl font-bold">Freedom Mergers Admin</h1>
      <div className="flex items-center space-x-4">
        <span>{user?.username} ({user?.role})</span>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}