import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Flame, Utensils, Heart } from "lucide-react";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Rólunk — TacoBar Budapest" },
      {
        name: "description",
        content:
          "Egy darab Mexikó a Duna mellett. 2012 óta szolgálunk autentikus mexikói ételeket Budapest belvárosában.",
      },
      { property: "og:title", content: "Rólunk — TacoBar Budapest" },
      { property: "og:description", content: "Történetünk, küldetésünk, és a csapat mögötte." },
      { property: "og:image", content: interior },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Leaf,
    title: "Friss alapanyagok",
    text: "Naponta vásárolunk a helyi piacokon. Saját kertünkben termesztjük a koriandert és a chiliket.",
  },
  {
    icon: Flame,
    title: "Hagyományos technikák",
    text: "Kőből készült molcajete, parázsfa grill, 12 órás húsok. Lassan, ahogy Oaxacában tanultuk.",
  },
  {
    icon: Heart,
    title: "Mexikói lélek",
    text: "Mindenkit családtagként kezelünk. A vendégszeretet nálunk nem szolgáltatás — életstílus.",
  },
  {
    icon: Utensils,
    title: "Modern tálalás",
    text: "Tisztelettel a klasszikusok iránt, de bátran kísérletezünk a 21. század ízeivel.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-xs uppercase tracking-widest text-primary">Történetünk</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
              2012 óta a
              <br />
              <span className="text-gradient-warm">belváros tüze.</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A TacoBar egy mexikói nagymamától kapott receptkönyvvel kezdődött. A Nádor
              utca 23. szám alatt nyitottuk meg az első kisbárt — azóta több mint
              150 000 vendéget szolgáltunk ki, és lettünk a város egyik legkedveltebb
              mexikói étterme.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hiszünk abban, hogy a jó étel összekapcsolja az embereket. Ezért minden tálcát
              úgy készítünk el, mintha a saját családunknak főznénk.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-warm">
            <img src={interior} alt="TacoBar belső tere" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Értékeink</p>
          <h2 className="font-display text-4xl md:text-5xl">Amiben hiszünk</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 hover-lift"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-warm flex items-center justify-center mb-5 shadow-glow">
                <v.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-warm">
            <img src={chef} alt="Séfünk munka közben" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-primary">A séf</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95]">
              Carlos Méndez
              <br />
              <span className="text-gradient-warm">— Executive Chef</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Carlos Mexikóvárosban nőtt fel, és Oaxacában tanulta a hagyományos mole-ok
              készítését. 15 év konyhai tapasztalat után 2018-ban csatlakozott a TacoBarhoz,
              és azóta vezeti az ízvilág minden részletét.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
