import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa'; 

// ShopSection component
const ShopSection = () => {
  const items = [
    {
      title: "Custom Woodwork",
      subtitle: "Up to 25% off",
      imageUrl: "https://plus.unsplash.com/premium_photo-1661778812498-d56d7f09d1fd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cols: "col-span-12 md:col-span-6",
    },
    {
      title: "TV Cabinet",
      subtitle: "Shop Now",
      imageUrl: "https://www.oliverbonas.com/tco-images/unsafe/640x800/filters:upscale():fill(white)/https://www.oliverbonas.com/static/media/catalog/product/r/a/rattan_furniture_10_1_1.jpg",
      cols: "col-span-6 md:col-span-3",
    },
    {
      title: "Rattan Chair",
      subtitle: "Gift for $50",
      imageUrl: "https://i.pinimg.com/564x/6c/75/c6/6c75c6243cdb59867562d07b84a062bb.jpg",
      cols: "col-span-6 md:col-span-3",
    },
    {
      title: "Offer Sale in Next 10 Days",
      subtitle: "Save up to 70% Interior",
      imageUrl: "https://img.freepik.com/premium-photo/empty-wood-table-top-blurred-white-wall-garden-background-with-green-leaves-generative-ai_546189-3687.jpg?w=900",
      cols: "col-span-12",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 mt-12 mb-24 mx-5">
      {items.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className={`${item.cols} relative rounded-lg overflow-hidden shadow-lg hover:animate-slowVibrate`}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
            <h3 className="text-white text-base sm:text-lg font-semibold">{item.title}</h3>
            <p className="text-stone-200 text-xs sm:text-sm mt-1 sm:mt-2">{item.subtitle}</p>
          </div>
        </div>
      ))}

      <div
        className={`${items[3].cols} relative rounded-lg overflow-hidden shadow-lg hover:animate-slowVibrate`}
      >
        <img
          src={items[3].imageUrl}
          alt={items[3].title}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10 transition duration-500"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
          <h3 className="text-white text-base sm:text-lg font-semibold">{items[3].title}</h3>
          <p className="text-stone-200 text-xs sm:text-sm mt-1 sm:mt-2">{items[3].subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// PromoCards component
const PromoCards = () => {
  const items = [
    {
      title: "DESIGN YOUR HOME",
      subtitle: "35% off on selected",
      imageUrl: "https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "CLASSIC SIDEBOARD",
      subtitle: "20% off quick delivery",
      imageUrl: "https://i.pinimg.com/564x/4c/d9/76/4cd97661273ecf37272d2559ec4d3106.jpg",
    },
    {
      title: "TOP PICKS",
      subtitle: "Every Shade of You",
      imageUrl: "https://i.pinimg.com/564x/8a/6a/45/8a6a45445bc7e94d34411a80b01aa37e.jpg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12 mb-24 m-5">
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 ${item.bgColor}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-30 hover:opacity-10 transition duration-500"></div>
          <div className="relative z-10 flex flex-col justify-end p-6">
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-stone-200 text-sm mt-2">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ProductSection component
const ProductSection = () => {
  const products = [
    {
      title: "SIDE TABLE",
      price: "$95.00",
      oldPrice: "$100.00",
      discount: "-5%",
      imageUrl: "https://i.pinimg.com/564x/93/d4/43/93d443a124fa2273d0f8f99b5b6a17c7.jpg",
    },
    {
      title: "CEILING LIGHTS",
      price: "$89.00",
      oldPrice: "$99.00",
      discount: "-10%",
      imageUrl: "https://i.pinimg.com/564x/2d/fd/49/2dfd49f06d3bc6f7abc7bc3e8f094da7.jpg",
    },
    {
      title: "WOODEN BOOKCASE",
      price: "$90.00",
      oldPrice: "$150.00",
      discount: "-40%",
      imageUrl: "https://i.pinimg.com/564x/84/bd/ac/84bdac9e0833cf23c40aa1152a4f1766.jpg",
    },
    {
      title: "RATTAN BASKET",
      price: "$40.00 - $50.00",
      imageUrl: "https://i.pinimg.com/564x/31/11/9a/31119a3f493fafd3951b1a763d91dae4.jpg",
    },
  ];

  return (
    <div className="my-12 mx-4 mb-24">
      {/* Header for the Product Section */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">New Arrivals</h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden group transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              {product.discount && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </div>
              )}
              {/* Hover Options */}
              <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-white text-black p-2 rounded-full shadow-md"
                >
                  <FaHeart /> {/* Favorite Icon */}
                </button>
                <button
                  className="bg-white text-black p-2 rounded-full shadow-md"
                >
                  <FaShoppingCart /> {/* Add to Cart Icon */}
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-base font-mono">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-800">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Carousel component and Index component
const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Blue Velvet Armchair',
      description: 'Boasting an elegantly curved silhouette with rich rubberwood, the Loha Armchair.',
      price: '$40.09',
      designer: 'By: Luha Azure',
      imageUrl: '../public/UsedPics/Loha_Azure_Blue_Velvet___Rattan_Armchair-removebg-preview.png',
    },
    {
      title: 'Bedside Table',
      description: 'A sleek, modern design for a comfortable experience.',
      price: '$299.99',
      designer: 'BY: Oliver Bonas',
      imageUrl: '../public/UsedPics/Kinship_Rattan_Bedside_Table___Oliver_Bonas-removebg-preview.png',
    },
    {
      title: 'Storage Ottomans',
      description: 'Maximize the space in your home with our collection of storage ottomans.',
      price: '$120.50',
      designer: 'BY: Oliver Bonas',
      imageUrl: '../public/UsedPics/Storage_Ottomans__Trunks___Benches___Oliver_Bonas-removebg-preview.png',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto mt-24">
        <div className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex md:flex-row flex-col items-center justify-between transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
              style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
            >
              <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 p-6 md:p-16 text-center md:text-left">
                <h1 className={`s-title text-3xl md:text-6xl font-medium mb-4 transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0' : '-translate-x-full'}`}>
                  {slide.title}
                </h1>
                <p className={`text-stone-700 text-base text-sm md:text-lg mb-2 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                  {slide.description}
                </p>
                <p className={`text-sm font-light mb-4 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                  {slide.designer}
                </p>
                <button className="px-4 md:px-6 py-2 md:py-3 border border-black text-black bg-transparent transition duration-300 ease-in-out hover:bg-black hover:text-white">
                  SHOP NOW
                </button>
              </div>
              <div className="w-full flex justify-center md:justify-end items-center mt-0 md:mt-2">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className={`w-full max-w-xs md:max-w-md h-auto object-contain transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'scale-100' : 'scale-90 opacity-0'}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 md:h-3 w-2 md:w-3 rounded-full transition-colors duration-300 ease-in-out ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* PromoCards component */}
      <PromoCards />
      {/* ProductSection component */}
      <ProductSection />

      <ShopSection />
    </>
  );
};

export default Index;
