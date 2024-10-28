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
  IconBrandLinkedin,
  IconBrandXFilled,
  IconBrandFacebook,
  IconPhoneCall,
} from "@tabler/icons-react";

const ServiceAdvantage: ServiceAdvantageInterface[] = [
  {
    img: Support,
    title: "Service 24/7",
    desc: "Nous sommes conscients de l'importance cruciale de la disponibilité permanente de vos systèmes. Quelle que soit l'heure, nous sommes là pour vous servir !",
  },
  {
    img: Taches,
    title: "Toutes les tâches, de A à Z",
    desc: "Nous sommes outillés pour effectuer toutes les tâches reliées à l’installation de votre réseau, de la nacelle à la perceuse à béton.",
  },
  {
    img: Certificate,
    title: "Techniciens certifiés",
    desc: "Nos techniciens bénéficient de nombreuses heures de perfectionnement et de formation pour rester à jour sur les dernières technologies et vous garantir un service de qualité.",
  },
  {
    img: Statistics,
    title: "Solutions entièrement testées",
    desc: "Toutes nos solutions sont testées dans nos installations, ce qui nous permet de reproduire, corriger et prévenir les problèmes éventuels.",
  },
];

import Image from "next/image";
import Link from "next/link";
import { ServiceAdvantageInterface } from "@/utils/redux/Interfaces/ServiceAdvantageInterface";
export default function Footer() {
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
                  {item.title}
                </h1>
              </div>
              <div className="w-full">
                <p className="w-[80%] md:w-[70%] lg:w-[85%] mx-auto text-center  font-['Roboto'] text-xs  lg:text-sm">
                  {item.desc}
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
              Avez-vous un projet en tête? travaillons ensemble
            </h1>
          </div>
          <div className="pt-5">
            <Link
              href="#contact"
              className="border-2  group hover:bg-primaryThree transition-all  hover:border-[#0895FB] duration-300 ease-in rounded-full border-white px-3 md:px-4 lg:px-6 py-1.5 lg:py-2 flex items-center gap-3 text-base md:text-lg lg:text-xl font-bold"
            >
              Contact
              <IconPhoneCall />
            </Link>
          </div>
        </div>
        <div className=" w-full relative">
          <div className="absolute w-56 h-52 -top-[60%] bg-white/40 blur-3xl"></div>
          <div className="container  mt-20 w-[90%] md:w-full xl:w-[80%] 3xl:w-[60%] rounded-md">
            <div className="bg-[#949494]/20 py-2 rounded-md ">
              <div className="  mx-5 flex flex-col md:flex-row items-center md:justify-between gap-5 md:gap-0">
                <div className="w-full md:w-[40%] pt-3 md:pt-0">
                  <h3 className="text-center md:text-start text-xl font-['Poppins']">
                    Inscrivez-vous à notre newsletter
                  </h3>
                </div>
                <div className="w-full md:w-[60%] flex justify-end bg-[#020416] border-[0.5px] border-[#949494]/50 rounded-md">
                  <div className="flex-1">
                    <input
                      className="w-full h-full text-xs md:text-sm lg:text-base px-4 bg-inherit   rounded-md outline-none  placeholder:text-[#98A2B3] text-[#98A2B3] "
                      type="text"
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <button className="bg-[#20207B]  m-1 py-2 px-3 rounded-md hover:bg-primaryThree transition-all duration-300">
                      S&apos;abonner
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-16 grid grid-cols-2 md:grid-cols-3  place-items-center  ">
          <div className="w-1/3 flex  justify-center">
            <div className="flex flex-col gap-12">
              <h3 className="font-[Poppins] text-lg leading-relaxed tracking-wider text-[#98A2B3]">
                Suivez-Nous
              </h3>
              <ul className="flex  gap-4">
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandInstagram className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandFacebook className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-white w-fit group text-dark transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandXFilled className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
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
                  href="#home"
                >
                  Accueil
                </Link>
                <Link
                  className="hover:text-[#0895FB] transition-all duration-500 ease-in-out"
                  href="#about"
                >
                  à propos de nous
                </Link>
                <Link
                  className="hover:text-[#0895FB] transition-all duration-500 ease-in-out"
                  href="#services"
                >
                  Nos services
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
                  className="flex items-center gap-3 hover:text-primaryThree transition-color duration-500 ease-in-out"
                  href="tel:+1 (438) 464-2161"
                >
                  <IconPhone size={25} />
                  <p className="text-sm   ">+1 (438) 464-2161</p>
                </Link>
                <Link
                  className="flex gap-3 items-center hover:text-primaryThree transition-color duration-500 ease-in-out"
                  href="mailto:info@kstechnologie.com"
                >
                  <IconMail size={25} />
                  <p className="text-sm  ease-in-out">info@kstechnologie.com</p>
                </Link>
                <Link
                  className="flex gap-3 items-center hover:text-primaryThree transition-color duration-500 ease-in-out"
                  href="/"
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
                src="images/icons/logoFooter.svg"
                alt="logo"
                width={64}
                height={64}
              />
            </div>
            <div>
              <p className="text-sm font-[Poppins] text-[#98A2B3]">
                © 2024 KS Technologie. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
