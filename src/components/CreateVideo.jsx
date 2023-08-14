import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Container from './Container';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateVideo = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [urlThumbnail, setUrlThumbnail] = useState('');
    const [productId, setProductId] = useState('');
    const [selectedProductIds, setSelectedProductIds] = useState([]);
    const [successPopupVisible, setSuccessPopupVisible] = useState(false);
    const [products, setProducts] = useState([]);
  
    // Fetch the list of products from the API
    useEffect(() => {
        // Fetch products from API and set them in the state
        axios.get('https://gigih-api-production.up.railway.app/api/products')
          .then((response) => {
            setProducts(response.data);
            console.log(response.data); // Assuming the API response is an array of products
        })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      }, []); 
  
    const handleCreateVideo = async () => {
      const newVideo = {
        title,
        link,
        urlThumbnail,
        productId: selectedProductIds,
      };
  
      try {
        const response = await axios.post('https://gigih-api-production.up.railway.app/api/videos/create', newVideo);
        console.log('New video created:', response.data);
        setSuccessPopupVisible(true); // Show the success popup
        setTitle('');
        setLink('');
        setUrlThumbnail('');
        setProductId('');
      } catch (error) {
        console.error('Error creating video:', error);
      }
    };
    const toggleProductId = (productId) => {
        if (selectedProductIds.includes(productId)) {
          setSelectedProductIds(selectedProductIds.filter(id => id !== productId)); // Remove from selection
        } else {
          setSelectedProductIds([...selectedProductIds, productId]); // Add to selection
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
            <h2 className="text-2xl font-semibold mb-4">Create New Video</h2>
            <form>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                type="text"
                placeholder="Video Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                type="text"
                placeholder="Thumbnail URL"
                value={urlThumbnail}
                onChange={(e) => setUrlThumbnail(e.target.value)}
              />
               <div className="my-4">
                <label className="block font-semibold mb-2">Select Products:</label>
                {Array.isArray(products.product) ? (
                    products.product.map((product) => (
                    <div key={product._id}>
                        <label className="flex items-center">
                        <input
                            type="checkbox"
                            value={product.productId}
                            checked={selectedProductIds.includes(product.productId)} // Check if product ID is in the selected array
                            onChange={() => toggleProductId(product.productId)} // Call toggleProductId when checkbox is clicked
                            className="mr-2"
                        />
                        {product.productName}
                        </label>
                    </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
                </div>

              <button
                className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleCreateVideo}
              >
                Create Video
              </button>
            </form>
          </div>
          {/* Success Popup */}
          {successPopupVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2 text-black">Video Added Successfully</h2>
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
  
  export default CreateVideo;
  