"use client";

import { motion } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function LeadershipSection() {
  const intro =
    "To me, leadership means taking responsibility and helping the team work together. In school projects, clubs, or community work, I’ve learned how to plan, organize, and make difficult decisions. I aim to keep things clear, calm, and cooperative so everyone can do their best.";

  const roles = [
    {
      title: "Head – Physics & Engineering Society",
      description:
        "I led the school’s main STEM society. I organized workshops, invited guest speakers, and managed group projects. The goal was to keep things hands-on and enjoyable. I wanted STEM to be more than just concepts in a textbook; I aimed to inspire real innovation.",
    },
    {
      title: "Co-Founder – Physics in Motion Club",
      description:
        "I started a student-led club focused on motion systems and hands-on experiments. We explored topics like aerodynamics and combustion engines. We built projects such as rubber band cars and perfume rockets. I handled the planning, gathered materials, and involved students from all year groups."
    },
    {
      title: "Co-Organizer – DC Physics Olympiad",
      description:
        "I handled logistics and kept participants engaged for an inter-school physics competition. I took care of scheduling and registrations. I also created a tiered certification system so that each level of achievement received the recognition it deserved."
    },
    {
      title: "Chief Editor – School Engineering Magazine",
      description:
        "I led the editorial strategy for DC Hydraulics, our student-run magazine focused on science and engineering breakthroughs. I handled the entire process, from choosing topics to the final publication. I also edited each piece for clarity and contributed my own articles to every issue."
    },
    {
      title: "Lower School Liaison",
      description:
        "I led efforts to support younger students, both in and out of the classroom.Set up a peer tutoring system for difficult subjects and organized activities to connect lower school students with senior clubs and competitions. I acted as a bridge between year groups to make academic help easier and less intimidating.",
    },{
      title: "Student Wellbeing Ambassador",
      description:
        "I promoted mental health and academic support in school. I pushed for a culture of empathy and inclusion. Supported wellbeing initiatives and student-led awareness campaigns. I also became a trusted contact for my peers who needed guidance.",
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
    <section id="leadership" className={`bg-[#d6d6d6] py-10 px-6 md:px-8 ${ptSerif.className} `}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold tracking-tight text-blue-950">Leadership</h2>
        <p className="mt-4 text-[#1a334c] leading-relaxed">{intro}</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {roles.map((role, idx) => (
          <motion.article
            key={role.title}
            variants={item}
            className="group relative overflow-hidden rounded-lg bg-[#011e35] border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
          >
            {/* Animated accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#eccc93] via-[#eccc96] to-[#eccc99]" />

            <div className="p-6">
              <h3 className={`text-lg md:text-xl font-semibold text-[#d6d6d6] ${ptSerif.className} `}>
                {role.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#d6d6d6]">
                {role.description}
              </p>
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
