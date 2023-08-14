import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <nav className="bg-gray-900 py-4 px-4 text-white sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Tokopedia Play</h1>
        <div className="ml-auto flex space-x-4">
          <Link
            to="/createproduct"
            className="px-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
            Create Product
          </Link>
          <Link
            to="/createvideo"
            className="px-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
            Create Video
          </Link>
        </div>
        <div className="ml-4 flex mt-0 h-9 rounded-lg focus-within:shadow-lg bg-gray-400 overflow-hidden mr-4"> {/* Added mr-4 for margin */}
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 bg-gray-400 placeholder-gray-500 text-white-100 focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
