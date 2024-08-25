import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [cart, setCart] = useState(0);
  const [wishlist, setWishlist] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleProductsDropdown = () => setIsProductsDropdownOpen((prev) => !prev);

  const closeProductsDropdown = () => setIsProductsDropdownOpen(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          to="/vivid/"
          className="text-5xl font-bold flex flex-col items-center brandname"
          onClick={closeMenu} // Close menu on link click
        >
          Vivid
          <span className="font-extralight text-pretty text-xs">
            furniture store
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link
            to="/"
            className="py-2 px-4 text-lg hover:bg-gray-100 rounded transition duration-300"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center py-2 px-4 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 text-gray-700 transition-transform ml-2 ${
                  isProductsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 ${
                isProductsDropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul className="text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link
                    to="/products/sofa-and-chairs"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Sofa & Chairs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/storage"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Storage Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/lighting"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Lighting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/tables"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Tables
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/bedrooms"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Bedrooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/home-accessories"
                    onClick={closeProductsDropdown}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Home Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            to="/new-arrivals"
            className="py-2 px-4 text-lg hover:bg-gray-100 rounded transition duration-300"
          >
            New Arrivals
          </Link>
          <Link
            to="/contact"
            className="py-2 px-4 text-lg hover:bg-gray-100 rounded transition duration-300"
          >
            Contact Us
          </Link>
          <div className="relative">
            <button className="increment-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L5.4 5M7 13l1.5 6h9l1.5-6m-4 0H9"
                />
              </svg>
            </button>
            {cart > 0 && <span className="counter">{cart}</span>}
          </div>
          <div className="relative">
            <button className="increment-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>
            {wishlist > 0 && <span className="counter">{wishlist}</span>}
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18M3 18h18"
            />
          </svg>
        </button>
      </div>


{/* SideBar */}


      <div
        className={`fixed inset-0 bg-gray-200 bg-opacity-90 z-40 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full p-4 border-r border-gray-300">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="block py-2 text-lg text-gray-800 hover:bg-gray-100 rounded transition duration-300 mb-2"
            onClick={closeMenu} // Close menu on link click
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleProductsDropdown}
              className="flex items-center py-2 text-lg font-medium text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-5 h-5 text-gray-700 transition-transform ml-2 ${
                  isProductsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 9l-7.5 7.5L4.5 9"
                />
              </svg>
            </button>
            <div
              className={`absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg w-48 ${
                isProductsDropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul className="text-sm" style={{ fontFamily: "'Roboto', sans-serif" }}>
                <li>
                  <Link
                    to="/products/sofa-and-chairs"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Sofa & Chairs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/storage"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Storage Furniture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/lighting"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Lighting
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/tables"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Tables
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/bedrooms"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Bedrooms
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/home-accessories"
                    onClick={() => {
                      closeProductsDropdown();
                      closeMenu(); // Close menu on link click
                    }}
                    className="block py-3 px-4 hover:bg-gray-100 text-gray-700 transition duration-300 rounded-md"
                  >
                    Home Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            to="/new-arrivals"
            className="block py-2 text-lg text-gray-800 hover:bg-gray-100 rounded transition duration-300 mt-2"
            onClick={closeMenu} // Close menu on link click
          >
            New Arrivals
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-lg text-gray-800 hover:bg-gray-100 rounded transition duration-300 mt-2"
            onClick={closeMenu} // Close menu on link click
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
