// import React from "react";
// import { motion } from "framer-motion";

// function WorkExperience() {
//   const experiences = [
//     {
//       logo: "/logos/investin.png",
//       title: "InvestIN Young Engineer Summer Experience",
//       date: "29 July 2024 – 9 August 2024",
//       description:
//         "Completed a two-week immersive engineering program designed by professionals bridging the gap between school and the workplace. Activities included designing an aerofoil, programming a fly-by-wire control panel, visiting an airfield, robotics, AI design, dismantling a petrol engine, and studying climate solutions at the Thames Barrier. Attended private networking at UCL and completed psychometric testing with coaching. Total 65 hours of exposure to technical and professional aspects.",
//       photos: true,
//     },
//     {
//       logo: "/logos/turnpoint.png",
//       title: "Engineering Summer Internship – Turnpoint & 2Excel Engineering",
//       date: "12 August 2024 – 16 August 2024",
//       description:
//         "Completed an immersive internship in partnership with Turnpoint, 2Excel Engineering, and Lasham Gliding. Gained hands-on exposure to aviation engineering and gliding operations, learning about aircraft systems, glider mechanics, and maintenance techniques.",
//       photos: true,
//     },
//     {
//       logo: "/logos/touchpoint.png",
//       title: "TouchPoint",
//       date: "8 July 2024 – 19 July 2024",
//       description:
//         "Internship in Product Design and Development. Contributed to designing a Cash Deposit Machine and improving product usability. Assisted in development and testing of software components including debugging and validation.",
//       photos: false,
//     },
//     {
//       logo: "/logos/diebold.png",
//       title: "Diebold Nixdorf",
//       date: "26 March 2025 – 4 April 2025",
//       description:
//         "Gained exposure to ATM projects integrating hardware and software. Collaborated with teams to improve ATM solutions and assisted in testing and troubleshooting for smooth integration.",
//       photos: false,
//     },
//     {
//       logo: "/logos/sarsan.png",
//       title: "Sarsan Aviation",
//       date: "7 July 2025 – 11 July 2025",
//       description:
//         "Studied flight theory including Navier–Stokes equation, aircraft and rocket design. Worked in workshop on aircraft landing gear parts and explored the Soloviev D-30 turbofan engine.",
//       photos: true,
//     },
//     {
//       logo: "/logos/eddyfi.png",
//       title: "Eddyfi Technologies – Engineering Job Shadowing",
//       date: "26 July 2025 – 30 August 2025",
//       description:
//         "Six-week shadowing program with Eddyfi Robotics. Projects included creating aerodynamic car models using CAD, programming robotic systems in simulation software, and exploring renewable design concepts. Featured guest lectures and career pathway discussions.",
//       photos: false,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 md:px-20 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold mb-12 text-center"
//         >
//           Work Experience
//         </motion.h2>
//         <div className="grid gap-10 md:grid-cols-2">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 <img src={exp.logo} alt={exp.title} className="w-8 h-8 object-contain" />
//                 <h3 className="text-xl font-semibold">{exp.title}</h3>
//               </div>
//               <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
//               <p className="text-gray-200 mb-3">{exp.description}</p>
//               {exp.photos && (
//                 <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400">
//                   [Add Photos Here]
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WorkExperience;

'use client';

import React from 'react'
import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function Body() {
  const experiences = [
    {
      logo: "/image/company/investin.jpg",
      title: "InvestIN Young Engineer Summer Experience",
      date: "29 July 2024 – 9 August 2024",
      description:
        "Completed a two-week immersive engineering program designed by professionals bridging the gap between school and the workplace. Activities included designing an aerofoil, programming a fly-by-wire control panel, visiting an airfield, robotics, AI design, dismantling a petrol engine, and studying climate solutions at the Thames Barrier. Attended private networking at UCL and completed psychometric testing with coaching. Total 65 hours of exposure to technical and professional aspects.",
      photos: false,
    },
    {
      logo: "/image/company/excel.png",
      title: "Engineering Summer Internship – Turnpoint & 2Excel Engineering",
      date: "12 August 2024 – 16 August 2024",
      description:
        "Completed an immersive internship in partnership with Turnpoint, 2Excel Engineering, and Lasham Gliding. Gained hands-on exposure to aviation engineering and gliding operations, learning about aircraft systems, glider mechanics, and maintenance techniques.",
      photos: false,
    },
    {
      logo: "/image/company/touchpoint.png",
      title: "TouchPoint",
      date: "8 July 2024 – 19 July 2024",
      description:
        "Internship in Product Design and Development. Contributed to designing a Cash Deposit Machine and improving product usability. Assisted in development and testing of software components including debugging and validation.",
      photos: false,
    },
    {
      logo: "/image/company/diebold_logo.jpeg",
      title: "Diebold Nixdorf",
      date: "26 March 2025 – 4 April 2025",
      description:
        "Gained exposure to ATM projects integrating hardware and software. Collaborated with teams to improve ATM solutions and assisted in testing and troubleshooting for smooth integration.",
      photos: false,
    },
    {
      logo: "/image/company/Sarsan_Aviation.png",
      title: "Sarsan Aviation",
      date: "7 July 2025 – 11 July 2025",
      description:
        "Studied flight theory including Navier–Stokes equation, aircraft and rocket design. Worked in workshop on aircraft landing gear parts and explored the Soloviev D-30 turbofan engine.",
      photos: false,
    },
    {
      logo: "/image/company/eddify.png",
      title: "Eddyfi Technologies – Engineering Job Shadowing",
      date: "26 July 2025 – 30 August 2025",
      description:
        "Six-week shadowing program with Eddyfi Robotics. Projects included creating aerodynamic car models using CAD, programming robotic systems in simulation software, and exploring renewable design concepts. Featured guest lectures and career pathway discussions.",
      photos: false,
    },
  ];

  return (
    <section className={`py-10 px-6 md:px-20 bg-[#d6d6d6] ${ptSerif.className} `}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-950"
        >
          Work Experience
        </motion.h2>
        <div className="grid gap-10 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#011e35] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <img src={exp.logo} alt={exp.title} className="w-14 h-14 object-contain border-2 border-gray-50" />
                <h3 className="text-xl font-semibold text-[#d6d6d6]">{exp.title}</h3>
              </div>
              {/* <p className="text-sm mb-3 text-black">{exp.date}</p> */}
              <p className="text-[#d6d6d6] mb-3">{exp.description}</p>
              {exp.photos && (
                <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400">
                  [Add Photos Here]
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
