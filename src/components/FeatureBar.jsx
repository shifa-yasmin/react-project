
import {
  ShieldCheck,
  Heart,
  Star,
  Cake,
} from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      icon: <ShieldCheck size={18} />,
      text: "NATURAL INGREDIENTS",
    },
    {
      icon: <Heart size={18} />,
      text: "MADE WITH LOVE",
    },
    {
      icon: <Star size={18} />,
      text: "PREMIUM QUALITY",
    },
    {
      icon: <Cake size={18} />,
      text: "ARTISANAL CRAFT",
    },
  ];

  return (
    <section className="bg-pink-50 border-y border-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-pink-500 font-semibold text-sm md:text-base"
            >
              <span className="bg-pink-100 p-2 rounded-full">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;