"use client";

import { useState } from "react";
import Link from "next/link";

export default function Asidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon (mobile only) */}
      <img
        src="/menu.svg"
        alt="Menu"
        className="menu-icon"
        onClick={() => setOpen(true)}
      />

      {/* Overlay */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`asidebar ${open ? "open" : ""}`}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/appointments">Appointments</Link></li>
            <li><Link href="/book">Book Appointment</Link></li>
            <li><Link href="/chatbot">AI Assistant</Link></li>
            <li><Link href="/staff/dashboard">Doctor Panel</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
