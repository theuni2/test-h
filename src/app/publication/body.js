"use client";

import { motion } from "framer-motion";

// import Navbar from "./nav";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // optional weights
});



export default function Publications() {
  const publications = [
    {
      title: "Research Paper – Mobility Rover for Remote Communities (In Progress)",
      description:"I’m working on a research paper about a mobility rover that delivers medical support and essentials to remote areas. With guidance from an MIT PhD graduate, I’m looking into everything from engineering design and materials selection to terrain adaptability and prototype testing. I am also exploring how this technology can create a real humanitarian impact.",
      // description:"Currently preparing a research paper on the design and development of a mobility rover aimed at delivering medical support and essential supplies to remote areas. Developed under guidance from an MIT PhD graduate, it will be submitted to academic journals upon completion. The paper covers engineering design principles, materials selection, terrain adaptability, and prototype testing, as well as the humanitarian applications of the rover.",
     
      link: null,
      image: "/image/rover.png", // Replace with actual path
    },
    {
      title: "Grimrush – Fiction Novel",
      description:
        "I wrote Grimrush, a novel available on Amazon. The best part is that every copy helps support The Little Wings Foundation. This organization cares for kids with musculoskeletal conditions in the Middle East, Asia, and Africa. What began as a fun creative project has become a way to make a real difference.",
      links: [
        { label: "US: View on Amazon", url: "https://amzn.to/2U6ZAdH" },
        { label: "UK: View on Amazon", url: "https://amzn.to/3jbUNSm" },
        { label: "UAE: View on Amazon", url: "https://amzn.to/3eDlizo" },
      ],
      image: "/image/2.JPG", // Replace with actual path
    },    {
      title: "DC Hydraulics – Dubai College Engineering Magazine",
      description:
        "I’m the Chief Editor, Co-Founder, and writer for DC Hydraulics, Dubai College’s student-run engineering magazine. I set the editorial tone, work with a team of writers, and contribute my own articles as well. Since we launched, it has become a popular read for our STEM community.",
      links: [
        { label: "Volume 1 (PDF)", url: "/pdf/dc1.pdf" },
        // { label: "Volume 1 (PDF)", url: "https://drive.google.com/file/d/1a7HMMr-_P0pqopKeR7DAOCwuvUlgXCa3/view?usp=drive_link" },
        { label: "Volume 2 (PDF)", url: "/pdf/dc2.pdf" },
        // { label: "Volume 2 (PDF)", url: "https://drive.google.com/file/d/1UlQfRW0oqtXw4BRz12g6B5TA3YORJ03Q/view?usp=drive_link" },
      ],
      image: "/image/dchydraulics.png", // Replace with actual path
    },
  ];

  return (
    <section className={`bg-[#d6d6d6] py-16 px-6 ${ptSerif.className} `}>
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-blue-950"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Publications
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-[#011e35] shadow-lg rounded-lg overflow-hidden border border-gray-200"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="md:w-1/3">
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="p-6 flex flex-col justify-center md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 text-[#d6d6d6]">
                {pub.title}
              </h3>
              <p className="text-[#d6d6d6] mb-4">{pub.description}</p>

              {pub.links && (
                <div className="flex flex-wrap gap-3">
                  {pub.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#eccc93] text-[#1a334c] font-bold px-4 py-2 rounded-lg shadow transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// coderower