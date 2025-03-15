'use client'

import { useEffect, useState } from "react";
import Spin from "../sub/Spin";
import Hero from "./Hero";
import { CardSpotlightDemo } from "./CardSpotlight";
import Diversepalette from "../sub/DiverseServices";
import AboutUs from "./About";


export default function MainPage() {
  const [isClient, setIsClient] = useState(false);
      
        useEffect(() => {
          setIsClient(true);
        }, []);
      
        if (!isClient) {
          return (
            <Spin/>
          );
        }
  return (
    <div className="w-screen min-h-[calc(100vh-60px)] bg-background">
      <Hero />
      <div className="pt-16">
      <CardSpotlightDemo/>

      </div>
      <Diversepalette/>
      <AboutUs/>
      {/* <Testimonials/> */}
    </div>
  );
}
