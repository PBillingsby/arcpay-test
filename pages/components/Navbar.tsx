'use_client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import ArcPayIcon from "./ArcPayIcon";
import MobileMenu from "./MobileMenu";
import Banner from "./Banner";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className="bg-inherit">
      <div className="p-0 hidden md:flex md:visible bg-[#2F1931] h-auto pb-2">
        <Banner />
      </div>
      <div className="flex md:justify-between w-full px-16 h-[90px]">
        <div className="flex md:justify-normal justify-between md:w-auto w-full">
          <div className="md:sticky items-center flex md:justify-between w-full mx-auto h-full">
            <Link href="/">
              <ArcPayIcon />
            </Link>
          </div>
          <div className="md:hidden visible items-center pt-6">
            <div className="outline-none mobile-menu-button">
              <MobileMenu />
            </div>
          </div>
        </div>
        <div className="flex h-full items-center">
          <ul className="hidden md:visible md:flex items-center space-x-6 text-[#9747FF]">
            <li className={`${pathname === "/" ? 'underline underline-offset-8 text-[#2F1931]' : 'text-[#9747FF]'} font-bold text-lg flex flex-shrink-0`}>
              <Link href="/">
                Get the app
              </Link>
            </li>
            <li className={`${pathname === "/merchants" ? 'underline underline-offset-8 text-[#2F1931]' : 'text-[#9747FF]'} font-bold text-lg flex flex-shrink-0`}>
              <Link href="/merchants">
                Merchants
              </Link>
            </li>
            <li className={`${pathname === "/developers" ? 'underline underline-offset-8 text-[#2F1931]' : 'text-[#9747FF]'} font-bold text-lg flex flex-shrink-0`}>
              <Link href="/developers">
                Developers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}
