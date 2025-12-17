"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Clinic Name */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Dr Ashish Pandey Fitness
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 items-center">
          <Link href="/(public)/appointments" className="text-gray-600 hover:text-black">
            Book Appointment
          </Link>

          <Link href="/(public)/chatbot" className="text-gray-600 hover:text-black">
            AI Assistant
          </Link>

          <Link
            href="/doctor/dashboard"
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Doctor Panel
          </Link>
        </div>
      </div>
    </nav>
  );
}
