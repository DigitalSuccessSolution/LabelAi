import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { RefreshCw, Search, Eye, Trash2, Loader2, AlertCircle, Inbox,X } from 'lucide-react';
import { API, fmtDate, StatusBadge, serviceLabels } from './AdminShared';

function ContactsTab() {
  const { showToast } = useOutletContext();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      const res = await fetch(`${API}/contact?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setEnquiries(data.data);
    } catch (e) {
      showToast('Failed to load enquiries', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEnquiries(); }, [statusFilter]);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API}/contact/${id}/status`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Status updated to "${status}"`);
        fetchEnquiries();
        if (selected?._id === id) setSelected({ ...selected, status });
      }
    } catch (e) {
      showToast('Failed to update status', 'error');
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/contact/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Enquiry deleted');
        fetchEnquiries();
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
      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          >
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
            <option value="closed">Closed</option>
          </select>
          <div className="hidden text-xs font-semibold tracking-widest uppercase text-slate-600 md:block">
            {enquiries.length} Enquir{enquiries.length !== 1 ? 'ies' : 'y'}
          </div>
        </div>
        <button onClick={fetchEnquiries} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {/* Table Area */}
      <div className="overflow-hidden bg-white border shadow-sm rounded-2xl border-slate-100">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-600">
            <Loader2 size={24} className="mr-3 animate-spin" /> Loading enquiries...
          </div>
        ) : enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-600">
            <Inbox size={40} className="mb-3 text-slate-300" />
            <p className="font-semibold">No enquiries found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Contact</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Service</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Status</th>
                  <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-600">Date</th>
                  <th className="px-6 py-4 text-right text-[10px] font-semibold uppercase tracking-widest text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {enquiries.map((enq) => (
                  <tr key={enq._id} className="transition-colors hover:bg-slate-50/50 group">
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-900">{enq.firstName} {enq.lastName}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{enq.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-slate-700">{serviceLabels[enq.service] || enq.service}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={enq.status} />
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-slate-600">
                      {fmtDate(enq.createdAt)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 transition-opacity opacity-0 group-hover:opacity-100">
                        <button onClick={() => setSelected(enq)} className="p-2 transition-all rounded-lg hover:bg-brand-50 text-brand-500" title="View">
                          <Eye size={15} />
                        </button>
                        <button onClick={() => setDeleteId(enq._id)} className="p-2 text-red-400 transition-all rounded-lg hover:bg-red-50" title="Delete">
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
              <h3 className="text-lg font-semibold text-slate-900">Enquiry Details</h3>
              <button onClick={() => setSelected(null)} className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-slate-100 hover:bg-slate-200">
                <X size={16}  /> 
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.firstName} {selected.lastName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-sm font-semibold text-slate-900">{selected.email}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Service</p>
                  <p className="text-sm font-semibold text-slate-900">{serviceLabels[selected.service] || selected.service}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-1">Submitted</p>
                  <p className="text-sm font-semibold text-slate-900">{fmtDate(selected.createdAt)}</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Message</p>
                <div className="p-4 text-sm leading-relaxed border bg-slate-50 rounded-xl border-slate-100 text-slate-700">
                  {selected.message}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {['new', 'read', 'replied', 'closed'].map((s) => (
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
            <h3 className="mb-2 text-xl font-semibold text-slate-900">Delete Enquiry?</h3>
            <p className="mb-6 text-sm text-slate-500">This action cannot be undone. You will permanently lose this contact's information.</p>
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

export default ContactsTab;
