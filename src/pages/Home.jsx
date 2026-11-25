import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-indigo-600 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">We provide top-notch solutions for your business needs.</p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Get Started</button>
      </section>
      
      {/* Featured Services */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Web Development', 'Mobile Apps', 'UI/UX Design'].map((service, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p className="text-gray-500">High quality solutions for your business.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;