"use client";

import { ROUTES } from "@/app/routes";
import { StoreSwitcher } from "@/components/store-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Store } from "@prisma/client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { PopoverTrigger } from "./ui/popover";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  stores: Store[];
}

export const MobileNavbar: React.FC<StoreSwitcherProps> = ({ stores }) => {
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
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Admin dashboard</SheetTitle>
          <SheetDescription>Make changes to your store</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <StoreSwitcher items={stores} className="mr-6" />
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
              <SheetClose>{route.label}</SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
