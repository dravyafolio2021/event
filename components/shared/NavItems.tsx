"use client";

import React from "react";
import { headerLinks } from "@/constats";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  /**
   * @hook
   */
  const pathName = usePathname();
  return (
    <>
      <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathName === link.route;
          return (
            <li className="text-black">
              <Link
                href={link.route}
                key={link.route}
                className={` ${
                  isActive && "text-blue-900"
                } flex-center p-medium-16 whitespace-nowrap`}
              >
                {" "}
                {link.label}{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavItems;
