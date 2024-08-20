"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
    {
      quote:
        "Music expresses that which cannot be said and on which it is impossible to be silent. It has the power to bring people together, to heal, and to inspire. Through music, we find a language that speaks directly to the heart and soul.",
      name: "Victor Hugo",
      title: "Composer & Author",
    },
    {
      quote:
        "Where words fail, music speaks. It transcends language and cultural barriers, conveying emotions and stories that words alone cannot capture. Music has the ability to connect us all, no matter where we come from.",
      name: "Hans Christian Andersen",
      title: "Composer & Poet",
    },
    {
      quote:
        "Without music, life would be a mistake. It is the soundtrack of our lives, the melody that accompanies our joys and sorrows. Music has the unique ability to touch the deepest parts of our being and bring us closer to our true selves.",
      name: "Friedrich Nietzsche",
      title: "Philosopher & Composer",
    },
    {
      quote:
        "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It is the art form that makes the invisible visible, the intangible tangible. Through music, we explore the limitless possibilities of our creative spirits.",
      name: "Plato",
      title: "Philosopher & Music Theorist",
    },
    {
      quote:
        "One good thing about music, when it hits you, you feel no pain. It becomes a refuge, a source of comfort, and a way to express emotions that words cannot. Music is the universal language that unites us all, reminding us of our shared humanity.",
      name: "Bob Marley",
      title: "Musician & Songwriter",
    },
  ];
  

const MusicSchoolTestimonials = () => {
  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  overflow-hidden dark:bg-black">
      <h2 className="text-white text-xl  sm:text-3xl font-bold mb-8 z-10">
        Hear Our Harmony: Voices Of Voices
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonials;
