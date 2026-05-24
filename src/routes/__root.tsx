import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OLMED · Piotr i Radosław Medyńscy" },
      { name: "description", content: "OLMED Łęczna — rodzinny serwis samochodowy, sklep z częściami, klimatyzacja, opony i Okręgowa Stacja Kontroli Pojazdów. 25 lat doświadczenia, partner O.K. Serwis, ELF i ORLEN." },
      { name: "author", content: "OLMED Piotr i Radosław Medyńscy" },
      { property: "og:site_name", content: "OLMED Łęczna" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:title", content: "OLMED · Piotr i Radosław Medyńscy" },
      { property: "og:description", content: "OLMED Łęczna — rodzinny serwis samochodowy, sklep z częściami, klimatyzacja, opony i Okręgowa Stacja Kontroli Pojazdów. 25 lat doświadczenia, partner O.K. Serwis, ELF i ORLEN." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "OLMED · Piotr i Radosław Medyńscy" },
      { name: "twitter:description", content: "OLMED Łęczna — rodzinny serwis samochodowy, sklep z częściami, klimatyzacja, opony i Okręgowa Stacja Kontroli Pojazdów. 25 lat doświadczenia, partner O.K. Serwis, ELF i ORLEN." },
      { name: "google-site-verification", content: "_gCuTVR6M-yuJXF2JRVFJFE4YP9BhRw_dFfto9B3Wss" },
      { name: "geo.region", content: "PL-LU" },
      { name: "geo.placename", content: "Łęczna" },
      { name: "geo.position", content: "51.3014;22.8806" },
      { name: "ICBM", content: "51.3014, 22.8806" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-BLM3779TEQ",
      },
      {
        children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-BLM3779TEQ');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
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
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
