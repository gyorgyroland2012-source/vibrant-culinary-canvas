import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Calendar, Users, Clock } from "lucide-react";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title: "Asztalfoglalás — TacoBar Budapest" },
      {
        name: "description",
        content:
          "Foglalj asztalt online a TacoBar Budapestben. Pénteken és szombaton ajánlott előre foglalni.",
      },
      { property: "og:title", content: "Asztalfoglalás — TacoBar Budapest" },
      { property: "og:description", content: "Foglalj asztalt néhány kattintással." },
    ],
  }),
  component: ReservationPage,
});

function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Asztalfoglalás</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              Mentsd le az
              <br />
              <span className="text-gradient-warm">asztalod.</span>
            </h1>
            <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-md">
              Pénteken és szombaton általában megtelünk — ajánljuk az előzetes foglalást.
              Visszaigazolást e-mailben küldünk.
            </p>
          </div>

          <div className="space-y-4">
            <Detail icon={Clock} title="Nyitvatartás" text="Hétfő – Vasárnap · 12:00 – 22:00" />
            <Detail icon={Users} title="Csoportok" text="6+ fő esetén kérjük telefonos egyeztetést." />
            <Detail icon={Calendar} title="Speciális események" text="Privát rendezvény? Írj nekünk!" />
          </div>
        </div>

        <div className="lg:pl-10">
          {submitted ? (
            <div className="rounded-3xl bg-gradient-warm text-primary-foreground p-10 md:p-14 shadow-warm text-center animate-scale-in">
              <CheckCircle2 className="h-14 w-14 mx-auto mb-5 text-copper-glow" />
              <h2 className="font-display text-3xl md:text-4xl mb-3">Köszönjük!</h2>
              <p className="text-primary-foreground/90">
                A foglalásodat megkaptuk. Hamarosan visszaigazolást küldünk e-mailben.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-background hover:text-foreground transition-colors"
              >
                Új foglalás
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl bg-card border border-border p-6 md:p-10 shadow-card-warm space-y-5"
            >
              <Field label="Név" type="text" placeholder="Vezetéknév Keresztnév" required />
              <div className="grid grid-cols-2 gap-4">
                <Field label="E-mail" type="email" placeholder="te@email.hu" required />
                <Field label="Telefon" type="tel" placeholder="+36 30 ..." required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Dátum" type="date" required />
                <Field label="Időpont" type="time" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
                  Vendégek száma
                </label>
                <select
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>{n} fő</option>
                  ))}
                  <option>9+ fő (telefonon)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-semibold">
                  Megjegyzés
                </label>
                <textarea
                  rows={3}
                  placeholder="Allergia, születésnap, kedvenc asztal..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
              >
                Foglalás véglegesítése
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
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

function Detail({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-11 w-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-display text-base">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
      </div>
    </div>
  );
}
