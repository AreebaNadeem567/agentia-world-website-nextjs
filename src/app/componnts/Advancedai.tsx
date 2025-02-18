"use client"

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AdvancedAi() {
  const features = [
    {
      title: "Neural Networks",
      desc: "Advanced neural architectures for complex decision making",
      Image: "/images/a1.PNG",
    },
    {
      title: "Deep Learning",
      desc: "Sophisticated deep learning models for pattern recognition",
      Image: "/images/a2.PNG",
    },
    {
      title: "Advanced ML",
      desc: "Cutting-edge machine learning algorithms",
      Image: "/images/a3.PNG",
    },
    {
      title: "Global Scale",
      desc: "Distributed AI processing across global networks",
      Image: "/images/a4.PNG",
    },
  ];

  useEffect(() => {
    // Initialize AOS after the component is mounted
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing
      once: true, // Only animate once
    });

    // Ensure AOS is refreshed on page load
    AOS.refresh();

    return () => {
      // Clean up AOS initialization when the component unmounts
      AOS.refreshHard();
    };
  }, []);

  return (
    <div  id="technology"className="bg-black text-white py-16 px-6 text-center min-h-screen flex flex-col items-center justify-center">
      {/* Updated Heading split into two lines */}
      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#C084FC] to-[#3B82F6] text-transparent bg-clip-text">
        Powered by Advanced AI
      </h2>
      <h3 className="text-xl text-gray-400 mt-2">
        Built on cutting-edge neural architectures
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative overflow-hidden group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 hover:border-4 hover:border-purple-500"
            data-aos="fade-up" // AOS animation effect
            data-aos-delay={index * 100} // Optional: delay each feature animation slightly
          >
            <div className="flex justify-center transition-transform duration-500">
              <Image
                src={feature.Image} // Corrected key for image
                alt={feature.title}
                width={100}
                height={100}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 transition-colors duration-300 group-hover:text-blue-500">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2 transition-colors duration-300 group-hover:text-white">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
