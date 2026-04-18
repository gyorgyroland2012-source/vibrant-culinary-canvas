import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Kezdőlap" },
  { to: "/menu", label: "Étlap" },
  { to: "/about", label: "Rólunk" },
  { to: "/gallery", label: "Galéria" },
  { to: "/reservation", label: "Foglalás" },
  { to: "/contact", label: "Kapcsolat" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground font-display text-lg shadow-glow">
            T
          </span>
          <span className="font-display text-lg md:text-xl tracking-tight">
            Taco<span className="text-gradient-warm">Bar</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+36202546406"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            06 20 254 6406
          </a>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
          >
            <MapPin className="h-4 w-4" /> Foglalás
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background animate-fade-up">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-secondary text-primary" }}
                className="px-4 py-3 rounded-lg text-base font-medium hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/reservation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold uppercase"
            >
              Asztalfoglalás
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
