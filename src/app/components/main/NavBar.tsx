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

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = ["home", "services", "about", "contact"];
  const [active, setActive] = useState<string | null>(null);

  return (
    <Navbar
      maxWidth="2xl"
      className={`  pt-3 pb-1  ${
        pathname === "/admin" ? "hidden" : "flex"
      }       `}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden sm:flex gap-4">
        <NavbarItem isActive={pathname === "/"}>
          <Link
            color="foreground"
            className="relative  group pb-2 text-small font-poppins font-semibold tracking-wide "
            href="/"
          >
            <span
              className={`absolute bottom-0 left-0  h-0.5 bg-blueDark   group- group-hover:transition-all group-hover:duration-500 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
            ACCUEIL
          </Link>
        </NavbarItem>
        <NavbarItem
          isActive={pathname === "/services" || pathname.includes("services")}
        >
          <Link
            color="foreground"
            href=""
            className="relative  group pb-2  text-small capitalize font-poppins font-semibold tracking-wide "
          >
            <span
              className={`absolute bottom-[17px] left-0  h-0.5 bg-blueDark   group- group-hover:transition-all group-hover:duration-500 ${
                pathname === "/services" || pathname.includes("services")
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
            <Menu setActive={setActive}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="NOS SERVICES"
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/services/structured-cabling">
                    Câblage structuré
                  </HoveredLink>
                  <HoveredLink href="/services/residential-cabling-automation">
                    Câblage résidentiel et domotique
                  </HoveredLink>
                  <HoveredLink href="/services/it-equipment-installation">
                    installtion équipement informatique
                  </HoveredLink>
                  <HoveredLink href="/services/traditional-telephony">
                    Téléphonie traditionnelle
                  </HoveredLink>
                  <HoveredLink href="/services/ip-telephony">
                    Téléphonie IP
                  </HoveredLink>
                  <HoveredLink href="/services/business-telephony">
                    Téléphonie d&apos;entreprise
                  </HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link
            color="foreground"
            className="relative  group pb-2  text-small font-poppins font-semibold tracking-wide "
            href="/about"
          >
            <span
              className={`absolute bottom-0 left-0  h-0.5 bg-blueDark   group- group-hover:transition-all group-hover:duration-500 ${
                pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <Link
            color="foreground"
            className="relative  group pb-2   text-small font-poppins font-semibold tracking-wide"
            href="/contact"
          >
            <span
              className={`absolute bottom-0 left-0  h-0.5 bg-blueDark   group- group-hover:transition-all group-hover:duration-500 ${
                pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-dark text-background  text-small font-poppins font-semibold tracking-wide"
            href="#subscrib"
            variant="flat"
          >
            DEMANDEZ UNE SOUMISSION GRATUIT
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-12">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full font-semibold capitalize tracking-wide ${
                pathname.slice(1) === item
                  ? "text-red-500"
                  : pathname.slice(1) === "" && item === "home"
                  ? "text-primaryThree"
                  : "text-dark"
              }`}
              href={item == "home" ? "/" : "/" + item}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
