import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const tickets = [
  { category: 'e- poster', price: 199, features: ['Digital poster display', 'Abstract book inclusion', 'Certificate of presentation'] },
  { category: 'Poster Presentation', price: 399, features: ['Physical poster board', 'Networking sessions', 'Abstract book inclusion', 'Certificate of presentation'] },
  { category: 'Video Presentation', price: 499, features: ['Pre-recorded video slot', 'Q&A session access', 'Digital certificate', 'Abstract book inclusion'] },
  { category: 'Oral Presentation', price: 899, features: ['Live speaking slot', 'Full conference access', 'Gala dinner inclusion', 'Certificate of presentation'] },
  { category: 'Delegate', price: 349, features: ['Full conference access', 'Conference materials', 'Lunch & Refreshments', 'Certificate of attendance'] },
  { category: 'Suit - A', price: 1199, features: ['VIP conference access', 'Accommodation included', 'Gala dinner', 'Premium seating'] },
  { category: 'Suit - B', price: 1399, features: ['Premium VIP access', 'Luxury accommodation', 'Airport transfer', 'Exclusive networking'] },
  { category: 'Accompanying Person', price: 349, features: ['Access to exhibition area', 'Lunch & Refreshments', 'City tour discount', 'Gala dinner inclusion'] },
  { category: 'Extra N- Stay', price: 249, features: ['Additional night stay', 'Breakfast included', 'Hotel amenities access'] },
  { category: 'Article Publication', price: 1199, features: ['Peer review process', 'Publication in journal', 'DOI assignment', 'Open access'] },
  { category: 'Exhibitor', price: 3999, features: ['Exhibition booth space', 'Brand visibility', '2 Delegate passes', 'Lead generation access'] },
];

const Registration = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans pb-12">
      {/* Banner Section */}
      <div className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden flex justify-center mb-10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Choose Your Pass
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-orange-50 font-light"
          >
            Join industry leaders, researchers, and professionals. Secure your spot at the Food Microbiome Conclave today.
          </motion.p>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tickets.map((ticket, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group"
            >
              <div className="p-6 bg-white border-b border-gray-100 group-hover:border-orange-500 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-800 text-center">{ticket.category}</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col items-center">
                <div className="text-5xl font-extrabold text-orange-500 mb-6 flex items-start">
                  <span className="text-2xl mt-1 mr-1 text-gray-400 font-medium">$</span>
                  {ticket.price}
                </div>
                
                <ul className="w-full mb-8 space-y-3 flex-grow">
                  {ticket.features?.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-gray-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-auto w-full py-3.5 px-6 bg-gray-900 hover:bg-orange-500 text-white rounded-xl font-semibold transition-colors duration-300 shadow-md hover:shadow-lg">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registration;
