import React from 'react';
import { FaParking, FaToilet, FaShower, FaFire, FaBeer } from 'react-icons/fa';

const Hero = () => {
  const phoneNumber = "6288219334268";
  const message = "Halo Surf Lesson Tamoco Bali, saya ingin booking lesson.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero.jpeg)' }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Konten Hero */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 gap-6 z-10">
        <h1 className="text-white text-5xl font-extrabold leading-[1.1] tracking-tight max-w-md">
          Explore the waves of Bali with us!
        </h1>
        <p className="text-white/90 text-lg font-medium max-w-sm">
          The best surf lessons in Bali. Learn from local pros in the heart of the tropics.
        </p>

        {/* Info kecil */}
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-white/90 text-sm font-medium">
          <div className="flex items-center gap-2"><FaParking /> Free Parking</div>
          <div className="flex items-center gap-2"><FaToilet /> Toilet</div>
          <div className="flex items-center gap-2"><FaShower /> Shower</div>
          <div className="flex items-center gap-2"><FaFire /> Available for BBQ</div>
          <div className="flex items-center gap-2"><FaBeer /> Cool Beer</div>
        </div>

        {/* Tombol */}
        <div className="flex flex-col w-full gap-3 mt-6 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe5c] text-white h-14 px-8 rounded-full text-lg font-bold shadow-xl flex items-center justify-center gap-2 transition-colors"
          >
            Book Now
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </a>

          <a
            href="#service"
            className="bg-white/20 backdrop-blur-md text-white h-14 px-8 rounded-full text-lg font-bold border border-white/30 hover:bg-white/30 transition-colors flex items-center justify-center"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;