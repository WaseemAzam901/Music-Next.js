"use client";
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
const content = [
    {
      title: "Collaborative Composing",
      description:
        "Create music together in real time with your bandmates, producers, and collaborators. Share ideas, refine tracks, and make decisions quickly. Our platform helps you streamline your music production process and boost creativity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Composing
        </div>
      ),
    },
    {
      title: "Real-Time Mixing",
      description:
        "Hear changes as they happen. With our platform, you can track every mix adjustment in real time. No more confusion about the latest version of your track. Say goodbye to the chaos of mix versions and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
          Real-Time Mixing
        </div>
      ),
    },
    {
      title: "Track Version Control",
      description:
        "Experience real-time updates and never stress about losing track of your music versions. Our platform ensures you're always working on the most recent track, eliminating the need for constant manual updates. Keep your team in sync, maintain the flow of your creative process, and avoid interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Track Version Control
        </div>
      ),
    },
    {
      title: "Unlimited Content",
      description:
        "Never worry about running out of creative ideas. With our platform, you can continuously update and refresh your music content. Stay inspired, keep your audience engaged, and always have fresh tracks ready to share.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Unlimited Content
        </div>
      ),
    },
  ];
  
  
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs