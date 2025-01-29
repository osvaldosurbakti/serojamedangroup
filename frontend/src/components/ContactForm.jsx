import React from 'react';
import InputField from './InputField'; // Komponen untuk input field

const ContactForm = ({ formData, handleInputChange, handleSubmit, errors = {} }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 gap-4">
        {/* Full Name Field */}
        <InputField
          id="name"
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        
        {/* Email Address Field */}
        <InputField
          id="email"
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        
        {/* Message Field */}
        <div className="space-y-3">
          <label htmlFor="message" className="text-lg font-semibold text-gray-700">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label="Message"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
