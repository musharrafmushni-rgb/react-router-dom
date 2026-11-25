import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" alt="Team" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our History</h2>
          <p className="text-gray-600 mb-4">Founded in 2020, we have been at the forefront of digital innovation...</p>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">To empower businesses with modern technology solutions...</p>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600">To be the leading tech company in the region...</p>
        </div>
      </div>
    </div>
  );
};

export default About;