"use client";

import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../public/icons/IconServices.svg";

export default function IpPhone() {

    const services = [
        "Réparation de vos câbles Réseaux",
        "Réparation de vos câbles Téléphoniques",
        "Réparation de vos câbles Audio",
    ]
    return (
    <div className=" w-full  relative flex flex-col  pt-16">
      <div className="w-full h-[40vh] lg:h-[60vh]">
        <AspectRatio ratio={20 / 8} className=" h-[40vh] lg:h-[80vh] 2xl:[60vh]">
          <motion.img
            src="/images/cablingRepair.jpeg"
            alt="A house in a forest"
            style={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute w-full h-full  top-0 left-0 bg-black/70">
            <div className="w-full h-full flex  flex-col justify-center items-center gap-8">
              <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center w-[90%] ">
              Entretien pour une Performance Optimale
              </h1>
              <Link
                href="/contact"
                className="bg-blueDark shadow-input shadow-primaryTwo rounded-md text-light text-lg md:text-2xl px-6 py-2.5  font-semibold"
              >
                DEMANDEZ UNE SOUMISSION
              </Link>
            </div>
          </div>
        </AspectRatio>
      </div>

      <div className="pt-10 lg:pt-40  2xl:pt-28 w-full  container">
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
              Entretien et Réparation
              </h3>
            </div>
          </div>
          <div className="pt-6 flex flex-col lg:gap-7 gap-4 ">
            <div>
                  <p  className="font-poppins  md:text-lg pb-6">
                  KS technologie réalise une remise en ordre de vos racks et Cabinets existants: réfection, étiquetage,(repérage complet), optimisation.
                  </p>
              
              <h2 className="font-poppins  md:text-lg  pb-2">Nous testons vos câbles afin de garantir la conformité de ceux-ci (Certification du câblage réseau).                                                                                                                     
</h2>
              <ul className="list-disc flex flex-col gap-2">
              {
                services.map((prod, index) =>{
                  return (
                    <li key={index} className="font-poppins ml-8">
                      {prod}
                    </li>
                  )
                })
              }
              </ul>
              <div className="w-full h-0.5 bg-[#20207B] mt-6"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}