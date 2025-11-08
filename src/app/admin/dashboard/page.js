'use client'
import { useState } from 'react';
import { FaBars, FaTimes, FaCalendarAlt, FaImages, FaBook, FaSignOutAlt, FaCog } from 'react-icons/fa';
import Appointments from './sections/appointments';
import Gallery from './sections/gallery';
import Story from './sections/stories';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('appointments');

  const sections = {
    appointments: { icon: FaCalendarAlt, title: 'Appointments' },
    gallery: { icon: FaImages, title: 'Gallery' },
    story: { icon: FaBook, title: 'Story' }
  };

  function handleLogout() {
    localStorage.clear("admin");
    window.location.reload();
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'appointments': return <Appointments />
      case 'gallery': return <Gallery />
      case 'story': return <Story />
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-gray-800 to-gray-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-15'}`}>
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">Admin Panel</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="cursor-pointer p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-8">
          {Object.entries(sections).map(([key, { icon: Icon, title }]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`cursor-pointer w-full flex items-center px-4 py-3 transition-all duration-300 ${activeSection === key
                ? 'bg-blue-600 border-r-4 border-yellow-400'
                : 'hover:bg-gray-700'
                }`}
            >
              <Icon className="text-xl flex-shrink-0" />
              {sidebarOpen && <span className="ml-4 font-medium">{title}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-1 left-2 right-4">
          <button onClick={handleLogout} className="cursor-pointer flex items-center px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition-colors duration-300">
            <FaSignOutAlt />
            {sidebarOpen && <span className="ml-4">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {sections[activeSection].title}
            </h1>
            <div className="flex items-center space-x-4">
              <img src="/dr-image.png" alt="doctor-dp" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold" />
            </div>
          </div>
        </header>

        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}