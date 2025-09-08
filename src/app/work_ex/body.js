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






// 'use client';

// import React from 'react'
// import { motion } from "framer-motion";
// import { PT_Serif } from "next/font/google";

// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"], // add weights you’ll use
// });

// export default function Body() {
//   const experiences = [
//     {
//       logo: "/image/company/investin.jpg",
//       title: "InvestIN Young Engineer Summer Experience",
//       date: "29 July 2024 – 9 August 2024",
//       description:
//         "Completed a two-week immersive engineering program designed by professionals bridging the gap between school and the workplace. Activities included designing an aerofoil, programming a fly-by-wire control panel, visiting an airfield, robotics, AI design, dismantling a petrol engine, and studying climate solutions at the Thames Barrier. Attended private networking at UCL and completed psychometric testing with coaching. Total 65 hours of exposure to technical and professional aspects.",
//       photos: false,
//     },
//     {
//       logo: "/image/company/excel.png",
//       title: "Engineering Summer Internship – Turnpoint & 2Excel Engineering",
//       date: "12 August 2024 – 16 August 2024",
//       description:
//         "Completed an immersive internship in partnership with Turnpoint, 2Excel Engineering, and Lasham Gliding. Gained hands-on exposure to aviation engineering and gliding operations, learning about aircraft systems, glider mechanics, and maintenance techniques.",
//       photos: false,
//     },
//     {
//       logo: "/image/company/touchpoint.png",
//       title: "TouchPoint",
//       date: "8 July 2024 – 19 July 2024",
//       description:
//         "Internship in Product Design and Development. Contributed to designing a Cash Deposit Machine and improving product usability. Assisted in development and testing of software components including debugging and validation.",
//       photos: false,
//     },
//     {
//       logo: "/image/company/diebold_logo.jpeg",
//       title: "Diebold Nixdorf",
//       date: "26 March 2025 – 4 April 2025",
//       description:
//         "Gained exposure to ATM projects integrating hardware and software. Collaborated with teams to improve ATM solutions and assisted in testing and troubleshooting for smooth integration.",
//       photos: false,
//     },
//     {
//       logo: "/image/company/Sarsan_Aviation.png",
//       title: "Sarsan Aviation",
//       date: "7 July 2025 – 11 July 2025",
//       description:
//         "Studied flight theory including Navier–Stokes equation, aircraft and rocket design. Worked in workshop on aircraft landing gear parts and explored the Soloviev D-30 turbofan engine.",
//       photos: false,
//     },
//     {
//       logo: "/image/company/eddify.png",
//       title: "Eddyfi Technologies – Engineering Job Shadowing",
//       date: "26 July 2025 – 30 August 2025",
//       description:
//         "Six-week shadowing program with Eddyfi Robotics. Projects included creating aerodynamic car models using CAD, programming robotic systems in simulation software, and exploring renewable design concepts. Featured guest lectures and career pathway discussions.",
//       photos: false,
//     },
//   ];

//   return (
//     <section className={`py-10 px-6 md:px-20 bg-[#d6d6d6] ${ptSerif.className} `}>
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold mb-10 text-center text-blue-950"
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
//               className="bg-[#011e35] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 <img src={exp.logo} alt={exp.title} className="w-14 h-14 object-contain border-2 border-gray-50" />
//                 <h3 className="text-xl font-semibold text-[#d6d6d6]">{exp.title}</h3>
//               </div>
//               {/* <p className="text-sm mb-3 text-black">{exp.date}</p> */}
//               <p className="text-[#d6d6d6] mb-3">{exp.description}</p>
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







'use client';

