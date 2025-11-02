'use client'
import { useState } from 'react';
import { FaBars, FaTimes, FaCalendarAlt, FaImages, FaBook, FaSignOutAlt, FaCog, FaUser, FaChartBar } from 'react-icons/fa';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('appointments');

  const sections = {
    appointments: { icon: FaCalendarAlt, title: 'Appointments' },
    gallery: { icon: FaImages, title: 'Gallery' },
    story: { icon: FaBook, title: 'Story' }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'appointments':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Appointments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map(item => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 border-l-4 border-blue-500">
                  <div className="flex items-center space-x-3">
                    <FaUser className="text-blue-500 text-xl" />
                    <div>
                      <h3 className="font-semibold">Appointment {item}</h3>
                      <p className="text-gray-600 text-sm">Today, 2:00 PM</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'gallery':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                  <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                    <FaImages className="text-white text-2xl" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'story':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Story</h2>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <FaBook className="text-green-500 text-xl" />
                <h3 className="text-lg font-semibold">Your Story</h3>
              </div>
              <textarea 
                className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                placeholder="Write your story here..."
              />
              <button className="mt-4 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-2 rounded-lg transform transition-all duration-300 hover:scale-105">
                Save Story
              </button>
            </div>
          </div>
        );
      
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
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className="mt-8">
          {Object.entries(sections).map(([key, { icon: Icon, title }]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full flex items-center px-4 py-3 transition-all duration-300 ${
                activeSection === key 
                  ? 'bg-blue-600 border-r-4 border-yellow-400' 
                  : 'hover:bg-gray-700'
              }`}
            >
              <Icon className="text-xl flex-shrink-0" />
              {sidebarOpen && <span className="ml-4 font-medium">{title}</span>}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center px-4 py-3 text-red-400 hover:bg-gray-700 rounded-lg transition-colors duration-300">
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
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
                <FaCog className="text-gray-600" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
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