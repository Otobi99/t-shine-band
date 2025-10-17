import { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3f51b5]">
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#1e3a8a]/50 to-black/70 z-0"></div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col ml-0 relative z-10">
        {/* Header */}
        <header className="h-16 bg-white/10 backdrop-blur-md shadow flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setSidebarOpen(true)}
            aria-label="Mở sidebar"
          >
            ☰
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto relative">
          <div className="relative z-10 p-6 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
