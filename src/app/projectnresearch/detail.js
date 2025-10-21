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
      gallery: [
        "/image/rover/A.PNG",
        "/image/rover/B.png",
        // "/image/rover/C.jpg",
        "/image/rover/3.png"
      ],
      blurb:
        "Why this project: To design a rover capable of delivering essential medical and relief supplies to communities without road or healthcare access.",
      body: [
        "Conceived the idea after studying the challenges faced by landlocked regions lacking reliable infrastructure and emergency access.",
"Designed and visualized a rover capable of traversing steep and uneven terrain to safely transport critical supplies.",
"Conducted extensive research to identify durable and cost-effective materials that maximize stability, efficiency, and resistance on rough surfaces.",
"Engineered the stability mechanisms and wheel suspension systems to ensure reliable performance across challenging terrain.",
"Developed simulated test conditions to assess the rover’s performance and confirm its feasibility in real-world scenarios.",
"Impact: Enabled the efficient and safe transport of medical aid and hygiene supplies to underserved areas, improving access to essential resources for communities previously beyond reach."
         ],
      chips: ["Robotics", "Rapid Prototyping", "Humanitarian Tech"],
      // note: "Keep space for photos of the Model (Sketches, Model Drawing, 3D Printed Model).",
      link:'#mrover'
    },
    {
      id: "fasal-bot",
      title: "Ocean Clean-Up Rover (FASAL BOT)",
      cover: "/image/sea_rover/2.JPG",
      gallery: [
        "/image/sea_rover/A.JPG",
        "/image/sea_rover/B.JPG",
        "/image/sea_rover/C.JPG",
        // "/projects/fasal-bot/expo.jpg",
      ],
      blurb:"Why this project: To create a concept for an autonomous rover that could collect floating waste from oceans and waterways, reducing pollution through practical and sustainable engineering design.",

      // body: [
      //   "We chose to address water pollution, focusing on how to remove floating waste from oceans and waterways.",
      //   "Made a small-sized rover with a mechanical system to gather floating waste and purify water at the same time.",
      //   "Worked out a 3D model, energy-saving and low-maintenance were the main optimizations.",
      //   "He presented the prototype at the Sustainability Pavilion during Expo 2020 to an international audience.",
      //   "Impact: Encouraged the public to consider sustainable engineering solutions that can be adapted for ocean sustainability."
      // ],
 body: [
  "Initiated during the Expo 2020 Napkin Challenge, where my team and I proposed an innovative solution to tackle water pollution.",
  "Selected as a Young Innovator Finalist, leading to a collaboration with Expo 2020 engineers to transform our concept into a 3D prototype visualization.",
  "The design featured a mechanical collection system that channels debris into a storage compartment while allowing water to flow through.",
  "Focused on the idea of creating a lightweight, energy-efficient, and easy-to-maintain system suitable for large-scale environmental use.",
  "The final prototype, developed by Expo 2020, was displayed at the Sustainability Pavilion, showcasing youth-led innovation in environmental technology.",
  "Impact: Highlighted how student-driven ideas can inspire real-world environmental solutions, encouraging sustainable innovation and global awareness about ocean pollution."
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
      blurb:"Why this project: To explore how artificial intelligence can assist doctors in making faster, more accurate diagnoses for diseases with high global impact, such as pneumonia.",
        // "Why this project: To investigate whether AI could aid doctors in making quicker and more accurate decisions in the case of dangerous diseases.",
        // "Trained a model on chest X-rays to identify pneumonia; explored privacy, bias, and clinical reliability.",
         body: [
  "Initiated research on pneumonia detection to understand the role of AI in improving early diagnosis and treatment outcomes.",
  "Trained a machine learning model using medical imaging datasets to identify pneumonia from X-ray scans with increasing accuracy.",
  "Cleaned, organized, and preprocessed large sets of medical images, and coded the model using Python and relevant AI frameworks.",
  "Tested performance through accuracy metrics and iterative tuning to enhance prediction reliability.",
  "Studied the ethical implications of AI in healthcare, focusing on patient privacy, bias, and clinical trustworthiness.",
  "Impact: Demonstrated the potential of AI-driven diagnostics to support medical professionals in life-saving decisions while emphasizing the importance of ethical and responsible AI deployment."
],
      chips: ["Python", "Deep Learning", "Healthcare AI"],
    },
    {
      id: "stanford-ml",
      title: "Machine Learning System — Stanford Pre-Collegiate Summer Studies",
      cover: "/image/for.png",
      gallery: [
        // "/projects/stanford-ml/cover.jpg",
        // "/projects/stanford-ml/notes.jpg",
      ],
      blurb:
        "Why this project: To deepen understanding of artificial intelligence through academic study and hands-on application in a university-level research environment.",
//       body: [
//   "Initiated research on pneumonia detection to understand the role of AI in improving early diagnosis and treatment outcomes.",
//   "Trained a machine learning model using medical imaging datasets to identify pneumonia from X-ray scans with increasing accuracy.",
//   "Cleaned, organized, and preprocessed large sets of medical images, and coded the model using Python and relevant AI frameworks.",
//   "Tested performance through accuracy metrics and iterative tuning to enhance prediction reliability.",
//   "Studied the ethical implications of AI in healthcare, focusing on patient privacy, bias, and clinical trustworthiness.",
//   "Impact: Demonstrated the potential of AI-driven diagnostics to support medical professionals in life-saving decisions while emphasizing the importance of ethical and responsible AI deployment."
// ],

body: [
  "Completed a two-week intensive AI and Machine Learning program at Stanford University, covering supervised, unsupervised, and reinforcement learning.",
  "Implemented algorithms in Python, applying mathematical concepts from linear algebra, calculus, and statistics to real-world and educational datasets.",
  "Conducted a final project that modeled machine failure using neural networks, independently selecting and executing the approach.",
  "Explored bias in AI systems and learned strategies for detection and mitigation to promote fairness and ethical design.",
  "Completed all program assignments and assessments in a course designed to challenge university-level students.",
  "Impact: Strengthened technical, mathematical, and ethical understanding of AI systems, developing the ability to design data-driven solutions that are efficient, reliable, and socially responsible."
],


      chips: ["Neural Networks", "Modeling", "Ethics"],
    },
    {
      id: "epq-euler",
      title: "Extended Project Qualification (EPQ)",
      cover: "/image/euler.png",
      gallery: [
        // "/projects/epq-euler/cover.jpg",
        // "/projects/epq-euler/math.jpg",
        // "/projects/epq-euler/modes.jpg",
      ],
      blurb: "Why this project: To investigate how variations in airfoil geometry influence aerodynamic performance across subsonic and supersonic flight regimes.",
//   body: [
//     // "Explored airfoil shape and its effects on lift and drag for subsonic vs supersonic conditions.",
//     // "Did mathematical modeling and aerodynamic simulations to illustrate differences in flight regimes.",
//     // "Started working on a research paper at the university level by applying core research and technical writing competences.",
//     // "Improved abilities in independent study, data interpretation, and research-related communication.",
//     "Writing a university-level dissertation titled “To what extent does varying airfoil shapes influence lift and drag in subsonic and supersonic aircraft?”",
//     "This project involved an in-depth exploration of aerodynamic principles, focusing on how variations in airfoil geometry affect performance across different flight regimes. ",
//     "Required  mathematical modeling, aerodynamic simulations, and comparative analysis of subsonic versus supersonic conditions together.",
// "Other than the theoretical part, the dissertation also had technical writing, independent inquiry, and data analysis while giving important insights into the design trade-offs faced by aerospace engineers.",
//     "Impact: The project provided ideas about the issues of design that the aerospace field facing which help the readiness of the advanced study by giving the hints based on this research."
//   ],

body: [
  "Authored a university-level dissertation titled “To what extent does varying airfoil shape influence lift and drag in subsonic and supersonic aircraft?”",
  "This project involved an in-depth exploration of aerodynamic principles, focusing on how variations in airfoil geometry affect performance across different flight regimes.",
  "Compared results across flight regimes to evaluate design trade-offs affecting lift, drag, and overall performance efficiency.",
  "Developed mathematical modeling, aerodynamic simulations, and comparative analysis of subsonic versus supersonic conditions together.",
  "Emphasized problem-solving and evaluation consistent with university-standard research methodology.",
  "Other than the theoretical part, the dissertation also included technical writing, independent inquiry, and data analysis, providing key insights into the design trade-offs faced by aerospace engineers.",
  "Impact: Built a strong foundation in applied physics and aerospace engineering, developing analytical and research skills essential for future academic and professional pursuits in aeronautical science."
],

  chips: ["Aerodynamics", "Applied Physics", "Research Writing"],    },
    {
      id: "Propulsion Systems",
      title: "Alternative Propulsion Systems for Short-Haul Jets",
      cover: "/image/sus1.png",
      gallery: [
        // "/projects/epq-euler/cover.jpg",
        // "/projects/epq-euler/math.jpg",
        // "/projects/epq-euler/modes.jpg",
      ],
      blurb: "Why this project: To evaluate alternative propulsion technologies that can reduce the environmental impact and operational costs of short-haul flights and aviation operations.",
  body: [
    // "Explored airfoil shape and its effects on lift and drag for subsonic vs supersonic conditions.",
    // "Did mathematical modeling and aerodynamic simulations to illustrate differences in flight regimes.",
    // "Started working on a research paper at the university level by applying core research and technical writing competences.",
    // "Improved abilities in independent study, data interpretation, and research-related communication.",
    "Researched various propulsion options including sustainable aviation fuel (SAF)electric engines and hydrogen-based jet engines",
    "Focused  on their infrastructure needs and technological development costs.",
    "In this, I tried to analyze maturity levels of these propulsion systems, to determine how feasible were they for adoption, emphasizing support service requirements and capital investments.",
"Also, tried to analyze the operational suitability of these technologies for both short and long-haul flights, considering current limitations such as electric engine range and ongoing hydrogen engine development.",
 "Impact: My observations in this research paper make a strong case for adopting SAF as a near-term alternative to conventional jet engines, supporting efforts to transition aviation towards more sustainable, cost-effective fuel options with relatively low infrastructural changes."
],
  chips: ["SAF", "Hydrogen Engines", "Electric Propulsion "], 
  



  
  // chips: ["Aerodynamics", "Applied Physics", "Research Writing"],    

},
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
          Projects & Research Details
        </motion.h2>
        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl text-center text-gray-700"
        >
          My projects bring together academic knowledge, technical skills, and a focus on solving real-world problems. Each one reflects a balance between innovation and practical application, whether it’s building technology for underserved communities, exploring AI’s role in healthcare, or addressing environmental challenges. 
These projects have given me the chance to work both independently and as part of a team, often in competitive or high-profile environments. From early concepts to fully developed prototypes, the work has been shaped by research, experimentation, and a commitment to producing results that have real impact.

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
              {/* <div className={`${i % 2 === 0 ? "" : "md:order-2"}`}>
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
              </div> */}

{/* <div className={`${i % 2 === 0 ? "" : "md:order-2"}`}>
  <div className="group relative overflow-hidden my-auto rounded-lg shadow-lg w-full h-[350px] sm:h-[420px] md:h-[450px] bg-gray-100">
    <Image
      src={p.cover}
      alt={p.title}
      fill
      className="object-contain p-2 rounded-2xl transition-transform duration-500 group-hover:scale-105"
      sizes="(min-width: 768px) 50vw, 100vw"
      priority={i < 2}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    <div className="absolute bottom-3 left-3 text-white">
      <span className="inline-block bg-black/30 rounded-full px-3 py-1 text-xs backdrop-blur">
        {p.chips.join(" • ")}
      </span>
    </div>
  </div>
</div> */}

<div
  className={`${i % 2 === 0 ? "" : "md:order-2"} flex items-center justify-center`}
>
  <div className="group relative flex items-center justify-center overflow-hidden my-auto rounded-2xl shadow-lg w-full h-[350px] sm:h-[420px] md:h-[460px] bg-[#011e35]">
    <Image
      src={p.cover}
      alt={p.title}
      fill
      className="object-contain p-3 rounded-2xl transition-transform duration-500 group-hover:scale-105"
      sizes="(min-width: 768px) 50vw, 100vw"
      priority={i < 2}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    <div className="absolute bottom-3 left-3 text-white">
      <span className="inline-block bg-black/30 rounded-full px-3 py-1 text-xs backdrop-blur">
        {p.chips.join(" • ")}
      </span>
    </div>
  </div>
</div>


              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-[#5a5a5a]">{p.title}</h3>
                <p className="mt-2 text-gray-700">{p.blurb}</p>

                {/* <ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
  {p.body.map((para, idx) => (
    <li key={idx} className="flex gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5a5a5a]"></span>
      <p>{para}</p>
    </li>
  ))}
</ul> */}

<ul className="mt-4 space-y-3 text-gray-700 leading-relaxed">
  {p.body.map((para, idx) => {
    // Check if the paragraph starts with "Why This Project:" or "Impact:"
    const startsWithoutBullet = /^why this project|^impact/i.test(para);

    return (
      <li key={idx} className={`flex gap-3 ${startsWithoutBullet ? "items-start" : ""}`}>
        {!startsWithoutBullet && (
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#5a5a5a]"></span>
        )}
        <p>{para}</p>
      </li>
    );
  })}
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

