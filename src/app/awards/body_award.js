// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function Achievements() {
//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const achievements = [
//     {
//       title: "Expo 2020 Innovator",
//       description: "Ocean clean-up rover showcased at Expo 2020 Sustainability Pavilion.",
//     },
//     {
//       title: "ISMTF Senior Olympiad Finalist",
//       description: "Ranked top 30 globally at international math competition in Vienna.",
//     },
//     {
//       title: "Stanford Math Challenge",
//       description: "Ranked in top 10% globally in the team round.",
//     },
//     {
//       title: "British Mathematics Olympiad Qualifier",
//       description: "Qualified based on exceptional UKMT performance.",
//     },
//     {
//       title: "High Achievers Award",
//       description: "Recognized for GCSE academic excellence.",
//     },
//     {
//       title: "Mathematics Competition Distinctions",
//       description: "High scores in multiple international math contests.",
//     },
//     {
//       title: "Science & Math School Awards",
//       description: "Multiple school-level wins in physics and mathematics.",
//     },
//     {
//       title: "Duke of Edinburgh Awards",
//       description: "Completed Bronze, Silver, and Gold levels.",
//     },
//   ];

//   const toggleExpand = (index) => {
//     setExpandedIndex(index === expandedIndex ? null : index);
//   };

//   return (
//     <section className="bg-white py-14 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10">
//       {/* Left Column */}
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
//         <h2 className="text-4xl font-bold mx-auto italic text-blue-950 mb-6">
//           Achievements
//         </h2>

     

//         <Image
//           src="/image/him.jpg"
//           alt="Profile Image"
//           width={250}
//           height={250}
//           className="rounded-md mx-auto my-2"
//         />

//    <a
//           href="https://www.linkedin.com/in/your-profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mb-4 bg-amber-500 mx-auto hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-center md:w-auto"
//         >
//           Visit LinkedIn For More Information
//         </a>
// {/* 
//         <a
//           href="https://www.instagram.com/your-profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mb-6 bg-orange-500 mx-auto hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-center md:w-auto"
//         >
//           Visit Instagram For More Information
//         </a> */}

//       </div>

//       {/* Right Column */}
//       <div className="w-full md:w-1/2">
//         {achievements.map((item, index) => (
//           <div key={index} className="border-t border-gray-300 py-3">
//             <button
//               className="w-full text-left font-semibold text-black focus:outline-none flex justify-between items-center"
//               onClick={() => toggleExpand(index)}
//             >
//               <span className="italic">{item.title}</span>
//               <span className="text-xl font-bold">
//                 {expandedIndex === index ? '–' : '+'}
//               </span>
//             </button>
//             {expandedIndex === index && (
//               <p className="mt-2 text-sm text-gray-700">{item.description}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function Achievements() {
  const [expandedIndex, setExpandedIndex] = useState(null);

