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

// Lighting Component
const Lighting = () => {
  const products = [
    { title: "Albert Flush Ceiling Light", price: "£250.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/196370s3.jpg" },
    { title: "Espiral Rattan Pendant Lampshade", price: "£106.00", imageUrl: "https://i.pinimg.com/564x/93/8b/25/938b25a388a902db835d302610e89b8c.jpg" },
    { title: "Mobo Ceramic Wall Lamps", price: "£80.00", imageUrl: "https://i.pinimg.com/564x/1f/16/38/1f1638ddae94224a0423f15c0fd189fb.jpg" },
    { title: "Adrianne Linear Pendant Light", price: "£240.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/879733s.jpg" },
    { title: "Eliya Wall Light", price: "£200.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/610065s.jpg" },
    { title: "Java Arc Overreach Floor Lamp", price: "£300.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D78415s.jpg" },
    { title: "Oro Layered Pendant Shade", price: "£150.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D78411s.jpg" },
    { title: "Weaver Pendant Shade", price: "£180.00", imageUrl: "https://cdn.platform.next/common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D78426s3.jpg" },
    { title: "Chicago Wall Lamp", price: "£90.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D78433s.jpg" },
    { title: "Inara Brown Swirl Glass Desk & Table Lamp", price: "£75.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/0x0/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/1/7/1795899_1.jpg" },
    { title: "Isia Bathroom Flush Light", price: "£120.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/N55328s.jpg" },
    { title: "Seppo Ceiling Light", price: "£200.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/D86938s.jpg" },
    { title: "Stella Floor Light", price: "£200.00", imageUrl: "https://cdn.platform.next/Common/Items/Default/Default/ItemImages/3_4Ratio/AltItemShot/366x488/600865s.jpg" },
    { title: "Vintage Handmade Chandelier", price: "£360.00", imageUrl: "https://i.pinimg.com/564x/7e/35/08/7e3508b75ece4a9b1648536a5d3e10a0.jpg" },
    { title: "Pendant Light Retro", price: "£95.00", imageUrl: "https://decorabox.com/cdn/shop/files/S842d1ba52343454084ecedf7eaa8c370k.webp?v=1724417405" },
    { title: "Alma White Boucle", price: "£110.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/640x800/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/1/8/1808438_1.jpg" },
    { title: "Novogratz Cream Ellis", price: "£130.00", imageUrl: "https://i.pinimg.com/564x/44/df/25/44df25a869832a34646194f4c999aa79.jpg" },
    { title: "Nordic LED Hanging Lamps", price: "£140.00", imageUrl: "https://decorabox.com/cdn/shop/files/S9780c246e66b4c49b3c8e3e0bfad3ee54.webp?v=1724417870" },
    { title: "White Boucle Floor Lamp", price: "£160.00", imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/640x800/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/t/r/triple_shade_lamp_391.jpg" },
    { title: "Handmade Straw Hat Pendant", price: "£180.00", imageUrl: "https://i.pinimg.com/564x/9b/0a/65/9b0a6504de1d528439483c997f668eb5.jpg" },
    { title: "Exquisite Glass Wall Light", price: "£50.00", imageUrl: "https://i.pinimg.com/564x/ef/0b/c4/ef0bc47a1369f900e7f7a0411840f3d3.jpg" },
    { title: "Brass Wooden Ceiling Lamp", price: "£220.00", imageUrl: "https://i.pinimg.com/564x/73/5d/14/735d148d0810da2651685739a5eeccf2.jpg" },
    { title: "Glass Hibiscus Flower Light", price: "£240.00", imageUrl: "https://i.pinimg.com/564x/43/6b/74/436b74f49c7f6db42d612970c19385af.jpg" },
    { title: "Bamboo Wicker Rattan Calabash", price: "£260.00", imageUrl: "https://i.pinimg.com/564x/2f/5d/64/2f5d6464baa9e34850a594b9a7df19f8.jpg" },
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

export default Lighting;
