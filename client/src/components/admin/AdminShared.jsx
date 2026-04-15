import React from 'react';

export const API = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

export const fmtDate = (d) => {
  if (!d) return '—';
  const dt = new Date(d);
  return dt.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' ' + dt.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
};

export const serviceLabels = {
  image: 'Image Annotation',
  video: 'Video Annotation',
  text: 'Text & NLP',
  audio: 'Audio Annotation',
  medical: 'Medical AI',
  other: 'Other / Custom',
};

export const StatusBadge = ({ status, type = 'contact' }) => {
  const colorMap = {
    // contact statuses
    new: 'bg-blue-50 text-blue-700 border-blue-200',
    read: 'bg-amber-50 text-amber-700 border-amber-200',
    replied: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    closed: 'bg-slate-100 text-slate-500 border-slate-200',
    // application statuses
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    reviewed: 'bg-blue-50 text-blue-700 border-blue-200',
    shortlisted: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    rejected: 'bg-red-50 text-red-700 border-red-200',
    hired: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider border ${colorMap[status] || 'bg-slate-100 text-slate-500 border-slate-200'}`}>
      {status}
    </span>
  );
};
