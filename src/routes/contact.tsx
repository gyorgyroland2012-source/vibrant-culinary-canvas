import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — TacoBar Budapest" },
      {
        name: "description",
        content:
          "Hívj fel, írj nekünk vagy látogass meg. Budapest, Nádor u. 23. — Telefon: 06 20 254 6406.",
      },
      { property: "og:title", content: "Kapcsolat — TacoBar Budapest" },
      { property: "og:description", content: "Címünk, nyitvatartás és üzenetküldés." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Kapcsolat</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Beszéljünk —
            <br />
            <span className="text-gradient-warm">vagy gyere be.</span>
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5">
            <Card icon={MapPin} title="Cím">
              <p>Budapest, Nádor u. 23</p>
              <p className="text-muted-foreground">1051, V. kerület</p>
              <a
                href="https://maps.google.com/?q=Budapest,+Nádor+u.+23"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-primary hover:underline"
              >
                Útvonalterv →
              </a>
            </Card>

            <div className="grid sm:grid-cols-2 gap-5">
              <Card icon={Phone} title="Telefon">
                <a href="tel:+36202546406" className="hover:text-primary">
                  06 20 254 6406
                </a>
              </Card>
              <Card icon={Mail} title="E-mail">
                <a href="mailto:hello@tacobar.hu" className="hover:text-primary">
                  hello@tacobar.hu
                </a>
              </Card>
            </div>

            <Card icon={Clock} title="Nyitvatartás">
              <ul className="space-y-1.5 text-sm">
                <li className="flex justify-between"><span>Hétfő – Csütörtök</span><span className="text-muted-foreground">12:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Péntek – Szombat</span><span className="text-muted-foreground">12:00 – 23:00</span></li>
                <li className="flex justify-between"><span>Vasárnap</span><span className="text-muted-foreground">12:00 – 22:00</span></li>
              </ul>
            </Card>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-card-warm">
              <iframe
                title="TacoBar Budapest térkép"
                src="https://www.openstreetmap.org/export/embed.html?bbox=19.045%2C47.500%2C19.055%2C47.508&layer=mapnik&marker=47.504%2C19.0500"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            {sent ? (
              <div className="rounded-3xl bg-gradient-warm text-primary-foreground p-10 md:p-14 shadow-warm text-center animate-scale-in">
                <CheckCircle2 className="h-14 w-14 mx-auto mb-5 text-copper-glow" />
                <h2 className="font-display text-3xl md:text-4xl mb-3">Üzenet elküldve</h2>
                <p>24 órán belül válaszolunk.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-card-warm space-y-5"
              >
                <h2 className="font-display text-2xl md:text-3xl mb-2">Írj nekünk</h2>
                <p className="text-sm text-muted-foreground -mt-3 mb-3">
                  Kérdés, foglalás vagy esemény? Itt elérsz minket.
                </p>
                <Input label="Név" placeholder="A neved" required />
                <Input label="E-mail" type="email" placeholder="te@email.hu" required />
                <Input label="Tárgy" placeholder="Miben segíthetünk?" />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
                    Üzenet
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Az üzeneted..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
                >
                  Üzenet elküldése
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 hover-lift">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center shadow-glow">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
        <p className="font-display text-base uppercase tracking-wide">{title}</p>
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
