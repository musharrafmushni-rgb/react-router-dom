import React from 'react';

const Services = () => {
  const services = [
    { name: "Web Development", desc: "Custom websites built with modern tech.", icon: "fa-code" },
    { name: "Mobile Apps", desc: "iOS and Android applications.", icon: "fa-mobile-screen" },
    { name: "UI/UX Design", desc: "Beautiful and functional designs.", icon: "fa-pen-nib" },
    { name: "Cloud Solutions", desc: "Secure and scalable cloud infrastructure.", icon: "fa-cloud" },
    { name: "SEO Optimization", desc: "Rank higher on search engines.", icon: "fa-magnifying-glass-chart" },
    { name: "IT Consulting", desc: "Expert advice for your tech needs.", icon: "fa-lightbulb" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className={`fa-solid ${service.icon}`}></i>
            </div>
            <h3 className="text-xl font-bold text-center mb-2">{service.name}</h3>
            <p className="text-gray-500 text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;