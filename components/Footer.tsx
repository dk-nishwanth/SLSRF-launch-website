
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 overflow-hidden">
      {/* Massive Contact Heading */}
      <div className="max-w-[1400px] mx-auto px-6 mb-16 reveal">
        <h2 className="text-white text-[10vw] md:text-[9rem] font-black uppercase tracking-tighter leading-none">
          GET IN TOUCH.
        </h2>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24 relative border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Office Info */}
          <div className="reveal">
            <h4 className="text-[#f2921d] text-2xl font-black uppercase tracking-[0.2em] mb-12 border-l-4 border-[#f2921d] pl-6">Our Office</h4>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Address</span>
                    <p className="text-gray-300 font-medium text-lg leading-snug">
                    <br />
                    Chennai
                    </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#f2921d] group-hover:bg-[#f2921d] group-hover:text-black transition-all">
                    <i className="fas fa-phone-alt"></i>
                </div>
                <div className="flex flex-col">
                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Phone</span>
                    <p className="text-gray-300 font-bold text-2xl tracking-tight leading-none">+91 91767 60863</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="reveal">
            <h4 className="text-[#f2921d] text-2xl font-black uppercase tracking-[0.2em] mb-12">Send us a message</h4>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Full Name *</label>
                <div className="relative">
                  <input type="text" placeholder="Enter your name" className="w-full bg-transparent border border-white/20 p-5 text-white focus:border-[#f2921d] outline-none transition-all pr-12 rounded-sm" />
                  <i className="far fa-user absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"></i>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Phone Number *</label>
                <div className="relative">
                  <input type="tel" placeholder="Enter your phone" className="w-full bg-transparent border border-white/20 p-5 text-white focus:border-[#f2921d] outline-none transition-all pr-12 rounded-sm" />
                  <i className="fas fa-phone-alt absolute right-5 top-1/2 -translate-y-1/2 text-gray-600"></i>
                </div>
              </div>
              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-white text-[10px] font-bold uppercase tracking-widest opacity-60">Email Address *</label>
                <input type="email" placeholder="Enter your email" className="w-full bg-transparent border border-white/20 p-5 text-white focus:border-[#f2921d] outline-none transition-all rounded-sm" />
              </div>
              <button type="button" className="bg-gbc-gradient text-black px-12 py-5 font-black uppercase tracking-widest md:w-fit mt-4 rounded-sm hover:scale-105 transition-transform">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Legal/Copyright Bottom */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em]">© 2026 SLSRF. All rights reserved.</p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-[#f2921d]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f2921d]">Terms of Service</a>
            <a href="#" className="hover:text-[#f2921d]">Refunds & Cancellations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
