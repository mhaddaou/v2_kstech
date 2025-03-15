"use client";

import { useEffect, useState } from "react";
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../../public/icons/IconServices.svg";
import { useAppSelector } from "@/redux/hooks";
import services from "../../../../data/services";
import { LanguageEnum } from "@/redux/features/languages/language-slice";
import Spin from "../../sub/Spin";

export default function ServicesPage() {
  const language = useAppSelector((state) => state.language.value);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Spin/>
    );
  }

  return (
    <div className="w-full relative flex flex-col pt-16">
      <div className="w-full h-[35vh] lg:h-[60vh]">
        <AspectRatio
          ratio={20 / 8}
          className="h-[35vh] lg:h-[80vh] 2xl:h-[60vh]"
        >
          <motion.img
            src="/images/services.webp"
            alt="Services"
            style={{
              objectFit: "cover", // Ensures the image covers the container
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black/70">
            <div className="w-full h-full flex flex-col justify-center items-center gap-8">
              <h1 className="text-xl md:text-3xl font-bold text-light max-w-sm md:max-w-lg text-center">
                {language === LanguageEnum.FR
                  ? services.hero.title.fr
                  : services.hero.title.en}
              </h1>
              <Link
                href="/contact"
                className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5 font-semibold"
              >
                {language === LanguageEnum.FR
                  ? services.hero.cta.fr
                  : services.hero.cta.en}
              </Link>
            </div>
          </div>
        </AspectRatio>
      </div>

      <div className="pt-10 lg:pt-40 2xl:pt-28 w-full container">
        <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col justify-center gap-6 md:gap-8">
          <div className="w-full flex items-center gap-4 justify-center">
            <div>
              <Image
                className="w-10 md:w-12 lg:w-14"
                src={Icon}
                alt="icon"
                height={10}
                width={10}
              />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl lg:text-3xl capitalize font-poppins">
                Services
              </h3>
            </div>
          </div>

          <div className="pt-6 flex flex-col lg:gap-7 gap-4">
            <div>
              <h2 className="font-poppins md:text-lg pb-2">
                {language === LanguageEnum.FR
                  ? services.mainSection.description.fr
                  : services.mainSection.description.en}
              </h2>
              <ul className="list-disc flex flex-col gap-2">
                {services.mainSection.servicesList.map((prod, index) => {
                  return (
                    <li key={index} className="font-poppins ml-8">
                      {language === LanguageEnum.FR ? prod.fr : prod.en}
                    </li>
                  );
                })}
              </ul>
              <div className="w-full h-0.5 bg-[#20207B] mt-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
