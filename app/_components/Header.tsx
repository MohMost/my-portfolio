"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/locales/client";
import { ModeToggle } from "@/components/ui/ModToggler";
import { Button } from "@/components/ui/button";

export default function Header() {
  const t = useI18n();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr";
  const homePath = `/${locale}`;
  const pricingPath = `/${locale}/pricing`;
  const isHome = pathname === homePath || pathname === `${homePath}/`;
  const navigation = useMemo(
    () => [
      { name: `${t("navbar.services")}`, id: "#services" },
      { name: `${t("navbar.portfolio")}`, id: "#portfolio" },
      { name: `${t("navbar.team")}`, id: "#team" },
      { name: `${t("navbar.pricing")}`, id: pricingPath },
      { name: `${t("navbar.contact")}`, id: "#contact" },
    ],
    [pricingPath, t]
  );
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = navigation
        .filter((menu) => menu.id.startsWith("#"))
        .map((menu) => document.querySelector(menu.id));
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop - 120;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(`#${section.id}`);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, navigation]);

  const getHref = (id: string) => (id.startsWith("#") ? `${homePath}${id}` : id);

  return (
    <header className="fixed top-0 z-[100] w-full border-b bg-background/90 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link href={homePath} className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-secondary to-primary font-black text-white shadow-lg">
            PS
          </div>
          <div className="leading-tight">
            <p className="font-black text-black dark:text-white">Prospecta Studio</p>
            <p className="text-xs text-muted-foreground">Web agency</p>
          </div>
        </Link>
        <div className="flex-1" />
        <button
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-lg border lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <nav className="hidden items-center text-center lg:flex">
          <ul className="flex list-none items-center gap-1">
            {navigation.map((menu, index) => (
              <li className="nav__item" key={menu.id}>
                <Link
                  href={getHref(menu.id)}
                  className={`inline-block rounded-md px-4 py-2 text-base font-semibold no-underline transition ${
                    activeSection === menu.id || pathname === menu.id
                      ? "text-secondary"
                      : "text-muted-foreground hover:text-secondary"
                  }`}
                >
                  <span className="mr-1 text-primary">0{index + 1}.</span>
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="hidden lg:inline-flex" asChild>
          <Link href={`${homePath}#contact`}>{t("navbar.cta")}</Link>
        </Button>
        <ModeToggle />
      </div>

      {menuOpen && (
        <div className="border-t bg-background py-3 lg:hidden">
          <ul className="mx-auto max-w-7xl list-none px-4">
            {navigation.map((menu) => (
              <li key={menu.id} className="py-2">
                <Link
                  href={getHref(menu.id)}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-lg font-semibold text-muted-foreground hover:bg-muted hover:text-secondary"
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
