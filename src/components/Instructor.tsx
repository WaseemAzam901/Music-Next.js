import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const Instructor = () => {
  return (
    <>
      <div className="h-[40rem] flex items-center justify-center relative">
        <WavyBackground className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl lg:text-7xl font-bold mb-8">Meet Our Instructor Kanwal</h2>
        </WavyBackground>
      </div>
    </>
  );
};

export default Instructor;
