"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import Image from "next/image";
import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModToggler";
import { useMemo } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((menu) =>
        document.querySelector(menu.id)
      );
      const scrollY = window.pageYOffset;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop - 50; // Adjust for header height
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
      <div className="flex items-center px-4 lg:px-8">
        <Image src="/Group 1.png" width={64} height={64} alt="logo" />
        <div className="flex-1" />
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
    </header>
  );
}
