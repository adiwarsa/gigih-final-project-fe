import React from 'react';

const ProductCard = ({ title, price, qty, description, imageSrc, link}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
    <img className="w-full" src={imageSrc} alt={title} />
    <div className="mt-2">
      <div className="font-bold text-lg mb-1">{title}</div>
      <p className="text-gray-700 text-base">Rp. {price}</p>
      <p className="text-gray-700 text-base">Qty: {qty}</p>
      <p className="text-gray-500 text-base">{description}</p>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block text-center"
    >
      Buy
    </a>
  </div>
);

export default ProductCard;
