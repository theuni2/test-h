// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function SportsSection() {
//   const sports = [
//     {
//       title: 'Varsity Cricket U19',
//       role: 'Captain & Starting All-Rounder',
//       details: 'Led team to multiple titles through strategic leadership and all-round performance.',
//     },
//     {
//       title: 'Varsity Water Polo U19',
//       role: 'Starting Center',
//       details: 'Contributed to undefeated seasons and championships with defensive and offensive plays.',
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.2,
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     }),
//   };

//   return (
//     <section className="bg-gray-50 text-indigo-700 py-16" id="sports">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
//           Sports & Competitions
//         </h2>
//         <div className="grid gap-8 md:grid-cols-2">
//           {sports.map((sport, index) => (
//             <motion.div
//               key={index}
//               className="border border-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-900"
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={index}
//             >
//               <h3 className="text-xl font-semibold text-white">{sport.title}</h3>
//               <p className="text-sm text-gray-400 mt-1 italic">{sport.role}</p>
//               <p className="mt-4 text-gray-300">{sport.details}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function SportsSection() {
  const intro =
    // "Sports have been a constant part of my life, shaping who I am both on and off the field. While I enjoy boxing and snowboarding, my heart has always belonged to cricket. From my earliest memories of holding a bat to competing in high-stakes matches, cricket has been more than a game—it has been my anchor, my teacher, and my greatest passion. Alongside cricket, water polo has played a major role in building my resilience, teamwork, and drive to excel.";
"Sports have been a constant part of my life, shaping who I am both on and off the field. While I enjoy boxing and snowboarding, my heart has always belonged to cricket. From my earliest memories of holding a bat to competing in high-stakes matches, cricket has been more than a game - it has been my anchor, my teacher, and my greatest passion. Alongside cricket, water polo has played a major role in building my teamwork, building my resilience, teamwork, and drive to excel."
  
const sports = [
    {
      title: "Cricket – U19 School Team",
      details:
        // "I recall for as long as I can remember, cricket was my passion but the game has been beyond my love for the sport. My participation in the school's U19 team national and international tournaments such as the ARCH Trophy, and spearheading the inter-school competitions were very instrumental for me because I learned to analyze the situation under pressure, to adjust strategies in real time, and to unify a group around a shared objective. Such experiences are reflective of my approach to science and engineering - conducting experiments, modifying when outcomes are different from anticipated, and persevering until the problem gets resolved. Cricket has been a major factor in my leadership as well. Knowing the right time to be a leader, when to listen and how to convince a team after a disappointment have been the most important takeaways from my cricket experiences. The qualities of discipline, patience, and unity that I have developed through the sport have greatly contributed to the way I work in labs, classrooms, and collaborative projects. ",
        // "Cricket has been my favourite sport for as long as I can remember. It is the sport I grew up watching, playing, and dreaming about. Every match, whether in a school tournament or a casual weekend game, has deepened my love for it. I am a core member of the U19 cricket team, representing my school in national and international tournaments, including the ARCH Trophy. Captaining the team during inter-school championships has been one of the most rewarding experiences of my life. On the pitch, I’ve learned how to think strategically under pressure, rally a team after setbacks, and celebrate every small victory together. Cricket has taught me discipline, patience, and the importance of unity—it’s a passion that will always be part of who I am.",
    //  "I recall for as long as I can remember, cricket was my passion but the game has been beyond my love for the sport. My participation in the school's U19 team national and international tournaments such as the ARCH Trophy, and spearheading the inter-school competitions were very instrumental for me because I learned to analyze the situation under pressure, to adjust strategies in real time, and to unify a group around a shared objective. Cricket has been a major factor in my leadership as well. Knowing the right time to be a leader, when to listen and how to convince a team after a disappointment have been the most important takeaways from my cricket experiences. The qualities of discipline, patience, and unity that I have developed through the sport have greatly contributed to the way I work in labs, classrooms, and collaborative projects.",
        "Cricket has been my favourite sport for as long as I can remember. It is the sport I grew up watching, playing, and dreaming about. Every match, whether in a school tournament or a casual weekend game, has deepened my love for it. I am a core member of the U19 cricket team, representing my school in national and international tournaments, including the ARCH Trophy. Captaining the team during an inter-school championship has been one of the most rewarding experiences of my life. On the pitch, I’ve learned how to think strategically under pressure, rally a team after setbacks, and celebrate every small victory together. Cricket has taught me discipline, patience, and the importance of unity. It’s a passion that will always be part of who I am.",
    images: [
        "/image/cricket/mc.jpg",
        // Add more cricket images here if available
      ],
    },
    {
      title: "Water Polo – U19 School Team",
      details:
        "Water polo has been one of the most demanding yet rewarding experiences of my school life. Since Year 10, I have played as the starting center for the U19 water polo team, helping secure consecutive inter-school championship victories and keeping our record undefeated. The sport has tested both my physical endurance and mental focus, pushing me to think quickly under pressure, communicate clearly, and trust completely in my teammates. Every match has strengthened my belief in preparation, resilience, and teamwork. The lessons I have learned in the pool to anticipate, adapt, and persist have shaped the way I approach challenges in academics, engineering, and leadership.",
        // "Since Year 10, I have been the starting center for the U19 water polo team, winning championships two years in a row and helping my school stay undefeated. Water polo has been a rigorous physical test of endurance, but it has also been a great exercise for my brain as I have had to think quickly under pressure, speak clearly, and trust wholeheartedly in my teammates. I have transferred the intensity of every water polo match to academic and engineering challenges that I have faced, and I have always tried to 'anticipate, adapt, and persist'. I have been greatly influenced by being in a team where work and strength of character are the main driving forces for success, and this has affected my attitude towards leadership, teamwork, and problem-solving at other times and places.",
      images: [
        "/image/cricket/mp.jpg",
        // Add more water polo images here if available
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className={`bg-[#d6d6d6]  py-8 ${ptSerif.className} `} id="sports">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-950"
        >
          Sports & Competitions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto text-center text-[#1a334c] leading-relaxed mb-12"
        >
          {intro}
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.title}
              className="border-t-4 border-[#eccc93] p-6 rounded-lg hover:shadow-2xl transition-all duration-300 bg-[#011e35]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
            {/* <motion.div
              key={sport.title}
              className="border border-gray-200 p-6 rounded-lg hover:shadow-2xl transition-all duration-300 bg-[#011e35]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            > */}
              <h3 className="text-2xl font-semibold text-[#d6d6d6] text-center">
                {sport.title}
              </h3>

              <div className="mt-6">
                <div className="mt-3 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={sport.images[0]}
                    alt={sport.title}
                    width={800}
                    height={400}
                    className="object-cover w-full h-80"
                  />
                </div>
              </div>

              <p className="mt-6 text-[#d6d6d6] text-justify">
                {sport.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

