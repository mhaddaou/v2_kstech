"use client";
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../../public/icons/IconServices.svg";
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";
import hybridPhone from "@/data/hybride";
import { useEffect, useState } from "react";

export default function HybridePage() {
  const language = useAppSelector((state) => state.language.value)
  const telephonyDescription = {
    fr: [
      "La téléphonie traditionnelle offre une gamme de systèmes de téléphonie Hybride et analogique fiables et éprouvés, y compris les solutions Norstar, Samsung, Nortel, Panasonic …etc.",
      "Pour les entreprises qui privilégient les technologies classiques. KS Technologie offre plusieurs services incluant la Vente, l'Installation, la Configuration, la Réparation et la maintenance de ces systèmes pour garantir une communication fluide et ininterrompue.",
      "Ces systèmes de téléphonie traditionnelle sont idéaux pour les entreprises cherchant une solution de communication stable et simple d'utilisation. Avec une installation professionnelle et un support continu, la téléphonie traditionnelle assure une connectivité fiable, permettant aux entreprises de rester en contact avec leurs clients et partenaires sans interruption.",
    ],
    en: [
      "Traditional telephony offers a range of reliable and proven Hybrid and analog phone systems, including solutions from Norstar, Samsung, Nortel, Panasonic, etc.",
      "For businesses that prioritize classic technologies, KS Technologie offers several services including Sales, Installation, Configuration, Repair, and maintenance of these systems to ensure smooth and uninterrupted communication.",
      "These traditional phone systems are ideal for businesses seeking a stable and easy-to-use communication solution. With professional installation and continuous support, traditional telephony ensures reliable connectivity, allowing businesses to stay in touch with their clients and partners without interruption.",
    ],
  };

  const [services, setServices] = useState(language === LanguageEnum.FR ? telephonyDescription.fr : telephonyDescription.en)
  useEffect(() =>{
    setServices(language === LanguageEnum.FR ? telephonyDescription.fr : telephonyDescription.en);
  }, [language])
  return (
    <div className="w-full bg-background flex justify-center items-center">
      <div className="w-full h-full">
        <div className="w-full relative flex flex-col pt-16">
          <div className="w-full h-[40vh] lg:h-[60vh]">
            <AspectRatio ratio={20 / 8} className="h-[40vh] lg:h-[80vh] 2xl:h-[60vh]">
              <motion.img
                src="/images/phoneHybride.png"
                alt="A house in a forest"
                style={{
                  objectFit: "cover",  // Ensures the image covers the space
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="absolute w-full h-full top-0 left-0 bg-black/70">
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">
                  <h1 className="text-xl md:text-3xl font-bold text-light max-w-sm md:max-w-lg text-center w-[90%]">
                   {language === LanguageEnum.FR ? hybridPhone.hero.title.fr: hybridPhone.hero.title.en}
                  </h1>
                  <Link
                    href="/contact"
                    className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5 font-semibold"
                  >
                   {language === LanguageEnum.FR ? hybridPhone.hero.cta.fr : hybridPhone.hero.cta.en}
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
                    {language === LanguageEnum.FR ? hybridPhone.mainSection.title.fr : hybridPhone.mainSection.title.en}
                  </h3>
                </div>
              </div>

              <div className="pt-6 flex flex-col lg:gap-7 gap-4">
                <div>
                  {services.map((desc, index) => {
                    return (
                      <p key={index} className="font-poppins md:text-lg pb-6">
                        {desc}
                      </p>
                    );
                  })}
                  <h2 className="font-poppins md:text-lg font-semibold pb-2">
                    {language === LanguageEnum.FR ? hybridPhone.mainSection.products.title.fr: hybridPhone.mainSection.products.title.en}
                  </h2>
                  <ul className="list-disc flex flex-col gap-2">
                    {hybridPhone.mainSection.products.list.map((prod, index) => {
                      return (
                        <li key={index} className="font-poppins ml-8">
                          {prod.name}
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
      </div>
    </div>
  );
}
