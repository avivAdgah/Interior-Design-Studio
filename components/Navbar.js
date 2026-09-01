"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { NAV_LINKS } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          menuOpen
            ? "bg-ink border-transparent py-3"
            : scrolled
              ? "bg-cream/95 backdrop-blur border-ink/10 py-3"
              : "bg-cream border-transparent py-6"
        }`}
      >
        <div className="mx-auto w-full max-w-8xl px-6 md:px-10 lg:px-16 flex items-center justify-between">
          <Logo tone={menuOpen ? "cream" : "ink"} />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-sans text-sm tracking-wide uppercase transition-colors hover:text-bronze-deep ${
                    active ? "text-bronze-deep" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-3 text-sm tracking-wide uppercase border border-ink text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              Start a Project
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 gap-1.5"
            >
              <span
                className={`block h-px w-6 transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45 bg-cream" : "bg-ink"
                }`}
              />
              <span
                className={`block h-px w-6 transition-transform duration-300 ${
                  menuOpen ? "translate-y-[-3.5px] -rotate-45 bg-cream" : "bg-ink"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
