import tacos from "@/assets/hero-tacos.jpg";
import burger from "@/assets/mexican-burger.jpg";
import chicken from "@/assets/chicken-tacos.jpg";
import margarita from "@/assets/margarita.jpg";
import churros from "@/assets/churros.jpg";
import corn from "@/assets/street-corn.jpg";
import birria from "@/assets/birria-tacos.jpg";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
  category: string;
};

export const menu: MenuItem[] = [
  {
    name: "Mexikói Hamburger",
    description: "Marhahús pogácsa, jalapeño, érlelt sajt, chipotle majonéz, brioche bun.",
    price: "3 200 Ft",
    image: burger,
    popular: true,
    category: "Főételek",
  },
  {
    name: "Chicken Tacos",
    description: "Lime-os grillezett csirke, salsa verde, friss koriander, piros hagyma.",
    price: "2 800 Ft",
    image: chicken,
    popular: true,
    category: "Tacos",
  },
  {
    name: "Pulled Pork Tacos",
    description: "12 órán át sült sertés, ananász salsa, koriander, lime.",
    price: "2 900 Ft",
    image: tacos,
    popular: true,
    category: "Tacos",
  },
  {
    name: "Birria Tacos",
    description: "Lassan főtt marha, ropogós sajt, consomé mártogatós.",
    price: "3 400 Ft",
    image: birria,
    popular: true,
    category: "Tacos",
  },
  {
    name: "Chicken Burrito",
    description: "Grillezett csirke, fekete bab, rizs, guacamole, pico de gallo.",
    price: "2 950 Ft",
    category: "Főételek",
  },
  {
    name: "Quesadilla Chicken",
    description: "Ropogósra sült tortilla, csirke, három sajt, salsa roja.",
    price: "2 700 Ft",
    category: "Főételek",
  },
  {
    name: "Street Corn",
    description: "Grillezett kukorica, cotija sajt, chili, lime, koriander.",
    price: "1 800 Ft",
    image: corn,
    popular: true,
    category: "Előételek",
  },
  {
    name: "Nachos Especial",
    description: "Házi tortilla chips, queso, jalapeño, fekete bab, sour cream.",
    price: "2 200 Ft",
    category: "Előételek",
  },
  {
    name: "Jalapeño Margarita",
    description: "Tequila blanco, friss lime, jalapeño infúzió, sós perem.",
    price: "2 400 Ft",
    image: margarita,
    popular: true,
    category: "Koktélok",
  },
  {
    name: "Paloma",
    description: "Tequila, grapefruit, lime, soda, himalájai só.",
    price: "2 300 Ft",
    category: "Koktélok",
  },
  {
    name: "Sangría",
    description: "Vörösbor, friss gyümölcsök, fahéj, narancslikőr.",
    price: "2 100 Ft",
    category: "Koktélok",
  },
  {
    name: "Churros",
    description: "Frissen sült churros, fahéjas cukor, csokoládé mártogatós.",
    price: "1 900 Ft",
    image: churros,
    popular: true,
    category: "Desszertek",
  },
];

export const categories = ["Tacos", "Főételek", "Előételek", "Koktélok", "Desszertek"];
