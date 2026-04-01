import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsapp';

const BaliSurfSchool = () => {
  return (
    <div className="bg-[#f5f7f8] text-[#101518] min-h-screen font-['Plus_Jakarta_Sans']">
      <Header />
      git add .
git commit -m "update tampilan dan fix gambar"
git push
      <main className="pt-14">
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <BookingForm />
        <Footer />
      </main>

      <FloatingWhatsApp />

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default BaliSurfSchool;
