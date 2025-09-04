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
      cover: "/image/rover.png",
      gallery: [],
      blurb:
        "Designed to handle difficult terrain, carry essential supplies, and operate where conventional vehicles cannot go.",
      body: [
        "The idea for this project started after learning about the challenges faced by communities with no direct access to roads or healthcare facilities. I wanted to design something practical that could make a real difference in how medical teams and supplies reach people in urgent need.",
        "The rover is being built to handle difficult terrain, carry essential supplies, and operate in areas where conventional vehicles cannot go. I’ve worked on the design, selected durable materials, and developed a mechanism that can manage steep and uneven ground.",
        "It’s still in the prototype stage, but the aim is to test it under simulated field conditions to see how it performs in real-world scenarios.",
      ],
      chips: ["Robotics", "Rapid Prototyping", "Humanitarian Tech"],
      note: "Keep space for photos of the Model (Sketches, Model Drawing, 3D Printed Model).",
    },
    {
      id: "fasal-bot",
      title: "Ocean Clean-Up Rover (FASAL BOT)",
      cover: "/image/sea_rover/img1.JPG",
      gallery: [
        "/image/sea_rover/img2.JPG",
        "/image/sea_rover/img3.JPG",
        "/image/sea_rover/img4.JPG",
        // "/projects/fasal-bot/expo.jpg",
      ],
      blurb:
        "A small-scale rover that channels floating debris into a storage bay while letting water flow through — lightweight, energy-efficient, and maintainable.",
      body: [
        "This project began during the Expo 2020 Napkin Challenge, where my team and I sketched an innovation to solve a real-world problem. We chose to address water pollution, focusing on removing floating waste from oceans and waterways.",
        "Our concept advanced to the Young Innovator Finalist stage, and we signed a contract with Expo 2020 to develop it further. The design evolved into a working 3D prototype using a mechanical collection system.",
        "The prototype was displayed in the Sustainability Pavilion at Expo 2020, becoming part of a global conversation on engineering solutions for environmental challenges.",
      ],
      chips: ["Sustainability", "Mechanical Design", "Team Project"],
      linkLabel: "Model photos & sketches",
      linkHref:
        "https://drive.google.com/drive/folders/1ovdfTlKwYDlXdrkeJf6HCeRcVaDhMKzZ?usp=drive_link",
    },
    {
      id: "ai-pneumonia",
      title: "AI Model for Pneumonia Detection",
      cover: "/image/three.png",
      gallery: [
       
      ],
      blurb:
        "Trained a model on chest X-rays to identify pneumonia; explored privacy, bias, and clinical reliability.",
      body: [
        "This project began with a simple question: how can technology help doctors make faster and more accurate diagnoses? I chose pneumonia detection because of its global impact and the importance of early treatment.",
        "Working with medical imaging datasets, I trained an AI model to identify signs of pneumonia from X-ray scans — cleaning data, coding the model in Python, and testing accuracy.",
        "The goal was to understand both the potential and the limits of AI in real medical settings.",
      ],
      chips: ["Python", "Deep Learning", "Healthcare AI"],
    },
    {
      id: "stanford-ml",
      title: "Machine Learning System — Stanford Pre-Collegiate",
      cover: "/image/four.png",
      gallery: [
        // "/projects/stanford-ml/cover.jpg",
        // "/projects/stanford-ml/notes.jpg",
      ],
      blurb:
        "Two-week intensive on AI (supervised, unsupervised, RL). Final project: neural-network model of machine failure.",
      body: [
        "Completed a two-week intensive course covering supervised, unsupervised, and reinforcement learning. Implemented algorithms in Python with both educational and real datasets, applying linear algebra, statistics, calculus, and optimization.",
        "Explored bias in AI systems and mitigation strategies. Final project modeled machine failure using neural networks.",
        "Built technical depth and systems thinking for safe, efficient, and ethical AI.",
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
      blurb: "A dissertation investigating how varying airfoil shapes influence lift and drag across subsonic and supersonic flight conditions.",
  body: [
    "Conducted an in-depth exploration of aerodynamic principles, focusing on the impact of airfoil geometry on aircraft performance in different flight regimes.",
    "Integrated mathematical modeling, aerodynamic simulations, and comparative analysis to evaluate subsonic versus supersonic conditions.",
    "Emphasized critical evaluation, structured problem-solving, and technical writing aligned with university-level research standards.",
    "The work strengthened independent inquiry, data analysis, and research communication skills while offering insights into design trade-offs faced by aerospace engineers.",
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
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                      <a href='/awards#expo'>
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

