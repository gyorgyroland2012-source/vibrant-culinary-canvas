import { createFileRoute } from "@tanstack/react-router";
import tacos from "@/assets/hero-tacos.jpg";
import burger from "@/assets/mexican-burger.jpg";
import chicken from "@/assets/chicken-tacos.jpg";
import margarita from "@/assets/margarita.jpg";
import churros from "@/assets/churros.jpg";
import corn from "@/assets/street-corn.jpg";
import birria from "@/assets/birria-tacos.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Galéria — TacoBar Budapest" },
      {
        name: "description",
        content:
          "Pillanatképek a konyhánkból, az étteremből és tányérjainkról. Nézd meg, milyen a TacoBar belülről.",
      },
      { property: "og:title", content: "Galéria — TacoBar Budapest" },
      { property: "og:description", content: "Ízek, hangulat, részletek — képekben." },
      { property: "og:image", content: interior },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: tacos, alt: "Pulled pork tacos", span: "row-span-2" },
  { src: interior, alt: "Étterem belső tere", span: "col-span-2" },
  { src: margarita, alt: "Jalapeño margarita" },
  { src: chicken, alt: "Chicken tacos", span: "row-span-2" },
  { src: burger, alt: "Mexikói hamburger" },
  { src: corn, alt: "Street corn" },
  { src: chef, alt: "Séf munka közben", span: "col-span-2" },
  { src: birria, alt: "Birria tacos" },
  { src: churros, alt: "Churros csokoládéval" },
];

function GalleryPage() {
  return (
    <>
      <section className="container mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Galéria</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Ízek, hangulat,
            <br />
            <span className="text-gradient-warm">pillanatok.</span>
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group hover-lift ${img.span ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-background text-sm font-semibold">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
