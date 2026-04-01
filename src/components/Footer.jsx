import React from 'react';

const Footer = () => {
  

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      label: "Website"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
      ),
      label: "Share"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email"
    }
  ];

  return (
    <footer className="bg-[#0f1c23] text-white/60 py-12 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img
          src="/logo.png"
          alt="Raiben Bar Surf Lesson Logo"
          className="w-24 h-24 object-contain" // bisa diperbesar tanpa memengaruhi tinggi header
        />
  
        <span className="text-white font-bold text-xl tracking-tight">Raiben Bar Surf Lesson</span>
      </div>
      <p className="text-sm mb-6">Gg. Beji, Seminyak, Kec. Kuta, Kabupaten Badung, Bali</p>
      <div className="flex justify-center gap-4 mb-8">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#005a8d] transition-colors cursor-pointer"
            href="#"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-xs">©2026 BomboraWeb</p>
    </footer>
  );
};

export default Footer;
