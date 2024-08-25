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

// Sofa Component
const Sofa = () => {
  const products = [
    { title: "Kooper 2 Seater Sofa", price: "£875", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D60709s.jpg" },
    { title: "Maura Wooden Armchair", price: "£230", imageUrl: "https://i.pinimg.com/564x/54/16/89/541689c11b03c93b8fd2b04b5af5c898.jpg" },
    { title: "The Classic Velvet Armchairs", price:"£300", imageUrl: "https://i.pinimg.com/736x/c9/78/8a/c9788a5fa9891e4392a0b6c1725b54f8.jpg" },
    { title: "Fox Long Sofa", price: "£499", imageUrl: "https://i.pinimg.com/564x/06/ef/58/06ef58a0f60093d48c46c70ba23cd919.jpg" },
    { title: "Everly Sofa", price: "£699", imageUrl: "https://i.pinimg.com/564x/37/22/19/37221997dc8ef974739a02afa03e6b46.jpg" },
    { title: "Safavieh Couture Helena French Mid-Century", price: "£999", imageUrl: "https://i.pinimg.com/736x/d0/b9/f9/d0b9f9fe3caf8db4c2be00fde2714cfe.jpg" },
    { title: "Gray sofa", price: "£555", imageUrl: "https://i.pinimg.com/564x/09/d1/9f/09d19f6bfde2328014ea8f196bc1637f.jpg" },
    { title: "Rattan Wood Chair", price: "£344", imageUrl: "https://i.pinimg.com/564x/14/44/6c/14446ca1eb3f29808126a3af32c119b6.jpg" },
    { title: "Didsbury Armchair", price: "£299", imageUrl: "https://i.pinimg.com/564x/06/e1/4c/06e14cea09ef7cc1f10a19230aa3bf2c.jpg" },
    { title: "Loha Velvet Armchairs", price: "£490", imageUrl: "https://i.pinimg.com/564x/49/5a/cd/495acd41166c03a2dab018d2e22b1b20.jpg" },
    { title: "Alec Medium Universal Corner Sofa", price: "£2,799", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/E01281s.jpg" },
    { title: "Haru 2 Seater Sofa Bed", price: "£575", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/N00113s.jpg" },
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

export default Sofa;




