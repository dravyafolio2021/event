import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="shravya"
            width={24}
            height={24}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start gap-6 bg-white md:hidden ">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={138}
            height={32}
          />
          <Separator className="border  border-green-50" />
          <SheetHeader>
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription> */}

            <NavItems  />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
