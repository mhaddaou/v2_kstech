"use client";  
import { AspectRatio } from "@radix-ui/themes";  
import { motion } from "framer-motion";  
import Image from "next/image";  
import Link from "next/link";  
import Icon from "../../../../../public/icons/IconServices.svg";  
import { useAppSelector } from "@/redux/hooks";  
import { LanguageEnum } from "@/redux/features/languages/language-slice";  
import ipPhone from "@/data/ipPhone";  
import { useEffect, useState } from "react";  
import Spin from "../../sub/Spin";  

export default function PhoneIpPage() {  
  const language = useAppSelector((state) => state.language.value);  
  const [isClient, setIsClient] = useState(false);  

  useEffect(() => {  
    setIsClient(true);  
  }, []);  

  if (!isClient) {  
    return <Spin />;  
  }  

  return (  
    <div className="w-full bg-background flex justify-center items-center">  
      <div className="w-full h-full">  
        <div className="w-full relative flex flex-col pt-16">  
          <div className="w-full h-[35vh] lg:h-[60vh]">  
            <AspectRatio  
              ratio={20 / 8}  
              className="h-[35vh] lg:h-[80vh] 2xl:h-[60vh]"  
            >  
              <motion.img  
                src={ipPhone.meta.imageUrl}  
                alt={language === LanguageEnum.FR ? ipPhone.meta.imageAlt.fr : ipPhone.meta.imageAlt.en}  
                style={{  
                  objectFit: "cover",  
                  width: "100%",  
                  height: "100%",  
                }}  
              />  
              <div className="absolute w-full h-full top-0 left-0 bg-black/70">  
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">  
                  <h1 className="text-xl md:text-3xl font-bold text-light max-w-sm md:max-w-lg text-center">  
                    {language === LanguageEnum.FR  
                      ? ipPhone.hero.title.fr  
                      : ipPhone.hero.title.en}  
                  </h1>  
                  <Link  
                    href="/contact"  
                    className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5 font-semibold"  
                  >  
                    {language === LanguageEnum.FR  
                      ? ipPhone.hero.cta.fr  
                      : ipPhone.hero.cta.en}  
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
                    {language === LanguageEnum.FR  
                      ? ipPhone.mainSection.title.fr  
                      : ipPhone.mainSection.title.en}  
                  </h3>  
                </div>  
              </div>  

              <div className="pt-6 flex flex-col lg:gap-7 gap-4">  
                <div>  
                  {ipPhone.mainSection.description.map((desc, index) => {  
                    return (  
                      <p key={index} className="font-poppins md:text-lg pb-6">  
                        {language === LanguageEnum.FR ? desc.fr : desc.en}  
                      </p>  
                    );  
                  })}  
                  <h2 className="font-poppins md:text-lg font-semibold pb-2">  
                    {language === LanguageEnum.FR  
                      ? ipPhone.mainSection.products.title.fr  
                      : ipPhone.mainSection.products.title.en}  
                  </h2>  
                  <ul className="list-disc flex flex-col gap-2">  
                    {ipPhone.mainSection.products.list.map((prod, index) => {  
                      return (  
                        <li key={index} className="font-poppins ml-8">  
                          {prod}  
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