"use client";  
import { AspectRatio } from "@radix-ui/themes";  
import { motion } from "framer-motion";  
import Image from "next/image";  
import Link from "next/link";  
import Icon from "../../../../../public/icons/IconServices.svg";  
import { useAppSelector } from "@/redux/hooks";  
import { LanguageEnum } from "@/redux/features/languages/language-slice";  
import { useEffect, useState } from "react";  
import Spin from "../../sub/Spin";

export default function AudioPage() {  
  const language = useAppSelector((state) => state.language.value);  
  const [isClient, setIsClient] = useState(false);  

  const content = {  
    hero: {  
      title: {  
        fr: "Câblage Audio pour Systèmes Sonores Avancés",  
        en: "Audio Cabling for Advanced Sound Systems"  
      },  
      cta: {  
        fr: "DEMANDEZ UNE SOUMISSION",  
        en: "REQUEST A QUOTE"  
      }  
    },  
    mainSection: {  
      title: {  
        fr: "Câblage Audio",  
        en: "Audio Cabling"  
      },  
      description: {  
        fr: "KS Technologie offre à sa clientèle un service clés en main afin de vous assurer une bonne liaison entre les différentes composantes de votre matériel audio, il est crucial d'avoir le câblage adapté. Que ce soit pour brancher des Haut-parleurs pour la musique d'ambiance ou pour un système de recherche de personnes, nous vous proposons un large choix de câbles audio, d'amplificateurs, de haut-parleurs ainsi que d'autres équipements selon vos besoins.",  
        en: "KS Technologie offers its customers a turnkey service to ensure proper connection between the different components of your audio equipment, having the right cabling is crucial. Whether for connecting speakers for ambient music or for a paging system, we offer a wide selection of audio cables, amplifiers, speakers, and other equipment according to your needs."  
      },  
      servicesTitle: {  
        fr: "Nos Services :",  
        en: "Our Services:"  
      },  
      services: {  
        fr: [  
          "Vente et  Installation de système de recherche de personne",  
          "Vente et  Installation de système de musique d'ambiance",  
          "Vente et  Installation d'amplificateur",  
          "Vente et  Installation d'intercom de porte",  
          "Vente et  Installation d'horodateur Sonore",  
          "Entretien et Réparation",  
        ],  
        en: [  
          "Sale and Installation of paging systems",  
          "Sale and Installation of ambient music systems",  
          "Sale and Installation of amplifiers",  
          "Sale and Installation of door intercoms",  
          "Sale and Installation of sound time clocks",  
          "Maintenance and Repair",  
        ]  
      }  
    }  
  };  

  useEffect(() => {  
    setIsClient(true);  
  }, []);  

  if (!isClient) {  
    return <Spin />;  
  }  

  return (  
    <div className="w-full bg-background">  
      <div className="w-full h-full">  
        <div className="w-full relative flex flex-col pt-16">  
          <div className="w-full h-[40vh] lg:h-[60vh]">  
            <AspectRatio ratio={20 / 8} className="h-[40vh] lg:h-[80vh] 2xl:h-[60vh]">  
              <motion.img  
                src="/images/audio.jpeg"  
                alt="Audio system installation"  
                style={{  
                  objectFit: "cover",  
                  width: "100%",  
                  height: "100%",  
                }}  
              />  
              <div className="absolute w-full h-full top-0 left-0 bg-black/70">  
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">  
                  <h1 className="text-xl md:text-3xl font-bold text-light max-w-sm md:max-w-lg text-center w-[90%]">  
                    {language === LanguageEnum.FR ? content.hero.title.fr : content.hero.title.en}  
                  </h1>  
                  <Link  
                    href="/contact"  
                    className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5 font-semibold"  
                  >  
                    {language === LanguageEnum.FR ? content.hero.cta.fr : content.hero.cta.en}  
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
                    {language === LanguageEnum.FR ? content.mainSection.title.fr : content.mainSection.title.en}  
                  </h3>  
                </div>  
              </div>  

              <div className="pt-6 flex flex-col lg:gap-7 gap-4">  
                <div>  
                  <p className="font-poppins md:text-lg pb-6">  
                    {language === LanguageEnum.FR ? content.mainSection.description.fr : content.mainSection.description.en}  
                  </p>  
                  <h2 className="font-poppins md:text-lg font-semibold pb-2">  
                    {language === LanguageEnum.FR ? content.mainSection.servicesTitle.fr : content.mainSection.servicesTitle.en}  
                  </h2>  
                  <ul className="list-disc flex flex-col gap-2">  
                    {(language === LanguageEnum.FR ? content.mainSection.services.fr : content.mainSection.services.en).map((service, index) => {  
                      return (  
                        <li key={index} className="font-poppins ml-8">  
                          {service}  
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