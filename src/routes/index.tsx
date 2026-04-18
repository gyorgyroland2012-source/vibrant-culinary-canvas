import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, MapPin, Clock, Flame, Leaf, Utensils } from "lucide-react";
import heroTacos from "@/assets/hero-tacos.jpg";
import burger from "@/assets/mexican-burger.jpg";
import margarita from "@/assets/margarita.jpg";
import churros from "@/assets/churros.jpg";
import corn from "@/assets/street-corn.jpg";
import birria from "@/assets/birria-tacos.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TacoBar Budapest — Autentikus mexikói ízek a belvárosban" },
      {
        name: "description",
        content:
          "Friss tacos, kézműves margaritak és élő hangulat — Budapest legjobb mexikói étterme a Nádor utcában. 4.7★ / 1056 vélemény.",
      },
      { property: "og:title", content: "TacoBar Budapest — Autentikus mexikói" },
      {
        property: "og:description",
        content: "Friss tacos, kézműves koktélok, élő hangulat a belváros szívében.",
      },
      { property: "og:image", content: heroTacos },
      { name: "twitter:image", content: heroTacos },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <BentoMenu />
      <Story />
      <Reviews />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 md:space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <Flame className="h-3.5 w-3.5 text-primary" />
              <span>Budapest · Nádor u. 23</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              Mexikói tűz.
              <br />
              <span className="text-gradient-warm">Budapesti szív.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Frissen sütött tortillák, lassan főtt húsok, kézműves margaritak.
              A belváros legforróbb mexikói asztala vár — minden este 22:00-ig.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/reservation"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 md:px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
              >
                Asztalfoglalás
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 md:px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-secondary transition-colors"
              >
                Étlap megtekintése
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.7</span>
                <span className="text-sm text-muted-foreground">· 1 056 vélemény</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" /> Ma nyitva 22:00-ig
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-warm animate-scale-in">
              <img
                src={heroTacos}
                alt="Friss pulled pork tacos lime-mal és koriánderrel"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-ember" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-copper-glow mb-1">
                    Ház specialitása
                  </p>
                  <p className="font-display text-2xl text-background">Pulled Pork Tacos</p>
                </div>
                <div className="rounded-full bg-background/95 px-4 py-2 font-display text-sm">
                  2 900 Ft
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl bg-foreground text-background p-5 shadow-warm w-48 animate-fade-up">
              <p className="text-3xl font-display text-copper-glow">12+</p>
              <p className="text-xs uppercase tracking-widest mt-1 text-background/70">
                Év mexikói tradíció
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Tacos", "Burritos", "Quesadilla", "Margarita", "Churros", "Birria", "Nachos", "Sangría"];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-foreground text-background py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8 font-display text-xl md:text-2xl uppercase tracking-tight">
            {item}
            <span className="text-copper">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function BentoMenu() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Menü</p>
          <h2 className="font-display text-4xl md:text-6xl">Népszerű fogások</h2>
        </div>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors"
        >
          Teljes étlap <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(6,minmax(80px,auto))] md:grid-rows-[repeat(4,minmax(140px,auto))] gap-3 md:gap-4">
        <BentoCard
          className="col-span-2 row-span-2 md:row-span-2"
          image={burger}
          title="Mexikói Hamburger"
          subtitle="Jalapeño · érlelt sajt · brioche"
          price="3 200 Ft"
          large
        />
        <BentoCard
          className="col-span-2 md:col-span-1 row-span-2"
          image={margarita}
          title="Jalapeño Margarita"
          subtitle="Kézműves koktél"
          price="2 400 Ft"
        />
        <BentoCard
          className="col-span-2 md:col-span-1 row-span-2"
          image={birria}
          title="Birria Tacos"
          subtitle="Lassan főtt marha + consomé"
          price="3 400 Ft"
        />
        <BentoCard
          className="col-span-1 row-span-2"
          image={corn}
          title="Street Corn"
          subtitle="Cotija · chili · lime"
          price="1 800 Ft"
        />
        <BentoCard
          className="col-span-1 row-span-2"
          image={churros}
          title="Churros"
          subtitle="Csokoládé mártogatós"
          price="1 900 Ft"
        />
        <div className="col-span-2 row-span-2 rounded-2xl md:rounded-3xl bg-foreground text-background p-6 md:p-8 flex flex-col justify-between hover-lift">
          <div>
            <Utensils className="h-6 w-6 text-copper-glow mb-3" />
            <h3 className="font-display text-2xl md:text-3xl leading-tight">
              Friss alapanyagok
              <br />
              <span className="text-copper-glow">minden tálcán.</span>
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-background/70 mt-6">
            <Leaf className="h-4 w-4 text-copper-glow" />
            <span>Helyi piacról · Naponta</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  className = "",
  image,
  title,
  subtitle,
  price,
  large = false,
}: {
  className?: string;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  large?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl group hover-lift ${className}`}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/30 to-transparent" />
      <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end text-background">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-copper-glow mb-1">
          {subtitle}
        </p>
        <div className="flex items-end justify-between gap-2">
          <h3 className={`font-display leading-tight ${large ? "text-2xl md:text-4xl" : "text-base md:text-xl"}`}>
            {title}
          </h3>
          <span className="text-xs md:text-sm font-semibold whitespace-nowrap">{price}</span>
        </div>
      </div>
    </div>
  );
}

function Story() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-warm">
            <img src={interior} alt="A TacoBar belső tere" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card-warm mt-8">
            <img src={chef} alt="Séfünk munka közben" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-primary">Rólunk</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
            Egy darab Mexikó
            <br />
            <span className="text-gradient-warm">a Duna mellett.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            A TacoBar 2012 óta a budapestiek és turisták kedvence. Receptjeink Oaxacától
            Pueblán át Mexikóvárosig vezetnek — minden tortillát naponta sütünk, minden
            koktélt frissen mixelünk. Itt a hangulat is fűszeres.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat value="12+" label="Év Budapest" />
            <Stat value="4.7★" label="1056 vélemény" />
            <Stat value="100%" label="Friss alapanyag" />
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:text-primary transition-colors pt-2"
          >
            Történetünk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-gradient-warm">{value}</div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{label}</div>
    </div>
  );
}

const reviews = [
  {
    name: "Anna Kálmán",
    role: "Helyi idegenvezető · 122 vélemény",
    text:
      "A TacoBar nem csak egy hely, ahol mexikói ételt eszel — ez egy élmény. Tökéletesen eltalálja a friss konyha és a hangulatos atmoszféra egyensúlyát.",
  },
  {
    name: "Richard Hughson",
    role: "9 vélemény · Kalifornia",
    text:
      "Hihetetlen hely. A street corn fenomenális volt, a vegetáriánus tacos pedig kiváló — látszik, hogy minden alapanyag friss. Még dél-kaliforniai mércével is meglepő szint.",
  },
  {
    name: "Ákos Juhász",
    role: "Helyi idegenvezető · 69 vélemény",
    text:
      "A quesadilla nagyon jó volt, a mexikói-japán fúziós fogás meglepő ízvilágot hozott — nekünk nagyon ízlett. A desszert egyszerű volt, de finom.",
  },
];

function Reviews() {
  return (
    <section className="bg-foreground text-background py-20 md:py-28 grain">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-widest text-copper-glow mb-3">
              Vélemények
            </p>
            <h2 className="font-display text-4xl md:text-6xl">Mit mondanak rólunk?</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-copper-glow text-copper-glow" />
              ))}
            </div>
            <span className="font-display text-2xl">4.7</span>
            <span className="text-sm text-background/60">/ 1 056 Google vélemény</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-background/10 bg-background/[0.03] backdrop-blur p-7 hover:bg-background/[0.06] transition-colors"
            >
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-copper-glow text-copper-glow" />
                ))}
              </div>
              <p className="text-background/85 leading-relaxed mb-6">"{r.text}"</p>
              <div className="pt-5 border-t border-background/10">
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-background/50 uppercase tracking-wide mt-1">
                  {r.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 md:p-16 lg:p-20 text-center text-primary-foreground shadow-warm">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="relative max-w-3xl mx-auto space-y-6">
          <p className="text-xs uppercase tracking-widest text-copper-glow">Foglalj asztalt</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95]">
            Holnap este nálunk vacsorázol?
          </h2>
          <p className="text-primary-foreground/90 text-base md:text-lg">
            Foglald le asztalod néhány kattintással. Pénteken és szombaton ajánlott
            előre asztalt foglalni.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-background hover:text-foreground transition-colors"
            >
              Foglalás <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+36202546406"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-primary-foreground/10 transition-colors"
            >
              <MapPin className="h-4 w-4" /> 06 20 254 6406
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
