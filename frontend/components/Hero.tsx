import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden mb-2 sm:mb-3 md:mb-4 lg:mb-5">
      {/* Video Background - extends to navbar area */}
      <div className="absolute z-0 overflow-hidden" style={{ top: '-80px', left: 0, right: 0, height: 'calc(100vh + 80px)', width: '100%' }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.25)',
            transformOrigin: 'center center',
            filter: 'brightness(0.8)'
          }}
        >
          <source src="https://res.cloudinary.com/detnivsqb/video/upload/v1768642753/video_for_header_q6bvj8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability - darker and more prominent */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="relative z-20 hero-container">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Headline - Mobile-first responsive layout */}
          <div className="relative w-full mb-8 md:mb-12 lg:mb-16">
            
            {/* Mobile Layout (< 768px) - Stack everything vertically */}
            <div className="block md:hidden">
              {/* Main Title - Center */}
              <div className="text-center mb-6">
                <h1 className="text-white text-4xl sm:text-5xl font-bold leading-none tracking-tight animate-tracking-in mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  The
                </h1>
                <h1 className="text-[#f2921d] text-6xl sm:text-7xl font-black leading-none tracking-tighter animate-tracking-in delay-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  DIVINE
                </h1>
                <h2 className="text-white text-4xl sm:text-5xl font-bold leading-none tracking-tight animate-slide-up delay-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Launch
                </h2>
              </div>

              {/* Foundation Name - Mobile */}
              <div className="text-center mb-6">
                <p className="text-base sm:text-lg font-black tracking-wide animate-slide-up delay-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="text-white">of</span>
                </p>
                <p className="text-base sm:text-lg font-black tracking-wide animate-slide-up delay-1000" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span className="text-[#f2921d]">Semporutkalai Life Science Research Foundation</span>
                </p>
              </div>

              {/* Date and Location - Below Foundation Name */}
              <div className="text-center">
                <p className="hero-date text-[#f2921d] text-2xl sm:text-3xl font-bold tracking-wide animate-slide-up delay-300" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>25.01.2026</p>
                <button 
                  onClick={() => {
                    const locationSection = document.getElementById('location');
                    if (locationSection) {
                      locationSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hero-location text-white text-xl sm:text-2xl font-medium tracking-wide animate-slide-up delay-500 hover:text-[#f2921d] transition-colors duration-300 cursor-pointer underline decoration-transparent hover:decoration-[#f2921d] underline-offset-4" 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Trident (The Oberoi Group of Hotels)
                </button>
              </div>
            </div>

            {/* Desktop Layout (768px+) - Exact alignment matching reference */}
            <div className="hidden md:block relative w-full">
              
              {/* Main Title Layout - Precisely positioned like reference */}
              <div className="relative flex items-baseline justify-between w-full max-w-6xl mx-auto px-8">
                
                {/* Left side: "The" */}
                <div className="flex-shrink-0">
                  <h1 className="text-white text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-none tracking-tight animate-tracking-in" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    The
                  </h1>
                </div>

                {/* Center: "DIVINE" */}
                <div className="flex-grow text-center mx-8">
                  <h1 className="text-[#f2921d] text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black leading-none tracking-tighter animate-tracking-in delay-200" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    DIVINE
                  </h1>
                </div>

                {/* Right side: "Launch" */}
                <div className="flex-shrink-0 text-right">
                  <h2 className="text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-none tracking-tight animate-slide-up delay-700" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Launch
                  </h2>
                </div>

              </div>

              {/* Centered "of" text */}
              <div className="text-center mt-4 lg:mt-6">
                <p className="text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-wide animate-slide-up delay-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  of
                </p>
              </div>

              {/* Spacer - Reduced spacing */}
              <div className="h-6 lg:h-8 xl:h-10"></div>

            </div>

            {/* Foundation Name, Date and Location - Reduced spacing and text sizes */}
            <div className="hidden md:block text-center max-w-5xl mx-auto">
              
              {/* Foundation Name - Closer to "of" */}
              <div className="mb-6 lg:mb-8">
                <p className="text-[#f2921d] text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-wide animate-slide-up delay-1000" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Semporutkalai Life Science Research Foundation
                </p>
              </div>
              
              {/* Date - Smaller size */}
              <div className="mb-3 lg:mb-4">
                <p className="text-[#f2921d] text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-wide animate-slide-up delay-1100" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  25.01.2026
                </p>
              </div>

              {/* Location - Smaller size */}
              <div>
                <button 
                  onClick={() => {
                    const locationSection = document.getElementById('location');
                    if (locationSection) {
                      locationSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium tracking-wide animate-slide-up delay-1200 hover:text-[#f2921d] transition-colors duration-300 cursor-pointer underline decoration-transparent hover:decoration-[#f2921d] underline-offset-4" 
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Trident (The Oberoi Group of Hotels)
                </button>
              </div>
              
            </div>

          </div>

        </div>
      </div>

      {/* Sound Control Button - Bottom Left Corner */}
      <button
        onClick={toggleSound}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 hover:border-[#f2921d] flex items-center justify-center transition-all duration-300 hover:bg-black/70 group"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <i className="fas fa-volume-mute text-white group-hover:text-[#f2921d] transition-colors text-sm sm:text-lg md:text-xl"></i>
        ) : (
          <i className="fas fa-volume-up text-white group-hover:text-[#f2921d] transition-colors text-sm sm:text-lg md:text-xl"></i>
        )}
      </button>
    </section>
  );
};

export default Hero;
