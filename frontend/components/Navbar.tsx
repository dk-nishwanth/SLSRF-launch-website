
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'HIGHLIGHTS', href: '#highlights' },
    { name: 'AGENDA', href: '#marquee' },
    { name: 'VENUE', href: '#location' },
    { name: 'RSVP', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Approximate navbar height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md navbar-responsive border-b border-white/10 shadow-2xl' : 'bg-transparent navbar-responsive'}`}>
        <div className="responsive-container flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto">
              <img
                src="/SLSRP FINAL LOGO.png"
                alt="SLSRF Launch 2026"
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="hidden sm:inline-block text-white font-black text-sm sm:text-base md:text-lg tracking-tight leading-none group-hover:text-[#f2921d] transition-colors">
              SLSRF
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white text-[11px] font-bold tracking-widest hover:text-[#f2921d] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f2921d] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-white text-lg sm:text-xl hover:text-[#f2921d] transition-colors p-2 relative z-[110]"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[105] lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col pt-20 px-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-6">
              {navLinks.map((link, index) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block text-white text-lg font-bold tracking-widest hover:text-[#f2921d] transition-all py-3 border-b border-white/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <i className="fas fa-chevron-right text-sm opacity-50 group-hover:opacity-100 group-hover:text-[#f2921d] transition-all"></i>
                  </div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <div className="text-center">
                <img
                  src="/SLSRP FINAL LOGO.png"
                  alt="SLSRF"
                  className="h-12 w-auto mx-auto mb-4 opacity-60"
                />
                <p className="text-gray-400 text-sm font-medium">
                  SLSRF 2026<br />
                  The Divine Launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
