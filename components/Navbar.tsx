"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/festivals", label: "Festivals" },
  { href: "/about", label: "About" },
  { href: "/search", label: "Search" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#FAF6EF]" style={{ borderBottom: "0.5px solid #e0d5c0" }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 whitespace-nowrap">
          <span className="cn text-[#C41E3A] text-[22px] leading-none">節</span>
          <span className="hidden sm:inline" style={{ fontFamily: "'Playfair Display', serif", fontSize: 15 }}>
            Chinese Festivals Guide
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                className="text-[#1a1208] hover:text-[#C41E3A] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="md:hidden p-2 text-[#1a1208]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ borderTop: "0.5px solid #e0d5c0" }}>
          <ul className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-2 py-2 text-[#1a1208] hover:text-[#C41E3A] transition-colors"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 15,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
