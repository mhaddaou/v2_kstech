// app/components/main/pages/MaintenanceRepairPage.tsx  
"use client";  
import { AspectRatio } from "@radix-ui/themes";  
import { motion } from "framer-motion";  
import Image from "next/image";  
import Link from "next/link";  
import Icon from "../../../../../public/icons/IconServices.svg";  
import { useAppSelector } from "@/redux/hooks";  
import { LanguageEnum } from "@/redux/features/languages/language-slice";  

export default function MaintenanceRepairPage() {  
  const language = useAppSelector((state) => state.language.value);  

  const content = {  
    hero: {  
      title: {  
        fr: "Entretien pour une Performance Optimale",  
        en: "Maintenance for Optimal Performance"  
      },  
      cta: {  
        fr: "DEMANDEZ UNE SOUMISSION",  
        en: "REQUEST A QUOTE"  
      }  
    },  
    service: {  
      title: {  
        fr: "Entretien et Réparation",  
        en: "Maintenance and Repair"  
      },  
      description: {  
        fr: "KS technologie réalise une remise en ordre de vos racks et Cabinets existants: réfection, étiquetage, (repérage complet), optimisation.",  
        en: "KS Technologie performs reorganization of your existing racks and cabinets: refurbishment, labeling, (complete mapping), optimization."  
      },  
      testing: {  
        fr: "Nous testons vos câbles afin de garantir la conformité de ceux-ci (Certification du câblage réseau).",  
        en: "We test your cables to ensure their compliance (Network cabling certification)."  
      },  
      services: {  
        fr: [  
          "Réparation de vos câbles Réseaux",  
          "Réparation de vos câbles Téléphoniques",  
          "Réparation de vos câbles Audio"  
        ],  
        en: [  
          "Network Cable Repair",  
          "Telephone Cable Repair",  
          "Audio Cable Repair"  
        ]  
      }  
    }  
  };  

  return (  
    <div className="w-full bg-background">  
      <div className="w-full h-full">  
        <div className="w-full relative flex flex-col pt-16">  
          <div className="w-full h-[40vh] lg:h-[60vh]">  
            <AspectRatio ratio={20 / 8} className="h-[40vh] lg:h-[80vh] 2xl:h-[60vh]">  
              <motion.img  
                src="/images/cablingRepair.jpeg"  
                alt={language === LanguageEnum.FR ? "Services de réparation de câblage" : "Cabling repair services"}  
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
                    alt={language === LanguageEnum.FR ? "icône services" : "services icon"}  
                    height={10}  
                    width={10}  
                  />  
                </div>  
                <div>  
                  <h3 className="text-lg md:text-2xl lg:text-3xl capitalize font-poppins">  
                    {language === LanguageEnum.FR ? content.service.title.fr : content.service.title.en}  
                  </h3>  
                </div>  
              </div>  

              <div className="pt-6 flex flex-col lg:gap-7 gap-4">  
                <div>  
                  <p className="font-poppins md:text-lg pb-6">  
                    {language === LanguageEnum.FR ? content.service.description.fr : content.service.description.en}  
                  </p>  

                  <h2 className="font-poppins md:text-lg font-semibold pb-2">  
                    {language === LanguageEnum.FR ? content.service.testing.fr : content.service.testing.en}  
                  </h2>  
                  <ul className="list-disc flex flex-col gap-2">  
                    {(language === LanguageEnum.FR ? content.service.services.fr : content.service.services.en).map((service, index) => (  
                      <li key={index} className="font-poppins ml-8">  
                        {service}  
                      </li>  
                    ))}  
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