
import React from 'react';

const About: React.FC = () => {
  const scrollToLocation = () => {
    const locationSection = document.getElementById('location');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="bg-black">
      {/* Orange & Partner Banner Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3 bg-[#f2921d] about-orange-section flex flex-col justify-center reveal-left">
          <h2 className="text-white about-orange-title font-black uppercase leading-[0.9] tracking-wider mb-4 sm:mb-6 title-underline" style={{ fontFamily: "'Inter', sans-serif" }}>
            #the semporutkalai vision <br /> A zeal for sustenance
          </h2>
        </div>
        <div className="bg-[#050505] about-dark-section flex flex-col justify-center border-l border-white/5 relative overflow-hidden reveal-right">
          <div className="flex flex-col justify-center h-full text-center relative">
            
            {/* Cosmic nebula background */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-gradient-radial from-[#f2921d]/20 via-purple-900/10 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-0 bg-gradient-conic from-[#f2921d]/10 via-transparent to-blue-900/10 animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
            
            {/* Floating constellation */}
            <div className="absolute inset-0">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={`star-${i}`}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${10 + (i * 7)}%`,
                    top: `${15 + Math.sin(i) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + (i % 3)}s`,
                    boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
                  }}
                />
              ))}
            </div>
            
            {/* Plasma energy waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={`plasma-${i}`}
                  className="absolute rounded-full border-2 opacity-20"
                  style={{
                    width: `${100 + i * 60}px`,
                    height: `${60 + i * 30}px`,
                    borderColor: i % 2 === 0 ? '#f2921d' : '#ffffff',
                    animation: `plasmaWave ${4 + i * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                    transform: `rotate(${i * 30}deg)`
                  }}
                />
              ))}
            </div>
            
            {/* Quantum particles system */}
            <div className="absolute inset-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={`quantum-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${i % 2 === 0 ? '#f2921d' : '#ffffff'} 0%, transparent 70%)`,
                    left: '50%',
                    top: '50%',
                    animation: `quantumOrbit ${6 + i}s linear infinite`,
                    animationDelay: `${i * 0.75}s`,
                    transformOrigin: `${40 + i * 10}px 0px`
                  }}
                />
              ))}
            </div>
            
            {/* Main date with spectacular effects */}
            <div className="relative z-20">
              
              {/* Holographic projection effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#f2921d]/10 to-transparent opacity-60"
                     style={{ 
                       backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, rgba(242, 146, 29, 0.1) 1px, transparent 2px)',
                       animation: 'hologramScan 3s linear infinite'
                     }}>
                </div>
              </div>
              
              {/* Date text with mind-bending effects */}
              <div className="relative transform-gpu">
                <p className="text-white font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl relative">
                  
                  {/* Day with crystalline effect */}
                  <span className="inline-block relative group">
                    <span className="inline-block relative transform-gpu"
                          style={{ 
                            animation: 'crystallineGlow 4s ease-in-out infinite',
                            textShadow: '0 0 20px rgba(242, 146, 29, 0.8), 0 0 40px rgba(242, 146, 29, 0.4), 0 0 60px rgba(242, 146, 29, 0.2)',
                            filter: 'drop-shadow(0 0 10px rgba(242, 146, 29, 0.6))'
                          }}>
                      2
                    </span>
                    <span className="inline-block relative transform-gpu ml-1"
                          style={{ 
                            animation: 'crystallineGlow 4s ease-in-out infinite',
                            animationDelay: '0.2s',
                            textShadow: '0 0 20px rgba(242, 146, 29, 0.8), 0 0 40px rgba(242, 146, 29, 0.4), 0 0 60px rgba(242, 146, 29, 0.2)',
                            filter: 'drop-shadow(0 0 10px rgba(242, 146, 29, 0.6))'
                          }}>
                      5
                    </span>
                    {/* Crystal fragments */}
                    <div className="absolute -inset-2 opacity-40">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={`crystal-${i}`}
                          className="absolute w-1 h-1 bg-[#f2921d] transform rotate-45"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `crystalFloat ${2 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                    </div>
                  </span>
                  
                  {/* Month with aurora effect */}
                  <span className="mx-8 relative inline-block group">
                    <span className="relative inline-block transform-gpu"
                          style={{ 
                            background: 'linear-gradient(45deg, #f2921d, #fbbf24, #f59e0b, #ec4899, #8b5cf6, #f2921d)',
                            backgroundSize: '400% 400%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'auroraShift 6s ease-in-out infinite, textLevitate 4s ease-in-out infinite',
                            filter: 'drop-shadow(0 0 15px rgba(242, 146, 29, 0.8)) drop-shadow(0 0 30px rgba(139, 92, 246, 0.4))'
                          }}>
                      January
                    </span>
                    {/* Aurora particles */}
                    <div className="absolute -inset-6 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div 
                          key={`aurora-${i}`}
                          className="absolute w-px h-4 opacity-60"
                          style={{
                            background: `linear-gradient(to bottom, ${i % 3 === 0 ? '#f2921d' : i % 3 === 1 ? '#8b5cf6' : '#fbbf24'}, transparent)`,
                            left: `${10 + i * 10}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `auroraRise ${3 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.4}s`,
                            transform: `rotate(${Math.random() * 30 - 15}deg)`
                          }}
                        />
                      ))}
                    </div>
                  </span>
                  
                  {/* Year with cosmic energy */}
                  <span className="inline-block relative group">
                    {['2', '0', '2', '6'].map((digit, i) => (
                      <span 
                        key={`digit-${i}`}
                        className="inline-block relative transform-gpu mx-0.5"
                        style={{
                          animation: `cosmicPulse ${3 + i * 0.5}s ease-in-out infinite, digitFloat ${4 + i * 0.3}s ease-in-out infinite`,
                          animationDelay: `${i * 0.3}s`,
                          textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 40px rgba(242, 146, 29, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)',
                          filter: 'brightness(1.2) contrast(1.1)'
                        }}
                      >
                        {digit}
                        {/* Energy trails */}
                        <div className="absolute -inset-1 pointer-events-none">
                          <div 
                            className="absolute w-full h-full border border-[#f2921d] rounded opacity-30"
                            style={{
                              animation: `energyTrail ${2 + i * 0.2}s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        </div>
                      </span>
                    ))}
                    {/* Cosmic symbols */}
                    <div className="absolute -inset-4 pointer-events-none">
                      <span className="absolute -top-6 -right-6 text-[#f2921d] text-lg animate-spin" style={{ animationDuration: '8s' }}>⚡</span>
                      <span className="absolute -bottom-6 -left-6 text-purple-400 text-sm animate-pulse" style={{ animationDelay: '2s' }}>🌟</span>
                      <span className="absolute top-0 right-0 text-yellow-400 text-xs animate-bounce" style={{ animationDelay: '1s' }}>✨</span>
                      <span className="absolute bottom-0 left-0 text-blue-400 text-xs animate-ping" style={{ animationDelay: '3s' }}>💫</span>
                    </div>
                  </span>
                </p>
                
                {/* Multi-spectrum glow system */}
                <div className="absolute inset-0 text-white font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl opacity-50 blur-sm animate-pulse">
                  25 January 2026
                </div>
                <div className="absolute inset-0 text-[#f2921d] font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl opacity-40 blur-md animate-pulse" 
                     style={{ animationDelay: '1s', animationDuration: '3s' }}>
                  25 January 2026
                </div>
                <div className="absolute inset-0 text-purple-400 font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl opacity-30 blur-lg animate-pulse" 
                     style={{ animationDelay: '2s', animationDuration: '4s' }}>
                  25 January 2026
                </div>
                <div className="absolute inset-0 text-blue-400 font-black about-dark-date tracking-widest text-2xl sm:text-3xl md:text-4xl opacity-20 blur-xl animate-pulse" 
                     style={{ animationDelay: '3s', animationDuration: '5s' }}>
                  25 January 2026
                </div>
              </div>
            </div>
            
            {/* Futuristic interface elements */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              {/* Hexagonal HUD */}
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 border-2 border-[#f2921d] transform rotate-45 animate-pulse opacity-40"></div>
                <div className="absolute top-2 left-2 w-8 h-8 border border-white transform rotate-45 animate-spin" style={{ animationDuration: '10s' }}></div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 border-2 border-[#f2921d] transform -rotate-45 animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-2 left-2 w-8 h-8 border border-white transform -rotate-45 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
              </div>
              
              {/* Data streams */}
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={`stream-left-${i}`}
                    className="w-8 h-px bg-gradient-to-r from-[#f2921d] to-transparent mb-2 opacity-40"
                    style={{
                      animation: `dataStream 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={`stream-right-${i}`}
                    className="w-8 h-px bg-gradient-to-l from-[#f2921d] to-transparent mb-2 opacity-40"
                    style={{
                      animation: `dataStream 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.2 + 1}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Launch countdown with typewriter effect */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <div className="relative">
                <span className="text-[#f2921d] text-sm font-bold uppercase tracking-widest"
                      style={{ 
                        textShadow: '0 0 10px rgba(242, 146, 29, 0.8), 0 0 20px rgba(242, 146, 29, 0.4)',
                        animation: 'typewriterGlow 4s ease-in-out infinite'
                      }}>
                  ◆ LAUNCH SEQUENCE INITIATED ◆
                </span>
                <div className="absolute -inset-2 border border-[#f2921d] opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Advanced CSS animations */}
          <style jsx>{`
            @keyframes plasmaWave {
              0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
              50% { transform: scale(1.2) rotate(180deg); opacity: 0.4; }
            }
            @keyframes quantumOrbit {
              0% { transform: translate(-50%, -50%) rotate(0deg) translateX(var(--orbit-radius, 50px)) rotate(0deg); }
              100% { transform: translate(-50%, -50%) rotate(360deg) translateX(var(--orbit-radius, 50px)) rotate(-360deg); }
            }
            @keyframes hologramScan {
              0% { transform: translateY(-100%); opacity: 0; }
              50% { opacity: 1; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            @keyframes crystallineGlow {
              0%, 100% { transform: scale(1) rotateY(0deg); filter: brightness(1) hue-rotate(0deg); }
              25% { transform: scale(1.05) rotateY(90deg); filter: brightness(1.3) hue-rotate(90deg); }
              50% { transform: scale(1.1) rotateY(180deg); filter: brightness(1.5) hue-rotate(180deg); }
              75% { transform: scale(1.05) rotateY(270deg); filter: brightness(1.3) hue-rotate(270deg); }
            }
            @keyframes crystalFloat {
              0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
              50% { transform: translateY(-10px) rotate(180deg); opacity: 0.8; }
            }
            @keyframes auroraShift {
              0%, 100% { background-position: 0% 50%; }
              25% { background-position: 100% 0%; }
              50% { background-position: 200% 50%; }
              75% { background-position: 300% 100%; }
            }
            @keyframes textLevitate {
              0%, 100% { transform: translateY(0px) rotateX(0deg); }
              50% { transform: translateY(-3px) rotateX(5deg); }
            }
            @keyframes auroraRise {
              0% { transform: translateY(20px) scaleY(0); opacity: 0; }
              50% { transform: translateY(0px) scaleY(1); opacity: 1; }
              100% { transform: translateY(-20px) scaleY(0); opacity: 0; }
            }
            @keyframes cosmicPulse {
              0%, 100% { transform: scale(1); filter: brightness(1) saturate(1); }
              50% { transform: scale(1.1); filter: brightness(1.4) saturate(1.5); }
            }
            @keyframes digitFloat {
              0%, 100% { transform: translateY(0px) rotateZ(0deg); }
              33% { transform: translateY(-2px) rotateZ(1deg); }
              66% { transform: translateY(2px) rotateZ(-1deg); }
            }
            @keyframes energyTrail {
              0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
              50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
            }
            @keyframes dataStream {
              0% { transform: scaleX(0); opacity: 0; }
              50% { transform: scaleX(1); opacity: 1; }
              100% { transform: scaleX(0); opacity: 0; }
            }
            @keyframes typewriterGlow {
              0%, 100% { opacity: 0.8; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.02); }
            }
          `}</style>
        </div>
      </div>

      {/* Main Content Grid: Image + About Us text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-2">
        <div className="relative aspect-video lg:aspect-auto min-h-[400px] sm:min-h-[500px] md:min-h-[600px] reveal-zoom overflow-hidden group">
          <img 
            src="/WhatsApp Image 2025-12-05 at 16.26.26_02490540.jpg" 
            alt="SLSRF Foundation Launch Event - Vision Presentation and Stakeholder Collaboration" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-16 left-4 sm:left-6 md:left-10 lg:left-16 right-4 sm:right-6 md:right-10 lg:right-16 text-white">
             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tighter mb-3 sm:mb-4 md:mb-6">Visionary Exchange</h3>
             <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl uppercase leading-tight" style={{ letterSpacing: '0.15em' }}>Building a Legacy with Indian Roots</p>
          </div>
        </div>
        
        <div className="bg-[#080808] p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 flex flex-col justify-center reveal-right">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter mb-8 sm:mb-10 md:mb-12 leading-none title-underline">ABOUT SLSRF</h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-10 max-w-2xl mt-6 sm:mt-8">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              <span className="text-[#f2921d] font-bold text-lg sm:text-xl md:text-2xl">Semporutkalai Life Science Research Foundation (SLSRF)</span> is a Section - 8 non-profit foundation that operates at the convergence of science, society, and public policy, ensuring that research translates into actionable knowledge, institutional frameworks, and measurable real-world outcomes.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Our work moves science beyond hypothesis and academic journals into systems and solutions that shape the nation's future. We are committed to building India's sustainable vision through research-driven responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
