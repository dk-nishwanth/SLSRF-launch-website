
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* High-end Conclave Background with specific overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/95 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop" 
          alt="Life Science Research Foundation Launch Event" 
          className="w-full h-full object-cover opacity-50 animate-kenburns"
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-10">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline Construction */}
          <div className="relative flex flex-col md:flex-row items-center md:items-end justify-center mb-16">
            
            {/* The "The" and Date/Location group */}
            <div className="flex flex-col items-center md:items-end md:mr-6 mb-4 md:mb-12">
               {/* Date/Location positioned to the left of the main word */}
               <div className="mb-8 md:mb-20 text-center md:text-right reveal-left active animate-slide-up delay-300">
                  <p className="text-[#f2921d] text-base md:text-xl font-black tracking-[0.3em] uppercase">25.01.2026</p>
                  <div className="h-0.5 w-12 bg-[#f2921d] ml-auto my-3 hidden md:block"></div>
                  <p className="text-white/60 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">Trident, Chennai</p>
               </div>
               
               <span className="text-white text-7xl md:text-[9rem] font-light leading-none tracking-tighter reveal active delay-500">The</span>
            </div>

            {/* DIVINE (The Hero Word) */}
            <div className="reveal-zoom active delay-700">
               <h1 className="text-[#f2921d] text-[22vw] md:text-[18rem] font-black leading-[0.75] tracking-tighter drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] animate-tracking-in">
                 DIVINE
               </h1>
            </div>

            {/* Launch (Tucked in) */}
            <div className="md:ml-6 mt-6 md:mt-0 reveal-right active delay-1000">
               <span className="text-white text-7xl md:text-[8rem] font-black leading-none tracking-tighter italic">Launch</span>
            </div>
          </div>

          {/* Tagline / Description - Styled as a premium brand block */}
          <div className="max-w-4xl mx-auto reveal active delay-1000 border-t border-white/10 pt-16 mt-8">
            <p className="text-white/80 text-xl md:text-3xl font-light leading-relaxed tracking-wide italic">
              Semporutkalai Life Science Research Foundation presents a <br className="hidden md:block" />
              <span className="text-[#f2921d] font-black not-italic px-2">transformative initiative</span> for knowledge preservation, <br className="hidden md:block" />
              human empowerment, and environmental stewardship.
            </p>
          </div>

          {/* Scroll CTA */}
          <div 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                const navbarHeight = 80;
                const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
              }
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-700 cursor-pointer group"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 group-hover:text-[#f2921d] transition-colors">Discover</span>
             <div className="w-[1px] h-20 bg-gradient-to-b from-[#f2921d] via-[#f2921d]/50 to-transparent relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scroll-hint_2s_infinite]"></div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
