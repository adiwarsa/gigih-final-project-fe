import React, { useState } from 'react';
import Container from './Container';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productQty, setProductQty] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productLink, setProductLink] = useState('');
  const [productImg, setProductImg] = useState('');
  const [description, setDescription] = useState('');
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const handleCreateProduct = async () => {
    const newProduct = {
      productName,
      productQty,
      productPrice,
      productLink,
      productImg,
      description,
    };

    try {
      const response = await axios.post('https://gigih-api-production.up.railway.app/api/products', newProduct);
      console.log('New product created:', response.data);
      setSuccessPopupVisible(true); // Show the success popup
      setProductName('');
      setProductQty('');
      setProductPrice('');
      setProductLink('');
      setProductImg('');
      setDescription('');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Container>
      <Link
              to="/"
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Back
            </Link>
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Create New Product</h2>
          <form className="grid grid-cols-2 gap-4">
            <input
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <input
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="number"
              placeholder="Product Quantity"
              value={productQty}
              onChange={(e) => setProductQty(e.target.value)}
            />
            <input
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="number"
              placeholder="Product Price"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            <input
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="Product Link"
              value={productLink}
              onChange={(e) => setProductLink(e.target.value)}
            />
            <input
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              type="text"
              placeholder="Product Image"
              value={productImg}
              onChange={(e) => setProductImg(e.target.value)}
            />
            <textarea
              className="col-span-2 appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleCreateProduct}
            >
              Create Product
            </button>
          </form>
        </div>
        {successPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2 text-black">Product Added Successfully</h2>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setSuccessPopupVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CreateProduct;
