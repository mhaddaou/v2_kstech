'use client'
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../public/icons/IconServices.svg";


export default function Page() {
    const service= {
        description: [
          "La  téléphonie traditionnelle offrent une gamme de systèmes de téléphonie Hybride et  analogique  fiables et éprouvés, y compris les solutions Norstar , Samsung ,Nortel, Panasonic …etc.",
          "Pour les entreprises qui privilégient les technologies classiques. KS Technologie offre plusieurs services incluent la Vente, l'Installation, la Configuration la Réparation et la maintenance de ces systèmes pour garantir une communication fluide et ininterrompue.",
          "Ces systèmes de téléphonie traditionnelle sont idéaux pour les entreprises cherchant une solution de communication stable et simple d'utilisation. Avec une installation professionnelle et un support continu, la téléphonie traditionnelle assure une connectivité fiable, permettant aux entreprises de rester en contact avec leurs clients et partenaires sans interruption.",
        ],
        product: [{name : "Norstar", link: "https://www.norstartelecom.com/business-voip-equipment/"}, {name : "Samsung", link : ""}, {name : "Panasonic", link : "https://www.panasonic.com/fr/consumer/telephonie/telephones-fixes-dect.html"}, {name : "Nortel", link : "https://www.pcliquidations.com/c185---nortel?srsltid=AfmBOopLVd8O3hr2zlsbnDAZhMmh7vJp-baw3gLsfZBLSaXkGNCQdpgT"} , {name : "Toshiba", link : ""}, {name : "Avaya", link : ""}],
      };
    return (
    <div className="w-screen  flex justify-center items-center">
      <div className="w-full h-full ">
      <div className=" w-full  relative flex flex-col  pt-16">
      <div className="w-full h-[40vh] lg:h-[60vh]">
        <AspectRatio ratio={20 / 8} className=" h-[40vh] lg:h-[80vh] 2xl:[60vh]">
          <motion.img
            src="/images/phoneHybride.png"
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
              Services de Téléphonie Traditionnelle pour Communications Classiques
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
              Téléphonie traditionnelle
              </h3>
            </div>
          </div>
          <div className="pt-6 flex flex-col lg:gap-7 gap-4 ">
            <div>
              {service.description.map((desc, index) => {
                return (
                  <p key={index} className="font-poppins  md:text-lg pb-6">
                    {desc}
                  </p>
                );
              })}
              <h2 className="font-poppins  md:text-lg font-semibold pb-2">
                Produit
              </h2>
              <ul className="list-disc flex flex-col gap-2">
                {service.product.map((prod, index) => {
                  return (
                    <li key={index} className="font-poppins ml-8">
                      {prod.name}
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
