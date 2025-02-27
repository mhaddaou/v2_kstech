"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const menuItems = [  
    {  
      title: "Accueil",  
      link: "/"  
    },  
    {  
      title: "Câblage structuré",  
      link: "/cabling/structured-cabling"  
    },  
    {  
      title: "Câblage résidentiel",  
      link: "/cabling/residential-cabling-automation"  
    },  
    {  
      title: "Câblage audio",  
      link: "/cabling/audio-wiring"  
    },  
    {  
      title: "Entretien et Réparation",  
      link: "/cabling/maintenance-and-repair"  
    },  
    {  
      title: "Téléphonie traditionnelle",  
      link: "/phone/hybride"  
    },  
    {  
      title: "Téléphonie IP",  
      link: "/phone/ip-phone"  
    },  
    {
      title: "Entretien et Réparation",
      link: "/phone/reparation",
    },
    {  
      title: "Services",  
      link: "/services"  
    }  
  ];  

  
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="w-screen bg-white lg:h-[120px] fixed top-0 z-50 ">
      <Navbar className="lg:hidden relative" onMenuOpenChange={setIsMenuOpen}>
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
                href={item.link}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="relative w-full h-full hidden lg:flex">
        <div className="w-full h-full flex">
          <div className="w-[25%] h-full  bg-blueDark relative">
            <div className=" absolute -right-[60px] 2xl:-right-28  z-10 custum-clip w-full text-inherit bg-blueDark h-full"></div>
            <div className="w-full h-full  relative z-20 flex justify-start items-center pb-3 pl-6">
              <Image
                src="/icons/whitelogo.png"
                alt="logo"
                height={100}
                width={100}
                className=" w-[70%]"
              />
            </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[45%]  -bottom-7 z-20">
          <div className="w-[75%] bg-black h-full mx-auto text-white flex">
            <div className="w-full  h-full">
              <ul className="w-full pl-5 mx-auto h-full  flex justify-between items-center">
                <li>
                  <Link
                    color="foreground"
                    className={`relative  group pb-2 text-small font-poppins font-semibold tracking-wide ${
                      pathname === "/" ? "text-primaryFour" : "text-white"
                    }`}
                    href="/"
                  >
                    <span
                      className={`absolute bottom-0 left-0  h-0.5 bg-primaryFour   group- group-hover:transition-all group-hover:duration-500 ${
                        pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                    ACCUEIL
                  </Link>
                </li>

                <li>
                  <Link
                    color="foreground"
                    className={`relative   group pb-2  text-small font-poppins font-semibold tracking-wide ${
                      pathname === "/about" ? "text-primaryFour" : "text-white "
                    }`}
                    href="/about"
                  >
                    <span
                      className={`absolute bottom-0 left-0  h-0.5 bg-primaryFour   group- group-hover:transition-all group-hover:duration-500 ${
                        pathname === "/about"
                          ? "w-full"
                          : "w-0 group-hover:w-full "
                      }`}
                    ></span>
                    À Propos
                  </Link>
                </li>

                <li>
                  <Link
                    color="foreground"
                    href=""
                    className="relative  group pb-2  text-small capitalize font-poppins font-semibold tracking-wide "
                  >
                    <span
                      className={`absolute bottom-[17px] left-0  h-0.5 bg-primaryFour   group- group-hover:transition-all group-hover:duration-500 ${
                        pathname === "/cabling" || pathname.includes("cabling")
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                    <Menu setActive={setActive}>
                      <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Câblage"
                      >
                        <div className="flex flex-col space-y-4 text-sm">
                          <HoveredLink href="/cabling/structured-cabling">
                            Câblage structuré
                          </HoveredLink>
                          <HoveredLink href="/cabling/residential-cabling-automation">
                            Câblage résidentiel
                          </HoveredLink>
                          <HoveredLink href="/cabling/audio-wiring">
                            Câblage Audio
                          </HoveredLink>
                          <HoveredLink href="/cabling/maintenance-and-repair">
                            Entretien et Reparation
                          </HoveredLink>
                        </div>
                      </MenuItem>
                    </Menu>
                  </Link>
                </li>
                <li>
                  <Link
                    color="foreground"
                    href=""
                    className="relative  group pb-2  text-small capitalize font-poppins font-semibold tracking-wide "
                  >
                    <span
                      className={`absolute bottom-[17px] left-0  h-0.5 bg-primaryFour   group- group-hover:transition-all group-hover:duration-500 ${
                        pathname === "/phone" || pathname.includes("phone")
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                    <Menu setActive={setActive}>
                      <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Téléphonie"
                      >
                        <div className="flex flex-col space-y-4 text-sm">
                          <HoveredLink href="/phone/hybride">
                            Téléphonie traditionnelle
                          </HoveredLink>
                          <HoveredLink href="/phone/ip-phone">
                            Telephonie IP
                          </HoveredLink>
                          <HoveredLink href="/phone/reparation">
                            Entretien et réparations
                          </HoveredLink>
                        </div>
                      </MenuItem>
                    </Menu>
                  </Link>
                </li>
                <li>
                  <Link
                    color="foreground"
                    className={`relative   group pb-2  text-small font-poppins font-semibold tracking-wide ${
                      pathname === "/services"
                        ? "text-primaryFour"
                        : "text-white "
                    }`}
                    href="/services"
                  >
                    <span
                      className={`absolute bottom-0 left-0  h-0.5 bg-primaryFour   group- group-hover:transition-all group-hover:duration-500 ${
                        pathname === "/services"
                          ? "w-full"
                          : "w-0 group-hover:w-full "
                      }`}
                    ></span>
                    Services
                  </Link>
                </li>
                <li className="h-full">
                  <Link
                    href="/contact"
                    className="bg-blueDark border border-blueDark hover:text-gray-300 transition-colors duration-300 ease-in'
                     hover:border-primaryFour  flex items-center h-full px-8 text-small capitalize font-poppins font-semibold tracking-wide"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
