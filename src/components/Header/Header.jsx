import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureCard from "./Features";
import { Files, Layers, Pencil } from "lucide-react";
const features = [
  {
    id: 1,
    Icon: Pencil,
    title: "Easy to Use",
    description: "Editing and customizing Essential Landing is easy and fast.",
  },
  {
    id: 2,
    Icon: Layers,
    title: "100% Responsive",
    description: "Editing and customizing Essential Landing is easy and fast.",
  },
  {
    id: 3,
    Icon: Files,
    title: "50+ New Pages",
    description: "Editing and customizing Essential Landing is easy and fast.",
  },
];

const Header = () => {
  return (
    <div className="bg-[#E3EEF8]">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 py-20">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            Icon={feature.Icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
