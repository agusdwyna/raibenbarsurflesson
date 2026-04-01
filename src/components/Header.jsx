import React from 'react';

const Header = () => {
  const phoneNumber = "6281338422275";
const message = "Halo Raiben Bar Surf Lesson, saya ingin booking lesson.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
 <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#005a8d]/10 h-20">
  <div className="relative flex items-center justify-between px-4 max-w-7xl mx-auto h-full">
    
    {/* Logo + Nama usaha */}
    <div className="flex items-center gap-3">
      <div className="relative">
        <img
          src="/logo.png"
          alt="Raiben Bar Surf Lesson Logo"
          className="w-24 h-24 object-contain" // bisa diperbesar tanpa memengaruhi tinggi header
        />
      </div>
      <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-tight">
        Raiben Bar Surf Lesson
      </h2>
    </div>

    {/* WhatsApp Button */}
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#005a8d] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-[#005a8d]/20 hover:bg-[#004670] transition-colors"
    >
      Book
    </a>
  </div>
</header>
  );
};

export default Header;
