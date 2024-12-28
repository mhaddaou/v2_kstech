import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Tech Solutions",
    role: "Entreprise de logiciels",
    company: "Paris, France",
    testimonial: "Une expérience client exceptionnelle. L'équipe a su répondre à tous nos besoins avec professionnalisme.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
  },
  {
    name: "Innovation Corp",
    role: "Startup Technologique",
    company: "Lyon, France",
    testimonial: "Nous sommes impressionnés par la qualité du service et l'attention portée aux détails.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=400&fit=crop",
  },
  {
    name: "Digital Agency",
    role: "Agence Marketing",
    company: "Bordeaux, France",
    testimonial: "Un partenariat qui a transformé notre approche digitale. Résultats exceptionnels.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
  },
  {
    name: "Web Solutions",
    role: "Services Numériques",
    company: "Marseille, France",
    testimonial: "La solution parfaite pour nos besoins. Une équipe réactive et compétente.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
  },
  {
    name: "Future Tech",
    role: "Entreprise IoT",
    company: "Toulouse, France",
    testimonial: "Une collaboration fructueuse qui a dépassé nos attentes initiales.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
  },
];

const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const pageCount = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  
  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % pageCount);
      setIsAnimating(false);
    }, 300);
  };

  const prevPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-12 px-4  mt-10 container border border-dark/25 rounded-[20px]" >
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
        Témoignages de Nos Clients
      </h2>
      <div 
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="animate-scale-in"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 animate-fade-in">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0 || isAnimating}
          className="transition-all duration-300  hover:bg-blueDark hover:text-primary-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-gray-600 min-w-[100px] text-center">
          Page {currentPage + 1} sur {pageCount}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === pageCount - 1 || isAnimating}
          className="transition-all duration-300  hover:bg-blueDark hover:text-primary-foreground"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Testimonials;