const categories = [
  {
    category: "Academic Excellence",
    items: [
      {
        title: "High Achievers Award (Photo: Highest Achiever Award)",
        description:
          "Recognized for outstanding academic performance by securing grade 9 (highest possible) in all GCSE subjects — Mathematics, Further Mathematics, English Language, English Literature, Physics, Chemistry, Biology, Economics, Computer Science, and Physical Education — reflecting consistent dedication, academic excellence, and mastery across a broad range of disciplines."
      },
      {
        title: "AP Scholar Award",
        description:
          "Honored by the College Board’s AP Scholar Award for exceptional college-level achievement, scoring 5 in Microeconomics and Computer Science A, and 4 in Psychology. This recognition reflects strong academic ability, analytical thinking, and readiness for advanced university-level coursework across diverse subject areas."
      },
      {
        title: "UC Berkeley Course – Introduction to Statistics",
        description:
          "Successfully completed the Introduction to Statistics course with UC Berkeley, mastering both foundational and inferential statistical methods. Applied advanced statistical tools to real-world scenarios, using data analysis to inform decision-making and solve complex problems."
      }
    ]
  },
  {
    category: "STEM Competitions",
    items: [
      {
        title: "ISMTF Senior Olympiad (Photo: ISMTF Senior Olympiad)",
        description:
          "Represented Dubai College at the International Schools Mathematics Teachers Foundation (ISMTF) Senior Olympiad in Vienna, competing against top international teams. Demonstrated advanced problem-solving, logical reasoning, and mathematical modelling skills while collaborating under timed conditions to tackle complex, multi-step challenges."
      },
      {
        title: "Stanford Math Challenge",
        description:
          "Ranked in the top 10% globally in the team round of Stanford University’s International Math Tournament. Demonstrated advanced problem-solving, logical reasoning, and collaborative skills under timed conditions, competing alongside top math students from around the world."
      },
      {
        title: "STEM Challenge 2025 – Curtin University & Lab of Future",
        description:
          "Represented Dubai College in the STEM Challenge 2025, hosted by Curtin University in partnership with Lab of the Future, and placed among the Top 30 teams. The competition tested participants’ ability to solve real-world STEM problems under tight deadlines, requiring innovative thinking, rapid prototyping, and effective teamwork. This achievement reflects both technical expertise and the ability to collaborate efficiently in a high-pressure, competitive environment."
      },
      {
        title: "The Golden Bunsen Burner Award",
        description:
          "Competed in a science competition against schools from across the country completing problems and experiments ranging from building a pendulum to analysing unknown organisms through a microscope. Won first place in this competition."
      },
      {
        title: "DC Estimathon",
        description:
          "Successfully competed in Dubai College’s Estimathon — a high-intensity problem-solving event that combines mathematical reasoning, estimation, and teamwork. Demonstrated strong analytical skills and collaborative strategy under tight time constraints."
      },
      {
        title: "Bebras Computing Challenge",
        description:
          "An international competition that promotes problem-solving and computational thinking through a set of logic-based challenges. Achieved a placement in the 99.79 percentile and earned Best in School recognition for exceptional performance."
      }
    ]
  },
  {
    category: "Mathematics & Science Olympiads",
    items: [
      {
        title: "Mathematics Competitions",
        description:
          "Achieved distinctions and strong placements across a range of prestigious mathematics competitions, including the Dubai Maths Super League, British Mathematical Olympiad (BMO), and American Mathematics Competitions (AMC 8, 10, 12). Recognized for performance in advanced problem-solving challenges such as CIMC, CSMC, Fermat, Hypatia, and Galois, reflecting consistent academic excellence and commitment to mathematical reasoning at both national and international levels."
      },
      {
        title: "British Physics Olympiad",
        description:
          "Earned commendations in both the Intermediate and Senior British Physics Olympiad, demonstrating advanced problem-solving skills in challenging theoretical and practical physics scenarios. These achievements highlight strong analytical thinking, depth of subject knowledge, and the ability to apply physics concepts to complex problems under timed, high-pressure conditions."
      },
      {
        title: "Chemistry Olympiad & Avogadro Chemistry Contest",
        description:
          "Achieved strong results in the Chemistry Olympiad and the Avogadro Chemistry Contest, both known for their rigorous, university-level problem sets. These accomplishments reflect a high level of proficiency in chemical concepts, analytical problem-solving, and the ability to think critically about experimental and theoretical scenarios. Success in these competitions demonstrates a solid foundation in chemistry, as well as readiness to tackle advanced challenges in the subject."
      }
    ]
  },
  {
    category: "Innovation & Creative",
    items: [
      {
        title: "Duke of Edinburgh Awards (Bronze, Silver & Gold)",
        description:
          "Completed the Bronze, Silver, and Gold levels of this internationally recognized adventure program, developing resilience, leadership, and problem-solving through skill building, physical challenges, and community service. For the Gold Award, undertook a 4-day expedition covering 100 km on foot, demonstrating endurance and teamwork in challenging conditions. As part of the Gold residential project, contributed to refurbishing a school in Mauritius by painting its facilities—an experience that strengthened collaboration and fostered cross-cultural understanding."
      },
      {
        title: "Expo 2020 Innovator ",
        description:
          "Began the journey by winning the Expo 2020 Napkin Challenge, which advanced into being selected as a finalist for the Young Innovator Award. This recognition led to signing a contract with Expo 2020 to showcase a 3D-printed prototype of the project at the Sustainability Pavilion. The experience highlighted creativity, problem-solving, and commitment to sustainable innovation on a global stage."
      },
      {
        title: "KenKen Competitions",
        description:
          "Passion for logical problem-solving has driven consistent participation in KenKen competitions over several years, progressing from the school level to inter-school contests across Dubai, and ultimately competing at the national level within the UAE. Along the way, multiple high placements have been achieved, including a 2nd place finish nationally, which was recognized with a monetary award. These events have been both a challenge and a joy, combining mathematical skill with the excitement of competition."
      },
      {
        title: "Rubik’s Cube Solver",
        description:
          "Achieved a personal best solving time of 8.48 seconds, demonstrating advanced problem-solving ability, rapid pattern recognition, and focus under time pressure. This passion for speedcubing was also showcased at Emirates Living’s Got Talent, where the cube was solved in record time, leaving a strong impression on both judges and audience."
      },
      {
        title: "DC Terrarium Competition",
        description:
          "Won the Dubai College Terrarium Competition, demonstrating creativity, design skills, and an understanding of plant care and sustainable decorative concepts."
      }
    ]
  },
  {
    category: "Community Engagement & Social Impact",
    items: [
      {
        title: "Fundraising for The Citizens Foundation (TCF)",
        description:
          "As an Ambassador of Change for TCF, played a pivotal role in a team initiative that raised AED 100,000 to support education for underprivileged children in Pakistan. This funding fully covered the annual operational costs of two TCF schools, opening the doors of learning to nearly 200 students for an entire year. The campaign was driven by a belief that education transforms lives, and every effort—from planning and outreach to community engagement—was dedicated to ensuring these children have the chance to build a brighter future."
      },
      {
        title: "EEG OROC Campaign",
        description:
          "Actively contributed to the One Root, One Communi-Tree campaign organized by the Emirates Environmental Group (EEG), collecting over 1,000 kilograms of paper, plastic, e-waste, mobile phones, and aluminum cans. This large-scale recycling effort directly supported tree-planting initiatives across the UAE, reinforcing the belief that individual action can drive meaningful environmental change. The campaign’s success reflected a commitment to sustainability, community engagement, and protecting natural resources for future generations."
      }
    ]
  }
];


  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  let count = 0; // to uniquely index items across categories

  return (
//   <section className={`bg-[#d6d6d6] py-14 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-center gap-10 ${ptSerif.className} `}>
//   {/* Left Column */}
//   <div className="w-full md:w-1/3 flex flex-col items-center">
//     <h2 className="text-4xl font-bold  text-blue-950 mb-6 text-center">
//       Awards & Achievements
//     </h2>

//     <Image
//       src="/image/him.jpg"
//       alt="Profile Image"
//       width={250}
//       height={250}
//       className="rounded-md mx-auto my-2"
//     />

//     <a
//       href="https://www.linkedin.com/in/your-profile"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="mb-4 bg-[#1a334c] text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-center md:w-auto"
//     >
//       Visit LinkedIn For More Information
//     </a>
//   </div>

//   {/* Right Column */}
//   <div className="w-full md:w-2/3">
//     {categories.map((cat, cIdx) => (
//       <div key={cIdx} className="mb-6">
//         <h3 className="text-2xl font-bold text-[#1a334c] mb-3 pb-2">
//           {cat.category}
//         </h3>
//         {cat.items.map((item, iIdx) => {
//           const currentIndex = count++;
//           return (
//             <div key={iIdx} className="border-t border-gray-300 py-3">
//               <button
//                 className="w-full text-left font-semibold text-[#28476b] focus:outline-none flex justify-between items-center"
//                 onClick={() => toggleExpand(currentIndex)}
//               >
//                 <span className="">{item.title}</span>
//                 <span className="text-xl font-bold">
//                   {expandedIndex === currentIndex ? '–' : '+'}
//                 </span>
//               </button>
//               {expandedIndex === currentIndex && (
//                 <p className="mt-2 text-sm text-gray-700">
//                   {item.description}
//                 </p>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     ))}
//   </div>
// </section>
<section
  className={`bg-[#d6d6d6] py-14 px-6 md:px-20 flex flex-col md:flex-row items-start gap-10 ${ptSerif.className}`}
>
  {/* Left Column */}
  <div className="w-full md:w-1/3 flex flex-col items-start">
    <h2 className="text-4xl font-bold text-blue-950 mb-6 text-center">
      Awards & Achievements
    </h2>

    <Image
      src="/image/him.jpg"
      alt="Profile Image"
      width={250}
      height={250}
      className="rounded-lg my-2 mx-auto"
    />

    <a
      href="https://www.linkedin.com/in/humayl-fazal-3b1a11240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 bg-[#eccc93] mx-auto text-[#1a334c] font-semibold py-2 px-4 rounded-lg transition duration-300 w-full md:w-auto"
    >
      Connect with me on LinkedIn
    </a>
    <a
      href="/pdf/Resume.docx"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 bg-[#eccc93] mx-auto text-[#1a334c] font-semibold py-2 px-4 rounded-lg transition duration-300 w-full md:w-auto"
    >
     Download my Resume
    </a>
  </div>

  {/* Right Column */}
  <div className="w-full md:w-2/3">
    {categories.map((cat, cIdx) => (
      <div key={cIdx} className="mb-6">
        <h3 className="text-2xl font-bold text-[#1a334c] mb-3 pb-2">
          {cat.category}
        </h3>
        {cat.items.map((item, iIdx) => {
          const currentIndex = count++;
          return (
            <div key={iIdx} className="border-t border-gray-300 py-3">
              <button
                className="w-full text-left font-semibold text-[#28476b] focus:outline-none flex justify-between items-center"
                onClick={() => toggleExpand(currentIndex)}
              >
                <span>{item.title}</span>
                <span className="text-xl font-bold">
                  {expandedIndex === currentIndex ? '–' : '+'}
                </span>
              </button>
              {expandedIndex === currentIndex && (
                <p className="mt-2 text-sm text-gray-700">{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    ))}
  </div>
</section>

  );
}
