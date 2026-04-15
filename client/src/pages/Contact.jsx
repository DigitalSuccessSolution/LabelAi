import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Briefcase, Globe, Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001' : '');

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (fieldErrors[id]) {
      setFieldErrors((prev) => ({ ...prev, [id]: '' }));
    }
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const errors = {};
          data.errors.forEach((err) => {
            errors[err.field] = err.message;
          });
          setFieldErrors(errors);
          setError('Please correct the highlighted fields.');
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
        return;
      }

      setSuccess(true);
      setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
        } catch {
      setError('Unable to connect to server. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Centered Hero - Back to Premium White Theme */}
      <section className="relative pt-48 pb-24 overflow-hidden text-center bg-white border-b md:pt-72 border-slate-100">
        <div className="absolute inset-x-0 bottom-0 z-0 top-20">
           <img src="/contact.png" alt="" className="object-cover w-full h-full opacity-100" />
           <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8 max-w-5xl">
             Let’s Build High-Quality <br className="hidden md:block" />
             <span className="text-brand-600">AI Training Data Together</span>
          </h1>
          <p className="max-w-4xl mx-auto text-lg font-normal leading-relaxed text-gray-500 md:text-2xl">
             Have a question about our data annotation services or planning to start an AI / Machine Learning project? The team at LabelzAI Techservices LLP is here to help.
          </p>
        </div>
      </section>

      {/* 2. Intro Description Section - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
            <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
                {/* Left Side: Content */}
                <div className="space-y-12 text-left">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                            Building the Foundation <br />
                            <span className="text-brand-600">for AI Success.</span>
                        </h2>
                        <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    </div>
                    
                    <div className="space-y-8 text-lg font-normal leading-relaxed text-gray-600 md:text-xl">
                        <p className="py-2 text-xl italic font-semibold leading-relaxed text-gray-900 shadow-xs md:text-2xl bg-slate-50 rounded-r-2xl">
                            We specialize in delivering accurate, scalable, and secure data annotation solutions for companies building AI models.
                        </p>
                        <p>
                            Whether you need image annotation, video labeling, text annotation, NLP tagging, or custom AI training datasets, our experts are ready to support your project.
                        </p>
                        <p className="italic text-gray-500">
                            Reach out to us for project inquiries, pricing details, partnerships, or technical consultation. Our team will respond quickly to understand your requirements and provide the best data labeling solution for your business.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image Placeholder (Update later) */}
                <div className="relative group">
                    <div className="rounded-[40px] overflow-hidden border border-slate-100 group shadow-2xl shadow-slate-200/50 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                        {/* Placeholder Image from Unsplash */}
                        <img 
                            src="/contact-us-foundation.png" 
                            alt="Contact Us - Building the Foundation for AI Success" 
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-tr from-brand-600/10 via-transparent to-transparent group-hover:opacity-100"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute w-40 h-40 rounded-full -top-10 -right-10 bg-brand-50 blur-3xl opacity-60"></div>
                    <div className="absolute w-40 h-40 rounded-full shadow-inner -bottom-10 -left-10 bg-slate-50 blur-3xl opacity-80"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Enquiry Form & Contact Cards */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Side */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-brand-600/5"></div>
                
                <div className="mb-12 space-y-4 text-left">
                    <h3 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">Enquiry Form</h3>
                    <p className="text-lg text-gray-500">Send us a message and we'll get back to you shortly.</p>
                </div>

                {success && (
                    <div className="flex items-start gap-4 p-6 mb-10 border bg-emerald-50 border-emerald-100 rounded-3xl">
                        <CheckCircle2 className="text-emerald-600 shrink-0" size={24} />
                        <p className="font-medium text-emerald-900">Thank you! Your enquiry has been received. Our team will respond quickly.</p>
                    </div>
                )}

                {error && (
                    <div className="flex items-start gap-4 p-6 mb-10 border border-red-100 bg-red-50 rounded-3xl">
                        <AlertCircle className="text-red-600 shrink-0" size={24} />
                        <p className="font-medium text-red-900">{error}</p>
                    </div>
                )}

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-3 text-left">
                            <label className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-2" htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full px-6 py-2.5 rounded-2xl bg-slate-50 border ${fieldErrors.firstName ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:bg-white transition-all font-normal text-gray-900 placeholder:text-gray-400`}
                                placeholder="e.g. John"
                                required
                            />
                        </div>
                        <div className="space-y-3 text-left">
                            <label className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-2" htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full px-6 py-2.5 rounded-2xl bg-slate-50 border ${fieldErrors.lastName ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:bg-white transition-all font-normal text-gray-900 placeholder:text-gray-400`}
                                placeholder="e.g. Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-3 text-left">
                        <label className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-2" htmlFor="email">Work Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-6 py-2.5 rounded-2xl bg-slate-50 border ${fieldErrors.email ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:bg-white transition-all font-normal text-gray-900 placeholder:text-gray-400`}
                            placeholder="john@company.com"
                            required
                        />
                    </div>

                    <div className="space-y-3 text-left">
                        <label className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-2" htmlFor="service">Interest Area</label>
                        <select 
                            id="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`w-full px-6 py-2.5 rounded-2xl bg-slate-50 border ${fieldErrors.service ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:bg-white transition-all font-normal text-gray-900 cursor-pointer`}
                            required
                        >
                            <option value="">Select a service...</option>
                            <option value="image">Image Annotation</option>
                            <option value="video">Video Annotation</option>
                            <option value="text">Text & NLP Annotation</option>
                            <option value="lidar">LiDAR & 3D Point Cloud</option>
                            <option value="audio">Audio & Speech</option>
                            <option value="other">Other Inquiry</option>
                        </select>
                    </div>

                    <div className="space-y-3 text-left">
                        <label className="text-[12px] font-bold text-gray-500 uppercase tracking-widest px-2" htmlFor="message">Message / Project Brief</label>
                        <textarea 
                            id="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full px-6 py-2.5 rounded-2xl bg-slate-50 border ${fieldErrors.message ? 'border-red-400' : 'border-slate-200'} focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:bg-white transition-all font-normal text-gray-900 placeholder:text-gray-400 resize-none`}
                            placeholder="Tell us about your project requirements..."
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-brand-600 text-white font-semibold py-4.5 rounded-2xl transition-all active:scale-[0.98] flex justify-center items-center gap-3 text-xl disabled:opacity-70 group"
                    >
                        {loading ? (
                            <><Loader2 className="animate-spin" size={24} /> Transmitting...</>
                        ) : (
                            <><Send size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> Send Enquiry</>
                        )}
                    </button>
                </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-10 lg:col-span-12 xl:col-span-5">
            <div className="space-y-8">
                <div className="flex flex-col gap-8 p-10 rounded-[40px] bg-white border border-slate-100 hover:border-brand-200 transition-all group">
                    <div className="flex items-center justify-center transition-all shadow-sm w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                        <MapPin size={28} />
                    </div>
                    <div className="space-y-4 text-left">
                        <h4 className="text-xl font-bold text-gray-900">Office Address</h4>
                        <p className="text-lg font-normal leading-relaxed text-gray-500">
                             Regd. Address- Baghbahara Road, Kutchhari Chowk, Opp. Hanuman Mandir, 
                             Mahasamund Chhattisgarh – 493445.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 p-10 rounded-[40px] bg-white border border-slate-100 hover:border-brand-200 transition-all group">
                    <div className="flex items-center justify-center transition-all shadow-sm w-14 h-14 rounded-2xl bg-slate-900 text-brand-400 group-hover:bg-brand-600 group-hover:text-white">
                        <Mail size={28} />
                    </div>
                    <div className="space-y-4 text-left">
                        <h4 className="text-xl font-bold text-gray-900">Email Address</h4>
                        <a href="mailto:hello@labelzaitech.com" className="text-xl font-bold text-brand-600 hover:underline">
                            hello@labelzaitech.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-10 rounded-[40px] bg-slate-900 text-white space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/20 blur-3xl"></div>
                <div className="flex items-center gap-3">
                    <Sparkles className="text-brand-400" size={20} />
                    <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-brand-400">Response Guarantee</span>
                </div>
                <h4 className="text-2xl font-bold leading-snug text-white">
                     Our team will respond quickly to understand your requirements and provide the best data labeling solution for your business.
                </h4>
                <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="space-y-1">
                        <div className="text-3xl font-bold">24h</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Fast Response</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-3xl font-bold text-brand-400">Secure</div>
                        <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Data Pipeline</div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
