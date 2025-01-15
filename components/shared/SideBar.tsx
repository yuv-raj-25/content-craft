"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo ">
          <Image
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
            alt="logo"
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements cursor-pointer">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-600"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={link.label}
                        className={`${
                          isActive && "brightness-200 invert"
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;
                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-600"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={link.label}
                        className={`${
                          isActive && "brightness-200 invert"
                        }`}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-[#469967] bg-cover">
              <Link href="/sign-in">LogIn</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
