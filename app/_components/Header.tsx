"use client";
import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModToggler";

export default function Header() {
  const t = useI18n();
  const router = useRouter();
  const PathName = usePathname();

  const navigation = useMemo(
    () => [
      { name: `${t("navbar.skills")}`, id: "#skills" },
      { name: `${t("navbar.projects")}`, id: "#projects" },
      { name: `${t("navbar.contact")}`, id: "#contact" },
    ],
    [t],
  );

  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // If on projects page and clicking projects link, do nothing
    if (PathName === "/projects" && sectionId === "#projects") {
      setMenuOpen(false);
      return; // Don't navigate anywhere
    }

    if (PathName === "/") {
      // If already on homepage, just scroll to the section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to homepage with the section hash
      router.push(`/${sectionId}`);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    // Check if we're on the homepage and there's a hash in the URL
    if (PathName === "/" && window.location.hash) {
      const sectionId = window.location.hash;
      const element = document.querySelector(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [PathName]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((menu) =>
        document.querySelector(menu.id),
      );
      const scrollY = window.pageYOffset;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop - 10;
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

  // Determine if an item should be disabled
  const isDisabled = (sectionId: string) => {
    return PathName === "/projects" && sectionId === "#projects";
  };

  return (
    <header className="fixed top-0 py-4 bg-background w-full z-[100]">
      <div className="flex items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="/">
          <Image src="/Group 1.png" width={64} height={64} alt="logo" />
        </Link>
        <div className="flex-1" />

        {/* Mobile Hamburger Menu */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 dark:stroke-gray-300 stroke-black"
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
            {navigation.map((menu, index) => {
              const disabled = isDisabled(menu.id);
              return (
                <li className="mr-3 nav__item" key={index}>
                  <span className="text-[#e6d762]">0{index + 1}.</span>
                  <button
                    onClick={() => !disabled && handleNavigation(menu.id)}
                    disabled={disabled}
                    className={`inline-block px-[10px] py-2 text-lg font-normal no-underline rounded-md cursor-pointer transition-opacity ${
                      activeSection === menu.id
                        ? "text-primary"
                        : "dark:text-gray-300 text-black hover:text-[#e6d762]"
                    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {menu.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <ModeToggle />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden bg-background py-2">
          <ul className="list-none">
            {navigation.map((menu, index) => {
              const disabled = isDisabled(menu.id);
              return (
                <li key={index} className="py-2 px-4">
                  <button
                    onClick={() => !disabled && handleNavigation(menu.id)}
                    disabled={disabled}
                    className={`block text-lg font-normal no-underline w-full text-left cursor-pointer transition-opacity ${
                      activeSection === menu.id
                        ? "text-primary"
                        : "dark:text-gray-300 text-black hover:text-[#e6d762]"
                    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {menu.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
