import React from "react";
import { GiFishingBoat } from "react-icons/gi"; // Icon untuk fishing
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="px-6 py-16 max-w-3xl mx-auto space-y-8">
      {/* Surfing cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ServiceCard
          layout="image"
          title="Beginner Class"
          subtitle="Perfect for first-timers. Safety briefing and basic techniques included."
          price="300k"
          unit="/hour"
          img="intermediate.jpeg"
          label="Includes Photos"
         
        />
        <ServiceCard
          layout="image"
          title="Intermediate"
          subtitle="Master the line-up and improve your turns with local experts."
          price="400k"
          unit="/hour"
          img="beginner.jpeg"
          label="Includes Photos"
          
        />
      </div>

      {/* Add-ons */}
      <ServiceCard
        layout="list"
        title="Board Rental"
        subtitle="Premium short & longboards"
        price="100k"
        unit="/2 hours"
        borderColor="border-blue-500"
    
      />
      <ServiceCard
        layout="list"
        title="Sun Bed"
        subtitle="Premium beachside comfort"
        price="200k"
        unit="/day"
        borderColor="border-amber-500"
      
      />

      {/* Fishing Trip */}
      <ServiceCard
        layout="fishing"
        title="Fishing Trip"
        subtitle="Full day exploration on our private boat. Includes tackle and refreshments."
        price="IDR 3.000.000"
        unit="for 6 hours"
     bgColor="bg-[#f0e8dc]" 
        textColor="text-[#af500c]"
        buttonColor="bg-[#af500c]"
        icon={<GiFishingBoat size={24} />}
      />
    </section>
  );
};

export default Services;