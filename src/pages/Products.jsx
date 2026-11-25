import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { fetchProducts } from '../services/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect runs once when component mounts
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []); // Empty dependency array = Runs only once

  // 1. Loading State
  if (loading) {
    return <Loader />;
  }

  // 2. Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="bg-red-100 text-red-700 p-6 rounded-xl shadow-md text-center">
          <i className="fa-solid fa-triangle-exclamation text-3xl mb-2"></i>
          <p className="font-bold text-lg">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // 3. Success State (Display Products)
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Product Catalog</h1>
          <p className="text-gray-500">Browse our latest products from the API</p>
        </div>

        {/* Responsive Grid: 1 card on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;