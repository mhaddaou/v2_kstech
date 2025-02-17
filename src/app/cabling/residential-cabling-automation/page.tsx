
'use client'
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Icon from "../../../../public/icons/IconServices.svg";
import Link from "next/link";

export default function Page() {
  const service = {
    title: "Câblage Résidentiel",
    desc1:
      "Vous construisez ou rénovez un habitat et vous avez besoin d’un câblage  informatique, Domotique, Téléphonie ou Cameras ?",
    desc2:
      "KS Technologie  vous offrent des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques de chaque clients. L'expertise de KS technologie en câblage garantit une infrastructure réseau robuste et efficace, suivant les Normes de  la Régie du Bâtiment du Québec",
  }
  const arr : Array<string> = [
    "Câblage Informatique",
    "Câblage Téléphonique",
    "Câblage Domotique",
    "Câblage alarme",
    "Equipements (WI-FI ,Hub, Repeater, Router, Switch ETC….)",
    " Entretien et Reparation"
  ]
    return (
      <div className="w-screen  bg-background">
        <div className="w-full h-full ">
        <div className=" w-full  relative  pt-16">
          {/* <div className="w-full h-[100px] relative"></div> */}
          <div className="w-full h-[40vh] lg:h-[60vh]">
            <AspectRatio
              ratio={20 / 8}
              className=" h-[40vh] lg:h-[80vh] 2xl:[60vh]"
            >
              <motion.img
                src="/images/cablingHome.png"
                alt="A house in a forest"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="absolute w-full h-full  top-0 left-0 bg-black/70">
                <div className="w-full h-full flex  flex-col justify-center items-center gap-8">
                  <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center w-[90%]">
                  Câblage structuré pour informatique, domotique, téléphonie et caméras résidentielles
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
          {/* <AspectRatio ratio={20 / 8} className="">
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
            <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center ">Services de Câblage Structuré pour Réseaux de Données</h1>
            <Link href='/contact' className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5  font-semibold">DEMANDEZ UNE SOUMISSION</Link>
        </div>
      </div>
      </AspectRatio> */}
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
                    {service.title}
                  </h3>
                </div>
              </div>
              <div className="pt-6 flex flex-col lg:gap-7 gap-2 ">
                <div>
                  <p className="font-poppins  md:text-lg">{service.desc1}</p>
                  <h3 className="py-2 font-poppins md:text-lg">
                    Nos services incluent :
                  </h3>
                  <ul className="list-disc pl-8 pb-6 border-b-2 border-[#20207B]">
                    {arr.map((item, index) => {
                      return (
                        <li className="font-poppins text-base" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {/* icons/IconServices.svg */}
          </div>
        </div>
        </div>
      </div>
    );
  }
  