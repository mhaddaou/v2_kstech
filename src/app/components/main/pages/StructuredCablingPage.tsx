"use client";  
import { AspectRatio } from "@radix-ui/themes";  
import { motion } from "framer-motion";  
import Image from "next/image";  
import Icon from "../../../../../public/icons/IconServices.svg";  
import Link from "next/link";  
import { useAppSelector } from "@/redux/hooks";  
import { LanguageEnum } from "@/redux/features/languages/language-slice";  
import { useEffect, useState } from "react";  
import Spin from "../../sub/Spin";

export default function Page() {  
  const language = useAppSelector((state) => state.language.value);  
  const [isClient, setIsClient] = useState(false);  

  const content = {  
    hero: {  
      title: {  
        fr: "Solutions de Câblage Structuré pour Réseaux Professionnels",  
        en: "Structured Cabling Solutions for Professional Networks"  
      },  
      cta: {  
        fr: "DEMANDEZ UNE SOUMISSION",  
        en: "REQUEST A QUOTE"  
      }  
    },  
    mainSection: {  
      title: {  
        fr: "Câblage structuré",  
        en: "Structured Cabling"  
      },  
      description: {  
        fr: "Nos services de câblage structuré offrent des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques de Chaque clients. L'expertise de KS technologie en câblage structuré garantit une infrastructure réseau robuste et efficace, essentielle pour la communication et le transfert de données au sein de l'entreprise.",  
        en: "Our structured cabling services offer reliable and high-performance connectivity solutions tailored to each client's specific needs. KS Technologie's expertise in structured cabling ensures a robust and efficient network infrastructure, essential for business communication and data transfer."  
      },  
      servicesTitle: {  
        fr: "Nos services incluent :",  
        en: "Our services include:"  
      },  
      services: {  
        fr: [  
          "Conception d'infrastructure",  
          "Installation réseau Ethernet",  
          "Passage de câbles",  
          "Câblage réseau haut débit certifié catégorie 5e , 6, 6A & 7",  
          "Chemin de câbles  & cache Fil",  
          "Test et certification d'installation",  
          "Câblage informatique structuré complet ou partiel",  
          "Installation de la fiber Optique Interieur et Exterieur",  
          "Installation de switch, routeur",  
          "Installation Rack et Cabinet",  
          "Câblage téléphonique",  
          "Entretien et Reparations",  
        ],  
        en: [  
          "Infrastructure Design",  
          "Ethernet Network Installation",  
          "Cable Routing",  
          "Certified High-Speed Network Cabling Category 5e, 6, 6A & 7",  
          "Cable Trays & Wire Management",  
          "Installation Testing and Certification",  
          "Complete or Partial Structured IT Cabling",  
          "Indoor and Outdoor Fiber Optic Installation",  
          "Switch and Router Installation",  
          "Rack and Cabinet Installation",  
          "Telephone Cabling",  
          "Maintenance and Repairs",  
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
        <div className="w-full relative pt-16">  
          <div className="w-full h-[40vh] lg:h-[60vh]">  
            <AspectRatio ratio={20 / 8} className="h-[40vh] lg:h-[80vh] 2xl:h-[60vh]">  
              <motion.img  
                src="/images/structurecabling.png"  
                alt={language === LanguageEnum.FR ? "Câblage structuré" : "Structured cabling"}  
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

              <div className="pt-6 flex flex-col lg:gap-7 gap-2">  
                <div>  
                  <p className="font-poppins md:text-lg">  
                    {language === LanguageEnum.FR ? content.mainSection.description.fr : content.mainSection.description.en}  
                  </p>  
                  <h3 className="py-2 font-poppins md:text-lg">  
                    {language === LanguageEnum.FR ? content.mainSection.servicesTitle.fr : content.mainSection.servicesTitle.en}  
                  </h3>  
                  <ul className="list-disc pl-8 pb-6 border-b-2 border-[#20207B]">  
                    {(language === LanguageEnum.FR ? content.mainSection.services.fr : content.mainSection.services.en).map((item, index) => {  
                      return (  
                        <li className="font-poppins text-base md:text-lg" key={index}>  
                          {item}  
                        </li>  
                      );  
                    })}  
                  </ul>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  