import WhatsAppButton from './WhatsAppButton';

const BookingForm = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-[#005a8d]/5">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Surf?</h2>
          <p className="text-[#5e7c8d]">Book your lesson today and get ready for the ride of your life.</p>
        </div>

            {/* Google Map */}
        <div className="mt-12 w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13654.744866525663!2d115.14741845096341!3d-8.690453163039587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247006d717539%3A0x86eb56313e950d34!2sRaiben%20Bar%20Surf%20Lesson!5e0!3m2!1sid!2sid!4v1775033865522!5m2!1sid!2sid"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Raiben Bar Surf Lesson Location"
          ></iframe>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-8 pt-8 border-t border-dashed border-[#005a8d]/20 text-center">
          <p className="text-sm font-medium text-[#5e7c8d] mb-4">Quick questions? Reach us directly</p>
          <WhatsAppButton />
        </div>

     
     
       
      </div>

     
    </section>




  );
};

export default BookingForm;