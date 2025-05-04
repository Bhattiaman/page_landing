"use client";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'; // Add this import
import { 
  faArrowRight, 
  faChartPie,
  faBell,
  faCog,
  faChartLine,
  faReceipt,
  faPlus,
  faUtensilSpoon,
  faChair,
  faArrowsRotate,
  faTrash,
  faUser,
  faClock,
  faCheckCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  const restaurantImages = [
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Fine Dining Area",
      description: "Elegant space for special occasions"
    },
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Outdoor Seating",
      description: "Enjoy meals in our beautiful patio"
    },
    {
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Bar Lounge",
      description: "Creative cocktails and relaxed atmosphere"
    }
  ];

  const currentOrders = [
    { table: 5, items: "Pasta Carbonara, Salad", status: "preparing", time: "12 min", total: 24.50 },
    { table: 2, items: "Steak, Mashed Potatoes", status: "served", time: "5 min", total: 32.75 },
    { table: 8, items: "Vegan Burger, Fries", status: "pending", time: "18 min", total: 18.99 }
  ];

  const staffMembers = [
    { name: "Alex Johnson", role: "Head Chef", status: "active" },
    { name: "Maria Garcia", role: "Waiter", status: "on break" },
    { name: "Sam Wilson", role: "Bartender", status: "active" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your <span className="relative inline-block">
                  <span className="relative z-10">Ultimate</span>
                  <svg className="absolute -bottom-1 -left-2 w-[calc(100%+1rem)] h-[calc(100%+0.5rem)] z-0" style={{ overflow: 'visible' }}>
                    <path d="M10,30 Q30,5 50,20 T90,30" fill="none" stroke="#facc15" strokeWidth="12" strokeLinecap="round" strokeDasharray="1, 4"/>
                  </svg>
                </span> Restaurant Management Solution
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                All essential restaurant management functions in one unified platform
              </p>
              
              <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                <button className="px-4 sm:px-6 py-2 bg-white rounded-full font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base">
                  View Demo
                </button>
                <button className="px-4 sm:px-6 py-2 bg-white rounded-full font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base">
                  Learn More
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 bg-lime-500 text-white rounded-full flex items-center justify-center hover:bg-lime-600 transition-colors shadow-md text-sm">
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                {restaurantImages.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl shadow-sm h-36 sm:h-48">
                    <Image 
                      src={image.url} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                      <h3 className="text-white font-bold text-sm sm:text-lg">{image.title}</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">{image.description}</p>
                      <button className="mt-1 sm:mt-2 self-start px-2 py-0.5 sm:px-3 sm:py-1 bg-lime-500 text-white text-xs rounded-full hover:bg-lime-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
                
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-500 transition-all duration-300 group">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <FontAwesomeIcon icon={faPlus} className="text-gray-700 mr-2 text-sm sm:text-base group-hover:text-lime-500 transition-colors" />
                    <h3 className="font-medium text-sm sm:text-base">Add Position</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Add new items to the current order
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Pasta</span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Salad</span>
                    <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">Dessert</span>
                  </div>
                </div>
                
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-500 transition-all duration-300 group">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <FontAwesomeIcon icon={faUtensilSpoon} className="text-gray-700 mr-2 text-sm sm:text-base group-hover:text-lime-500 transition-colors" />
                    <h3 className="font-medium text-sm sm:text-base">Table Management</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-1 sm:gap-2 mt-2">
                    <div className="p-1 sm:p-1.5 rounded-lg bg-gray-100 text-center">
                      <p className="text-xs text-gray-500">Table 1</p>
                      <p className="text-xs font-medium">Available</p>
                    </div>
                    <div className="p-1 sm:p-1.5 rounded-lg bg-amber-100 text-center">
                      <p className="text-xs text-amber-800">Table 2</p>
                      <p className="text-xs font-medium">Occupied</p>
                    </div>
                    <div className="p-1 sm:p-1.5 rounded-lg bg-red-100 text-center">
                      <p className="text-xs text-red-800">Table 3</p>
                      <p className="text-xs font-medium">Reserved</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <button className="p-1 sm:p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-lime-500 hover:text-white transition-colors text-xs">
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </button>
                    <button className="p-1 sm:p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors text-xs">
                      <FontAwesomeIcon icon={faChair} />
                    </button>
                    <button className="p-1 sm:p-1.5 rounded-full bg-gray-100 text-gray-500 hover:bg-red-500 hover:text-white transition-colors text-xs">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
                
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-lime-500 transition-all duration-300 group">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <FontAwesomeIcon icon={faUser} className="text-gray-700 mr-2 text-sm sm:text-base group-hover:text-lime-500 transition-colors" />
                    <h3 className="font-medium text-sm sm:text-base">Staff Overview</h3>
                  </div>
                  <div className="space-y-2 mt-2">
                    {staffMembers.map((staff, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          staff.status === 'active' ? 'bg-green-500' : 
                          staff.status === 'on break' ? 'bg-amber-500' : 'bg-gray-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium">{staff.name}</p>
                          <p className="text-xs text-gray-500">{staff.role}</p>
                        </div>
                        <span className="text-xs text-gray-400">{staff.status === 'on break' ? '15m' : ''}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="flex justify-end gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faChartPie} className="text-sm sm:text-base" />
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faBell} className="text-sm sm:text-base" />
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-full shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
                  <FontAwesomeIcon icon={faCog} className="text-sm sm:text-base" />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:bg-gray-900 hover:text-white">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <FontAwesomeIcon icon={faChartLine} className="text-gray-700 mr-2 text-sm sm:text-base group-hover:text-lime-400 transition-colors" />
                    <h2 className="text-sm sm:text-md font-bold group-hover:text-white">Dashboard Overview</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors">
                      <div className="text-xs text-gray-500 group-hover:text-gray-300">Today&apos;s Revenue</div>
                      <div className="text-base sm:text-lg font-bold">$1,768</div>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors">
                      <div className="text-xs text-gray-500 group-hover:text-gray-300">Active Tables</div>
                      <div className="text-base sm:text-lg font-bold">8/12</div>
                    </div>
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Dashboard preview" 
                    className="w-full h-auto rounded-lg group-hover:opacity-80 transition-opacity"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
                
                <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:bg-gray-900 hover:text-white">
                  <div className="flex items-center mb-2 sm:mb-3">
                    <FontAwesomeIcon icon={faReceipt} className="text-gray-700 mr-2 text-sm sm:text-base group-hover:text-lime-400 transition-colors" />
                    <h2 className="text-sm sm:text-md font-bold group-hover:text-white">Current Orders</h2>
                  </div>
                  <div className="space-y-2 mb-2 sm:mb-3">
                    {currentOrders.map((order, index) => (
                      <div key={index} className="bg-gray-100 rounded-lg p-2 group-hover:bg-gray-800 transition-colors">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-xs sm:text-sm group-hover:text-gray-300">Table {order.table}</span>
                          <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                            order.status === 'preparing' ? 'bg-amber-100 text-amber-800' :
                            order.status === 'served' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          } group-hover:bg-gray-700 group-hover:text-white`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between mt-1 text-xs group-hover:text-gray-300">
                          <span>{order.items}</span>
                          <span>${order.total}</span>
                        </div>
                        <div className="flex items-center mt-1 text-xs text-gray-500 group-hover:text-gray-400">
                          <FontAwesomeIcon icon={faClock} className="mr-1" />
                          <span>{order.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Image 
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Restaurant orders" 
                    className="w-full h-auto rounded-lg group-hover:opacity-80 transition-opacity"
                    width={600}
                    height={400}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;