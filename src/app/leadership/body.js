// "use client";

// import { motion } from "framer-motion";
// import { PT_Serif } from "next/font/google";

// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"], // add weights you’ll use
// });

// export default function LeadershipSection() {
//   const intro =
//     "To me, leadership means taking responsibility and helping the team work together. In school projects, clubs, or community work, I’ve learned how to plan, organize, and make difficult decisions. I aim to keep things clear, calm, and cooperative so everyone can do their best.";

//   const roles = [
//     {
//       title: "Head – Physics & Engineering Society",
//       description:
//         "I led the school’s main STEM society. I organized workshops, invited guest speakers, and managed group projects. The goal was to keep things hands-on and enjoyable. I wanted STEM to be more than just concepts in a textbook; I aimed to inspire real innovation.",
//     },
//     {
//       title: "Co-Founder – Physics in Motion Club",
//       description:
//         "I started a student-led club focused on motion systems and hands-on experiments. We explored topics like aerodynamics and combustion engines. We built projects such as rubber band cars and perfume rockets. I handled the planning, gathered materials, and involved students from all year groups."
//     },
//     {
//       title: "Co-Organizer – DC Physics Olympiad",
//       description:
//         "I handled logistics and kept participants engaged for an inter-school physics competition. I took care of scheduling and registrations. I also created a tiered certification system so that each level of achievement received the recognition it deserved."
//     },
//     {
//       title: "Chief Editor – School Engineering Magazine",
//       description:
//         "I led the editorial strategy for DC Hydraulics, our student-run magazine focused on science and engineering breakthroughs. I handled the entire process, from choosing topics to the final publication. I also edited each piece for clarity and contributed my own articles to every issue."
//     },
//     {
//       title: "Lower School Liaison",
//       description:
//         "I led efforts to support younger students, both in and out of the classroom.Set up a peer tutoring system for difficult subjects and organized activities to connect lower school students with senior clubs and competitions. I acted as a bridge between year groups to make academic help easier and less intimidating.",
//     },{
//       title: "Student Wellbeing Ambassador",
//       description:
//         "I promoted mental health and academic support in school. I pushed for a culture of empathy and inclusion. Supported wellbeing initiatives and student-led awareness campaigns. I also became a trusted contact for my peers who needed guidance.",
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08, delayChildren: 0.1 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 26 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section id="leadership" className={`bg-[#d6d6d6] py-10 px-6 md:px-8 ${ptSerif.className} `}>
//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto text-center"
//       >
//         <h2 className="text-4xl font-bold tracking-tight text-blue-950">Leadership</h2>
//         <p className="mt-4 text-[#1a334c] leading-relaxed">{intro}</p>
//       </motion.div>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
//       >
//         {roles.map((role, idx) => (
//           <motion.article
//             key={role.title}
//             variants={item}
//             className="group relative overflow-hidden rounded-lg bg-[#011e35] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
//           >
//             {/* Animated accent bar */}
//             <div className="h-1 w-full bg-gradient-to-r from-[#eccc93] via-[#eccc96] to-[#eccc99]" />

//             <div className="p-6">
//               <h3 className={`text-lg md:text-xl font-semibold text-[#d6d6d6] ${ptSerif.className} `}>
//                 {role.title}
//               </h3>
//               <p className="mt-3 leading-relaxed text-[#d6d6d6]">
//                 {role.description}
//               </p>
//             </div>

//             {/* Subtle hover glow */}
//             <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
//               <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
//             </div>
//           </motion.article>
//         ))}
//       </motion.div>

