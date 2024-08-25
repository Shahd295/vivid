import React, { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component is mounted or updated
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="container mx-auto p-8 mt-24">
      <motion.h1
        className="text-5xl contact-title font-medium text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl contact-title font-semibold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="border border-black text-black hover:bg-black hover:text-white font-medium py-2 px-4 rounded-none transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Store Information */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 contact-title">Our Store</h2>
          <p className="text-gray-700 mb-4">
            Visit us at our showroom or get in touch through the following contact details:
          </p>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">Address</h3>
            <p className="text-gray-600">1234 Furniture Lane, Suite 100<br />City, State, ZIP</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">contact@vividfurniture.com</p>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-gray-800">Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <motion.a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Find Us Here</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.43102449446!2d29.79007558849771!3d31.22400577226321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1724278979448!5m2!1sen!2seg"
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
