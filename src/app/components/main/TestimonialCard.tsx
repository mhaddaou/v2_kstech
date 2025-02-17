import { cn } from "@/utils/util";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn6(
        "bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300",
        "border border-gray-100",
        "flex flex-col gap-4",
        "transform hover:-translate-y-1",
        "h-[280px] w-full", // Fixed height and width
        className
      )}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-600 truncate">
            {role} • {company}
          </p>
        </div>
      </div>
      <p className="text-gray-700 italic line-clamp-5 flex-grow">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;