import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, refreshToken } from '../store/slices/authSlice';
import { api } from '../lib/api';

export function useAuth() {
  const dispatch = useDispatch();
  const { isAuthenticated, accessToken, user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.setAuthToken(token);
      dispatch(login({ accessToken: token, user: null }));
    }
  }, [dispatch]);

  async function handleLogin(credentials) {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { ...credentials, _csrf: await getCsrfToken() });
      const { accessToken, user } = response.data;
      localStorage.setItem('accessToken', accessToken);
      api.setAuthToken(accessToken);
      dispatch(login({ accessToken, user }));
      await logAdminAction('login', { username: credentials.username });
    } catch (err) {
      throw new Error(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  async function handleRefreshToken() {
    try {
      const response = await api.post('/auth/refresh-token', { _csrf: await getCsrfToken() });
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      api.setAuthToken(accessToken);
      dispatch(refreshToken({ accessToken }));
    } catch (err) {
      handleLogout();
    }
  }

  async function handleLogout() {
    try {
      await logAdminAction('logout', { userId: user?.id });
    } catch (err) {
      console.error('Logout audit log failed:', err);
    }
    localStorage.removeItem('accessToken');
    api.setAuthToken(null);
    dispatch(logout());
  }

  async function getCsrfToken() {
    const response = await api.get('/auth/csrf');
    return response.data.csrfToken;
  }

  async function logAdminAction(action, metadata) {
    await api.post('/admin/audit', { action, metadata, _csrf: await getCsrfToken() });
  }

  return { isAuthenticated, user, accessToken, loading, handleLogin, handleRefreshToken, handleLogout };
}