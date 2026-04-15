import React from "react";
import {
  Linkedin,
  Mail,
  MapPin,
  Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16 pb-12 font-sans text-white border-t bg-slate-950 md:pt-24 border-slate-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 mb-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          
          {/* 1. Brand Section */}
          <div className="space-y-8 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/logo1.png"
                alt="LabelzAI"
                className="w-auto h-12 brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-sm italic font-medium leading-relaxed text-slate-300 opacity-80">
              Transforming complex raw data into high-fidelity AI training sets through global human intelligence.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                { icon: <Instagram size={18} />, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-xl bg-slate-900 text-slate-300 hover:bg-brand-600 hover:text-white border-slate-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Platforms */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
              Platform
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About LabelzAI", href: "/about" },
                { name: "Global Careers", href: "/career" },
                { name: "Get in Touch", href: "/contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="relative inline-flex text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute left-0 w-0 h-px overflow-hidden transition-all duration-300 -bottom-1 bg-brand-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Core Solutions */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
              Solutions
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Image Annotation", href: "/services/image-annotation" },
                { name: "Video Annotation", href: "/services/video-annotation" },
                { name: "Audio Annotation", href: "/services/audio-annotation" },
                { name: "NLP & Text Data", href: "/services/nlp-datasets" },
                { name: "Lidar & 3D Point", href: "/services/lidar-3d" },
                { name: "Multimodal Data", href: "/services/multimodal-annotation" },
                { name: "Data Classification", href: "/services/data-classification" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="relative inline-flex text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute left-0 w-0 h-px overflow-hidden transition-all duration-300 -bottom-1 bg-brand-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Industries */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
              Industries
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Artificial Intelligence", href: "/industries/artificial-intelligence" },
                { name: "Autonomous Vehicles", href: "/industries/autonomous-vehicles" },
                { name: "Medical & Health", href: "/industries/healthcare-lifesciences" },
                { name: "Retail & E-Com", href: "/industries/ecommerce-retail" },
                { name: "Media & Entertain", href: "/industries/media-entertainment" },
                { name: "Manufacturing", href: "/industries/manufacturing" },
                { name: "Agriculture Tech", href: "/industries/agriculture" },
                { name: "Education & EdTech", href: "/industries/education-edtech" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="relative inline-flex text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute left-0 w-0 h-px overflow-hidden transition-all duration-300 -bottom-1 bg-brand-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Case Studies */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
              Case Studies
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Autonomous Mobility", href: "/case-studies/autonomous" },
                { name: "E-commerce & Retail", href: "/case-studies/ecommerce" },
                { name: "AgriTech precision", href: "/case-studies/agriculture" },
                { name: "Media & Moderation", href: "/case-studies/media" },
                { name: "EdTech Learning", href: "/case-studies/education" },
                { name: "Industrial Safety", href: "/case-studies/manufacturing" },
                { name: "Medical Diagnosis", href: "/case-studies/medical" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="relative inline-flex text-sm font-medium transition-all duration-300 text-slate-400 hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute left-0 w-0 h-px overflow-hidden transition-all duration-300 -bottom-1 bg-brand-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Contact Info */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-400 mb-8">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-brand-500 shrink-0" />
                <p className="text-sm font-medium leading-relaxed text-slate-400">
                  Baghbahara Road, Mahasamund <br />
                  Chhattisgarh – 493445
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <a
                  href="mailto:hello@labelzaitech.com"
                  className="text-sm font-bold transition-colors text-slate-300 hover:text-white"
                >
                  hello@labelzaitech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-slate-900 md:flex-row">
          <p className="text-slate-500 text-[13px] font-medium">
            &copy; {new Date().getFullYear()} LabelzAI Techservices LLP. All rights reserved.
          </p>

          <p className="text-slate-500 text-[13px] font-medium flex items-center gap-2">
            Built by{" "}
            <a
              href="https://digitalsuccesssolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-brand-400 transition-colors border-b border-slate-800 hover:border-brand-400 pb-0.5"
            >
              Digital Success Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
