import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1208] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-5">
          <span className="cn text-[#C41E3A] text-[22px] leading-none">節</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "#FAF6EF" }}>
            Chinese Festivals Guide
          </span>
        </Link>

        {/* Links */}
        <nav className="mb-5">
          <ul className="flex justify-center gap-8 flex-wrap">
            {[
              { href: "/", label: "Home" },
              { href: "/festivals", label: "Festivals" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 13,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div style={{ width: 40, height: "0.5px", background: "rgba(255,255,255,0.15)" }} className="mb-4" />

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          &copy; 2026 Chinese Festivals Guide. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            marginTop: 2,
          }}
        >
          Content is for educational and informational purposes only.
        </p>
      </div>
    </footer>
  );
}
