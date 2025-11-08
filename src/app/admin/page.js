'use client';

import { useEffect, useState } from 'react';
import Login from './auth/page.js';
import Dashboard from './dashboard/page.js';

export default function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    console.log("admin data from localStorage:", admin);
    setLoggedIn(admin);
  }, []);

  return loggedIn ? <Dashboard /> : <Login />;
}