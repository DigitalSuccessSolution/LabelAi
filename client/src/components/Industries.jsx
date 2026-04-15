import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, 
  Car, 
  Stethoscope, 
  ShoppingBag, 
  Play, 
  GraduationCap, 
  Factory, 
  Sprout,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Artificial Intelligence",
      icon: <BrainCircuit size={28} />,
      desc: "Training data for LLMs, neural networks, and GenAI.",
      link: "/industries/artificial-intelligence"
    },
    {
      title: "Autonomous Vehicles",
      icon: <Car size={28} />,
      desc: "LiDAR and camera annotation for safer navigation.",
      link: "/industries/autonomous-vehicles"
    },
    {
      title: "Medical & Healthcare",
      icon: <Stethoscope size={28} />,
      desc: "Precision labeling for medical imagery and diagnostics.",
      link: "/industries/healthcare-lifesciences"
    },
    {
      title: "E-Commerce & Retail",
      icon: <ShoppingBag size={28} />,
      desc: "Visual search and automated inventory solutions.",
      link: "/industries/ecommerce-retail"
    },
    {
      title: "Media & Entertainment",
      icon: <Play size={28} />,
      desc: "Content moderation and recommendation datasets.",
      link: "/industries/media-entertainment"
    },
    {
      title: "Education & Edtech",
      icon: <GraduationCap size={28} />,
      desc: "Personalized learning and automated grading data.",
      link: "/industries/education-edtech"
    },
    {
      title: "Manufacturing",
      icon: <Factory size={28} />,
      desc: "Quality control and predictive maintenance for factories.",
      link: "/industries/manufacturing"
    },
    {
      title: "Agriculture",
      icon: <Sprout size={28} />,
      desc: "Crop health and yield prediction mapping.",
      link: "/industries/agriculture"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white" id="industries">
      <div className="max-w-[1400px] mx-auto px-2 md:px-12">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[11px] font-semibold uppercase tracking-widest mb-4">
            Custom Solutions
          </div> */}
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight">
            Industries we <span className="text-brand-600">Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {industries.map((item, idx) => {
            const CardContent = (
              <>
                <div className="text-brand-600 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal mb-8">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm group-hover:gap-4 transition-all mt-auto pt-4 border-t border-slate-50">
                  Learn More <ArrowRight size={16} />
                </div>
              </>
            );

            return item.link ? (
              <Link
                key={idx}
                to={item.link}
                className="group p-4 md:p-8 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/5 active:scale-[0.98] cursor-pointer"
              >
                {CardContent}
              </Link>
            ) : (
              <div 
                key={idx}
                className="group p-4 md:p-8 rounded-2xl border border-slate-100 hover:border-brand-300 hover:bg-brand-50/20 transition-all duration-300 hover:shadow-xl hover:shadow-brand-600/5 active:scale-[0.98]"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
