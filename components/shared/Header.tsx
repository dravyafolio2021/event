import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
// import { Image } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="  bg-white z-10 shadow-sm w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link className="w-36" href="/">
            <Image
              alt="Image"
              width={128}
              height={38}
              src="/assets/images/logo.svg"
            />
          </Link>

          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>
          <div className="flex w-32 justify-end items-center gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <MobileNav />
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Get Started</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
