// "use client";
// import { useState, useEffect } from "react";
// import { Menu } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     // Ensure the component is only rendered on the client-side
//     setIsClient(true);
//   }, []);

//   if (!isClient) return null; // Prevent rendering until after hydration

//   return (
//     <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center gap-3 bg-transparent">
//         <Image src="/images/logo.png" alt="Agentia Logo" width={50} height={50} priority />
//         <span className="text-xl font-bold text-white">Agentia World</span>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex space-x-6">
//         <Link href="#features" className="hover:text-purple-400 transition duration-300">Features</Link>
//         <Link href="#technology" className="hover:text-purple-400 transition duration-300">Technology</Link>
//         <Link href="#agents" className="hover:text-purple-400 transition duration-300">Agents</Link>
//         <Link href="#pricing" className="hover:text-purple-400 transition duration-300">Pricing</Link>
//         <Link href="#contact" className="hover:text-purple-400 transition duration-300">Contact</Link>
//       </div>

//       {/* Launch Console Button */}
//       <Link
//         href="/"
//         className="hidden lg:block bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:opacity-80 transition duration-300"
//       >
//         Launch Console
//       </Link>

//       {/* Menu Button (Visible Only on Mobile & Tablets) */}
//       <button className="block lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
//         <Menu size={28} />
//       </button>

//       {/* Mobile & Tablet Menu */}
//       {isOpen && (
//         <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-start py-4 space-y-4 lg:hidden pl-6">
//           <Link href="#features" className="text-white hover:text-purple-400 transition duration-300">Features</Link>
//           <Link href="#technology" className="text-white hover:text-purple-400 transition duration-300">Technology</Link>
//           <Link href="#agents" className="text-white hover:text-purple-400 transition duration-300">Agents</Link>
//           <Link href="#pricing" className="text-white hover:text-purple-400 transition duration-300">Pricing</Link>
//           <Link href="#contact" className="text-white hover:text-purple-400 transition duration-300">Contact</Link>
//           <Link
//             href="/console"
//             className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white hover:opacity-80 transition duration-300"
//           >
//             Launch Console
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }




"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  // Function to close menu on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-3 bg-transparent">
        <Image
          src="/images/logo.png"
          alt="Agentia Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-xl font-bold text-white">Agentia World</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <a href="#features" className="hover:text-purple-500">
          Features
        </a>
        <a href="#technology" className="hover:text-purple-500">
          Technology
        </a>
        <a href="#agents" className="hover:text-purple-500">
          Agents
        </a>
        <a href="#pricing" className="hover:text-purple-500">
          Pricing
        </a>
        <a href="#contact" className="hover:text-purple-500">
          Contact
        </a>
      </div>

      {/* Launch Console Button (Desktop) */}
      <button className="hidden lg:block bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white cursor-default">
        Launch Console
      </button>

      {/* Menu Button (Mobile & Tablets) */}
      <button
        className="block lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-start py-4 space-y-4 lg:hidden pl-6 pr-6">
          <a href="#features" onClick={closeMenu} className="text-white hover:text-purple-400 transition duration-300">
            Features
          </a>
          <a href="#technology" onClick={closeMenu} className="text-white hover:text-purple-400 transition duration-300">
            Technology
          </a>
          <a href="#agents" onClick={closeMenu} className="text-white hover:text-purple-400 transition duration-300">
            Agents
          </a>
          <a href="#pricing" onClick={closeMenu} className="text-white hover:text-purple-400 transition duration-300">
            Pricing
          </a>
          <a href="#contact" onClick={closeMenu} className="text-white hover:text-purple-400 transition duration-300">
            Contact
          </a>

          {/* Small Button Inside Hamburger Menu */}
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg text-white cursor-default self-start mt-2">
            Launch Console
          </button>
        </div>
      )}
    </nav>
  );
}