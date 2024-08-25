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

// Tables Component
const Tables = () => {
  
const products = [
  { title: "Bamboo Glass Top Side Table", price: "£140.00", imageUrl: "https://i.pinimg.com/564x/1f/0b/01/1f0b01266074642d241538cd7ab7202d.jpg" },
  { title: "Dining Wood Table", price: "£200.00", imageUrl: "https://i.pinimg.com/564x/7b/ae/39/7bae39f51ff90cf65c15d39543dee148.jpg" },
  { title: "Umi Coffee table", price: "£430.00", imageUrl: "https://i.pinimg.com/564x/07/ef/da/07efdac31087037c8a4958ecae612633.jpg" },
  { title: "Tectona Teak Coffee Table", price: "£240.00", imageUrl: "https://i.pinimg.com/564x/9c/b4/dd/9cb4dd2a422fb30b5ccaa79c23dc973d.jpg" },
  { title: "Rattan and Glass Round Side Table", price: "£180.00", imageUrl: "https://i.pinimg.com/736x/45/5f/1e/455f1e6cd5b500fe0d12eb1a072cd035.jpg" },
  { title: "Portola Hills Woven Accent Table", price: "£300.00", imageUrl: "https://i.pinimg.com/564x/b3/e5/c8/b3e5c8bd7454e1ea30a36a24ffc1b3f6.jpg" },
  { title: "Estelle Gold Metal set tables", price: "£150.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/0x0/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/1/3/1374223_5.jpg" },
  { title: "Kinship Rattan Teal Blue Desk & Dressing Table", price: "£780.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/384x512/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/1/4/1469677_2_1.jpg" },
  { title: "Fiore Luxe Marble Side Nest of Tables Set of Two", price: "£90.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/384x512/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/1/2/1287196_2.jpg" },
  { title: "Haku 6 Seater Rectangle Dining Table", price: "£785.00", imageUrl: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchTP/678x904/D87792.jpg?im=Resize,width=450" },
  { title: "Zaragoza 4 Seat Dining Table", price: "£999.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/U11327s.jpg" },
  { title: "Luca Rattan Coffee Table", price: "£200.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/U74499s.jpg" },
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

export default Tables;
