'use client'
import Hero from "./components/main/Hero";
import Diversepalette from "./components/sub/DiverseServices";
import { CardSpotlightDemo } from "./components/main/CardSpotlight";
import AboutUs from "./components/main/About";
import Testimonials from "./components/main/Testimenials";


export default function Page() {
  return (
    <div className="w-screen min-h-[calc(100vh-60px)] bg-background">
      <Hero />
      <CardSpotlightDemo/>
      <Diversepalette/>
      <AboutUs/>
      <Testimonials/>
    </div>
  );
}
