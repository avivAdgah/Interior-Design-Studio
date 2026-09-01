import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import { NAV_LINKS } from "@/lib/nav";

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Pinterest", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo tone="cream" />
            <p className="font-sans text-sm text-cream/60 max-w-xs leading-relaxed">
              Architecture shaped around people, place, and purpose.
            </p>
            <div className="flex gap-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-sans text-xs tracking-wide uppercase text-cream/60 hover:text-bronze transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="md:col-span-3 flex flex-col gap-3"
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-2">
              Studio
            </span>
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-cream/80 hover:text-bronze transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-bronze mb-2">
              Contact
            </span>
            <a
              href="mailto:hello@northlinestudio.example"
              className="font-sans text-sm text-cream/80 hover:text-bronze transition-colors w-fit"
            >
              hello@northlinestudio.example
            </a>
            <a
              href="tel:+000000000000"
              className="font-sans text-sm text-cream/80 hover:text-bronze transition-colors w-fit"
            >
              +00 000 000 0000
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-between text-cream/50 font-sans text-xs">
          <p>&copy; 2026 Northline Studio.</p>
          <p>
            Portfolio demonstration project. Northline Studio is a fictional
            architecture and interior design practice.
          </p>
        </div>
      </Container>
    </footer>
  );
}
