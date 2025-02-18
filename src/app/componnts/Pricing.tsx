"use client"

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "$499",
      features: [
        "2 AI Agent Instances",
        "Basic Neural Processing",
        "24/7 Support",
        "Weekly Analytics",
        "Basic Integration Support",
      ],
      button: "Get Started",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$999",
      features: [
        "10 AI Agent Instances",
        "Advanced Neural Networks",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
        "API Access",
        "Advanced Security",
      ],
      button: "Get Started",
      highlight: true, // Professional plan gets special styling
    },
    {
      name: "Enterprise",
      price: "$Custom",
      features: [
        "Unlimited Agents",
        "Full Neural Suite",
        "Dedicated Support Team",
        "Advanced Analytics Dashboard",
        "Custom Development",
        "Full API Access",
        "Enterprise Security",
        "Custom Training",
      ],
      button: "Get Started",
      highlight: false,
    },
  ];

  return (
    <div id="pricing" className="bg-black text-white py-16 px-6 text-center">
      {/* Updated Heading with the new gradient */}
      <h2 className="text-5xl font-bold bg-gradient-to-r from-[#C084FC] to-[#3B82F6] text-transparent bg-clip-text">
        Choose Your Plan
      </h2>
      <h3 className="text-xl text-gray-400 mt-2">
        Scale your AI capabilities with our flexible pricing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg transform transition-all duration-300 ${
              plan.highlight
                ? "border-2 border-purple-400 bg-gradient-to-b from-[#2B0B3F] to-[#1A082C]" // Professional plan styling
                : "bg-gray-900 hover:scale-105 hover:shadow-xl hover:border-4 hover:border-purple-500" // Hover effect for Starter and Enterprise plans
            }`}
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Staggered effect
          >
            <h3 className="text-xl sm:text-2xl font-semibold">{plan.name}</h3>
            <p className="text-2xl sm:text-3xl font-bold mt-2">
              {plan.price}
              <span className="text-lg font-normal">/month</span>
            </p>
            <ul className="mt-4 text-gray-300 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-purple-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 rounded-lg font-semibold transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-2 border-transparent hover:border-purple-500"
                  : "bg-gray-800 text-white border-2 border-transparent hover:border-purple-500"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}