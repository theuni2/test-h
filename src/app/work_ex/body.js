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
  "Completed a two-week immersive engineering program designed by professionals from multiple disciplines, bridging the gap between school and the workplace.",
  "Designed and tested an aerofoil in a wind tunnel, programmed a fly-by-wire control panel, and explored commercial aircraft with aerospace engineers and pilots.",
  "Gained experience in robotics and machine learning through designing an AI creation, dismantled a petrol engine under the guidance of a mechanical engineer, and studied climate change solutions at the Thames Barrier.",
  "Attended a private networking session with engineers at University College London and completed psychometric and personality assessments with coaching on essential professional skills. The 65-hour program offered comprehensive exposure to both the technical and interpersonal dimensions of engineering."
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
  "Completed an immersive engineering internship in partnership with Turnpoint, 2Excel Engineering, and Lasham Gliding, gaining a comprehensive understanding of modern aviation systems and practices.",
  // "Completed an immersive engineering internship in partnership with Turnpoint, 2Excel Engineering, and Lasham Gliding.",
  "Worked closely with aerospace engineers, glider technicians, and maintenance teams to gain hands-on exposure to aircraft engineering and operational processes.",
  // "Gained hands-on exposure to aviation engineering and gliding operations, working directly with industry professionals.",
  "Explored aircraft systems in detail, studied the aerodynamics and mechanics of gliders, and learned practical maintenance and safety procedures used in real flight environments.",
  "Designed and tested basic flight components while observing aircraft inspections, developing both technical competence and teamwork skills. The program offered a real-world perspective on the aviation industry, bridging classroom learning with professional engineering applications.",
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
  "Completed a two-week internship in the Product Design and Development function at TouchPoint. Worked closely with the team on key initiatives, including participating in the design of a Cash Deposit Machine and supporting improvements to product features and usability.",
  "Assisted in the development and testing of software components, engaging in hands-on activities across the product lifecycle such as debugging and validation. Demonstrated a collaborative approach and a strong interest in product innovation while contributing to ongoing development projects."
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
        // "Gained exposure to the corporate environment and learned how ATM projects integrate both hardware and software components. ",
        // "Collaborated with cross-functional teams to identify ways to improve ATM solutions; testing and troubleshooting to ensure smooth hardware and software integration for ATM systems.",
        // "Collaborated with engineering teams to improve solutions."

        "Gained exposure to the corporate engineering environment and developed an understanding of how ATM projects integrate hardware and software components to deliver seamless functionality. ",
        // "Gained exposure to the corporate environment and learned how ATM projects integrate both hardware and software components. ",
        // "Collaborated with cross-functional teams to identify ways to improve ATM solutions; testing and troubleshooting to ensure smooth hardware and software integration for ATM systems.",
        "Collaborated with cross-functional teams to identify areas for improvement in ATM solutions, actively participating in testing and troubleshooting processes to ensure stable performance and reliable system integration.",
        "Worked closely with engineering teams to review project workflows, analyze system efficiency, and explore potential enhancements to improve the overall performance and sustainability of ATM technologies."
      ],
      photos: false,
    },
    {
      logo: "/image/company/Sarsan_Aviation.png",
      title: "Sarsan Aviation Academy",
      date: "7 July 2025 – 11 July 2025",
      companyDetails:
        "Sarsan Aviation Academy (Dubai) provides GCAA-approved Aircraft Maintenance Engineering training in CAT A1, B1.1, and B2 programs. With experienced instructors and hands-on access to real aircraft and engines, it equips students with the practical skills needed for successful aviation careers.",
 description: [
  "Studied flight theory, including the Navier–Stokes equation for fluid dynamics, and the reasoning behind the structural design of aircraft and rockets.",
  "Worked in a workshop to create parts for the repair of an aircraft’s landing gear.",
  "Gained hands-on experience with components of the Soloviev D-30, one of the most powerful turbofan engines, learning about its structure and operation."
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
  "Participated in a six-week engineer shadowing program delivered in collaboration with Eddyfi Technology.",
  "Attended live sessions covering multiple engineering fields, including robotics, aerospace, mechanical, electrical, and sustainable design.",
  "Created aerodynamic car models using CAD tools, designed and programmed robotic systems in simulation software, and explored renewable design concepts."
],

      photos: false,
    },
    {
      logo: "/image/company/attakkera.png",
      title: "Attakkera",
      d: "Grade 11",
      date: "4 December 2024 - 3 January 2025",
     
      companyDetails: "ATTAKKERA is a cutting-edge research and design initiative focused on futuristic transport and infrastructure systems.",
      description: [
        "Gained hands-on experience in automotive manufacturing and 3D printing within mechanical engineering.",
        "Learned to design detailed sketches and further developed a 3D prototype of a compact, all-terrain rover designed to deliver resources in hilly, disaster-hit areas where conventional cars cannot operate.",
        "Showcased creativity, technical skill, and problem-solving ability."
      ],
    },
  ];

 const reveal = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
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
//         <motion.p
//           variants={reveal}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//           className="mx-auto max-w-3xl text-center mb-3 text-gray-700"
//         >
//  Work experience has given me the opportunity to apply classroom knowledge to real-world projects, understand professional workflows, and develop practical skills in engineering, aerospace, and technology systems. These roles have allowed me to collaborate with industry professionals and  gain a deeper appreciation for the link between theory and application.
//         </motion.p>
//      <div className="grid gap-10 md:grid-cols-2">
//   {experiences.map((exp, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className={`bg-[#011e35] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#eccc93]
//         ${index === experiences.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
//     >
//       <div className="flex items-center gap-3 mb-2">
//         <img src={exp.logo} alt={exp.title} className="w-14 h-14 object-contain border-2 border-gray-50" />
//         <h3 className="text-xl font-semibold text-[#d6d6d6]">{exp.title}</h3>
//       </div>

//       {exp.companyDetails && (
//         <p className="text-[#a0aec0] text-sm italic mb-3">{exp.companyDetails}</p>
//       )}

//       <ul className="list-disc pl-5 text-[#d6d6d6] mb-3 space-y-2">
//         {exp.description.map((point, i) => (
//           <li key={i}>{point}</li>
//         ))}
//       </ul>

//       {exp.photos && (
//         <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center text-gray-400">
//           [Add Photos Here]
//         </div>
//       )}
//     </motion.div>
//   ))}
// </div>

//       </div>
//     </section>
<section className={`py-10 px-6 md:px-20 bg-[#d6d6d6] ${ptSerif.className} `}>
  <div className="max-w-6xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-4xl font-bold mb-3 text-center text-blue-950"
    >
      Work Experience
    </motion.h2>

    <motion.p
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto max-w-6xl text-center mb-6 text-gray-700"
    >
      Work experience has given me the opportunity to apply classroom knowledge to real-world projects, understand professional workflows, and develop practical skills in engineering, aerospace, and technology systems. These roles have allowed me to collaborate with industry professionals and gain a deeper appreciation for the link between theory and application.
    </motion.p>

    <div className="grid gap-10 md:grid-cols-2">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`bg-[#011e35] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#eccc93]
            ${index === experiences.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <img src={exp.logo} alt={exp.title} className="w-14 h-14 object-contain border-2 border-gray-50" />
              <h3 className="text-xl font-semibold text-[#d6d6d6]">{exp.title}</h3>
            </div>
            {/* {exp.date && (
              <span className="text-sm text-[#a0aec0] italic">{exp.date}</span>
            )} */}
          </div>

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
