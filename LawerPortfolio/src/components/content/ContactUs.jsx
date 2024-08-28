import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    contactNumber: '', // Added contact number field
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          contactNumber: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-navy text-white py-16 px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-300">
          Contact Us
        </h2>
        <div className="flex flex-wrap justify-between">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-4">
            <form className="bg-white p-6 rounded-lg shadow-md text-black" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
                <input 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="firstName" 
                  name="firstName" 
                  type="text" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
                <input 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="lastName" 
                  name="lastName" 
                  type="text" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="organization">Organization</label>
                <input 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="organization" 
                  name="organization" 
                  type="text" 
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="contactNumber">Contact Number</label>
                <input 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="contactNumber" 
                  name="contactNumber" 
                  type="text" 
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow" 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message" 
                  rows="4"
                ></textarea>
              </div>
              <button className="bg-navy text-yellow px-6 py-2 rounded-md hover:bg-yellow hover:text-navy transition duration-300">Send Message</button>
            </form>
          </div>
          {/* Contact Details and Map */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-white text-black p-6 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">Our Office</h3>
              <p className="mb-2">123 Lawyer Street, City, Country</p>
              <p className="mb-2">Phone: +123 456 789</p>
              <p className="mb-2">Email: info@lawyerportfolio.com</p>
            </div>
            <div className="h-[385px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345087445!2d144.9537363153159!3d-37.81627927975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d04a9cd1c4b4!2sVictoria%20Law%20Courts!5e0!3m2!1sen!2sau!4v1617007030112!5m2!1sen!2sau"
                className="w-full h-full rounded-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
