import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Header({ setIsSidebarOpen, isSidebarOpen }) {
  const { handleLogout, user } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center border-b border-gray-600 shadow-md h-16 flex-shrink-0">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          className="lg:hidden text-white hover:bg-gray-700"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold tracking-tight">Freedom Mergers Admin</h1>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">{user?.username} ({user?.role})</span>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-gray-800 flex items-center space-x-2"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      </div>
    </header>
  );
}