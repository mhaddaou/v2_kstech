'use client'
import Image from "next/image";
import { ContactForm } from "../../../components/main/Form";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp
} from "@tabler/icons-react";
import { useAppSelector } from "@/redux/hooks";
import contact from '../../../../data/contact'
import { LanguageEnum } from "@/redux/features/languages/language-slice";
import { useEffect, useState } from "react";
import Spin from "../../sub/Spin";
export default function ContactPage() {
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
    <div className="w-screen min-h-[calc(100vh-60px)] bg-background pt-[2.5rem] lg:pt-[180px]">
      <div className="w-full container h-full flex flex-col   items-center pt-10 gap-6">
        {
            language === LanguageEnum.FR ? 
            <h1 className="font-montserrat font-bold text-dark text-4xl uppercase max-w-md text-center leading-normal ">
          DEMANDEZ UNE ESTIMATION{" "}
          <span className="bg-blueDark px-3 py-1.5 rounded-full text-background">
            GRATUITE
          </span>
        </h1> : <h1 className="font-montserrat font-bold text-dark text-4xl uppercase max-w-md text-center leading-normal ">
        REQUEST A{" "}
          <span className="bg-blueDark px-3 py-1.5 mr-2 rounded-full text-background">
          FREE
          </span>
          ESTIMATE
        </h1>
        }
        <p className="font-roboto font-light text-dark/70 max-w-5xl  px-6">
          {language === LanguageEnum.FR ? contact.contactHeader.description.fr : contact.contactHeader.description.en}
        </p>
        <div className="w-full flex flex-col lg:flex-row  gap-8  pt-10">
          <div className=" w-[80%] mx-auto  lg:w-[40%] bg-light  relative  rounded-[10px]">
            <Image
              src="/icons/contact.svg"
              alt=""
              width={50}
              height={50}
              className="absolute w-72 h-56 lg:h-96   right-0 bottom-0"
            />

            <div className="w-[80%] mx-auto relative flex flex-col justify-center gap-7 py-10 lg:py-0 lg:gap-10  h-full">
              <div>
                <h2 className="capitalize font-poppins font-semibold text-lg text-dark/70">
                  {language === LanguageEnum.FR ? contact.contactInfo.mainTitle.fr : contact.contactInfo.mainTitle.en}
                </h2>
              </div>
            
              <div className="flex flex-col gap-1">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.discussion.title.fr : contact.contactInfo.discussion.title.en}
                </h3>
                <p className="font-roboto  font-medium text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.discussion.subtitle.fr : contact.contactInfo.discussion.subtitle.en}

                </p>
                <p className="font-roboto font-light text-sm text-dark/70">
                  info@kstechnologie.com
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.phone.title.fr : contact.contactInfo.phone.title.en}

                </h3>
                <p className="font-roboto  font-medium text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.phone.hours.fr : contact.contactInfo.phone.hours.en}
                </p>
                <p className="font-roboto font-light text-sm text-dark/70">
                  +1 (438) 464-2161
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.social.title.fr : contact.contactInfo.social.title.en}
                </h3>
                <ul className="flex  gap-4">
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://www.instagram.com/kstechnologie/" target="_blank">
                      <IconBrandInstagram className="object-cover  w-6 h-6 transition-all duration-300" />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://web.facebook.com/profile.php?id=61571895627227" target="_blank">
                      <IconBrandFacebook className="object-cover  w-6 h-6 transition-all duration-300" />
                    </Link>
                  </li>
                  {/* <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300  hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                    <Link href="" target="_blank">
                      <IconBrandXFilled className="object-cover w-6 h-6 transition-all  duration-300" />
                    </Link>
                  </li> */}
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300  hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://www.linkedin.com/company/ks-technologie/" target="_blank">
                      <IconBrandLinkedin className="object-cover w-6 h-6 transition-all  duration-300" />
                    </Link>
                  </li>
                  <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300  hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                    <Link href="https://wa.me/14384642161" target="_blank">
                      <IconBrandWhatsapp className="object-cover w-6 h-6 transition-all  duration-300" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">
                {language === LanguageEnum.FR ? contact.contactInfo.address.title.fr : contact.contactInfo.address.title.en}

                </h3>
                <div className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300  hover:bg-blueDark relative rounded-full flex justify-center items-center p-2">
                  <Link
                    target="_blank"
                    href="https://www.google.com/maps/place/KS+TECHNOLOGIE+Inc/@45.60262,-73.574611,540m/data=!3m1!1e3!4m6!3m5!1s0x4cc91f9d03bcf79f:0x9dfab9934c41b7d3!8m2!3d45.6027028!4d-73.5744925!16s%2Fg%2F11q839drtc?hl=en&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M12 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full mx-auto h-full lg:w-[60%]  ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
