import Link from "next/link";
import { motion } from "framer-motion";
import { AspectRatio, Box, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
export default function Hero() {
  return (
    <section className="w-screen relative" id="hero">
      <AspectRatio ratio={16 / 8}>
        <motion.img
          src="/images/bg-hero.svg"
          alt="A house in a forest"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <div></div>
      </AspectRatio>
      <div className="absolute w-full h-full top-0">
        


      </div>
    </section>
  );
}
