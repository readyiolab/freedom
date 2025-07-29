import React from 'react';
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from './components/ui/sonner';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './components/hooks/useAuth';
import Layout from './components/admin/Layout/Layout';
import Login from './components/admin/Auth/Login';
import Index from './pages/admin/Index';
import LeadsPage from './pages/admin/LeadsPage';
import BlogsPage from './pages/admin/BlogsPage';
import CommentsPage from './pages/admin/CommentsPage';
import NewslettersPage from './pages/admin/NewslettersPage';
import AppointmentsPage from './pages/admin/AppointmentsPage';
import MetricsPage from './pages/admin/MetricsPage';
import Home from './components/public/Home';
import About from './components/public/AboutSection';

import NotFound from './components/public/NotFound';

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white text-black">
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/admin" /> : <Login />} />
          <Route path="/admin" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
            <Route index element={<Index />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="comments" element={<CommentsPage />} />
            <Route path="newsletters" element={<NewslettersPage />} />
            <Route path="appointments" element={<AppointmentsPage />} />
            <Route path="metrics" element={<MetricsPage />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}