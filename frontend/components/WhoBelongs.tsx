
import React from 'react';

const WhoBelongs: React.FC = () => {
  const items = [
    {
      text: "SLSRF is a platform for thinkers, practitioners, and change-makers committed to advancing social good and conscious science."
    },
    {
      text: "Join researchers, policymakers, and innovators working together to preserve India’s biodiversity intelligence."
    },
    {
      text: "Whether you are a scientist, conservationist, or educator, SLSRF is where purpose transforms into impact."
    }
  ];

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Massive Header Row */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-10 sm:mb-12 md:mb-16 reveal">
        <div className="flex items-center gap-4 sm:gap-6">
           <h2 className="text-[#f2921d] text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-none">
             WHO BELONGS WITH <span className="relative">SLSRF?<div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1.5 sm:h-2 md:h-3 bg-[#f2921d]"></div></span>
           </h2>
        </div>
      </div>

      {/* Split Pane Content */}
      <div className="flex flex-col lg:flex-row w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        
        {/* Left Side: Orange Messaging */}
        <div className="w-full lg:w-1/2 bg-[#f2921d] p-6 sm:p-10 md:p-16 lg:p-20 xl:p-32 flex flex-col justify-center reveal-left">
          <div className="space-y-10 sm:space-y-12 md:space-y-16 max-w-xl">
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 sm:gap-6 group">
                {/* Custom Arrow Icon - Black as per screenshot */}
                <div className="mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 text-black transform group-hover:scale-125 transition-transform">
                    <path d="M7 7L17 17M17 17V8M17 17H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Grayscale Image with Overlay */}
        <div className="w-full lg:w-1/2 relative overflow-hidden group reveal-right min-h-[300px] sm:min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop" 
            alt="Research Team Collaboration and Knowledge Sharing" 
            className="w-full h-full object-cover brightness-75 transition-transform duration-[2s] group-hover:scale-110"
          />
          {/* Huge COLLABORATION text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
            <h3 className="text-white text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6rem] xl:text-[10rem] font-black uppercase tracking-tighter opacity-80 mix-blend-overlay select-none drop-shadow-2xl text-center">
              COLLABORATION
            </h3>
          </div>
          
          {/* Subtle gradient to blend with next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>
      </div>
    </section>
  );
};

export default WhoBelongs;
