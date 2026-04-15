import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation, Outlet } from 'react-router-dom';
import { 
  Shield, Inbox, Briefcase, UserCheck, 
  ExternalLink, Lock, CheckCircle2, AlertCircle
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
//  ADMIN LAYOUT (Wrapper for separate pages)
// ═══════════════════════════════════════════════════════════════════════════════
const Admin = () => {
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    showToast('Logging out...');
    setTimeout(() => navigate('/admin/login'), 500);
  };

  const tabs = [
    { id: 'contacts', label: 'Enquiries', path: '/admin/enquiries', icon: <Inbox size={18} /> },
    { id: 'jobs', label: 'Job Listings', path: '/admin/jobs', icon: <Briefcase size={18} /> },
    { id: 'applications', label: 'Applications', path: '/admin/applications', icon: <UserCheck size={18} /> },
  ];

  // Helper to check if a tab is active
  const isActive = (path) => pathname === path;
  // Get current section info for header
  const currentTab = tabs.find(t => isActive(t.path)) || tabs[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex text-slate-900 text-left">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] max-w-sm p-4 rounded-2xl shadow-2xl border flex items-center gap-3 animate-slide-in ${
          toast.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {toast.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <p className="text-sm font-semibold">{toast.message}</p>
        </div>
      )}

      {/* Left Sidebar Navigation */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-slate-950 text-white flex flex-col z-50">
        <div className="h-16 flex items-center gap-3 px-6 border-b border-slate-800/60">
          <div className="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
            <Shield size={16} strokeWidth={2.5} />
          </div>
          <span className="font-semibold text-lg tracking-tight">LabelzAI Admin</span>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all ${
                isActive(tab.path)
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                  : 'text-slate-600 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span className={`${isActive(tab.path) ? 'opacity-100' : 'opacity-70'}`}>
                {tab.icon}
              </span>
              {tab.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800/60 space-y-2">
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-white hover:bg-slate-900 transition-all">
            <ExternalLink size={16} />
            View Live Site
          </a>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
          >
            <Lock size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        
        {/* Dynamic Page Header */}
        <div className="bg-white border-b border-slate-200 px-8 py-5 shadow-sm">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shadow-inner border border-brand-100">
              {currentTab.icon}
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
              {currentTab.label}
            </h1>
          </div>
          <p className="text-sm text-slate-500 font-medium ml-12 max-w-2xl mt-1.5 text-left">
            {currentTab.id === 'contacts' && 'Manage and respond to incoming service enquiries from potential clients.'}
            {currentTab.id === 'jobs' && 'Create, edit, and manage your active job listings and career opportunities.'}
            {currentTab.id === 'applications' && 'Review candidate profiles and track applicants across your hiring pipeline.'}
          </p>
        </div>

        {/* This is where the separate pages will render */}
        <div className="flex-1 p-8">
          <Outlet context={{ showToast }} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-in { from { transform: translateX(100px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slide-in { animation: slide-in 0.3s ease-out; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Admin;
