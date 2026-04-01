import React from 'react';

const TestimonialCard = ({ name, role, initials, text }) => {
  return (
    <div className="min-w-[300px] snap-center bg-white p-6 rounded-xl shadow-sm border border-[#005a8d]/10">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        ))}
      </div>
      <p className="italic text-[#5e7c8d] mb-6">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#005a8d]/20 flex items-center justify-center text-[#005a8d] font-bold">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#101518]">{name}</h4>
          <p className="text-xs text-[#5e7c8d]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
