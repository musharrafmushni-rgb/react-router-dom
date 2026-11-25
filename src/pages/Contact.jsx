import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Phone:</strong> +94 77 123 4567</p>
          <p className="mb-2"><strong>Email:</strong> info@company.com</p>
          <p className="mb-2"><strong>Address:</strong> Colombo, Sri Lanka</p>
        </div>
        {/* Contact Form */}
        <form className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" rows="4" className="w-full border p-2 rounded"></textarea>
          <button type="button" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;