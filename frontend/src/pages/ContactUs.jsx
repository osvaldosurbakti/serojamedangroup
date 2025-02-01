// src/pages/ContactUs.jsx
import React from 'react';
import ContactDetails from '../components/ContactDetails';
import SectionTitle from '../components/SectionTitle';
import MapSection from '../components/MapSection';

const ContactUs = () => {
  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Section Title */}
        <div className="md:col-span-2 mb-8">
          <SectionTitle 
            title="Get in Touch" 
            description="We'd love to hear from you! Whether you have questions, feedback, or business inquiries, feel free to reach out to us using the form below." 
          />
                 <div className="bg-white p-8 rounded-lg shadow-md">
          <ContactDetails />
        </div>
        </div>

        {/* Contact Details Section */}
 
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto my-10">
        <MapSection />
      </div>
    </section>
  );
};

export default ContactUs;
