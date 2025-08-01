import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, MessageSquare, Mail, Calendar, BarChart, X } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '@/components/ui/button';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { path: '/admin/leads', label: 'Leads', icon: <Users className="w-5 h-5" /> },
    { path: '/admin/blogs', label: 'Blogs', icon: <FileText className="w-5 h-5" /> },
    ...(isAdmin ? [{ path: '/admin/comments', label: 'Comments', icon: <MessageSquare className="w-5 h-5" /> }] : []),
    { path: '/admin/newsletters', label: 'Newsletters', icon: <Mail className="w-5 h-5" /> },
    { path: '/admin/appointments', label: 'Appointments', icon: <Calendar className="w-5 h-5" /> },
    { path: '/admin/metrics', label: 'Metrics', icon: <BarChart className="w-5 h-5" /> },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white border-r border-gray-700 transition-all duration-300 fixed left-0 top-0 h-full z-20 ${
        isSidebarOpen ? 'w-64 translate-x-0' : 'w-16 -translate-x-64 lg:translate-x-0 lg:w-16'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700 h-16">
        {isSidebarOpen && <span className="text-lg font-semibold">Menu</span>}
        <Button
          variant="ghost"
          className="lg:hidden text-white hover:bg-gray-800"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close Sidebar"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
      
      <nav className="p-4 h-[calc(100vh-4rem)] overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path} title={isSidebarOpen ? '' : item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded transition-colors ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  } ${isSidebarOpen ? '' : 'justify-center'}`
                }
              >
                {item.icon}
                {isSidebarOpen && <span className="ml-3">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}