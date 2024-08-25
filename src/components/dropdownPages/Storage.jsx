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

// Storage Component
const Storage = () => {
  
const products = [
  
{ title: "Asha Buffet Sideboard Storage Cabinet", price: "£250.00", imageUrl: "https://i.pinimg.com/564x/54/3f/c2/543fc2277ee19b904d27e929148a2ba5.jpg" },
{ title: "LINEAR LOW STORAGE UNIT", price: "£1006.00", imageUrl: "https://i.pinimg.com/564x/d1/d1/31/d1d13126fcfd85e73049d6e023ceb4fc.jpg" },
  { title: "Shelving Unit", price: "£730.00", imageUrl: "https://i.pinimg.com/564x/b2/4b/75/b24b75527987a1819933c345214944a5.jpg" },
  { title: "Rattan TV Unit", price: "£940.00", imageUrl: "https://i.pinimg.com/564x/3a/24/4a/3a244a3dc27428c75a8e936e03ee3cdf.jpg" },
  { title: "White rattan sideboard egg pattern", price: "£680.00", imageUrl: "https://i.pinimg.com/564x/72/be/9f/72be9f7737f139f01d6bcdb4198e98fc.jpg" },
  { title: "Treasures | 2-door Cabinet", price: "£400.00", imageUrl: "https://i.pinimg.com/564x/11/7f/4e/117f4ed27e4639b3c4ee08a3a7e828a1.jpg" },
  { title: "Blaze TV Unit", price: "£150.00", imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchTP/678x904/Q82864.jpg?im=Resize,width=450" },
  { title: "Pavia Natural Rattan Wide Shoe Storage", price: "£780.00", imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchTP/678x904/D86997.jpg?im=Resize,width=450" },
  { title: "FDamien Wide TV Unit", price: "£900.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D87339s.jpg" },
  { title: "Haines TV Unit", price: "£533.00", imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchTP/288x384/D87802.jpg" },
  { title: " Swedish Seven Drawer  ", price: "£999.00", imageUrl: "https://i.pinimg.com/564x/7a/d7/17/7ad71708064e2dedb2a25c0babab2856.jpg" },
  { title: "Modern Dressers & Chests", price: "£200.00", imageUrl: "https://i.pinimg.com/564x/e8/95/ea/e895ea41ba24d2ce7283660dbbb0e63d.jpg" },
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
      className="container mx-auto px-4 py-8 mt-24
"
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

export default Storage;



