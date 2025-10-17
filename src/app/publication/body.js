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
      title: "Research Paper - Adapting martian rover technology for terrestrial disaster response and extreme terrains",
      // description:"Currently preparing a research paper on the design and development of a mobility rover aimed at delivering medical support and essential supplies to remote areas. Developed under guidance from an MIT PhD graduate, it will be submitted to academic journals upon completion. The paper covers engineering design principles, materials selection, terrain adaptability, and prototype testing, as well as the humanitarian applications of the rover.",
      description:"Conducted a year-long research project on adapting Martian rover technology for terrestrial disaster response and extreme terrains, under the mentorship of an MIT PhD graduate. The project investigated how rover mobility systems, structural design, and materials could be optimized for delivering essential supplies in regions impacted by natural disasters.This work combined principles of mechanical engineering, robotics, and humanitarian innovation, and has been accepted for publication in the upcoming issue of the Curieux Academic Journal. The experience enhanced my ability to connect advanced engineering concepts with real-world applications in disaster management.",
      // description:"I worked on a research paper about a mobility rover that delivers medical support and essentials to remote areas. With guidance from an MIT PhD graduate, I’m looking into everything from engineering design and materials selection to terrain adaptability and prototype testing. I am also exploring how this technology can create a real humanitarian impact.",
     
      link: null,
      image: "/image/rover.png", // Replace with actual path
    },
    {
      title: "Grimrush – Fiction Novel",
      description:
        "Grimrush is a fiction novel I wrote and self-published on Amazon, with all proceeds donated to The Little Wings Foundation, which provides life-changing medical care for children with musculoskeletal deformities across the Middle East, Asia, and Africa.The inspiration came after meeting Dr. Marc Sinclair, the surgeon who treated my own external tibial torsion, and witnessing firsthand how compassion and expertise can transform lives. Grimrush became more than a story - it became a way to merge creativity with purpose and use my words to make a tangible difference.",
      links: [
        { label: "US: View on Amazon", url: "https://amzn.to/2U6ZAdH" },
        { label: "UK: View on Amazon", url: "https://amzn.to/3jbUNSm" },
        { label: "UAE: View on Amazon", url: "https://amzn.to/3eDlizo" },
      ],
      image: "/image/2.JPG", // Replace with actual path
    },    {
      title: "DC Hydraulics – Dubai College Engineering Magazine",
      description:
        "I am the Chief Editor, Co-Founder, and contributor to DC Hydraulics, a student-run engineering magazine showcasing innovation, research, and student-led projects in STEM. The publication provides a platform for students to share ideas, explain complex concepts, and highlight achievements in science and engineering. As Chief Editor, I lead the editorial vision, coordinate with writers and designers, and contribute original articles while ensuring clarity, accuracy, and visual coherence. Since its launch, DC Hydraulics has grown into a cornerstone of the school’s STEM community, fostering collaboration, knowledge-sharing, and creative problem-solving.",
      links: [
        { label: "Volume 1 (PDF)", url: "/pdf/dc1.pdf" },
        // { label: "Volume 1 (PDF)", url: "https://drive.google.com/file/d/1a7HMMr-_P0pqopKeR7DAOCwuvUlgXCa3/view?usp=drive_link" },
        { label: "Volume 2 (PDF)", url: "/pdf/dc2.pdf" },
        // { label: "Volume 2 (PDF)", url: "https://drive.google.com/file/d/1UlQfRW0oqtXw4BRz12g6B5TA3YORJ03Q/view?usp=drive_link" },
      ],
      image: "/image/dchydraulics.png", // Replace with actual path
    },
      {
      title: "Research Paper - Sustainable Propulsion: Evaluating Alternatives to Jet Fuel for Regional Aviation",
      // description:"Currently preparing a research paper on the design and development of a mobility rover aimed at delivering medical support and essential supplies to remote areas. Developed under guidance from an MIT PhD graduate, it will be submitted to academic journals upon completion. The paper covers engineering design principles, materials selection, terrain adaptability, and prototype testing, as well as the humanitarian applications of the rover.",
      description:"Conducted a research project on evaluating alternative jet propulsion systems for short-haul aviation, comparing sustainable aviation fuel (SAF), electric engines, and hydrogen technologies under the mentorship of an MIT PhD graduate. The study analyzed infrastructure needs, development costs, and technological readiness, highlighting SAF as the most practical short-term solution due to its lower capital requirements and broader applicability. This work integrated principles of aerospace engineering, energy systems, and sustainability, and resulted in a research paper currently under submission to an academic journal.",

      // description:"I worked on a research paper about a mobility rover that delivers medical support and essentials to remote areas. With guidance from an MIT PhD graduate, I’m looking into everything from engineering design and materials selection to terrain adaptability and prototype testing. I am also exploring how this technology can create a real humanitarian impact.",
     
      link: null,
      image: "/image/sus1.png", // Replace with actual path
    },
  ];

 const reveal = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className={`bg-[#d6d6d6] py-16 px-6 ${ptSerif.className} `}>
      <motion.h2
        className="text-3xl font-bold text-center mb-4 text-blue-950"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Publications
      </motion.h2>
      <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center mb-3 text-gray-700"
        >
          My projects bring together academic knowledge, technical skills, and a focus on solving real-world problems. Each one reflects a balance between innovation and practical application, whether it’s building technology for underserved communities, exploring AI’s role in healthcare, or addressing environmental challenges. 
These projects have given me the chance to work both independently and as part of a team, often in competitive or high-profile environments. From early concepts to fully developed prototypes, the work has been shaped by research, experimentation, and a commitment to producing results that have real impact.

        </motion.p>

      <div className="max-w-6xl mx-auto space-y-12">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row bg-[#011e35] shadow-lg rounded-lg overflow-hidden border-t-4 border-[#eccc93]"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
                        {/* <div className="h-1 w-full bg-gradient-to-r from-[#eccc93] via-[#eccc96] to-[#eccc99]" /> */}

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