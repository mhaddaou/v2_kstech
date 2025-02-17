'use client'
import { PhoneReparationType } from "@/utils/redux/Interfaces/PhoneServices.interface";
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../public/icons/IconServices.svg";

export default function Page() {

    const service: PhoneReparationType = {
        descriptionOne:
          " KS Technologie Offre une large Gamme de solutions complètes de téléphonie d’entreprise couvrant la téléphonie traditionnelle analogique ainsi que la téléphonie IP. Ces services incluent :",
        reparation: [
          {
            name: "Téléphonie analogique traditionnelle",
            description:
              "Installation et maintenance de systèmes de téléphonie analogique",
            product: [
              "Norstar",
              "Nortel",
              "Samsung",
              "Panasonic",
              "Toshiba",
              "Avaya",
            ],
          },
          {
            name: "Téléphonie IP",
            product: [
              "Vérification du Câblage",
              "Vérification des Téléphones",
              "Vérification du réseau",
            ],
          },
        ],
        descriptionTwo:
          "Nos services de téléphonie d’entreprise assurent une connectivité optimale et une communication efficace, permettant aux entreprises de rester connectées en toutes circonstances.",
      };
  return (
    <div className="w-screen  flex justify-center items-center">
      <div className="w-full h-full ">
      <div className=" w-full  relative flex flex-col  pt-16">
        <div className="w-full h-[40vh] lg:h-[60vh]">
          <AspectRatio ratio={20 / 8} className=" h-[40vh] lg:h-[80vh] 2xl:[60vh]">
            <motion.img
              src="/images/phoneReparation.png"
              alt="A house in a forest"
              style={{
                objectFit: "fill",
                width: "100%",
                height: "100%",
              }}
            />
            <div className="absolute w-full h-full  top-0 left-0 bg-black/60">
              <div className="w-full h-full flex  flex-col justify-center items-center gap-8">
                <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center w-[90%]">
                Services d&apos;Entretien et Réparations pour Téléphonie
                </h1>
                <Link
                  href="/contact"
                  className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5  font-semibold"
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
                Entretien et réparations
                </h3>
              </div>
            </div>
            <div className="pt-6 flex flex-col lg:gap-7 gap-4 ">
              <div>
                <p className=" lg:text-lg font-poppins pb-4">
                {service.descriptionOne}

                </p>

                {
                    service.reparation.map((item, index) =>{
                        return (
                            <div key={index}>
                                <h4 className="text-lg font-semibold pb-1">{item.name}:</h4>
                                <p className="font-poppins pb-4 pl-4">{item.description}</p>
                                <ul className="list-disc ml-8 pb-4">
                                    {
                                        item.product.map((product, index) =>{
                                            return (
                                                <li className="pb-1 font-poppins" key={index}>{product}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )

                    })
                }
                    <p className="lg:text-lg font-poppins ">
                        {service.descriptionTwo}
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
