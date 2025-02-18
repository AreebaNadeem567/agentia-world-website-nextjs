"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AISection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Enterprise AI",
      desc: "Custom AI agents designed for enterprise-scale operations and decision-making",
      Image: "/images/ai1.PNG",
    },
    {
      title: "Neural Operations",
      desc: "Automated workflow optimization through distributed neural networks",
      Image: "/images/ai2.PNG",
    },
    {
      title: "Secure Intelligence",
      desc: "Privacy-first AI solutions with military-grade security protocols",
      Image: "/images/ai3.PNG",
    },
  ];

  return (
    <div
      id="agents"
      className="bg-black text-white py-16 px-6 text-center min-h-screen flex flex-col items-center justify-center"
    >
      {/* Updated Heading with Gradient Color */}
      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#C084FC] to-[#3B82F6] text-transparent bg-clip-text">
        AI Solutions
      </h2>
      <h3 className="text-xl text-gray-400 mt-2">
        Transforming industries with intelligent agents
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 hover:border-4 hover:border-purple-500 flex flex-col items-center justify-center text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Staggered animation effect
          >
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <Image
                src={feature.Image}
                alt={feature.title}
                width={60}
                height={60}
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-16 transition-colors duration-300 group-hover:text-blue-500">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base transition-colors duration-300 group-hover:text-white">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
