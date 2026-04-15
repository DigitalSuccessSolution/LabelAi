import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Users, RefreshCw, Eye, FileText, Trash2, 
  Loader2, AlertCircle, Search, ExternalLink, X 
} from 'lucide-react';
import { API, fmtDate, StatusBadge } from './AdminShared';

function ApplicationsTab() {
  const { showToast } = useOutletContext();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      params.append('limit', '100');
      const res = await fetch(`${API}/careers/applications/all?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setApplications(data.data);
    } catch (e) {
      showToast('Failed to load applications', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApplications(); }, [statusFilter]);

  const filtered = applications.filter(a =>
    a.fullName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/careers/applications/${id}/status`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Application status updated to "${status}"`);
        fetchApplications();
        if (selected?._id === id) setSelected({ ...selected, status });
      }
    } catch (e) {
      showToast('Failed to update', 'error');
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/careers/applications/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Application deleted');
        fetchApplications();
        if (selected?._id === deleteId) setSelected(null);
      }
    } catch (e) {
      showToast('Failed to delete', 'error');
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <div>
      {/* Stats Bar */}
      <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-5">
        {[
          { label: 'Total', val: applications.length, color: 'text-slate-600' },
          { label: 'Pending', val: applications.filter(a => a.status === 'pending').length, color: 'text-amber-600' },
          { label: 'Reviewed', val: applications.filter(a => a.status === 'reviewed').length, color: 'text-blue-600' },
          { label: 'Shortlisted', val: applications.filter(a => a.status === 'shortlisted').length, color: 'text-indigo-600' },
          { label: 'Hired', val: applications.filter(a => a.status === 'hired').length, color: 'text-emerald-600' },
        ].map((s, i) => (
          <div key={i} className="p-4 text-center bg-white border shadow-sm rounded-2xl border-slate-100">
            <div className={`text-2xl font-semibold ${s.color}`}>{s.val}</div>
            <div className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute -translate-y-1/2 left-3 top-1/2 text-slate-300" size={16} />
          <input
            type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-500/20 placeholder:text-slate-500"
            placeholder="Search name, email, job..."
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="rejected">Rejected</option>
          <option value="hired">Hired</option>
        </select>
        <button onClick={fetchApplications} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-100">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-600">
            <Loader2 size={24} className="mr-3 animate-spin" /> Loading applications...
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600">
            <Users size={40} className="mb-3 text-slate-300" />
            <p className="font-semibold">No applications found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Applicant</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Position</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Status</th>
                  <th className="text-left px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Date</th>
                  <th className="text-right px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <tr key={app._id} className="transition-colors border-b border-slate-50 hover:bg-slate-50/50 group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-900">{app.fullName}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{app.email}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{app.jobTitle}</td>
                    <td className="px-6 py-4"><StatusBadge status={app.status} type="application" /></td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">{fmtDate(app.createdAt)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 transition-opacity opacity-0 group-hover:opacity-100">
                        <button onClick={() => setSelected(app)} className="p-2 transition-all rounded-lg hover:bg-brand-50 text-brand-500" title="View">
                          <Eye size={15} />
                        </button>
                        {app.resumeUrl && (
                          <a
                            href={app.resumeUrl.startsWith('http') ? app.resumeUrl : `${API}${app.resumeUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-blue-500 transition-all rounded-lg hover:bg-blue-50"
                            title="Resume"
                          >
                            <FileText size={15} />
                          </a>
                        )}
                        <button onClick={() => setDeleteId(app._id)} className="p-2 text-red-400 transition-all rounded-lg hover:bg-red-50" title="Delete">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar animate-slide-in" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white/95 backdrop-blur-md flex items-center justify-between p-6 border-b border-slate-100 rounded-t-[2rem] z-10">
              <h3 className="text-lg font-semibold text-slate-900">Application Details</h3>
              <button onClick={() => setSelected(null)} className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-slate-100 hover:bg-slate-200"><X size={16} /></button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.fullName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Position</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.jobTitle}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.experienceYears || '—'}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-slate-900">{fmtDate(selected.createdAt)}</p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selected.resumeUrl && (
                  <a
                    href={selected.resumeUrl.startsWith('http') ? selected.resumeUrl : `${API}${selected.resumeUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-700 transition-all border border-blue-100 bg-blue-50 rounded-xl hover:bg-blue-100"
                  >
                    <FileText size={14} /> Resume
                  </a>
                )}
                {selected.linkedinUrl && (
                  <a href={selected.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-indigo-700 transition-all border border-indigo-100 bg-indigo-50 rounded-xl hover:bg-indigo-100">
                    <ExternalLink size={14} /> LinkedIn
                  </a>
                )}
                {selected.portfolioUrl && (
                  <a href={selected.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-purple-700 transition-all border border-purple-100 bg-purple-50 rounded-xl hover:bg-purple-100">
                    <ExternalLink size={14} /> Portfolio
                  </a>
                )}
              </div>

              {/* Cover Letter */}
              {selected.coverLetter && (
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Cover Letter</p>
                  <div className="p-4 text-sm leading-relaxed border bg-slate-50 rounded-xl border-slate-100 text-slate-700">
                    {selected.coverLetter}
                  </div>
                </div>
              )}

              {/* Status Update */}
              <div>
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['pending', 'reviewed', 'shortlisted', 'rejected', 'hired'].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selected._id, s)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all ${
                        selected.status === s
                          ? 'bg-brand-500 text-white border-brand-500 shadow-lg shadow-brand-500/20'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-sm p-6 text-center bg-white shadow-2xl rounded-2xl max-sm:max-w-xs animate-slide-in">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-red-500 bg-red-100 rounded-full">
              <AlertCircle size={32} />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900">Delete Applicant?</h3>
            <p className="mb-6 text-sm text-slate-500">This action cannot be undone. Are you sure you want to permanently delete this applicant's data?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-3 font-semibold transition-all rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 py-3 font-semibold text-white transition-all bg-red-500 shadow-lg rounded-xl hover:bg-red-600 shadow-red-500/20">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplicationsTab;
