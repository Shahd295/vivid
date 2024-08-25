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


// Accessories Component
const Accessories = () => {
  const products = [
    { title: "Cormac LED Illuminated Mirror", price: "£245", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/260411s.jpg" },
    { title: "Boho Basket Wall Deco", price: "£45", imageUrl: "https://i.pinimg.com/564x/00/ef/3e/00ef3e28bb809dd2afdc1156e4c91e7b.jpg" },
    { title: "Round Brown Resin Planter", price: "£66", imageUrl: "https://i.pinimg.com/564x/3f/95/0c/3f950c85cb76868308045c7f3da3a0c5.jpg" },
    { title: "Neutral Pillow Set", price: "£122", imageUrl: "https://i.pinimg.com/564x/33/5c/17/335c177c83ad1da710de29b1fa720346.jpg" },
    { title: "Brass Candle Sconce ", price: "£56", imageUrl: "https://i.pinimg.com/564x/72/9d/b8/729db8c814e17f04cc609899b69320e6.jpg" },
    { title: "French Style Mirror", price: "£234", imageUrl: "https://i.pinimg.com/564x/de/bb/bb/debbbb602ec5253bb4763201a65fbeb0.jpg" },
    { title: "KKarlsson Data Flip Iron Wall Clock", price: "£85", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/Q84709s.jpg" },
    { title: "East End Prints Abstract Faces", price: "£80 - £215", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E55662s.jpg" },
    { title: "Anthroliving - Clara Mirror", price: "£133", imageUrl: "https://i.pinimg.com/736x/66/ea/78/66ea78cbbe0c4ba692b1446d11791ff7.jpg" },
    { title: "Ceramic Vases Set", price: "£45", imageUrl: "https://i.pinimg.com/736x/1f/69/ce/1f69ceb849fdba6897b7ede610c3d6f8.jpg" },
    { title: "Renata Mirror", price: "£99", imageUrl: "https://i.pinimg.com/564x/2c/3a/5c/2c3a5ce8b485112ee4dc7064eab01b41.jpg" },
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

export default Accessories;





