"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          width={180}
          height={28}
          alt="logo"
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                width={32}
                height={32}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>

            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <SheetTitle></SheetTitle>
              </SheetHeader>
              
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={180}
                  height={28}
                  className="cursor-pointer"
                />
                <ul className="header-nav_elements cursor-pointer">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;
                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap items-dark-700`}
                        key={link.route}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.route}
                        >
                          <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt={link.label}
                          />
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-[#469967] bg-cover">
            <Link href="/sign-in">LogIn</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
