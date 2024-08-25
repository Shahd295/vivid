import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaSearch, FaThLarge, FaTh, FaThList } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// ProductCard Component
const ProductCard = ({ product, layout }) => (
  <motion.div
    className={`relative group ${layout === 'list' ? 'flex items-center' : ''}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div
      className={`relative overflow-hidden rounded-lg ${layout === 'list' ? 'w-80' : 'w-full'}`}
      style={{ height: '300px' }} // Fixed height for consistency
    >
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-500"></div>
      <div className={`absolute ${layout === 'list' ? 'bottom-4 right-4' : 'bottom-4 left-1/2 transform -translate-x-1/2'} flex space-x-4 opacity-0 group-hover:opacity-100 transition duration-500`}>
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
          <FaSearch className="text-gray-700" />
        </button>
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
          <FaHeart className="text-gray-700" />
        </button>
        <button className="bg-white p-3 rounded-full shadow hover:bg-gray-200">
          <FaShoppingCart className="text-gray-700" />
        </button>
      </div>
    </div>
    <div className={`${layout === 'list' ? 'ml-6' : 'mt-4 text-center'}`}>
      <h3 className={`text-sm ${layout === 'list' ? 'text-left' : ''}`}>{product.title}</h3>
      <p className={`text-xs text-gray-500 ${layout === 'list' ? 'text-left' : ''}`}>{product.price}</p>
    </div>
  </motion.div>
);

// Bedrooms Component
const Bedrooms = () => { 
  const products = [
    { title: "", price: "£499 - £550", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q91620s.jpg" },
    { title: "Ankhara Double Wardrobe", price: "£1,199", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/371886s.jpg" },
    { title: "Blaze Wardrobe", price: "£559", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q82801s.jpg" },
    { title: "Jasper Conran Drawer Bedside ", price:"£299", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/C62291s.jpg" },
    { title: "Odie Bedside Table", price: "£299", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87844s.jpg" },
    { title: "Odie Console Dressing Table", price: "£699", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87781s.jpg" },
    { title: "Sawyer Bed", price: "£599 - £699", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/400700s.jpg" },
    { title: "Tacoma Bed", price: "£1,000 - £1,200", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/942401s.jpg" },
    { title: "Penn Bed", price: "£849", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q88529s.jpg" },
    { title: "Ankhara Bedside", price: "£249", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/747071s.jpg" },
    { title: "Ankhara Chest of Drawers", price: "£799", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/448702s.jpg" },
    { title: "Damien Wardrobe", price: "£849", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q90865s.jpg" },
    { title: "Damien Walnut Effect Chest of Drawers", price: "£329", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87302s.jpg" },
    { title: "Damien Wardrobe", price: "£894", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q90866s.jpg" },
    { title: "Pavia Natural Rattan Double Wardrobe", price: "£499", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D86985s.jpg" },
    { title: "Damien Wardrobe", price: "£429", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87332s.jpg" },
    { title: "Damien Bedside Table", price: "£189", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87300s.jpg" },
    { title: "Kano Platform Storage Bed", price: "£599 - £799", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/150361s.jpg" },
    { title: "The One Essential Mattress", price: "£299 - £549", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/580981s.jpg" },
  ];

  const [layout, setLayout] = useState('grid4');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top when page changes
  };

  const getGridClasses = () => {
    switch (layout) {
      case 'grid3':
        return 'grid-cols-1 sm:grid-cols-3';
      case 'list':
        return 'grid-cols-1';
      default:
        return 'grid-cols-1 sm:grid-cols-4';
    }
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top when the component mounts
  }, []);

  return (
    <motion.div
      className="container mx-auto px-4 py-8 mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Layout Buttons */}
      <div className="flex justify-end mb-6 space-x-4 hidden sm:flex">
        <button
          className={`p-2 rounded-full ${layout === 'grid4' ? 'bg-red-900 text-white' : 'bg-white text-gray-900'} shadow-md`}
          onClick={() => setLayout('grid4')}
        >
          <FaThLarge size={20} />
        </button>
        <button
          className={`p-2 rounded-full ${layout === 'grid3' ? 'bg-red-900 text-white' : 'bg-white text-gray-900'} shadow-md`}
          onClick={() => setLayout('grid3')}
        >
          <FaTh size={20} />
        </button>
        <button
          className={`p-2 rounded-full ${layout === 'list' ? 'bg-red-900 text-white' : 'bg-white text-gray-900'} shadow-md`}
          onClick={() => setLayout('list')}
        >
          <FaThList size={20} />
        </button>
      </div>

      {/* Product Grid */}
      <AnimatePresence>
        <motion.div
          key={layout}
          className={`grid gap-6 ${getGridClasses()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {paginatedProducts.map((product, index) => (
            <ProductCard key={index} product={product} layout={layout} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md mx-1 ${currentPage === i + 1 ? 'bg-red-900 text-white' : 'bg-gray-200'}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Bedrooms;






    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: " ", price:"£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },
    // { title: "", price: "£", imageUrl: "" },