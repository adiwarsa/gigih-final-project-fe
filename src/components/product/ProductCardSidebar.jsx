import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductCardSidebar = ({ productData }) => (
  <div className="w-64 bg-gray-800 p-2">
    <div className="mx-3 space-y-4 overflow-y-scroll max-h-[calc(100vh-5rem)] scrollbar-hide">
    <Link
            to="/"
            className="mx-3 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </Link>
      {Array.isArray(productData) ? (
        productData.map((product) => (
          <ProductCard
            key={product.productId}
            title={product.title}
            price={product.price}
            imageSrc={product.img}
            link={product.link}
            qty={product.qty}
            description={product.description}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  </div>
);

export default ProductCardSidebar;
