import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, MessageSquare, Mail, Calendar, BarChart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Sidebar() {
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
    <aside className="w-64 bg-black text-white h-screen border-r border-white">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded ${isActive ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`
                }
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}