'use client';

import { useEffect, useState } from 'react';
import Login from './auth/page.js';
import Dashboard from './dashboard/page.js';

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const admin = localStorage.getItem("admin");
        console.log("admin data from localStorage:", admin);
        setLoggedIn(!!admin);
        setIsChecking(false);
      }
    };

    // Check auth on mount
    checkAuth();

    // Listen for custom login/logout events (same window/tab)
    const handleAdminLogin = () => {
      checkAuth();
    };

    const handleAdminLogout = () => {
      checkAuth();
    };

    // Listen for storage changes (e.g., when login happens in another tab/window)
    const handleStorageChange = (e) => {
      if (e.key === 'admin') {
        checkAuth();
      }
    };

    window.addEventListener('admin-login', handleAdminLogin);
    window.addEventListener('admin-logout', handleAdminLogout);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('admin-login', handleAdminLogin);
      window.removeEventListener('admin-logout', handleAdminLogout);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Show loading state while checking auth
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return loggedIn ? <Dashboard /> : <Login />;
}