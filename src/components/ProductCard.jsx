import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
      
      {/* Product Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
          <i className="fa-solid fa-star text-yellow-400"></i>
          {product.rating}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">{product.category}</span>
        <h3 className="text-lg font-bold text-gray-800 mb-1 truncate">{product.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{product.brand || "Generic"}</p>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{product.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <span className={`text-xs px-2 py-1 rounded ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;