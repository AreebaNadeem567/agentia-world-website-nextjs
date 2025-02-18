'use client';

import { useState, useEffect, useMemo } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { Bot } from "lucide-react";


const Hero = () => {
  const texts = useMemo(() => [
    "Hello! I am your AI agent. How can I enhance your business today?",
    "I can help optimize your workflows with neural networks.",
    "Let me assist you with advanced data analytics.",
    "Would you like to explore our AI integration solutions?",
    "I can also assist you with global-scale AI deployment."
  ], []);

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (index < texts[currentTextIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (index === texts[currentTextIndex].length) {
      const nextTextTimeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayedText("");
        setIndex(0);
      }, 1500);
      return () => clearTimeout(nextTextTimeout);
    }
  }, [index, currentTextIndex, texts]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4 py-4 sm:py-8">
      <motion.div 
        className="max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Header Badge */}
        <motion.div 
          className="flex items-center justify-center gap-2 bg-white/10 px-3 py-1 rounded-md w-fit mx-auto mt-2 sm:mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
         <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
          <p className="text-purple-500 text-xs sm:text-sm">POWERED BY PANAVERSITY</p> 
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-3xl sm:text-5xl font-bold mt-2 sm:mt-4 leading-tight tracking-tight"
          style={{ whiteSpace: "nowrap" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-purple-400">Enterprise AI Agents</span>
          <br />
          <span className="text-white mt-4 block">for the Future</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div 
          className="mt-4 p-3 bg-white/10 rounded-md flex items-center gap-3 shadow-lg backdrop-blur-md border border-white/20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-purple-500 flex items-center justify-center rounded-full">
            {/* <Image src="/images/" alt="Logo" width={24} height={24} /> */}
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 bg-white/5 px-4 py-2 rounded-md text-left">
            <p className="text-base sm:text-lg md:text-xl text-white">{displayedText}|</p>
          </div>
        </motion.div>

        {/* Buttons - Fixed for Small Screens */}
        <motion.div 
          className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button className="w-[230px] sm:w-auto h-12 sm:h-12 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-md text-white font-semibold text-lg hover:opacity-80 transition flex items-center justify-center gap-2 shadow-md whitespace-nowrap min-w-[230px]">
            Deploy Your AI Agent <MdOutlineKeyboardArrowRight size={22} />
          </button>
          <button className="w-[230px] sm:w-auto h-12 sm:h-12 border-2 border-white px-6 py-2.5 rounded-md text-white font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center shadow-md hover:border-purple-500">
            Watch Demo
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;




