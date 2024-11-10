
'use client'
import { ServicesInterface } from "@/utils/redux/Interfaces/servicesInterface";
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "../../../../public/icons/IconServices.svg";
import Link from "next/link";
export default function ResidentialCablingAutomation({service} : {service : ServicesInterface}) {
  return (
    <div className=" w-full  relative  pt-16">
      {/* <div className="w-full h-[100px] relative"></div> */}
      <AspectRatio ratio={20 / 8} className="">
        <motion.img
          src="/images/cablageStructure.svg"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      <div className="absolute w-full h-full  top-0 left-0 bg-black/30">
        <div className="w-full h-full flex  flex-col justify-center items-center gap-8">
            <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center ">Câblage structuré pour informatique, domotique, téléphonie et caméras résidentielles</h1>
            <Link href='/contact' className="bg-blueDark shadow-input shadow-primaryTwo rounded-md text-light text-lg md:text-2xl px-6 py-2.5  font-semibold">DEMANDEZ UNE SOUMISSION</Link>
        </div>
      </div>
      </AspectRatio>
      <div className="pt-28 w-full  container">
      <div className=" w-[80%] lg:w-[70%]  mx-auto flex flex-col justify-center gap-4 md:gap-8">
            <div className="w-full flex items-center gap-4 justify-center">
              <div>
                <Image
                  className="w-10"
                  src={Icon}
                  alt="icon"
                  height={10}
                  width={10}
                />
              </div>
              <div>
                <h3 className="text-lg lg:text-3xl capitalize font-poppins">
                  {service.title}
                </h3>
              </div>
            </div>
            <div className="pt-6 flex flex-col lg:gap-7 gap-4 ">
              <div>
                <p className="font-poppins  md:text-lg">
                  {service.desc1}
                </p>
              </div>
              
              <div className=" pb-6 border-b-2 border-[#20207B]">
                <p className="font-poppins md:text-lg  ">
                  {service.desc2}
                </p>
              </div>
            </div>
          </div>

      {/* icons/IconServices.svg */}
      </div>
    </div>
  );
}
