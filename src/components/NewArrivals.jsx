import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for additional animations
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import icons

const NewArrivals = () => {
  const productsRef = useRef(null);
  const [isVisible, setIsVisible] = useState([]);

  // Example products array
  const products = [
    {
    
      name: 'Bedside Table',
      price: '£110.00',
      imageUrl: 'https://i.pinimg.com/564x/0b/fd/d8/0bfdd8956681a0e92ed1bdf74e46ed93.jpg',
    },
    {
   
      name: 'Book Magazine Holder',
      price: '£89',
      imageUrl: 'https://i.pinimg.com/564x/29/fc/f9/29fcf9b22183b67dad68dd556e6ef06f.jpg',
    },
    {

      name: 'Shayd Table Lamp, Sand',
      price: '£122',
      imageUrl: 'https://i.pinimg.com/564x/05/db/ca/05dbcafe28ecbffad5eaad94eb8ecad4.jpg',
    },
    {
    
      name: 'Springdell Rounded Bench Cream Faux',
      price: '£330',
      imageUrl: 'https://i.pinimg.com/564x/24/85/3f/24853f1bc69c12312eac296272884fa6.jpg',
    },
    {
    
      name: 'Bamboo Chandelier Retro',
      price: '£270',
      imageUrl: 'https://i.pinimg.com/564x/85/c5/48/85c5489cf5bc11520eb14d73ed251a87.jpg',
    },
    {
    
      name: 'Velvet, Leather & Linen Armchairs',
      price: '£560',
      imageUrl: 'https://i.pinimg.com/564x/25/fb/08/25fb08081b09e6cf6de828f9932b4ddc.jpg',
    },
    {
    
      name: 'Pink Mango Wood Desk & Dressing Table',
      price: '£700',
      imageUrl: 'https://i.pinimg.com/564x/5f/78/b4/5f78b4238402b13c61b4965254b44948.jpg',
    },
     {
    
      name: 'Tulip Chair',
      price: '£265',
      imageUrl: 'https://i.pinimg.com/564x/93/f1/b0/93f1b076eefaafa19408a3404c4bfce8.jpg',
    },
  ];

  const scrollLeft = () => {
    productsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    productsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Function to handle the scroll animation
  const handleScroll = () => {
    const elements = document.querySelectorAll('.product-item');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    elements.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top + scrollTop;
      const windowHeight = window.innerHeight;
      
      if (elementTop < scrollTop + windowHeight && elementTop + element.offsetHeight > scrollTop) {
        setIsVisible(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      } else {
        setIsVisible(prev => {
          const updated = [...prev];
          updated[index] = false;
          return updated;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger it on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-white min-h-screen flex flex-col items-center animate-fadeIn">
      {/* Header */}
      <motion.div
        className="text-center mt-8 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          FRESH <span className=" s-title font-sans italic  font-light">Finds</span> UNVEILING <br />
          New <span  className="  s-title font-sans italic font-light">Arrivals</span>
        </h1>
      </motion.div>

      {/* Products Section */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden lg:flex text-gray-800 hover:text-gray-600 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 ml-16"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Products Carousel */}
        <div
          ref={productsRef}
          className="flex overflow-x-auto space-x-8 p-4 w-4/5 lg:w-3/4 custom-scrollbar-hide"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative flex-shrink-0 w-72 h-96 bg-gray-200 flex flex-col items-center justify-between p-4 product-item transition-transform duration-500 ease-in-out ${isVisible[index] ? 'scale-105 opacity-100' : 'scale-95 opacity-50'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible[index] ? 1 : 0.5, scale: isVisible[index] ? 1.05 : 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110" />
              
              {/* Icons Container */}
              <div className="absolute inset-0 flex items-center justify-center group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                      <FaSearch className="text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                      <FaHeart className="text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                      <FaShoppingCart className="text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              <h2 className="mt-2 text-center text-base ">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden lg:flex text-gray-800 hover:text-gray-600 absolute right-4 top-1/2 transform -translate-y-1/2 z-10 mr-14"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
