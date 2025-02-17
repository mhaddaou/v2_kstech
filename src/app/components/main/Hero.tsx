import Link from "next/link";
import { motion } from "framer-motion";
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
    <>
      <div className="w-screen min-h-[50vh] lg:min-h-screen relative   mb-8 bg-[url('/images/bg-hero.svg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute bg-black/70  w-full h-full">absolute</div>
        <div className="w-full h-full   lg:py-14 relative container ">
          <div className="w-full pt-20 md:pt-24 lg:pt-40">
            <div className="    font-poppins text-2xl lg:text-5xl  uppercase  textStroke  text-ellipsis font-semibold">
              <p className="text-center">
                &quot; La raison d&apos;être d&apos;une entreprise est de créer
                et de garder ces clients &quot;
              </p>
              <p
                className={`text-lg lg:text-xl flex justify-end  tracking-wide transition-colors duration-300 pt-2   ease-in-out text-white`}
                style={{
                  WebkitTextStroke: "1px white",
                }}
              >
                Théodore Levitt
              </p>
            </div>
          </div>
          <div className="w-full md:mx-0 md:w-[70%] mx-auto  lg:mx-0 lg:w-1/2  flex flex-col     justify-center items-center  ">
            <motion.div
              initial={{ opacity: 0, width: 0, height: 0 }}
              animate={{ opacity: 1, width: "auto", height: "auto" }}
              transition={{ duration: 0.3 }}
              className=" w-fit h-full  text-white  mt-6  py-7 rounded-md "
              style={{ overflow: "hidden" }}
            >
              <motion.h1
                initial="hidden"
                animate="reveal"
                transition={{ staggerChildren: 0.02, delayChildren: 0.6 }}
                className="text-lg md:text-2xl font-bold font-poppins pb-4 tracking-wide"
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
                className=" text-sm md:text-lg  font-montserrat font-semibold pb-6 tracking-wide"
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
              <Link href="/contact">
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
      </div>
    </>
  );
}
