'use client';

import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent any server-side rendering to avoid hydration mismatches
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