import React from 'react'
import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Body() {
  const experiences = [
    {
      logo: "/image/company/investin.jpg",
      title: "InvestIN Young Engineer Summer Experience",
      date: "29 July 2024 – 9 August 2024",
      companyDetails:
        "InvestIN offers immersive career experiences led by industry professionals, designed to give students real-world insight into engineering. The Young Engineer Summer Experience provides hands-on projects across mechanical, civil, electrical, and aerospace fields, alongside innovation challenges and professional skills development.",
      description: [
        "Hands-on projects: aerofoil design, fly-by-wire panel, robotics, AI, dismantling a petrol engine.",
        "Field exposure: airfield visit, climate studies at Thames Barrier, networking at UCL.",
        "Completed 65 hours of technical + professional learning including psychometric testing."
      ],
      photos: false,
    },
    {
      logo: "/image/company/excel.png",
      title: "Turnpoint, 2Excel Engineering & Lasham Gliding",
      date: "12 August 2024 – 16 August 2024",
      companyDetails:
        "2Excel Engineering specializes in aircraft maintenance and modification, Turnpoint provides aviation training and solutions, and Lasham Gliding is one of Europe’s largest gliding centers. Together, they offer immersive industry exposure across aircraft systems, engineering practices, and real-world aviation operations.",
      description: [
        "Explored aviation engineering and gliding operations.",
        "Learned about aircraft systems, glider mechanics, and maintenance.",
        "Gained practical exposure through immersive internship sessions."
      ],
      photos: false,
    },
    {
      logo: "/image/company/touchpoint.png",
      title: "TouchPoint (Pvt.) Limited",
      date: "8 July 2024 – 19 July 2024",
      companyDetails:
        "TouchPoint (Pvt.) Limited is Pakistan’s leading provider of self-service banking and financial technology, delivering secure and scalable digital solutions. Since 2007, it has enabled branch transformation through ATMs, cash and cheque deposit machines, and digital platforms. Today, TouchPoint supports thousands of terminals across 600+ cities, helping banks provide 24/7 real-time services nationwide.",
      description: [
        "Worked on Cash Deposit Machine product design and usability.",
        "Assisted in development and testing of software components.",
        "Engaged in debugging and validation tasks."
      ],
      photos: false,
    },
    {
      logo: "/image/company/diebold_logo.jpeg",
      title: "Diebold Nixdorf",
      date: "26 March 2025 – 4 April 2025",
      companyDetails:
        "Diebold Nixdorf is a global leader in financial and retail technology, helping automate, digitize, and transform the way people bank and shop. With 160+ years of innovation, it delivers integrated hardware, software, and services—such as ATMs, point-of-sale systems, and branch solutions—to clients in over 100 countries.",
      description: [
        "Contributed to ATM projects integrating hardware and software.",
        "Supported testing, troubleshooting, and smooth system integration.",
        "Collaborated with engineering teams to improve solutions."
      ],
      photos: false,
    },
    {
      logo: "/image/company/Sarsan_Aviation.png",
      title: "Sarsan Aviation Academy (Dubai)",
      date: "7 July 2025 – 11 July 2025",
      companyDetails:
        "Sarsan Aviation Academy (Dubai) provides GCAA-approved Aircraft Maintenance Engineering training in CAT A1, B1.1, and B2 programs. With experienced instructors and hands-on access to real aircraft and engines, it equips students with the practical skills needed for successful aviation careers.",
      description: [
        "Studied flight theory including Navier–Stokes equation and aircraft/rocket design.",
        "Worked on aircraft landing gear components in workshop.",
        "Explored Soloviev D-30 turbofan engine design and structure."
      ],
      photos: false,
    },
    {
      logo: "/image/company/eddify.png",
      title: "Eddyfi Technologies ",
      date: "26 July 2025 – 30 August 2025",
      companyDetails:
        "Eddyfi Technologies is a global leader in non-destructive testing (NDT), providing advanced instruments, sensors, software, and robotic systems. Serving industries from aerospace to energy, it helps organizations improve safety, productivity, and asset reliability worldwide.",
      description: [
        "Created aerodynamic car models with CAD and robotic simulations.",
        "Worked on renewable design concepts with exposure to advanced robotics.",
        "Participated in guest lectures and career pathway discussions."
      ],
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
              {exp.companyDetails && (
                <p className="text-[#a0aec0] text-sm italic mb-3">{exp.companyDetails}</p>
              )}
              <ul className="list-disc pl-5 text-[#d6d6d6] mb-3 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
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
