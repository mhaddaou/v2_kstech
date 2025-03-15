
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SplitString from "../sub/SplitString";
import hero from "../../../data/hero";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { LanguageEnum } from "@/redux/features/languages/language-slice";

const charVariant = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const textAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Hero() {
  const language = useAppSelector((state) => state.language.value);
  const [heading, setHeading] = useState(
    language === LanguageEnum.FR
      ? hero.mainContent.heading.fr
      : hero.mainContent.heading.en
  );
  const [subtext, setSubtext] = useState(
    language === LanguageEnum.FR
      ? hero.mainContent.subtext.fr
      : hero.mainContent.subtext.en
  );

  useEffect(() => {
    setHeading(
      language === LanguageEnum.FR
        ? hero.mainContent.heading.fr
        : hero.mainContent.heading.en
    );
    setSubtext(
      language === LanguageEnum.FR
        ? hero.mainContent.subtext.fr
        : hero.mainContent.subtext.en
    );
  }, [language]);

  const Hheading = SplitString(heading);
  const bd = SplitString(subtext);

  return (
    <section className="relative w-full min-h-[100svh] bg-[url('/images/bg-hero.svg')] bg-cover bg-no-repeat bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center min-h-[110svh] ">
        <div className="w-full flex flex-col gap-16 lg:gap-24">
          {/* Quote Section */}
          <motion.div 
            {...textAnimation}
          >
            <div className="font-poppins max-w-4xl">
              <p className="text-xl sm:text-3xl lg:text-5xl uppercase textStroke font-semibold leading-relaxed">
                {language === LanguageEnum.FR
                  ? hero.quote.text.fr
                  : hero.quote.text.en}
              </p>
              <p
                className="text-base sm:text-lg lg:text-xl tracking-wide text-white mt-2 "
                style={{
                  WebkitTextStroke: "1px white",
                }}
              >
                Théodore Levitt
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white space-y-6"
            >
              {/* Heading */}
              <motion.h1
                initial="hidden"
                animate="reveal"
                transition={{ staggerChildren: 0.02, delayChildren: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins tracking-wide"
              >
                {Hheading.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariant}
                    transition={{ duration: 0.7 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial="hidden"
                animate="reveal"
                transition={{ staggerChildren: 0.02, delayChildren: 0.8 }}
                className="text-base sm:text-lg font-montserrat font-medium leading-relaxed"
              >
                {bd.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariant}
                    transition={{ duration: 1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>

              {/* CTA Button */}
              <Link href="/contact" className="inline-block">
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                  className="px-6 py-4 rounded-lg border border-white/20 bg-transparent hover:bg-blueDark text-white font-poppins font-semibold shadow-lg transition-all duration-300"
                >
                  {language === LanguageEnum.FR
                    ? hero.cta.button.fr
                    : hero.cta.button.en}
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
