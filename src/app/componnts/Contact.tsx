"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // Add this import

export default function ContactForm() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please fill in all fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      return;
    }

    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-black text-white flex items-center justify-center p-8"
    >
      <div className="flex flex-col items-center max-w-6xl w-full bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="text-center mb-8" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400">
            Ready to transform your business with AI?
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          {/* Contact Info Section */}
          <div
            className="w-full md:w-1/3 bg-black p-6 flex flex-col justify-start"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <h1 className="text-xl font-bold text-gray-300">
                Contact Information
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/images/envelop.PNG"
                  alt="Email Icon"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <p className="text-xl text-gray-300">
                  contact@agentiaworld.com
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Image
                  src="/images/ai3.PNG"
                  alt="Website Icon"
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
                <p className="text-xl text-gray-300">www.agentiaworld.com</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <FaGithub className="text-2xl hover:text-purple-400 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-purple-400 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-purple-400 cursor-pointer" />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-2/3 bg-black p-8" data-aos="fade-left">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-1/2 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-1/2 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:opacity-80 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}




