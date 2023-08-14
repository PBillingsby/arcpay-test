'use client'

import { useEffect, useState } from "react";
import ArcPayIcon from "./ArcPayIcon";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-[#2F1931] text-[#D0D0D0] md:h-auto ">
      <nav className="md:flex py-2 lg:flex-row flex-col w-full px-6 md:px-16">
        <div className="items-center justify-between lg:justify-normal flex gap-8 w-full mx-auto h-full">
          <img src="/arcpay-logo.svg" alt="ArcPay Logo" />
          <span className="flex md:flex-row flex-col gap-2">
            <a href="#appstore-link">
              <img src="/shared/app-store.svg" alt="App Store" />
            </a>
            <a href="#googlestorelink">
              <img src="/shared/google-play.svg" alt="Google Play" />
            </a>
          </span>
        </div>
        <div className="mb-2 lg:pb-0 mx-auto items-center md:flex h-full">
          <ul className="md:flex mx-auto space-x-12 mt-4">
            <div className="flex gap-4 justify-between">
              <li className="font-bold text-lg flex-shrink-0">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold text-lg flex-shrink-0">
                <Link href="/merchants">Merchants</Link>
              </li>
              <li className="font-bold text-lg flex-shrink-0">
                <Link href="/developers">Developers</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};
