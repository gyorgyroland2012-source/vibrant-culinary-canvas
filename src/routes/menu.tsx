import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Flame } from "lucide-react";
import { menu, categories } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Étlap — TacoBar Budapest" },
      {
        name: "description",
        content:
          "Fedezd fel teljes mexikói étlapunkat: friss tacos, burritók, kézműves koktélok és desszertek. Naponta friss alapanyagokból.",
      },
      { property: "og:title", content: "Étlap — TacoBar Budapest" },
      {
        property: "og:description",
        content: "Tacos, burritók, margaritak — autentikus mexikói étlap a belvárosban.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>("Mind");
  const tabs = ["Mind", ...categories];
  const filtered = active === "Mind" ? menu : menu.filter((m) => m.category === active);

  return (
    <>
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Étlap</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Minden tál egy
            <br />
            <span className="text-gradient-warm">utazás Mexikóba.</span>
          </h1>
          <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-2xl">
            Friss tortillák, lassan főtt húsok, ropogós zöldségek és kézzel mixelt koktélok.
            Az árak személyenként kb. 4 000 – 6 000 Ft.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24">
        <div className="sticky top-16 md:top-20 z-30 -mx-4 md:mx-0 px-4 md:px-0 py-4 bg-background/90 backdrop-blur border-b border-border mb-10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === t
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover-lift"
            >
              {item.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.popular && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-foreground/90 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-background">
                      <Flame className="h-3 w-3 text-copper-glow" /> Népszerű
                    </span>
                  )}
                </div>
              )}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-display text-base md:text-lg text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                  {item.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
