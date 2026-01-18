
import React from 'react';

const Speakers: React.FC = () => {
  const keynoteSpeakers = [
    {
      name: 'Thiru. Jeyachandran Srinivasan',
      role: 'Presidential Address',
      company: 'Founder - SLSRF',
      speechTitle: 'SLSRF Architecting a scientific and responsible civilization',
      img: '/jc.png'
    },
    {
      name: 'Prof Kamlesh Joshipura',
      role: '',
      company: 'Vice-Chancellor of Saurashtra University, Rajkot',
      speechTitle: 'To be decided',
      img: '/Kamlesh_Joshipura.jpg'
    },
    {
      name: 'Mr Kishore Kumar KRM IPS',
      role: '',
      company: 'Director, Ayush Hospitals',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Thiru R. Srinivasan',
      role: '',
      company: 'Chairman, KSR Educational Institutions',
      speechTitle: 'Academia as a Pillar in Nation-Building for Sustenance',
      img: '/Srinivasan_R.jpg'
    },
    {
      name: 'Shriraam Shekher S R',
      role: '',
      company: 'President, International Media Organisation',
      speechTitle: 'To be decided',
      img: '/Dr_Shriraam_Sekher.jpg'
    },
    {
      name: 'Dr. Yogita Shukla',
      role: '',
      company: 'CEO, AddGEO Foundation',
      speechTitle: 'To be decided',
      img: '/Dr. Yogita Shukla.jpg'
    },
    {
      name: 'Dr. Murugeswaran R',
      role: '',
      company: 'Dept Advisor, NMPB',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Dr. Vincent S',
      role: '',
      company: 'Panel Expert',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    },
    {
      name: 'Dr Kotur PB',
      role: '',
      company: 'Global Goodwill Ambassador',
      speechTitle: 'Human Capital Doctrine',
      img: '/Dr Kotur PB.jpg'
    },
    {
      name: 'Dr. Venkateshwaran',
      role: '',
      company: 'CEO, proofile.in',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    }
  ];

  const panelSpeakers = [
    { name: 'Dr. W. Selvamurthy S.P', role: 'President, ASTIF', img: '/Dr_W_Selvamurthy.jpg' },
    { name: 'Dr. Shankar GV', role: 'President & CEO, Global Connect Inc', img: '/Shankar_GV.jpg' },
    { name: 'Dr. Sadamate V V', role: 'Former Adviser Agriculture, Planning Commission', img: '/VV_Sadamate.jpg' },
    { name: 'Dr. Thyagarajan S P', role: 'Former Vice Chancellor, Madras University', img: '/Dr Thyagaraja SP.jpg' },
    { name: 'Dr. Sudarshan Suryawanshi', role: 'COO – Axiom India', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop' }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
          <h2 className="speakers-title text-[#f2921d] font-black uppercase tracking-tighter leading-none mb-4">
            KEY SPEAKERS
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs">Leader Voices - Making Bharath a global frontier for technology and innovation</p>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {keynoteSpeakers.map((speaker, index) => (
              <div 
                key={index} 
                className="speaker-card group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#f2921d]/50 transition-all duration-500 reveal-zoom" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Speaker Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={speaker.img} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
                
                {/* Speaker Info */}
                <div className="speaker-card p-4">
                  <h4 className="speaker-name text-white font-black uppercase tracking-tight mb-1 leading-tight line-clamp-2">
                    {speaker.name}
                  </h4>
                  {speaker.role && (
                    <p className="speaker-role text-[#f2921d] font-bold uppercase tracking-widest mb-2 text-[10px]">
                      {speaker.role}
                    </p>
                  )}
                  <p className="text-gray-500 text-[9px] uppercase font-bold tracking-wide leading-tight line-clamp-2 mb-2">
                    {speaker.company}
                  </p>
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-tight line-clamp-2">
                      <span className="text-[#f2921d] font-bold">Title:</span> {speaker.speechTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Discussion Section */}
        <div>
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 sm:mb-6 text-center">
            PANEL <span className="text-[#f2921d]">DISCUSSION</span>
          </h3>
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              <span className="text-[#f2921d] font-bold">Theme:</span> Designing India's Global Leadership: Science, Consciousness & Sustainable Systems.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            {panelSpeakers.map((speaker, index) => (
              <div 
                key={index}
                className="group bg-[#0a0a0a] border border-white/5 rounded-lg overflow-hidden hover:border-[#f2921d]/50 transition-all duration-500 reveal-zoom"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Speaker Image - Smaller */}
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={speaker.img}
                    alt={speaker.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
                
                {/* Speaker Info - Compact */}
                <div className="p-3">
                  <h4 className="text-white text-xs sm:text-sm font-black uppercase tracking-tight mb-1 leading-tight line-clamp-2">
                    {speaker.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] sm:text-xs font-medium leading-tight line-clamp-2">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Speakers;
