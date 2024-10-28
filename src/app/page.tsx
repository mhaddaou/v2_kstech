'use client'
import { Button } from "@nextui-org/button";
import Hero from "./components/main/Hero";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { TailwindcssButtons } from "./components/sub/Button";
import Diversepalette from "./components/sub/DiverseServices";
import { CardSpotlightDemo } from "./components/main/CardSpotlight";
import AboutUs from "./components/main/About";


export default function Page() {
  return (
    <div className="w-screen min-h-[calc(100vh-60px)] bg-background">
      <Hero />
      
      <CardSpotlightDemo/>
      <Diversepalette/>
      <AboutUs/>
    </div>
  );
}
