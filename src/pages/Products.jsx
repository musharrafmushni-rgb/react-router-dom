import React from 'react';

const Products = () => {
  // Generate 12 dummy products
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 10000) + 1000,
    rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 to 5.0
    image: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop`
  }));

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-gray-800 truncate">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-indigo-600 font-bold">Rs. {product.price}</span>
                <span className="text-yellow-500 text-sm"><i className="fa-solid fa-star"></i> {product.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;