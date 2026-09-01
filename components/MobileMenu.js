"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";

export default function MobileMenu({ open, onClose }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 bg-ink text-cream transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <nav
        aria-label="Mobile"
        className="h-full flex flex-col justify-center px-8 gap-2"
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            tabIndex={open ? 0 : -1}
            className="font-display text-4xl sm:text-5xl py-2.5 border-b border-cream/10 hover:text-bronze transition-colors"
            style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          tabIndex={open ? 0 : -1}
          className="mt-8 inline-flex w-fit items-center px-7 py-3.5 text-sm tracking-wide uppercase border border-cream hover:bg-cream hover:text-ink transition-colors"
        >
          Start a Project
        </Link>
      </nav>
    </div>
  );
}
