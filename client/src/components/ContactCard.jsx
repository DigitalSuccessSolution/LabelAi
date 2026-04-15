import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="relative p-8 md:p-10  text-left overflow-hidden bg-gray-900 border border-gray-800 shadow-xl">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_v4.png" 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-medium text-white leading-tight">
            Let’s Work Together
          </h3>
          {/* <p className="text-gray-400 text-sm md:text-base">
            Call us directly, submit a sample or email us!
          </p> */}
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-sm shrink-0">
            <MessageSquare className="text-white" size={20} />
          </div>
          <div className="space-y-1">
            <h5 className="text-gray-400 font-medium text-sm uppercase tracking-wider">Contact With Us</h5>
            <div className="flex flex-col gap-1">
              {/* <a href="tel:+910000000000" className="text-white hover:text-brand-400 transition-colors text-sm md:text-base font-medium">
                +91 00000 00000
              </a> */}
              <a href="mailto:hello@labelzaitech.com" className="text-white hover:text-brand-400 transition-colors text-sm md:text-base font-medium">
                hello@labelzaitech.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link to="/contact">
            <button className="flex items-center gap-3 bg-white text-gray-900 px-8 py-4 text-sm font-medium hover:bg-brand-600 hover:text-white transition-all rounded-full active:scale-95 group w-full justify-center">
              Get in Touch With Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
