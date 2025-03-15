"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";

import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu";
import Image from "next/image";
import LanguageSwitcher from "./language";
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";

export default function NavBar() {
  const [openDropdowns, setOpenDropdowns] = useState({
    cabling: false,
    telephony: false,
  });

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    setOpenDropdowns({ cabling: false, telephony: false });
  };

  const toggleDropdown = (dropdown: "cabling" | "telephony") => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };
  
  const dropdownVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const [active, setActive] = useState<string | null>(null);
  const language = useAppSelector((state) => state.language.value);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-screen bg-white lg:h-[120px] fixed top-0 z-[30] ">
      <Navbar className="lg:hidden relative  " isMenuOpen={isMenuOpen}>
        <Image
          src="/background/gradientMesh.svg"
          alt=""
          fill
          className="object-cover w-full bg-no-repeat"
        />

        <NavbarMenuToggle
        onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden relative"
        />
        <LanguageSwitcher />

        <NavbarMenu>
          <div className="w-full bg-blueDark h-[80px] rounded-md">
            <Image
              src="/icons/whitelogo.png"
              alt="logo"
              height={50}
              width={50}
              className="w-full h-full"
            />
          </div>
        

          <div className="w-full">
          <Link  
                    href="/"  
                    onClick={handleMenuItemClick}  
                    className="w-full flex items-center justify-between py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"   
                  >  
                    {language === LanguageEnum.FR ? "Accueil" : "Home"}  
                  </Link> 
          </div>
          <div className="w-full">  
            <button  
              onClick={() => toggleDropdown('cabling')}  
              className="w-full flex items-center justify-between py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"  
            >  
              <span>{language === LanguageEnum.FR ? "Câblage" : "Cabling"}</span>  
              <ChevronDown  
                className={`transform transition-transform ${  
                  openDropdowns.cabling ? 'rotate-180' : ''  
                }`}  
              />  
            </button>  
            <AnimatePresence>  
              {openDropdowns.cabling && (  
                <motion.div  
                  variants={dropdownVariants}  
                  initial="hidden"  
                  animate="visible"  
                  exit="exit"  
                  className="pl-4 overflow-hidden"  
                >  
                  <Link  
                    href="/cabling/structured-cabling"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Câblage structuré" : "Structured cabling"}  
                  </Link>  
                  <Link  
                    href="/cabling/residential-cabling-automation"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Câblage résidentiel" : "Residential cabling"}  
                  </Link>  
                  <Link  
                    href="/cabling/audio-wiring"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Câblage Audio" : "Audio cabling"}  
                  </Link>  
                  <Link  
                    href="/cabling/maintenance-and-repair"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Entretien et Reparation" : "Maintenance and Repair"}  
                  </Link>  
                </motion.div>  
              )}  
            </AnimatePresence>  
          </div>  

          {/* Telephony Dropdown */}  
          <div className="w-full">  
            <button  
              onClick={() => toggleDropdown('telephony')}  
              className="w-full flex items-center justify-between py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"  
            >  
              <span>{language === LanguageEnum.FR ? "Téléphonie" : "Telephony"}</span>  
              <ChevronDown  
                className={`transform transition-transform ${  
                  openDropdowns.telephony ? 'rotate-180' : ''  
                }`}  
              />  
            </button>  
            <AnimatePresence>  
              {openDropdowns.telephony && (  
                <motion.div  
                  variants={dropdownVariants}  
                  initial="hidden"  
                  animate="visible"  
                  exit="exit"  
                  className="pl-4 overflow-hidden"  
                >  
                  <Link  
                    href="/phone/hybride"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Téléphonie traditionnelle" : "Traditional telephony"}  
                  </Link>  
                  <Link  
                    href="/phone/ip-phone"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Telephonie IP" : "IP telephony"}  
                  </Link>  
                  <Link  
                    href="/phone/reparation"  
                    onClick={handleMenuItemClick}  
                    className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"  
                  >  
                    {language === LanguageEnum.FR ? "Entretien et réparations" : "Maintenance and repairs"}  
                  </Link>  
                </motion.div>  
              )}  
            </AnimatePresence>  
          </div>  
          <div className="w-full">
          <Link  
                    href="/services"  
                    onClick={handleMenuItemClick}  
                    className="w-full flex items-center justify-between py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"   
                  >  
                    Services  
                  </Link> 
          </div>
          <div className="w-full">
          <Link  
                    href="/contact"  
                    onClick={handleMenuItemClick}  
                    className="w-full flex items-center justify-between py-2 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"   
                  >  
                    Contact  
                  </Link> 
          </div>

          <div className="w-full bg-blueDark flex flex-col gap-5 py-5 rounded-lg my-3">
                <div className="flex  gap-4  items-center justify-between   w-[70%] mx-auto">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-9 pt-1"
                      src="/icons/phoneWhite.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                      {language === LanguageEnum.FR
                        ? "Numéro de téléphone"
                        : "Phone"}
                    </h1>
                    <div className="text-white text-sm lg:text-sm">
                      <p>+1 (438) 464-2161 </p>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-4  items-center justify-between   w-[70%] mx-auto">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-9 pt-1"
                      src="/icons/emailWhite.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className=" hidden lg:block font-medium tracking-wide text-[#001F3F] text-sm lg:text-base">
                      Email
                    </h1>
                    <div className="text-white text-sm lg:text-sm">
                      <p>info@kstechnologie.com </p>
                    </div>
                  </div>
                </div>
                <div className="flex  gap-4  items-center justify-between   w-[70%] mx-auto">
                  <div className="flex justify-center lg:justify-start">
                    <Image
                      className="w-9 pt-1"
                      src="/icons/positionWhite.svg"
                      alt="adress"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col g">
                    <h1 className="font-medium tracking-wide text-[#001F3F] text-sm lg:text-base hidden lg:block">
                      {language === LanguageEnum.FR ? "Adresse" : "Address"}
                    </h1>
                    <div className="text-white text-sm text-center lg:text-start lg:text-sm">
                      <p>7190 Rue Jarry H1J 1G5 </p>
                      <p>Anjou Québec</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-3">
                            <p className="text-sm font-[Poppins] text-black/80">
                              © 2024 KS Technologie.  {language === LanguageEnum.FR ? 'Tous droits réservés.' : 'All rights reserved.'} 
                            </p>
                          </div>

          
        </NavbarMenu>
      </Navbar>
      <div className="relative w-full h-full hidden lg:flex">
        <div className="w-full h-full flex">
          <div className="w-[25%] h-full  bg-blueDark relative">
            <div className=" absolute -right-[60px] 2xl:-right-28  z-10 custum-clip w-full text-inherit bg-blueDark h-full"></div>
            <div className="w-full h-full relative z-20 flex justify-start items-center pb-3 pl-6">
              <Image
                src="/icons/whitelogo.png"
                alt="logo"
                height={0}
                width={0}
                className="w-[10vw] sm:w-[12vw] md:w-[15vw] lg:w-[10vw] xl:w-[8vw]"
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
                      {language === LanguageEnum.FR
                        ? "Numéro de téléphone"
                        : "Phone"}
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
                      {language === LanguageEnum.FR ? "Adresse" : "Address"}
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
          <div className="w-[75%]  h-full mx-auto text-white flex ">
            <div className="w-full  h-full flex items-center">
              <ul className="w-full bg-black pl-5 mx-auto h-full  flex justify-between items-center">
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
                    {language === LanguageEnum.FR ? "ACCUEIL" : "HOME"}
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
                    {language === LanguageEnum.FR ? "À Propos" : "About"}
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
                            {language === LanguageEnum.FR
                              ? "Câblage structuré"
                              : "Structured cabling"}
                          </HoveredLink>
                          <HoveredLink href="/cabling/residential-cabling-automation">
                            {language === LanguageEnum.FR
                              ? "Câblage résidentiel"
                              : "Residential cabling"}
                          </HoveredLink>
                          <HoveredLink href="/cabling/audio-wiring">
                            {language === LanguageEnum.FR
                              ? "Câblage Audio"
                              : "Audio cabling"}
                          </HoveredLink>
                          <HoveredLink href="/cabling/maintenance-and-repair">
                            {language === LanguageEnum.FR
                              ? "Entretien et Reparation"
                              : "Maintenance and Repair"}
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
                            {language === LanguageEnum.FR
                              ? "Téléphonie traditionnelle"
                              : "Traditional telephony"}
                          </HoveredLink>
                          <HoveredLink href="/phone/ip-phone">
                            {language === LanguageEnum.FR
                              ? "Telephonie IP"
                              : "IP telephony"}
                          </HoveredLink>
                          <HoveredLink href="/phone/reparation">
                            {language === LanguageEnum.FR
                              ? "Entretien et réparations"
                              : "Maintenance and repairs"}
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
              <div className="bg-black h-full flex justify-center items-center  ">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