//       <div className="sr-only">No photos for this page.</div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LeadershipSection() {
  const introPoints = [
    "Completed a two-week immersive engineering program designed by professionals from multiple disciplines, bridging the gap between school and the workplace;",
    "Plan clearly, organize well, and make tough calls when needed.",
    "Keep things calm, collaborative, and outcome-focused.",
    "Create space where everyone can do their best work.",
  ];

  const roles = [
    {
      title: "Head – Physics & Engineering Society",
      points: [
        // "Oversaw the operation of the school’s main STEM society;",
        // "Planned and delivered workshops, coordinated guest lectures, and managed collaborative group projects.",
        // "Made STEM fun and practical to spark real innovation.",
       " Oversaw the operation of the school’s main STEM society.",
"Planned and delivered workshops, coordinated guest lectures, and managed collaborative group projects.",
"Focused on creating sessions that encouraged practical application of concepts and inspired interest in STEM innovation.",


      ],
    },
    {
      title: "Co-Founder – Physics in Motion Club",
      points: [
        // "Launched a student-led club dedicated to exploring motion systems through hands-on learning;",
        // "Designed and delivered sessions on topics such as aerodynamics and combustion engines;",
        // "Handled planning, materials, and multi-year participation.",
        "Launched a student-led club dedicated to exploring motion systems through hands-on learning.",
"Designed and delivered sessions on topics such as aerodynamics and combustion engines.",
"Guided members in building small-scale engineering projects including rubber band cars and perfume rockets."

      ],
    },
    {
      title: "Co-Organizer – DC Physics Olympiad",
      points: [
        // "Handled logistics and participant engagement for an inter-school physics competition;",
        // "Introduced a tiered certification system to acknowledge varying levels of achievement among participants.",
        // "Introduced tiered certifications to recognize achievement.",
       " Handled logistics and participant engagement for an inter-school physics competition.",
"Coordinated event schedules, managed registrations, and introduced a tiered certification system to acknowledge varying levels of achievement among participants."

      ],
    },
    {
      title: "Chief Editor – School Engineering Magazine",
      points: [
        // "Directed the editorial strategy for DC Hydraulics, a student-run magazine focused on scientific and engineering breakthroughs. ",
        // "Managed the process from topic selection to final publication. Reviewed all articles for clarity and accuracy, and contributed original pieces to each issue.",
        // "Contributed original pieces to each issue.",
        "Directed the editorial strategy for DC Hydraulics, a student-run magazine focused on scientific and engineering breakthroughs. ",
        "Managed the process from topic selection to final publication. Reviewed all articles for clarity and accuracy, and contributed original pieces to each issue.",

      ],
    },
    {
      title: "Lower School Liaison",
      points: [
        // "Led initiatives to provide academic and extracurricular support for younger students. ",
        // "Connected juniors with senior clubs and competitions.",
        // "Organized activities, acting as a bridge between year groups to make academic help more accessible.",

       " Led initiatives to provide academic and extracurricular support for younger students. ",
"Developed a peer tutoring system to help with challenging subjects." ,
"Organized engagement activities to connect lower school students with senior year clubs and competitions. ",
"Acted as a bridge between year groups to make academic help more accessible."

      ],
    },
    {
      title: "Student Wellbeing Ambassador",
      points: [
      "  Advocated for mental health and academic support within the school community. ",
"Promoted a culture of empathy and inclusion by supporting wellbeing initiatives and student-led awareness campaigns. ",
"Acted as a point of contact for peers seeking guidance.",
"Developed a website, www.brightmindme.com, where I upload videos on diverse topics, offering practical tips to support student wellbeing."

        // "Served as a trusted point of contact for peers.",
      ],
      link:"https://brightmindme.com/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="leadership"
      className={`bg-[#d6d6d6] py-10 px-6 md:px-8 ${ptSerif.className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-blue-950">
          Leadership
        </h2>


       <p className="mt-4 text-[#1a334c] leading-relaxed">
        {/* To me, leadership means taking responsibility and helping the team work together. In school projects, clubs, or community work, I’ve learned how to plan, organize, and make difficult decisions. I aim to keep things clear, calm, and cooperative so everyone can do their best. */}
{/* I’ve taken on roles that require planning, coordination, and decision-making. These experiences have taught me how to communicate clearly, stay organized under pressure, and create an environment where others can contribute their best work. */}
Leadership for me is about taking responsibility, guiding others, and helping teams work toward a shared goal. Whether in academic settings, extracurricular activities, or community initiatives, I’ve taken on roles that require planning, coordination, and decision-making. These experiences have taught me how to communicate clearly, stay organized under pressure, and create an environment where others can contribute their best work.
       </p>

      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {roles.map((role) => (
          <motion.article
            key={role.title}
            variants={item}
            className="group relative overflow-hidden rounded-lg bg-[#011e35] border-t-4 border-[#eccc93] shadow-sm hover:shadow-xl transition-shadow"
          >
            {/* Animated accent bar */}
            {/* <div className="h-1 w-full bg-gradient-to-r from-[#eccc93] via-[#eccc96] to-[#eccc99]" /> */}

            <div className="p-6">
              <h3
                className={`text-lg md:text-xl font-semibold text-[#d6d6d6] ${ptSerif.className}`}
              >
                {role.title}
              </h3>

              <ul className="mt-3 text-[#d6d6d6] leading-relaxed list-disc list-inside space-y-2">
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-4">
              {role.link && (
  <a
    href={role.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#eccc93] text-[#1a334c] rounded-xl shadow-lg hover:bg-[#f0d8aa] font-bold transition px-8 py-3 inline-block"
  >
    Visit Website
  </a>
)}

            </div>
            </div>

            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5" />
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="sr-only">No photos for this page.</div>
    </section>
  );
}
