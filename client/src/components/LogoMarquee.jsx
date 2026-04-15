import React from 'react';

const LogoMarquee = () => {
  const logos = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Tesla", url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
    { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Intel", url: "https://s.yimg.com/fz/api/res/1.2/0NnP2Zs_w9O9F3YGqV1y6A--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/bf/63/ee/bf63ee89969e66c36eb52d75267a39c5.jpg" },
    { name: "Nvidia", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  ];

  return (
    <div className="w-full bg-white py-12 overflow-hidden border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em]">
          Trusted by Industry Leaders
        </p>
      </div>
      
      {/* Marquee Container with Fade Effect */}
      <div className="relative flex overflow-hidden">
        {/* Left & Right Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-12 shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default LogoMarquee;
