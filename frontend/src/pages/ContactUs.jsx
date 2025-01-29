// src/pages/ContactUs.jsx
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';
import SectionTitle from '../components/SectionTitle';
import MapSection from '../components/MapSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-8 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white p-10 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Section Title */}
        <div className="md:col-span-2">
          <SectionTitle 
            title="Get in Touch" 
            description="We'd love to hear from you! Whether you have questions, feedback, or business inquiries, feel free to reach out to us using the form below." 
          />
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <ContactForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>

        {/* Contact Details */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <ContactDetails />
        </div>
      </div>

      {/* Map Section */}
      <MapSection />
    </section>
  );
};

export default ContactUs;
