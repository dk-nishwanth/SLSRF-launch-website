
import React, { useRef } from 'react';

const MarqueeSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070&auto=format&fit=crop", // Laboratory research
    "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2070&auto=format&fit=crop", // Medicinal plants and herbs
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2070&auto=format&fit=crop", // Environmental conservation
    "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?q=80&w=2070&auto=format&fit=crop", // Sctworking success
    "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2070&auto=format&fit=crop"  // Presentation
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="marquee" className="py-24 bg-black overflow-hidden">
      <div className="text-center mb-16 reveal">
        <p className="text-white text-lg md:text-2xl font-bold uppercase tracking-[0.3em] mt-6 opacity-70">
          Conscious Science • National Knowledge • Sustainable Futures
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 group">
        <div ref={scrollRef} className="carousel-container gap-4 sm:gap-6 py-6 sm:py-10">
          {images.map((img, i) => (
            <div key={i} className="carousel-item w-[85vw] sm:w-full md:w-2/3 shrink-0">
              <img 
                src={img} 
                alt={`Event Highlight ${i}`} 
                className="w-full aspect-video object-cover rounded-lg border-2 border-white/10 shadow-2xl" 
              />
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-4 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#f2921d] text-[#f2921d] items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border border-[#f2921d] text-[#f2921d] items-center justify-center hover:bg-[#f2921d] hover:text-black transition-all z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {images.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === 2 ? 'w-10 bg-[#f2921d]' : 'w-3 bg-white/20'}`}></div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
