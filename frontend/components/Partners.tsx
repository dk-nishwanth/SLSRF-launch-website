
import React from 'react';

const Partners: React.FC = () => {
  const mainPartners = [
    { name: 'BRiX Network', type: 'Strategic Partner', logo: '/BRIX NEW.png', hasLogo: true },
    { name: 'Q DoTZ', type: 'Innovation Partner', logo: '/Quantum-dotz-logo.png', hasLogo: true },
    { name: 'SNA', type: 'Associate Partner', logo: '/Brand-Logo.jpg', hasLogo: true },
    { name: 'Marginz', type: 'Growth Partner', logo: '/marginz logo.jpg', hasLogo: true }
  ];

  return (
    <section id="partners" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
            <h2 className="partners-title font-black text-white uppercase tracking-tighter leading-none mb-3 sm:mb-4">
                PART<span className="text-[#f2921d]">NERS</span>
            </h2>
            <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-xs">Collaborating for a sustainable future</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-4xl mx-auto">
          {mainPartners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-card bg-white aspect-square flex flex-col items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition-all group rounded-sm reveal-zoom p-2 sm:p-3 md:p-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className={`w-full flex items-center justify-center mb-1 sm:mb-2 grayscale group-hover:grayscale-0 transition-all duration-700 ${partner.name === 'SNA' ? 'h-4 sm:h-6 md:h-8' : 'h-3 sm:h-4 md:h-6'}`}>
                    {partner.hasLogo ? (
                      <img 
                        src={partner.logo!} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <span className="text-black font-black text-xs sm:text-sm md:text-base tracking-tighter uppercase text-center leading-none">{partner.name}</span>
                    )}
                </div>
                <div className="w-full h-px bg-gray-100 mb-1 sm:mb-2"></div>
                <p className="partner-type text-gray-400 uppercase font-bold tracking-widest text-center text-[8px] sm:text-[9px] md:text-xs">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
