
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
      name: 'Prof Kamalesh Joshipura',
      role: 'Keynote Speaker',
      company: 'Vice-Chancellor of Saurashtra University, Rajkot',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Mr Kishore IPS',
      role: 'Keynote Speaker',
      company: 'Indian Police Service',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Thiru R Srinivasan',
      role: 'Keynote Speaker',
      company: 'Chairman - KSR Educational Institutions',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'Dr Sriram Sekhar SR',
      role: 'Keynote Speaker',
      company: 'Research Specialist',
      speechTitle: 'To be decided',
      img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const panel1Speakers = [
    { name: 'Dr GV Shankar IAS', role: 'Retired IAS', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Selvamoorthy SP', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Sudharshan Sooryavanshi', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Sadamate VV', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Thayaraja SP', role: 'Former Vice Chancellor, Madras University', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' }
  ];

  const panel2Speakers = [
    { name: 'Dr Vijay Mishra', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Murugeswaran', role: 'Dept Advisor, DNMS', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop' },
    { name: 'Mrs Yogitha Sukla', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Vincent', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr Venkateswaran', role: 'Founder Profile', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
    { name: 'Dr P Kotur', role: 'Panel Expert', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop' }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black px-4 sm:px-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 reveal-zoom">
          <h2 className="speakers-title text-[#f2921d] font-black uppercase tracking-tighter leading-none mb-4">
            SPEAKERS
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.3em] sm:tracking-[0.5em] font-bold text-[10px] sm:text-xs">Leading voices in conscious science</p>
        </div>

        {/* Keynote Speakers Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 sm:mb-12 text-center">
            KEYNOTE <span className="text-[#f2921d]">SPEAKERS</span>
          </h3>
          
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
                  
                  {/* Hover Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#f2921d] flex items-center justify-center">
                      <i className="fas fa-microphone text-black text-xs"></i>
                    </div>
                  </div>
                </div>
                
                {/* Speaker Info */}
                <div className="speaker-card p-4">
                  <h4 className="speaker-name text-white font-black uppercase tracking-tight mb-1 leading-tight line-clamp-2">
                    {speaker.name}
                  </h4>
                  <p className="speaker-role text-[#f2921d] font-bold uppercase tracking-widest mb-2 text-[10px]">
                    {speaker.role}
                  </p>
                  <p className="text-gray-500 text-[9px] uppercase font-bold tracking-wide leading-tight line-clamp-2 mb-2">
                    {speaker.company}
                  </p>
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <p className="text-gray-400 text-[8px] font-medium leading-tight line-clamp-2">
                      <span className="text-[#f2921d] font-bold">Speech:</span> {speaker.speechTitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Discussions Section */}
        <div>
          {/* Panel 1 */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 sm:mb-8 text-center">
              PANEL <span className="text-[#f2921d]">DISCUSSION 1</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {panel1Speakers.map((speaker, index) => (
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
                    
                    {/* Panel Number */}
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#f2921d] flex items-center justify-center">
                      <span className="text-black font-black text-xs">{index + 1}</span>
                    </div>
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

          {/* Panel 2 */}
          <div>
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-6 sm:mb-8 text-center">
              PANEL <span className="text-[#f2921d]">DISCUSSION 2</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
              {panel2Speakers.map((speaker, index) => (
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
                    
                    {/* Panel Number */}
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#f2921d] flex items-center justify-center">
                      <span className="text-black font-black text-xs">{index + 1}</span>
                    </div>
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

      </div>
    </section>
  );
};

export default Speakers;
