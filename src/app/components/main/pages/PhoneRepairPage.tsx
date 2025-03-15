'use client'  
import { AspectRatio } from "@radix-ui/themes";  
import { motion } from "framer-motion";  
import Image from "next/image";  
import Link from "next/link";  
import Icon from "../../../../../public/icons/IconServices.svg";  
import { useAppSelector } from "@/redux/hooks";  
import { LanguageEnum } from "@/redux/features/languages/language-slice";  
import { useEffect, useState } from "react";  
import Spin from "../../sub/Spin";
import phoneRepair from "@/data/phoneRepair";

export default function PhoneRepairPage() {  
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
            <AspectRatio ratio={20 / 8} className="h-[35vh] lg:h-[80vh] 2xl:h-[60vh]">  
              <motion.img  
                src="/images/phoneReparation.png"  
                alt={language === LanguageEnum.FR ? phoneRepair.meta.imageAlt.fr : phoneRepair.meta.imageAlt.en}  
                style={{  
                  objectFit: "cover",  
                  width: "100%",  
                  height: "100%",  
                }}  
              />  
              <div className="absolute w-full h-full top-0 left-0 bg-black/60">  
                <div className="w-full h-full flex flex-col justify-center items-center gap-8">  
                  <h1 className="text-xl md:text-3xl font-bold text-light max-w-sm md:max-w-lg text-center">  
                    {language === LanguageEnum.FR ? phoneRepair.hero.title.fr : phoneRepair.hero.title.en}  
                  </h1>  
                  <Link  
                    href="/contact"  
                    className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5 font-semibold"  
                  >  
                    {language === LanguageEnum.FR ? phoneRepair.hero.cta.fr : phoneRepair.hero.cta.en}  
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
                    {language === LanguageEnum.FR ? phoneRepair.mainSection.title.fr : phoneRepair.mainSection.title.en}  
                  </h3>  
                </div>  
              </div>  

              <div className="pt-6 flex flex-col lg:gap-7 gap-4">  
                <div>  
                  <p className="lg:text-lg font-poppins pb-4">  
                    {language === LanguageEnum.FR ? phoneRepair.mainSection.descriptionOne.fr : phoneRepair.mainSection.descriptionOne.en}  
                  </p>  

                  {phoneRepair.mainSection.reparation.map((item, index) => {  
                    return (  
                      <div key={index}>  
                        <h4 className="text-lg font-semibold pb-1">  
                          {language === LanguageEnum.FR ? item.name.fr : item.name.en}:  
                        </h4>  
                        {item.description && (  
                          <p className="font-poppins pb-4 pl-4">  
                            {language === LanguageEnum.FR ? item.description.fr : item.description.en}  
                          </p>  
                        )}  
                        <ul className="list-disc ml-8 pb-4">  
                          {item.product.map((product, index) => {  
                            return (  
                              <li key={index} className="pb-1 font-poppins">  
                                {typeof product === 'string'   
                                  ? product   
                                  : (language === LanguageEnum.FR ? product.fr : product.en)}  
                              </li>  
                            );  
                          })}  
                        </ul>  
                      </div>  
                    );  
                  })}  

                  <p className="lg:text-lg font-poppins ">  
                    {language === LanguageEnum.FR ? phoneRepair.mainSection.descriptionTwo.fr : phoneRepair.mainSection.descriptionTwo.en}  
                  </p>  
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