import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { FiGithub } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons Column */}
          <div className="space-y-6 text-center">
            <div className="flex justify-center items-center space-x-2">
              <Image src="/images/logo.png" alt="Agentia World Logo" width={40} height={40} />
              <span className="text-white text-xl font-bold">Agentia World</span>
            </div>
            <p className="mt-4 text-sm md:text-base hover:text-purple-500">Next-generation AI agents powering the future of enterprise intelligence.</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Link href="#" className="hover:text-purple-500">
                <FiGithub className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-purple-500">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-purple-500">
                <FaTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-500">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-sm text-center hover:text-purple-500">
          <p>© 2025 Agentia World. Powered by Paraversity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}