import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="max-w-7xl mx-auto px-6 pt-28 lg:pt-32">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1.5">
              {c.to && !last ? (
                <Link to={c.to} className="hover:text-foreground transition">{c.label}</Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-foreground" : ""}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function breadcrumbsJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.to ? `https://olmed.lovable.app${c.to}` : undefined,
    })),
  };
}
