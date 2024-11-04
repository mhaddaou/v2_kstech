"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

import { Logo } from "../sub/Logo";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  
  
  const menuItems = ["home", "services", "about", "contact"];
  const [active, setActive] = useState<string | null>(null);


  return (
    <div className="w-screen bg-white lg:h-[120px] fixed top-0 z-50 ">
      <Navbar className="lg:hidden relative">
        <Image
          src="/background/gradientMesh.svg"
          alt=""
          fill
          className="object-cover w-full bg-no-repeat"
        />

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden relative"
        />
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="relative w-full h-full hidden lg:flex">
        <div className="w-full h-full flex">
          <div className="w-[25%] h-full  bg-blueDark relative">
            <div className=" absolute -right-[60px] 2xl:-right-28  z-10 custum-clip w-full text-inherit bg-blueDark h-full"></div>
            <Image src="/icons/LOGOrm.png" alt="logo" height={100} width={100} className="w-36 h-32" />
          </div>
          <div className="w-[75%] h-full relative">
            <Image
              src="/background/gradientMesh.svg"
              alt=""
              fill
              className="object-cover w-full bg-no-repeat"
            />
            <div className="w-full xl:w-[80%]  mx-auto h-full  ">
              <div className=" flex-1 flex justify-center pt-1 lg:pt-4 pr-3 lg:pr-10 xl:pr-0 lg:justify-end  gap-10 2xl:gap-16  items-center">
                <div className="flex  gap-4 flex-col lg:flex-row">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-7 lg:w-10 pt-1"
                      src="/icons/address.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col g">
                    <h1 className="font-medium tracking-wide text-[#001F3F] text-sm lg:text-base hidden lg:block">
                      Address
                    </h1>
                    <div className="text-[#808080] text-xs text-center lg:text-start lg:text-sm">
                      <p>7190 Rue Jarry H1J 1G5 </p>
                      <p>Anjou Québec</p>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-4 flex-col lg:flex-row">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-7 lg:w-10 pt-1"
                      src="/icons/phone.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                      Numéro de téléphone
                    </h1>
                    <div className="text-[#808080] text-xs lg:text-sm">
                      <p>+1 (438) 464-2161 </p>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-4 flex-col lg:flex-row">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-7 lg:w-10 pt-1"
                      src="/icons/email.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className=" hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                      Email
                    </h1>
                    <div className="text-[#808080] text-xs lg:text-sm">
                      <p>info@kstechnologie.com </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[45%]  -bottom-7 z-20">
          <div className="w-[75%] bg-black h-full mx-auto text-white flex">
            <div className="w-[80%]  h-full">
              <ul className="w-[90%] mx-auto h-full  flex justify-between items-center">
                <li className="w-fit relative pb-1 text-primaryFour group"><Link href="">Accueil <span className={` group-hover:w-full h-[2px] rounded-full left-0 bottom-0 bg-primaryFour absolute transition-all duration-400 ${pathname.toString().includes('services') || pathname.toString().includes('contact') || pathname.toString().includes('about') ? 'w-full' : 'w-0'} `}></span></Link></li>
                <li>À Propos</li>
                <li>Câblage</li>
                <li>
                </li>
                <li>Téléphonie</li>
                <li>Installation équipements informatiques</li>
              </ul>
            </div>
            <div className="flex-1 flex justify-end">
              <button className="bg-blueDark h-full px-6">contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
