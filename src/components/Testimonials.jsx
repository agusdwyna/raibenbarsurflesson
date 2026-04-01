import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Miller",
      role: "Beginner Student",
      initials: "SM",
      text: "Standing up on my very first wave was an incredible feeling. The instructors are so patient!"
    },
    {
      name: "James Harrison",
      role: "Retreat Guest",
      initials: "JH",
      text: "Best week of my life. The villa was stunning and the surf spots were perfectly chosen for our level."
    },
    {
      name: "Anna Lopez",
      role: "Intermediate Student",
      initials: "AL",
      text: "My bottom turn improved so much in just three sessions. Definitely coming back next year!"
    }
  ];

  return (
    <section className="py-16 bg-[#005a8d]/5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12">What Our Surfers Say</h2>
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
