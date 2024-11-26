import Link from "next/link";
import { motion } from "framer-motion";
import {
  AspectRatio,
} from "@radix-ui/themes";
import SplitString from "../sub/SplitString";
const heading = "La Gestion De Votre Entreprise Vient De Devenir Plus Facile.";
const text =
  "Centralisez tout sur un environnement de câblage structuré et éliminez la complexité d'avoir plusieurs infrastructures de câblage en place.";
const charVariant = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

export default function Hero() {
  const Hheading = SplitString(heading);
  const bd = SplitString(text);
  return (
    <section className="w-screen relative lg:h-full h-[400px]  sm:h-[450px] pb-10 mt-[4rem] lg:mt-[120px]" id="hero">
      <AspectRatio ratio={16 / 8}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="/images/bg-hero.svg"
          alt="A house in a forest"
          className="object-cover w-full  lg:h-full h-[400px] sm:h-[450px]"
        
        />
      </AspectRatio>
      <div className="absolute w-full h-full   top-0 ">
        <div className="w-full h-full flex  justify-center items-center">
          <motion.div
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{ opacity: 1, width: "auto", height: "auto" }}
            transition={{ duration: 0.3 }}
            className="bg-black/70 w-fit h-fit max-w-md text-white px-5 py-7 rounded-md "
            style={{ overflow: "hidden" }}
          >
            <motion.h1
              initial="hidden"
              animate="reveal"
              transition={{ staggerChildren: 0.02, delayChildren: 0.6 }}
              className="text-2xl font-bold font-poppins pb-4 tracking-wide"
            >
              {Hheading.map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 0.7 }}
                  variants={charVariant}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg font-montserrat font-semibold pb-6 tracking-wide"
              initial="hidden"
              animate="reveal"
              transition={{ staggerChildren: 0.02, delayChildren: 0.6 }}
            >
              {bd.map((char, index) => (
                <motion.span
                  key={index}
                  transition={{ duration: 1 }}
                  variants={charVariant}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <Link href='/contact'>
            <motion.button
              className=" px-4 py-3 flex flex-row gap-2 rounded-md border border-background shadow-md hover:bg-blueDark  shadow-white transition-colors duration-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 1 }}
              >
              <motion.p className="flex  items-center gap-1 font-semibold font-poppins  ">
                DEMANDEZ UNE SOUMISSION GRATUIT{" "}
              </motion.p>
            </motion.button>
              </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
