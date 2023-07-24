"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { Sheet, SheetClose } from "./ui/sheet";
import { ROUTES_MANIFEST } from "next/dist/shared/lib/constants";
import { ROUTES } from "@/app/routes";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();

  const formattedRoutes = ROUTES.map((route) => {
    return {
      href: `/${params.storeId}${route.href.length > 1 ? route.href : ""}`,
      label: route.label,
      active:
        pathname ===
        `/${params.storeId}${route.href.length > 1 ? route.href : ""}`,
    };
  });

  return (
    <nav className={cn("items-center lg:space-x-6 ", className)}>
      {formattedRoutes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
