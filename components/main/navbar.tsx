"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

const NAV_ICONS: Record<string, JSX.Element> = {
  "About me": (
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  ),
  Skills: (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  Experience: (
    <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.57 15.86.4 13.23.4c-1.4 0-2.64.73-3.23 1.8L12 4.34l1.99-2.14c.28-.3.66-.46 1.05-.46 1.27 0 2.08 1.06 2.08 2.1 0 1.17-.95 2.16-2.08 2.16h-6.08C7.86 6 6 7.9 6 10H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  ),
  Education: (
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  ),
  Projects: (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
  ),
  Contact: (
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  ),
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="w-full h-[75px] fixed top-0 z-50 px-6"
      style={{
        background: "rgba(3,0,20,0.55)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(113,47,255,0.15)",
        boxShadow:
          "0 2px 20px rgba(42,14,97,0.3), 0 1px 15px 0 rgba(113,47,255,0.3)",
      }}
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* LEFT — Hamburger (mobile) + Logo */}
        <div className="flex items-center gap-3">
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] items-center justify-center w-8 h-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-[2px] rounded-full bg-gray-300 transition-all" />
            <span className="block w-5 h-[2px] rounded-full bg-gray-300 transition-all" />
            <span className="block w-5 h-[2px] rounded-full bg-gray-300 transition-all" />
          </button>

          {/* Logo */}
          <Link href="#about-me" className="flex items-center gap-2">
            <Image
              src="/logo3d.jpg"
              alt="Logo"
              width={44}
              height={44}
              draggable={false}
              className="cursor-pointer opacity-70"
            />
            <span className="hidden md:block text-sm font-semibold text-gray-300 tracking-wide">
              Kavindi Saubhagya
            </span>
          </Link>
        </div>

        {/* RIGHT — Nav links with icon + label (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="group flex flex-col items-center px-3 py-1 rounded-lg transition-all duration-200 hover:bg-[rgba(113,47,255,0.12)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="mb-1 transition-colors duration-200"
                style={{ fill: "rgba(180, 160, 255, 0.8)" }}
              >
                {NAV_ICONS[link.title] ?? <circle cx="12" cy="12" r="6" />}
              </svg>
              <span
                className="text-[10px] tracking-widest uppercase font-semibold transition-colors duration-200"
                style={{ color: "rgba(180, 160, 255, 0.8)" }}
              >
                {link.title}
              </span>
              {/* underline accent on hover */}
              <span
                className="block h-[1.5px] w-0 group-hover:w-full rounded-full transition-all duration-300"
                style={{ background: "rgba(113,47,255,0.7)", marginTop: 2 }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-[65px] left-0 w-full flex flex-col items-center py-6 gap-4 md:hidden"
          style={{
            background: "rgba(3,0,20,0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(113,47,255,0.15)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-2 rounded-xl w-48 transition-all duration-200 hover:bg-[rgba(113,47,255,0.15)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(180, 160, 255, 0.8)" }}
              >
                {NAV_ICONS[link.title] ?? <circle cx="12" cy="12" r="6" />}
              </svg>
              <span
                className="text-sm tracking-widest uppercase font-semibold"
                style={{ color: "rgba(180, 160, 255, 0.8)" }}
              >
                {link.title}
              </span>
            </Link>
          ))}

          <div className="flex gap-5 mt-2">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon
                  className="h-6 w-6"
                  style={{ color: "rgba(180,160,255,0.7)" }}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
