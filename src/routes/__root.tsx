import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gradient-warm">404</h1>
        <h2 className="mt-4 text-xl font-display">Az oldal nem található</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Lehet, hogy elkóborolt egy taco felé. Térjünk vissza a kezdőlapra.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary transition-colors"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TacoBar Budapest — Autentikus mexikói ízek a belvárosban" },
      {
        name: "description",
        content:
          "Modern mexikói étterem és bár Budapest szívében. Friss tacos, kézműves margaritak és élő hangulat — Nádor u. 23.",
      },
      { name: "author", content: "TacoBar Budapest" },
      { property: "og:title", content: "TacoBar Budapest — Autentikus mexikói" },
      {
        property: "og:description",
        content: "Friss tacos, kézműves koktélok és élő hangulat a belváros szívében.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
