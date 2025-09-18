"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

// --- Simple lightbox for per-project gallery ---
function GalleryModal({ open, onClose, images, startIndex = 0, caption }) {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, images.length, onClose]);

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 ${ptSerif.className} `}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src={images[idx]}
              alt={caption || "Gallery image"}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Controls */}
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
          >
            ◀
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
          >
            ▶
          </button>

          <div className="mt-3 text-center text-white/90 text-sm">
            {caption} — {idx + 1}/{images.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// --- Main section ---
export default function ProjectsDetails() {
  // Put your real images inside /public/projects/... and update paths below.
  const projects = [
    {
      id: "mobility-rover",
      title: "Mobility Rover for Landlocked Communities",
      cover: "/image/rover.PNG",
      gallery: [
        "/image/rover/A.PNG",
        "/image/rover/B.png",
        "/image/rover/C.jpg",
      ],
      blurb:
        "Why this project: To construct a vehicle that can reach communities that lack road access or healthcare so that both medical staff and necessary supplies can get to the areas that need them the most.",
      body: [
        "Created and visualized a rover to go over rough, hill-like terrains and carry local people the materials they need to survive.",
        // "The idea for this project started after learning about the challenges faced by communities with no direct access to roads or healthcare facilities. I wanted to design something practical that could make a real difference in how medical teams and supplies reach people in urgent need.",
        "Did extensive research and identified materials which are both durable and cost-effective to provide maximum resistance.",

        "Constructed the mechanical stability systems for secure travel over difficult grounds",
        "Designed test plans of the conditions that would be encountered in the field to confirm the feasibility of the vehicle in real life.",
        "Impact: Made it possible to take medical attention, electricity, hygiene, and food to the less favored areas in a quicker way."
      ],
      chips: ["Robotics", "Rapid Prototyping", "Humanitarian Tech"],
      note: "Keep space for photos of the Model (Sketches, Model Drawing, 3D Printed Model).",
      link:'#mrover'
    },
    {
      id: "fasal-bot",
      title: "Ocean Clean-Up Rover (FASAL BOT)",
      cover: "/image/sea_rover/img1.JPG",
      gallery: [
        "/image/sea_rover/A.JPG",
        "/image/sea_rover/B.JPG",
        "/image/sea_rover/C.JPG",
        // "/projects/fasal-bot/expo.jpg",
      ],
      blurb:
        "Why this project: To fight water pollution by extracting floating wastes from oceans and rivers in a way that saves energy.",
      body: [
        "Created during the Expo 2020 Napkin Challenge and went up to the Young Innovator Finalist stage.",
        "Made a small-sized rover with a mechanical system to gather floating waste and purify water at the same time.",
        "Worked out a 3D model, energy-saving and low-maintenance were the main optimizations.",
        "He presented the prototype at the Sustainability Pavilion during Expo 2020 to an international audience.",
        "Impact: Encouraged the public to consider sustainable engineering solutions that can be adapted for ocean sustainability."
      ],
      chips: ["Sustainability", "Mechanical Design", "Team Project"],
      linkLabel: "Model photos & sketches",
      linkHref:
        "https://drive.google.com/drive/folders/1ovdfTlKwYDlXdrkeJf6HCeRcVaDhMKzZ?usp=drive_link",
      link:'/awards#expo'
    },

    {
      id: "ai-pneumonia",
      title: "AI Model for Pneumonia Detection",
      cover: "/image/model.png",
      gallery: [
       
      ],
      blurb:
        "Why this project: To investigate whether AI could aid doctors in making quicker and more accurate decisions in the case of dangerous diseases.",
        // "Trained a model on chest X-rays to identify pneumonia; explored privacy, bias, and clinical reliability.",
      body: [
        "Gathered and cleansed medical imaging datasets (chest X-rays).",
        "Developed and trained a deep learning model by using Python to recognize pneumonia in chest X-rays.",
        "On the one hand, AI testing and performance measurement were held; on the other, the medical staff was informed about accuracy, fairness, and trustworthiness of the AI system in their clinical decision-making process.",
        "Looking into the issue of AI in medicine, the group considered privacy protection and common use, among other things.",
        "Impact: Shown the potential of AI to speed up diagnostic processes while simultaneously exposing its current limits."
      ],
      chips: ["Python", "Deep Learning", "Healthcare AI"],
    },
    {
      id: "stanford-ml",
      title: "Machine Learning System — Stanford Pre-Collegiate",
      cover: "/image/for.png",
      gallery: [
        // "/projects/stanford-ml/cover.jpg",
        // "/projects/stanford-ml/notes.jpg",
      ],
      blurb:
        "Why this project: This project was made to adopt the real-world application of supervised, unsupervised, and reinforcement learning to tackle practical problems by deepening AI knowledge.",
      body: [
        "Went through a two-week rigorous training program with Stanford tutors.",
        "Python was the programming language used to implement the algorithms, in which linear algebra, calculus, and optimization skills were applied.",
        "The author created a neural-network model that predicts the breakdown of machines by using real data.",
        "Investigated the presence of bias in AI systems and tried to find ways to reduce it.",
        "Impact: Improved knowledge of theory, practical application skills, and ethical issues in AI-related fields."

      ],
      chips: ["Neural Networks", "Modeling", "Ethics"],
    },
    {
      id: "epq-euler",
      title: "Extended Project Qualification — EPQ",
      cover: "/image/euler.png",
      gallery: [
        // "/projects/epq-euler/cover.jpg",
        // "/projects/epq-euler/math.jpg",
        // "/projects/epq-euler/modes.jpg",
      ],
      blurb: "Why this project: To delve into the effects that airfoil design had on the performance of aircraft, connecting physics, math, and engineering.",
  body: [
    "Explored airfoil shape and its effects on lift and drag for subsonic vs supersonic conditions.",
    "Did mathematical modeling and aerodynamic simulations to illustrate differences in flight regimes.",
    "Started working on a research paper at the university level by applying core research and technical writing competences.",
    "Improved abilities in independent study, data interpretation, and research-related communication.",
    "The impact: The project provided ideas about the issues of design that the aerospace field facing which help the readiness of the advanced study by giving the hints based on this research."
  ],
  chips: ["Aerodynamics", "Applied Physics", "Research Writing"],    },
  ];

  // Modal state
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [caption, setCaption] = useState("");

  const reveal = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects-details" className={`py-16 bg-[#d6d6d6] ${ptSerif.className} `}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-blue-950"
        >
          Projects & Research — Details
        </motion.h2>
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl text-center text-gray-700"
        >
          My projects bring together academic knowledge, technical skills, and a focus on
          solving real-world problems. From early concepts to fully developed prototypes,
          each one balances innovation with practical application.
        </motion.p>

        <div className="mt-12 space-y-14">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              id={p.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{
                hidden: { opacity: 0, y: 36 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className={`grid items-stretch gap-6 md:gap-10 md:grid-cols-2`}
            >
              {/* Alternate image/text sides */}
              <div className={`${i % 2 === 0 ? "" : "md:order-2"}`}>
                <div className="group relative h-64 sm:h-80 md:h-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform p-1 rounded-lg duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="inline-block bg-black/20 rounded-full px-3 py-1 text-xs backdrop-blur">
                      {p.chips.join(" • ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-[#5a5a5a]">{p.title}</h3>
                <p className="mt-2 text-gray-700">{p.blurb}</p>

                <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
  {p.body.map((para, idx) => (
    <li key={idx} className="flex gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5a5a5a]"></span>
      <p>{para}</p>
    </li>
  ))}
</ul>


                {/* Links / actions */}
                {
                    p.gallery.length>0?   <div className="mt-5 flex flex-wrap items-center gap-3">
                      <a href={p.link? p.link:""}>
                  <button
                    
                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm text-[#1a334c] font-bold hover:shadow transition bg-[#eccc93]"
                  >
                    View Gallery
                  </button>
</a>
                  {/* {p.linkHref && (
                    <a
                      href={p.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      {p.linkLabel || "External Link"}
                    </a>
                  )} */}
                </div> :""
                }
                {/* {
                    p.gallery.length>0?   <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setImages(p.gallery);
                      setStartIndex(0);
                      setCaption(p.title);
                      setOpen(true);
                    }}
                    className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:shadow transition bg-[#1a334c]"
                  >
                    View Gallery
                  </button>

                  {p.linkHref && (
                    <a
                      href={p.linkHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    >
                      {p.linkLabel || "External Link"}
                    </a>
                  )}
                </div> :""
                } */}
             

                {/* Thumbs */}
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {p.gallery.slice(0, 4).map((src, gi) => (
                    <button
                      key={src}
                      onClick={() => {
                        setImages(p.gallery);
                        setStartIndex(gi);
                        setCaption(p.title);
                        setOpen(true);
                      }}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-white"
                      aria-label="Open image"
                    >
                      <Image
                        src={src}
                        alt={`${p.title} thumbnail ${gi + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {p.note && (
                  <p className="mt-3 text-xs text-gray-500">{p.note}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <GalleryModal
        open={open}
        onClose={() => setOpen(false)}
        images={images}
        startIndex={startIndex}
        caption={caption}
      />
    </section>
  );
}

