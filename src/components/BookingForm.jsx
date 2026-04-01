
import WhatsAppButton from './WhatsAppButton';

const BookingForm = () => {

   
  return (
    <section className="py-16 px-4 bg-white border-t border-[#005a8d]/5">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Surf?</h2>
          <p className="text-[#5e7c8d]">Book your lesson today and get ready for the ride of your life.</p>
        </div>
        <div className="mt-8 pt-8 border-t border-dashed border-[#005a8d]/20 text-center">
          <p className="text-sm font-medium text-[#5e7c8d] mb-4">Quick questions? Reach us directly</p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
