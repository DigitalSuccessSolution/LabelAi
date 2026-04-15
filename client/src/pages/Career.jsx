import React, { useEffect, useState } from 'react';
import { 
  Briefcase, MapPin, Clock, IndianRupee, 
  CheckCircle2, ArrowRight, Send, 
  Search, X, Loader2, AlertCircle, Upload, FileText
} from 'lucide-react';
// Removed static jobs import

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001' : '');

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [fetchError, setFetchError] = useState("");

  // Application form state
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    portfolioUrl: '',
    linkedinUrl: '',
    experienceYears: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [appLoading, setAppLoading] = useState(false);
  const [appSuccess, setAppSuccess] = useState(false);
  const [appError, setAppError] = useState('');
  const [appFieldErrors, setAppFieldErrors] = useState({});

  const filteredJobs = (jobs || []).filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set((jobs || []).map(job => job.category))];

  const handleApplyClick = () => {
    setShowApplyModal(true);
    setAppSuccess(false);
    setAppError('');
    setAppFieldErrors({});
  };

  const handleAppFormChange = (e) => {
    const { name, value } = e.target;
    setAppForm((prev) => ({ ...prev, [name]: value }));
    if (appFieldErrors[name]) {
      setAppFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (appError) setAppError('');
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setAppError('Resume file must be under 5MB');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setAppLoading(true);
    setAppError('');
    setAppFieldErrors({});

    try {
      const formData = new FormData();
      formData.append('fullName', appForm.fullName);
      formData.append('email', appForm.email);
      formData.append('phone', appForm.phone);
      formData.append('jobId', activeJob.jobId || activeJob._id);
      formData.append('jobTitle', activeJob.title);
      formData.append('coverLetter', appForm.coverLetter);
      formData.append('portfolioUrl', appForm.portfolioUrl);
      formData.append('linkedinUrl', appForm.linkedinUrl);
      formData.append('experienceYears', appForm.experienceYears);
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }

      const response = await fetch(`${API_BASE_URL}/careers/apply`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const errors = {};
          data.errors.forEach((err) => {
            errors[err.field] = err.message;
          });
          setAppFieldErrors(errors);
          setAppError('Please correct the highlighted fields.');
        } else {
          setAppError(data.message || 'Something went wrong. Please try again.');
        }
        return;
      }

      setAppSuccess(true);
      setAppForm({
        fullName: '', email: '', phone: '',
        coverLetter: '', portfolioUrl: '', linkedinUrl: '', experienceYears: '',
      });
      setResumeFile(null);
    } catch (err) {
      setAppError('Unable to connect to server. Please check your connection and try again.');
    } finally {
      setAppLoading(false);
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        const response = await fetch(`${API_BASE_URL}/careers`);
        const data = await response.json();
        if (data.success) {
          setJobs(data.data);
        } else {
          setFetchError(data.message || 'Unable to load jobs.');
        }
      } catch (err) {
        setFetchError('Failed to connect to the server.');
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (!activeJob) window.scrollTo(0, 0);
  }, [activeJob]);

  // Lock body scroll when a modal is open
  useEffect(() => {
    if (activeJob || showApplyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeJob, showApplyModal]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-16 md:pt-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-slate-950 text-white overflow-hidden py-24 md:py-36 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/career-hero.png')" }}
      >
        <div className="absolute inset-0 bg-slate-950/85"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/50 border border-white/10 text-xs font-semibold uppercase tracking-widest text-brand-200 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            We're Hiring
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight drop-shadow-md text-white">
            Come build the future of AI data with us.
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow">
            Join our global team of annotators, engineers, and operations experts working on state-of-the-art machine learning models.
          </p>
        </div>
      </section>

      {/* 2. OPEN POSITIONS SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 -mt-10 relative z-20">
        
        {/* Search Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl md:rounded-[2rem] p-4 shadow-2xl shadow-slate-200/50 mb-6 flex items-center">
          <div className="relative flex-1">
             <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-600" />
             <input 
               type="text" 
               placeholder="Search open roles..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full pl-14 pr-6 py-4 rounded-xl border-none focus:ring-0 text-slate-900 font-semibold text-lg placeholder:text-slate-500 outline-none"
             />
          </div>
        </div>

        <div className="bg-white rounded-2xl md:rounded-[2rem] p-4 mb-12 overflow-hidden">
          <div className="flex items-center gap-2 px-2 overflow-x-auto no-scrollbar py-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loadingJobs ? (
            <div className="col-span-full text-center py-20 flex flex-col items-center gap-4">
              <Loader2 size={40} className="animate-spin text-brand-500" />
              <p className="text-xl text-slate-600 font-semibold uppercase tracking-widest">Searching for open roles...</p>
            </div>
          ) : fetchError ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-red-500 font-semibold">{fetchError}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-slate-200 text-slate-600 rounded-lg hover:bg-slate-300 transition-all font-semibold"
              >
                Retry
              </button>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-slate-600 font-semibold tracking-wider">No open roles found matching your search.</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <div 
                key={job.jobId || job._id} 
                className="group bg-white border border-slate-200 rounded-2xl md:rounded-[2rem] p-5 md:p-6 lg:p-8 hover:border-brand-400/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Subtle light effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-brand-500/10 transition-all duration-500" />

                <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-brand-50 text-brand-600 font-bold text-[8px] md:text-[10px] uppercase tracking-widest rounded-full border border-brand-100">
                      {job.engagement}
                    </span>
                    <span className="px-3 py-1 bg-slate-50 text-slate-500 font-bold text-[8px] md:text-[10px] uppercase tracking-widest rounded-full border border-slate-200">
                      {job.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 italic whitespace-nowrap">
                    {job.createdAt ? `Posted ${new Date(job.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}` : 'Posted recently'}
                  </span>
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                    {job.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-y-2 md:gap-y-3 mb-5 md:mb-6">
                    <div className="flex items-center gap-3 text-slate-600 font-bold text-[11px] md:text-xs">
                       <MapPin size={14} className="text-slate-400" />
                       {job.workMode || 'Remote'}
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 font-bold text-[11px] md:text-xs">
                       <Clock size={14} className="text-slate-400" />
                       {job.commitment || 'Flexible'}
                    </div>
                    <div className="flex items-center gap-3 text-brand-600 font-bold text-[11px] md:text-xs">
                       <IndianRupee size={14} className="text-brand-400" />
                       {job.compensation}
                    </div>
                  </div>

                  <p className="text-slate-500 line-clamp-2 md:line-clamp-3 text-xs md:text-sm font-medium leading-relaxed mb-6">
                    {job.description || "Join our team to work on state-of-the-art machine learning models and help build the future of AI data."}
                  </p>
                </div>

                <div className="flex items-center gap-2 relative z-10 pt-5 border-t border-slate-100 mt-auto">
                  <button 
                    onClick={() => { setActiveJob(job); handleApplyClick(); }}
                    className="flex-1 px-2 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-brand-600 transition-all active:scale-[0.95]"
                  >
                    Apply
                  </button>
                  <button 
                    onClick={() => setActiveJob(job)}
                    className="flex-1 px-2 py-3 bg-white border-2 border-slate-100 text-slate-700 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:border-brand-200 hover:text-brand-600 transition-all flex items-center justify-center gap-1"
                  >
                    Details <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 3. JOB DETAIL MODAL (SLIDE OVER) */}
      {activeJob && !showApplyModal && (
        <div className="fixed inset-0 z-[100] flex justify-end bg-slate-900/60 backdrop-blur-sm transition-all" onClick={() => setActiveJob(null)}>
           <div 
             className="w-full max-w-2xl h-full bg-white shadow-2xl flex flex-col animate-slide-in relative" 
             onClick={e => e.stopPropagation()}
           >
              {/* Header */}
              <div className="p-6 md:p-10 border-b border-slate-100 flex justify-between items-start sticky top-0 bg-white/95 backdrop-blur-lg z-20">
                 <div>
                    <div className="inline-block px-3 py-1.5 bg-brand-50 text-brand-600 font-semibold text-xs uppercase tracking-wider rounded-lg mb-4">
                      {activeJob.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight mb-4">
                      {activeJob.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
                        <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><MapPin size={16} className="text-slate-600"/>{activeJob.workMode}</span>
                        <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><Clock size={16} className="text-slate-600"/>{activeJob.engagement}</span>
                        <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><Briefcase size={16} className="text-slate-600"/>{activeJob.commitment}</span>
                    </div>
                 </div>
                 <button 
                   onClick={() => setActiveJob(null)} 
                   className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors shrink-0"
                 >
                   <X size={20}/>
                 </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 no-scrollbar">
                 <div className="prose prose-slate max-w-none">
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">About the Role</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg">
                      {activeJob.description}
                    </p>
                 </div>
                 
                 <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">1</div>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-4">
                       {activeJob.responsibilities.map((r,i) => (
                          <li key={i} className="flex gap-4 text-slate-600 font-medium text-base">
                             <div className="mt-2 w-2 h-2 rounded-full bg-brand-500 shrink-0"></div>
                             {r}
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">2</div>
                      Requirements
                    </h4>
                    <ul className="space-y-4">
                       {activeJob.requirements.map((r,i) => (
                          <li key={i} className="flex gap-4 text-slate-600 font-medium text-base">
                             <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-0.5" />
                             {r}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Footer CTA */}
              <div className="p-6 md:p-8 border-t border-slate-100 bg-white">
                 <button 
                   onClick={handleApplyClick} 
                   className="w-full py-4 bg-slate-900 text-white rounded-2xl font-semibold text-lg hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] flex items-center justify-center gap-2"
                 >
                    Apply for this Position <ArrowRight size={20} />
                 </button>
              </div>
           </div>
        </div>
      )}

      {/* 4. APPLICATION FORM MODAL */}
      {showApplyModal && activeJob && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          onClick={() => {
            setShowApplyModal(false);
            setActiveJob(null);
          }}
        >
          <div 
            className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-modal no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 p-6 md:p-8 rounded-t-[2rem] z-10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Submit Application</h3>
                <p className="text-sm text-brand-600 font-semibold mt-1">{activeJob.title}</p>
              </div>
              <button 
                onClick={() => {
                  setShowApplyModal(false);
                  setActiveJob(null);
                }}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              {/* Success State */}
              {appSuccess ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-semibold text-slate-900">Application Submitted!</h4>
                  <p className="text-slate-500 max-w-sm mx-auto font-medium">
                    Thank you for applying to LabelzAI! Our team will review your profile and respond shortly.
                  </p>
                  <button 
                    onClick={() => {
                       setShowApplyModal(false);
                       setActiveJob(null);
                    }}
                    className="mt-6 px-10 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-lg"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  {/* Error Message */}
                  {appError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3 animate-pulse">
                      <AlertCircle size={20} className="text-red-600 shrink-0" />
                      <p className="text-red-700 font-semibold text-sm">{appError}</p>
                    </div>
                  )}

                  <form onSubmit={handleApplicationSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                      <input 
                        type="text" name="fullName" value={appForm.fullName} onChange={handleAppFormChange}
                        className={`w-full px-5 py-4 rounded-2xl bg-white border outline-none ${appFieldErrors.fullName ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-200'} focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all font-semibold text-slate-900`}
                        placeholder="e.g. Jane Doe" disabled={appLoading}
                      />
                      {appFieldErrors.fullName && <p className="text-red-500 text-xs font-semibold ml-1">{appFieldErrors.fullName}</p>}
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Email *</label>
                        <input 
                          type="email" name="email" value={appForm.email} onChange={handleAppFormChange}
                          className={`w-full px-5 py-4 rounded-2xl bg-white border outline-none ${appFieldErrors.email ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-200'} focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all font-semibold text-slate-900`}
                          placeholder="you@example.com" disabled={appLoading}
                        />
                        {appFieldErrors.email && <p className="text-red-500 text-xs font-semibold ml-1">{appFieldErrors.email}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Phone *</label>
                        <input 
                          type="tel" name="phone" value={appForm.phone} onChange={handleAppFormChange}
                          className={`w-full px-5 py-4 rounded-2xl bg-white border outline-none ${appFieldErrors.phone ? 'border-red-400 ring-4 ring-red-50' : 'border-slate-200'} focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all font-semibold text-slate-900`}
                          placeholder="+1 (555) 000-0000" disabled={appLoading}
                        />
                        {appFieldErrors.phone && <p className="text-red-500 text-xs font-semibold ml-1">{appFieldErrors.phone}</p>}
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Resume (PDF/DOCX)</label>
                      <div className="relative">
                        <input 
                          type="file" accept=".pdf,.doc,.docx,image/*" onChange={handleResumeChange}
                          className="hidden" id="resume-upload" disabled={appLoading}
                        />
                        <label 
                          htmlFor="resume-upload"
                          className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-dashed flex items-center gap-3 cursor-pointer transition-all font-semibold text-sm ${resumeFile ? 'border-brand-300 text-brand-700 bg-brand-50/50' : 'border-slate-300 text-slate-500 hover:border-brand-400 hover:bg-slate-100'}`}
                        >
                          {resumeFile ? (
                            <><FileText size={20} className="text-brand-500" /> {resumeFile.name}</>
                          ) : (
                            <><Upload size={20} className="text-slate-600" /> Click to attach your resume (max 5MB)</>
                          )}
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Experience</label>
                          <select 
                            name="experienceYears" value={appForm.experienceYears} onChange={handleAppFormChange} disabled={appLoading}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all font-semibold text-slate-900"
                          >
                            <option value="">Select Level</option>
                            <option value="Entry Level (0-1 yrs)">Entry Level (0-1 yrs)</option>
                            <option value="Mid Level (1-3 yrs)">Mid Level (1-3 yrs)</option>
                            <option value="Senior (3-5+ yrs)">Senior (3-5+ yrs)</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">LinkedIn URL</label>
                          <input 
                            type="url" name="linkedinUrl" value={appForm.linkedinUrl} onChange={handleAppFormChange} disabled={appLoading}
                            className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all font-semibold text-slate-900"
                            placeholder="https://linkedin.com/in/..."
                          />
                       </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest ml-1">Cover Letter (Optional)</label>
                      <textarea 
                        name="coverLetter" value={appForm.coverLetter} onChange={handleAppFormChange}
                        rows="3"
                        className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-4 focus:ring-brand-50 focus:border-brand-500 transition-all resize-none font-semibold text-slate-900"
                        placeholder="Tell us why you're a great fit..." disabled={appLoading}
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button 
                      type="submit" 
                      disabled={appLoading}
                      className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-2xl transition-all active:scale-[0.98] flex justify-center items-center gap-3 text-lg disabled:opacity-70 disabled:scale-100"
                    >
                      {appLoading ? (
                        <><Loader2 size={24} className="animate-spin" /> Sending...</>
                      ) : (
                        <><Send size={22} /> Submit Application</>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Aesthetics */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-slide-in { animation: slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-modal { animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        ::selection { background: #4f46e5; color: white; }
      `}} />
    </div>
  );
};

export default Career;
