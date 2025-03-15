'use client'
import Image from "next/image";
import about from "@/data/about.json"
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";
import { useEffect, useState } from "react";
import Spin from "../sub/Spin";

export default function AboutUsPage() {
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
    <div className="w-screen pt-[6rem] lg:pt-[210px]">
      <div className="w-full container flex flex-col lg:flex-row gap-7">
        <div className="w-[80%] mx-auto lg:w-1/2 bg-light rounded-lg p-6 shadow-input">
          <div className="w-[90%] xl:w-[70]  mx-auto flex flex-col justify-around h-full ">
            <div className="">
              <div className="w-full flex items-center gap-4">
                <div>
                  <Image
                    className="w-8 2xl:w-10"
                    src="/icons/icon.svg"
                    alt="icon"
                    height={10}
                    width={10}
                  />
                </div>
                <div>
                  <h3 className="2xl:text-lg capitalize font-poppins">
                    {language === LanguageEnum.FR ? about.headerSection.title.fr : about.headerSection.title.en}
                  </h3>
                </div>
              </div>
              <div className="pt-6">
                <h1 className="font-poppins text-3xl 2xl:text-4xl font-semibold capitalize tracking-wide">
                  {language === LanguageEnum.FR ? about.headerSection.mainTitle.fr : about.headerSection.mainTitle.en}

                </h1>
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-4 ">
              <div>
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph1.fr : about.mainContent.paragraph1.en}

                </p>
              </div>
              <div className="">
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph2.fr : about.mainContent.paragraph2.en}

                </p>
              </div>
              <div className="">
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph3.fr : about.mainContent.paragraph3.en}

                </p>
              </div>
              <div className="">
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph4.fr : about.mainContent.paragraph4.en}

                </p>
              </div>
              <div className="">
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph5.fr : about.mainContent.paragraph5.en}

                </p>
              </div>

              <div className="">
                <p className="font-poppins  2xl:text-lg">
                {language === LanguageEnum.FR ? about.mainContent.paragraph6.fr : about.mainContent.paragraph6.en}

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto lg:w-1/2 flex flex-col-reverse lg:flex-col gap-7 ">
          <div className="w-full  h-[430px] relative rounded-lg">
            <Image
              src="/images/about.svg"
              alt="img"
              fill
              className="object-cover rounded-lg shadow-input"
            />
          </div>
          <div className="w-full bg-light shadow-input rounded-lg">
            <div className="w-[90%] mx-auto">
              <div className="w-full flex flex-col  gap-8  py-6">
                <div className="w-full lg:pl-10">
                  <div className="bg-blueDark w-full lg:w-1/2 rounded-md  ">
                    <div className="w-[80%] mx-auto py-4">
                      <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide text-center lg:text-start">
                        25+
                      </h1>
                      <p className="font-poppins text-sm 2xl:text-base text-background text-center lg:text-start">
                        {language === LanguageEnum.FR ? about.statistics.experience.text.fr : about.statistics.experience.text.en}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end lg:pr-10">
                  <div className="bg-blueDark w-full lg:w-1/2   rounded-md   ">
                    <div className="w-[80%] mx-auto py-4">
                      <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-center lg:text-start text-light pb-2 font-semibold capitalize tracking-wide">
                        1000+
                      </h1>
                      <p className="font-poppins text-sm 2xl:text-base text-background text-center lg:text-start">
                      {language === LanguageEnum.FR ? about.statistics.projects.text.fr : about.statistics.projects.text.en}
                        
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:pl-10">
                  <div className="bg-blueDark w-full lg:w-1/2 rounded-md  ">
                    <div className="w-[80%] mx-auto py-4">
                      <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold text-center lg:text-start  capitalize tracking-wide">
                        24 / 7
                      </h1>
                      <p className="font-poppins text-sm 2xl:text-base text-background text-center lg:text-start">
                      {language === LanguageEnum.FR ? about.statistics.support.text.fr : about.statistics.support.text.en}

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
