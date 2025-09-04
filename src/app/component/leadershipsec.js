"use client";

import React from "react";
import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function LeadershipIdentities() {
  const identities = [
    {
      title: "Collaborator",
      // text: "I thrive when working with others towards a common goal. My experiences in international competitions, society leadership, and team-based engineering projects have shown me the power of diverse ideas and shared commitment.",
      text: "I do my best work when I am part of a team that shares the same goal. I’ve participated in international competitions, led societies, and built engineering projects. Through these experiences, I’ve witnessed how different ideas and a common commitment can transform significant challenges into major successes.",
    },
    {
      title: "Mentor",
      text: "For me, leadership means lifting others up. As Lower School Liaison and society head, I’ve helped younger students not just tackle tough academics, but also unlock their confidence along the way (and realizing they’ve got way more potential than they thought)."
    },
    {
      title: "Problem Solver",
      text: "I view problems as puzzles rather than roadblocks. Whether I'm fixing engineering issues during internships or solving abstract math challenges, I approach obstacles with curiosity, creativity, and a determination to keep going until I find the solution."
      // text: "I view problems as puzzles rather than roadblocks. Whether I'm fixing engineering issues during internships or solving abstract math challenges, I approach obstacles with curiosity, creativity, and a determination to keep going until I find the solution."
      // text: "I see problems less as roadblocks and more as puzzles. From debugging engineering issues in internships to cracking abstract math challenges, I tackle obstacles with curiosity, creativity, and the persistence to push through until it clicks."
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#d6d6d6]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl text-blue-950 font-bold tracking-wide mb-4 ${ptSerif.className} `}>
          Leadership Identities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {identities.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#011e35] p-8 flex flex-col justify-start rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className={`text-xl font-bold text-[#d6d6d6] mb-4 mx-auto  ${ptSerif.className} `}>{item.title}</h3>
            <p className={`text-[#d6d6d6] leading-relaxed text-center ${ptSerif.className} `}>{item.text}</p>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
