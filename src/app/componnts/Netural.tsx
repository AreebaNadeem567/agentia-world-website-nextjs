"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Netural() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Autonomous Learning",
      desc: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
      Image: "/images/a1.PNG",
    },
    {
      title: "Multi-Modal Intelligence",
      desc: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
      Image: "/images/n1.PNG",
    },
    {
      title: "Cognitive Integration",
      desc: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
      Image: "/images/n2.PNG",
    },
    {
      title: "Ethical AI Framework",
      desc: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
      Image: "/images/n4.PNG",
    },
  ];

  return (
    <div
      id="features"
      className="bg-black text-white py-16 px-6 text-center min-h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#C084FC] to-[#3B82F6] text-transparent bg-clip-text">
        Neural Capabilities
      </h2>

      <h3 className="text-xl text-gray-400 mt-2">
        Powered by next-generation artificial intelligence
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-lg relative group transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 hover:border-4 hover:border-purple-500"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Adds a delay for a nice staggered effect
          >
            <div className="absolute top-4 left-4">
              <Image
                src={feature.Image}
                alt={feature.title}
                width={50}
                height={50}
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
