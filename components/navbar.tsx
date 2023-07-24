import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { auth, UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import { StoreSwitcher } from "@/components/store-switcher";
import { ModeToggle } from "@/components/toggle-theme";
import { MobileNavbar } from "@/components/mobile-navbar";

export const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MobileNavbar stores={stores} />
        <div className="hidden lg:flex h-16 items-center">
          <StoreSwitcher items={stores} className="mr-6" />
          <MainNav />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
