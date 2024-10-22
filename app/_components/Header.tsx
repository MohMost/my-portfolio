"use client";
import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import Image from "next/image";

import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModToggler";

export default function Header() {
  const navigation = useMemo(
    () => [
      { name: "Skills", id: "#skills" },
      { name: "Projects", id: "#projects" },
      { name: "Contact", id: "#contact" },
    ],
    []
  );
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((menu) =>
        document.querySelector(menu.id)
      );
      const scrollY = window.pageYOffset;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop - 10; // Adjust for header height
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(navigation[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigation]);

  return (
    <header className="fixed top-0 py-4 bg-background w-full z-[100]">
      <div className="flex items-center justify-between gap-4 px-4 lg:px-8">
        <Image src="/Group 1.png" width={64} height={64} alt="logo" />
        <div className="flex-1" />
        {/* Mobile Hamburger Menu */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        {/* Desktop Navigation */}
        <div className="hidden text-white items-center text-center lg:flex lg:items-center">
          <ul className="items-center list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <span className="text-[#e6d762]">0{index + 1}.</span>
                <Link
                  href={menu.id}
                  className={`inline-block px-[10px] py-2 text-lg font-normal no-underline rounded-md ${
                    activeSection === menu.id
                      ? "text-primary" // Apply primary color if in section
                      : "text-gray-300 hover:text-[#e6d762]"
                  }  `}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ModeToggle />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-background py-2">
          <ul className="list-none">
            {navigation.map((menu, index) => (
              <li key={index} className="py-2 px-4">
                <Link
                  href={menu.id}
                  onClick={() => setMenuOpen(false)} // Close menu after click
                  className={`block text-lg font-normal no-underline ${
                    activeSection === menu.id
                      ? "text-primary"
                      : "text-gray-300 hover:text-[#e6d762]"
                  }`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
