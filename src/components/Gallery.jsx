import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "Spanduk.jpeg",
      alt: "Blue surfboard resting on white sand beach"
    },
    {
          src: "Fishing.jpeg",
      alt: "Aerial view of turquoise Bali ocean"
    },
    {
           src: "Klien.jpeg",
      alt: "Palm trees silhouette at tropical sunset"
    },
    {
           src: "BBQ.jpeg",
      alt: "Beach with crystal clear water in Bali"
    }
  ];

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-10">Capture the Vibe</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="aspect-square rounded-lg overflow-hidden">
            <img 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
       
      </div>
    </section>
  );
};

export default Gallery;
