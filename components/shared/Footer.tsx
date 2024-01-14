import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t ">
        <div className="flex-center wrapper flex-between flex flex-col  gap-4 p-5 text-center sm:flex-row">
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={138}
              height={32}
            />
          </Link>

          <p className="">2024 dravyafolio.ai | All Right Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
