import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import MainLayout from './components/MainLayout'; // Import the VideoDetail component
import CreateProduct from './components/CreateProduct';
import CreateVideo from './components/CreateVideo';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<MainLayout />} /> {/* Use :id for dynamic parameter */}
      <Route path="/createproduct" element={<CreateProduct />} />
      <Route path="/createvideo" element={<CreateVideo />} />
    </Routes>
   </Router>
  );
}

export default App;
