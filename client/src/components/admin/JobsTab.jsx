import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Briefcase, MapPin, Clock, IndianRupee, 
  Plus, Edit3, Trash2, RefreshCw, X, Save, 
  Loader2, AlertCircle 
} from 'lucide-react';
import { API } from './AdminShared';

const emptyJob = {
  jobId: '', title: '', category: '', vacancies: '01',
  workMode: 'Remote', engagement: 'Full-Time',
  commitment: '', compensation: '', description: '',
  responsibilities: [''], requirements: [''], isActive: true,
};

function JobsTab() {
  const { showToast } = useOutletContext();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null); // null = create, jobId = edit
  const [deleteId, setDeleteId] = useState(null);
  const [form, setForm] = useState({ ...emptyJob });
  const [saving, setSaving] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/careers?active=all`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) setJobs(data.data);
    } catch (e) {
      showToast('Failed to load jobs', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyJob });
    setShowForm(true);
  };

  const openEdit = (job) => {
    setEditing(job.jobId);
    setForm({
      jobId: job.jobId,
      title: job.title,
      category: job.category,
      vacancies: job.vacancies || '01',
      workMode: job.workMode,
      engagement: job.engagement,
      commitment: job.commitment,
      compensation: job.compensation,
      description: job.description,
      responsibilities: job.responsibilities?.length ? [...job.responsibilities] : [''],
      requirements: job.requirements?.length ? [...job.requirements] : [''],
      isActive: job.isActive,
    });
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `${API}/api/careers/${editing}` : `${API}/api/careers`;
      const method = editing ? 'PUT' : 'POST';

      // Clean empty items from arrays
      const payload = {
        ...form,
        responsibilities: form.responsibilities.filter(r => r.trim()),
        requirements: form.requirements.filter(r => r.trim()),
      };

      const res = await fetch(url, {
        method,
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        showToast(editing ? 'Job updated successfully' : 'Job created successfully');
        setShowForm(false);
        fetchJobs();
      } else {
        showToast(data.message || 'Failed to save', 'error');
      }
    } catch (e) {
      showToast('Failed to save job', 'error');
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      const res = await fetch(`${API}/api/careers/${deleteId}`, { 
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        showToast('Job deleted');
        fetchJobs();
      } else {
        showToast(data.message, 'error');
      }
    } catch (e) {
      showToast('Failed to delete job', 'error');
    } finally {
      setDeleteId(null);
    }
  };

  const toggleActive = async (job) => {
    try {
      const res = await fetch(`${API}/api/careers/${job.jobId}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify({ isActive: !job.isActive }),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`Job ${!job.isActive ? 'activated' : 'deactivated'}`);
        fetchJobs();
      }
    } catch (e) {
      showToast('Failed to update', 'error');
    }
  };

  // Array field helpers
  const updateArrayField = (field, index, value) => {
    setForm(prev => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };
  const addArrayField = (field) => {
    setForm(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };
  const removeArrayField = (field, index) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-600 font-semibold uppercase tracking-widest">
            {jobs.length} Job{jobs.length !== 1 ? 's' : ''} Total
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={fetchJobs} className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-all text-slate-500">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95"
          >
            <Plus size={16} /> Add Job
          </button>
        </div>
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20 text-slate-600">
          <Loader2 size={24} className="animate-spin mr-3" /> Loading jobs...
        </div>
      ) : jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-slate-600 bg-white rounded-2xl border border-slate-100">
          <Briefcase size={40} className="mb-3 text-slate-300" />
          <p className="font-semibold mb-4">No jobs found</p>
          <button onClick={openCreate} className="px-6 py-2.5 bg-brand-500 text-white rounded-xl font-semibold text-sm hover:bg-brand-600 transition-all">
            Create First Job
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-500 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-100">
                    {job.category}
                  </span>
                  <button
                    onClick={() => toggleActive(job)}
                    className={`w-11 h-6 rounded-full transition-all relative ${
                      job.isActive ? 'bg-emerald-500' : 'bg-slate-300'
                    }`}
                  >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all shadow ${
                      job.isActive ? 'left-6' : 'left-1'
                    }`}></div>
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  <span className="flex items-center gap-1"><MapPin size={10} /> {job.workMode}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {job.engagement}</span>
                  <span className="flex items-center gap-1"><IndianRupee size={10} /> {job.compensation}</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                <span className="text-[10px] text-slate-600 font-semibold">ID: {job.jobId}</span>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openEdit(job)} className="p-2 rounded-lg hover:bg-brand-50 text-brand-500 transition-all" title="Edit">
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => setDeleteId(job.jobId)} className="p-2 rounded-lg hover:bg-red-50 text-red-400 transition-all" title="Delete">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-[2rem] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl no-scrollbar animate-slide-in" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 rounded-t-[2rem] p-6 flex items-center justify-between z-10">
              <h3 className="text-xl font-semibold text-slate-900">{editing ? 'Edit Job' : 'Create New Job'}</h3>
              <button onClick={() => setShowForm(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200"><X size={18} /></button>
            </div>

            <div className="p-6 space-y-5">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Job ID *</label>
                  <input
                    type="text" value={form.jobId}
                    onChange={(e) => setForm({ ...form, jobId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. data-annotator"
                    disabled={!!editing}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Title *</label>
                  <input
                    type="text" value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Freelance Data Annotator"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Category *</label>
                  <input
                    type="text" value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Data Operations"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Work Mode *</label>
                  <select
                    value={form.workMode}
                    onChange={(e) => setForm({ ...form, workMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote / Hybrid">Remote / Hybrid</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Engagement *</label>
                  <select
                    value={form.engagement}
                    onChange={(e) => setForm({ ...form, engagement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Vacancies</label>
                  <input
                    type="text" value={form.vacancies}
                    onChange={(e) => setForm({ ...form, vacancies: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="01"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Commitment *</label>
                  <input
                    type="text" value={form.commitment}
                    onChange={(e) => setForm({ ...form, commitment: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. 8-9 hours/day"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Compensation *</label>
                  <input
                    type="text" value={form.compensation}
                    onChange={(e) => setForm({ ...form, compensation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                    placeholder="e.g. Monthly Salary"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Description *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm resize-none"
                  placeholder="Brief job description..."
                />
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Responsibilities</label>
                  <button onClick={() => addArrayField('responsibilities')} className="text-xs text-brand-500 font-semibold hover:text-brand-600 flex items-center gap-1">
                    <Plus size={12} /> Add
                  </button>
                </div>
                {form.responsibilities.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text" value={r}
                      onChange={(e) => updateArrayField('responsibilities', i, e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                      placeholder={`Responsibility ${i + 1}`}
                    />
                    {form.responsibilities.length > 1 && (
                      <button onClick={() => removeArrayField('responsibilities', i)} className="p-2 rounded-lg hover:bg-red-50 text-red-400"><X size={14} /></button>
                    )}
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Requirements</label>
                  <button onClick={() => addArrayField('requirements')} className="text-xs text-brand-500 font-semibold hover:text-brand-600 flex items-center gap-1">
                    <Plus size={12} /> Add
                  </button>
                </div>
                {form.requirements.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text" value={r}
                      onChange={(e) => updateArrayField('requirements', i, e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 font-medium text-sm"
                      placeholder={`Requirement ${i + 1}`}
                    />
                    {form.requirements.length > 1 && (
                      <button onClick={() => removeArrayField('requirements', i)} className="p-2 rounded-lg hover:bg-red-50 text-red-400"><X size={14} /></button>
                    )}
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={saving}
                className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-base hover:bg-slate-800 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
              >
                {saving ? (
                  <><Loader2 size={18} className="animate-spin" /> Saving...</>
                ) : (
                  <><Save size={18} /> {editing ? 'Update Job' : 'Create Job'}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-sm:max-w-xs max-w-sm shadow-2xl p-6 text-center animate-slide-in">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Delete Job?</h3>
            <p className="text-sm text-slate-500 mb-6">This action cannot be undone. Are you sure you want to permanently delete this job listing?</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)} className="flex-1 py-3 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all">Cancel</button>
              <button onClick={confirmDelete} className="flex-1 py-3 rounded-xl font-semibold text-white bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobsTab;
