'use client';
import { useEffect, useState } from 'react';
import { FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { formatDateSafe } from '@/app/utils/dateFormat';

export default function Appointments() {
  const [groupedAppointments, setGroupedAppointments] = useState({});
  const [expanded, setExpanded] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchAppointments = async () => {
      try {
        const storedAdmin = localStorage.getItem('admin');
        if (!storedAdmin) {
          console.warn('no admin data found in localStorage');
          return;
        }

        const admin = JSON.parse(storedAdmin);
        if (!admin?.token) {
          console.warn('admin token missing');
          return;
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/appointments/get-all`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${admin.token}`,
          },
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('failed to fetch appointments');

        const response = await res.json();
        const data = response.data || [];

        const grouped = data.reduce((acc, appt) => {
          const dateOnly = new Date(appt.date).toISOString().split('T')[0];
          if (!acc[dateOnly]) acc[dateOnly] = [];
          acc[dateOnly].push(appt);
          return acc;
        }, {});

        const sortedGrouped = Object.fromEntries(
          Object.entries(grouped).sort(([a], [b]) => new Date(b) - new Date(a))
        );

        setGroupedAppointments(sortedGrouped);
      } catch (error) {
        console.error('error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const dates = Object.keys(groupedAppointments);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border-l-4 border-gray-300">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (dates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border-l-4 border-gray-300">
        <FaUser className="text-gray-400 text-4xl mb-4" />
        <h3 className="text-gray-600 text-lg">no appointments</h3>
        <p className="text-gray-500 text-sm">you have no scheduled appointments at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {dates.map((date) => (
        <div key={date}>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {formatDateSafe(date, {
              locale: 'en-GB',
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }) || date}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedAppointments[date].map((appt) => {
              const isOpen = expanded[appt._id];
              return (
                <div
                  key={appt._id}
                  onClick={() => toggleExpand(appt._id)}
                  className={`bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-[1.02] ${
                    isOpen ? 'max-h-[400px]' : 'max-h-[110px]'
                  } overflow-hidden`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <FaUser className="text-blue-500 text-xl" />
                      <div>
                        <h5 className="text-green-800 bg-green-100 py-1 px-2 inline-block rounded-full">
                          {appt.type}
                        </h5>
                        <h2 className="font-semibold text-gray-800">{appt.name}</h2>
                      </div>
                    </div>
                    <div
                      className={`text-gray-500 transition-transform duration-500`}
                    >
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isOpen
                        ? 'opacity-100 translate-y-0 mt-4'
                        : 'opacity-0 -translate-y-3 mt-0'
                    }`}
                  >
                    {isOpen && (
                      <div className="space-y-1">
                        <p className="text-gray-600 text-sm">{appt.email}</p>
                        <p className="text-gray-600 text-sm">{appt.phone}</p>
                        {appt.message && (
                          <p className="text-gray-700 text-sm mt-3 border-t pt-2">
                            {appt.message}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
