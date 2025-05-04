import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
      {restaurantImages.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-xl shadow-sm h-48">
          <Image
            src={image.url}
            alt={image.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg">{image.title}</h3>
            <p className="text-gray-200 text-sm">{image.description}</p>
            <button className="mt-2 self-start px-3 py-1 bg-lime-500 text-white text-sm rounded-full hover:bg-lime-600 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;