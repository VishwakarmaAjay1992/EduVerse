import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="touch-scroll -mx-1 mb-5 overflow-x-auto px-1 pb-1 text-sm sm:mb-6"
    >
      <div className="flex min-w-max items-center gap-1">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-1">
            {i > 0 && <ChevronRight className="size-3.5 text-muted-foreground" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="max-w-[15rem] truncate text-foreground" title={item.label}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
