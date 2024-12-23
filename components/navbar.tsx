"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-[200px] h-[50px]">
                <Logo />
              </div>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</Link>
            <Link href="/book">
              <Button>Book Now</Button>
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`sm:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#how-it-works"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <div className="px-4 py-3">
            <Link href="/book" onClick={() => setIsOpen(false)}>
              <Button className="w-full justify-center">Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}