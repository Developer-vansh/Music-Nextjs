"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Collaborative Music Composition",
      description:
        "Work together in real time with your fellow musicians, composers, and producers. Collaborate on musical compositions, share ideas, and make harmonious decisions quickly. With our platform, you can streamline your creative workflow and increase musical productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Music Composition
        </div>
      ),
    },
    {
      title: "Real-Time Music Production",
      description:
        "See musical changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your musical project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
            Real-Time Music Production
        </div>
      ),
    },
    {
      title: "Version Control for Melodies and Beats",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your musical composition, eliminating the need for constant manual updates. Stay in the groove, keep your musical team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version Control for Melodies and Beats
        </div>
      ),
    },
    {
      title: "Avoiding Musical Writer's Block",
      description:
        "Experience real-time inspiration and never stress about running out of musical ideas. Our platform ensures that you're always fueled with creativity, eliminating the fear of hitting a musical wall. Stay in the flow, keep your musical content fresh, and maintain your artistic momentum.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Avoiding Musical Writer's Block
        </div>
      ),
    },
  ];
  

export default function WhyChooseUsSection() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
