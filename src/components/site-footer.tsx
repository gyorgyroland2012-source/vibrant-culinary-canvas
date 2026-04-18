import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative bg-foreground text-background mt-24 grain">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-warm text-primary-foreground font-display text-lg">
                T
              </span>
              <span className="font-display text-2xl">TacoBar Budapest</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Autentikus mexikói ízek a belváros szívében. Friss alapanyagok, kézműves
              koktélok, élő hangulat — minden este.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-copper-glow mb-5">
              Találj meg
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-copper" />
                <span>Budapest, Nádor u. 23, 1051</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-copper" />
                <a href="tel:+36202546406" className="hover:text-background">
                  06 20 254 6406
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 mt-1 shrink-0 text-copper" />
                <span>H–V · 12:00 – 22:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-copper-glow mb-5">
              Felfedezés
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><Link to="/menu" className="hover:text-background">Étlap</Link></li>
              <li><Link to="/about" className="hover:text-background">Rólunk</Link></li>
              <li><Link to="/gallery" className="hover:text-background">Galéria</Link></li>
              <li><Link to="/reservation" className="hover:text-background">Asztalfoglalás</Link></li>
              <li><Link to="/contact" className="hover:text-background">Kapcsolat</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row gap-4 justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} TacoBar Budapest. Minden jog fenntartva.</p>
          <p>Hecho con ❤️ en Budapest</p>
        </div>
      </div>
    </footer>
  );
}
