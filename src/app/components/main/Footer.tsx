"use client";

import Support from "../../../../public/icons/support.svg";
import Certificate from "../../../../public/icons/certificate.svg";
import Taches from "../../../../public/icons/taches.svg";
import Statistics from "../../../../public/icons/statistics.svg";
import {
  IconPhone,
  IconMail,
  IconHomeDot,
  IconBrandInstagram,
  IconBrandFacebook,
  IconPhoneCall,
  IconBrandWhatsapp,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export interface ServiceAdvantageInterface {
  img: string;
  title: {
    fr: string;
    en: string;
  };
  desc: {
    fr: string;
    en: string;
  };
}

const ServiceAdvantage: ServiceAdvantageInterface[] = [
  {
    img: Support,
    title: {
      fr: "Service 24/7",
      en: "24/7 Service",
    },
    desc: {
      fr: "Nous sommes conscients de l'importance cruciale de la disponibilité permanente de vos systèmes. Quelle que soit l'heure, nous sommes là pour vous servir !",
      en: "We understand the critical importance of the constant availability of your systems. No matter the time, we are here to serve you!",
    },
  },
  {
    img: Taches,
    title: {
      fr: "Toutes les tâches, de A à Z",
      en: "All Tasks, From A to Z",
    },
    desc: {
      fr: "Nous sommes outillés pour effectuer toutes les tâches reliées à l’installation de votre réseau, de la nacelle à la perceuse à béton.",
      en: "We are equipped to handle all tasks related to the installation of your network, from the lift to the concrete drill.",
    },
  },
  {
    img: Certificate,
    title: {
      fr: "Techniciens certifiés",
      en: "Certified Technicians",
    },
    desc: {
      fr: "Nos techniciens bénéficient de nombreuses heures de perfectionnement et de formation pour rester à jour sur les dernières technologies et vous garantir un service de qualité.",
      en: "Our technicians benefit from many hours of development and training to stay up-to-date on the latest technologies and ensure you receive top-quality service.",
    },
  },
  {
    img: Statistics,
    title: {
      fr: "Solutions entièrement testées",
      en: "Fully Tested Solutions",
    },
    desc: {
      fr: "Toutes nos solutions sont testées dans nos installations, ce qui nous permet de reproduire, corriger et prévenir les problèmes éventuels.",
      en: "All of our solutions are tested in our facilities, allowing us to replicate, fix, and prevent potential issues.",
    },
  },
];

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@nextui-org/react";
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";

export default function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const refEmail = useRef<HTMLInputElement | null>(null)
  const language = useAppSelector((state) => state.language.value);
  const [isClient, setIsClient] = useState(false);
        
          useEffect(() => {
            setIsClient(true);
          }, []);
        
          if (!isClient) {
            return null;
          }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const templateParams = {
      to_name: "ks-techonologie",
      from_email: email,
    };

    await emailjs
      .send(`service_kepce0w`, `template_4gd066t`, templateParams, {
        publicKey: "PPp09cJMr2Rxwbh38",
      })
      .then((res) => {
        if (res.text == "OK") {

          if(refEmail.current)
            refEmail.current.value = "";
          toast.success("votre message a été envoyé avec succès");
        } else {
          toast.error(
            "quelque chose s'est produit lorsque vous essayez d'envoyer ou vous pouvez utiliser cet email directement : info@kstechnologie.com"
          );
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full relative pt-16">
      <div className="w-full bg-[#06092a]  text-white grid md:grid-cols-2 lg:grid-cols-4 gap-14  pb-10 pt-9 lg:pt-14">
        {ServiceAdvantage.map((item, index) => {
          return (
            <div key={index} className=" space-y-2 w-full ">
              <div
                className={`w-full flex justify-center gap-4 ${
                  index == 1 ? "md:pt-3 lg:pt-0" : "md:pt-0"
                } ${index == 0 ? "lg:-mt-2" : "mt-0"} `}
              >
                <Image
                  className={` ${
                    index == 0 ? "w-11 lg:w-[60px]" : "w-10 lg:w-14"
                  }`}
                  src={item.img}
                  alt="support"
                  width={10}
                  height={10}
                />
              </div>
              <div>
                <h1 className="text-center text-sm lg:text-base font-bold font-['Poppins']">
                  {language === LanguageEnum.FR ? item.title.fr : item.title.en}
                </h1>
              </div>
              <div className="w-full">
                <p className="w-[80%] md:w-[70%] lg:w-[85%] mx-auto text-center  font-['Roboto'] text-xs  lg:text-sm">
                  {language === LanguageEnum.FR ? item.desc.fr : item.desc.en}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full bg-[#020416] text-white pt-10 relative">
        <div className="absolute w-60 h-60 bg-[#0895FB]/40 -top-10 -right-10 blur-3xl"></div>
        <div className="w-full flex items-center flex-col">
          <div className=" ">
            <h1 className="text-lg md:text-2xl lg:text-4xl font-['Poppins'] w-[80%] md:w-[75%]  text-center lg:text-start lg:w-[60%] mx-auto font-extrabold leading-relaxed">
              {language === LanguageEnum.FR ? 'Avez-vous un projet en tête? travaillons ensemble' : "Do you have a project in mind? Let's work together"}
            </h1>
          </div>
          <div className="pt-5">
            <Link
              href="/contact"
              className="border-2  group hover:bg-blueDark transition-all   duration-300 ease-in rounded-full border-white px-3 md:px-4 lg:px-6 py-1.5 lg:py-2 flex items-center gap-3 text-base md:text-lg lg:text-xl font-bold"
            >
              {language === LanguageEnum.FR ? 'Contactez-nous' : 'Contact'}
              <IconPhoneCall />
            </Link>
          </div>
        </div>
        <div className=" w-full relative  z-10">
          <div className="absolute w-56 h-52 -top-[60%] bg-white/40 blur-3xl"></div>
          <div className="container  mt-20 w-[90%] md:w-full xl:w-[80%] 3xl:w-[60%] rounded-md">
            <div className="bg-[#949494]/20 py-2 rounded-md ">
              <div className="  mx-5 flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-0">
                <div className="w-full md:w-[40%] pt-3 md:pt-0">
                  <h3 className="text-center md:text-start text-xl font-['Poppins']">
                    {language === LanguageEnum.FR ? 'Inscrivez-vous à notre newsletter' : 'Subscribe to our newsletter'}
                  </h3>
                </div>
                <form
                  onSubmit={sendEmail}
                  className="w-full md:w-[60%] flex justify-end bg-[#020416] border-[0.5px] border-[#949494]/50 rounded-md relative z-10"
                >
                  <div className="flex-1">
                    <input
                      className="w-full h-full text-xs md:text-sm lg:text-base px-4 bg-inherit   rounded-md outline-none  placeholder:text-[#98A2B3] text-[#98A2B3] "
                      type="email"
                      ref={refEmail}
                      required
                      name="email"
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      isLoading={isLoading}
                      className="bg-[#20207B] text-white  m-1 py-2 px-3 rounded-md hover:bg-[#0895FB] transition-all duration-300"
                    >
                      {language === LanguageEnum.FR ? "S'abonner" : "Subscribe"}
                    </Button>
                  </div>
                </form>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-16 grid grid-cols-2 md:grid-cols-3  place-items-center  ">
          <div className="w-1/3 flex  justify-center">
            <div className="flex flex-col gap-12">
              <h3 className="font-[Poppins] text-lg leading-relaxed tracking-wider text-[#98A2B3]">
                
                {language === LanguageEnum.FR ? "Suivez-Nous" : "Follow Us"}

              </h3>
              <ul className="flex  gap-4 flex-wrap md:flex-nowrap">
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-[#0895FB] relative rounded-full flex justify-center items-center p-2">
                  <Link
                    href="https://www.instagram.com/kstechnologie/"
                    target="_blank"
                  >
                    <IconBrandInstagram className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-[#0895FB] relative rounded-full flex justify-center items-center p-2">
                  <Link
                    href="https://web.facebook.com/profile.php?id=61571895627227"
                    target="_blank"
                  >
                    <IconBrandFacebook className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                {/* <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandXFilled className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li> */}
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-[#0895FB] relative rounded-full flex justify-center items-center p-2">
                  <Link
                    href="https://www.linkedin.com/company/ks-technologie/"
                    target="_blank"
                  >
                    <IconBrandLinkedin className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-[#0895FB] relative rounded-full flex justify-center items-center p-2">
                  <Link href="https://wa.me/14384642161" target="_blank">
                    <IconBrandWhatsapp className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/3 flex  justify-center text-[#808080]">
            <div className="flex flex-col gap-12  text-sm">
              <h3 className=" text-lg leading-relaxed tracking-wider text-[#98A2B3]">
                Navigation
                
              </h3>
              <div className="flex flex-col gap-10">
                <Link
                  className="hover:text-[#0895FB] transition-all duration-500 ease-in-out "
                  href="/"
                >
                  
                {language === LanguageEnum.FR ? "Accueil" : "Home"}

                  
                </Link>
                <Link
                  className="hover:text-[#0895FB] transition-all duration-500 ease-in-out"
                  href="/about"
                >
                  
                {language === LanguageEnum.FR ? "à propos de nous" : "About us"}

                </Link>
                <Link
                  className="hover:text-[#0895FB] transition-all duration-500 ease-in-out"
                  href="/services"
                >
                  services
                  
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex  justify-center col-span-2 md:col-span-1  text-center md:text-start pt-8 md:pt-0">
            <div className="flex flex-col justify-center gap-12 text-[#808080]">
              <h3 className="font-[Poppins] text-lg leading-relaxed tracking-wider text-[#98A2B3]">
                Contact
              </h3>
              <div className="flex flex-col gap-8 font-[Poppins]">
                <Link
                  className="flex items-center gap-3 hover:text-[#0895FB] transition-color duration-500 ease-in-out"
                  href="tel:+1 (438) 464-2161"
                >
                  <IconPhone size={25} />
                  <p className="text-sm   ">+1 (438) 464-2161</p>
                </Link>
                <Link
                  className="flex gap-3 items-center hover:text-[#0895FB] transition-color duration-500 ease-in-out"
                  href="mailto:info@kstechnologie.com"
                >
                  <IconMail size={25} />
                  <p className="text-sm  ease-in-out">info@kstechnologie.com</p>
                </Link>
                <Link
                  className="flex gap-3 items-center hover:text-[#0895FB] transition-color duration-500 ease-in-out"
                  target="_blank"
                  href="https://www.google.com/maps/place/KS+TECHNOLOGIE+Inc/@45.60262,-73.574611,540m/data=!3m1!1e3!4m6!3m5!1s0x4cc91f9d03bcf79f:0x9dfab9934c41b7d3!8m2!3d45.6027028!4d-73.5744925!16s%2Fg%2F11q839drtc?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                >
                  <IconHomeDot size={40} />
                  <p className=" text-sm ">
                    7190 Rue Jarry H1J 1G5 Anjou Québec
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20  container border-t border-[#E4E7EC] ">
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 pb-6 md:pb-0">
            <div>
              <Image
                className="w-64"
                src="/icons/logo.png"
                alt="logo"
                width={64}
                height={64}
              />
            </div>
            <div>
              <p className="text-sm font-[Poppins] text-[#98A2B3]">
                © 2024 KS Technologie.  {language === LanguageEnum.FR ? 'Tous droits réservés.' : 'All rights reserved.'} 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


