// "use client";

// import { PT_Serif } from "next/font/google";

// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// export default function MediaCoverage() {
//   const mediaArticles = [
//     {
//       id: "dubai-teen-rovers",
//       title: "Dubai Teen Builds Rovers to Save Oceans & Support Disaster Relief",
//       description:
//         "A Dubai teen innovates with autonomous rovers to clean oceans and aid disaster relief, inspiring sustainable and socially impactful solutions.",
//       link: "https://gulfpress.net/dubai-teen-builds-rovers-to-save-oceans-and-support-disaster-relief/",
//     },
//     // Add more articles if needed
//   ];

//   return (
//     <section className={`py-16 bg-[#011e35] text-[#d6d6d6] ${ptSerif.className}`}>
//       <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#d6d6d6]">
//           Media Coverage
//         </h2>
//         <div className="text-center flex flex-col items-center gap-6">
//           {/* {mediaArticles.map((article) => ( */}
//             <div key={mediaArticles[0].id} className="max-w-md text-center">
//               <h3 className="text-xl md:text-2xl font-semibold text-[#a0aec0] mb-2">
//                 {mediaArticles[0].title}
//               </h3>
//               <p className="text-[#d6d6d6] mb-3 text-center">{mediaArticles[0].description}</p>
//               <a
//                 href={mediaArticles[0].link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-200 underline hover:text-blue-100 text-center"
//               >
//                 Read Full Article
//               </a>
//             </div>
//           {/* ))} */}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { PT_Serif } from "next/font/google";
import { useState, useEffect } from "react";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function MediaCoverage() {
  const mediaArticles = [
    {
      id: "dubai-teen-rovers",
      title: "Dubai Teen Builds Rovers to Save Oceans & Support Disaster Relief",
      description:
        "A Dubai teen innovates with autonomous rovers to clean oceans and aid disaster relief, inspiring sustainable and socially impactful solutions.",
      link: "https://gulfpress.net/dubai-teen-builds-rovers-to-save-oceans-and-support-disaster-relief/",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch article every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaArticles.length);
    }, 800);
    return () => clearInterval(interval);
  }, [mediaArticles.length]);

  const article = mediaArticles[currentIndex];

  return (
//     <section
//       className={`relative py-15 bg-[#011e35] text-[#d6d6d6] ${ptSerif.className} overflow-hidden`}
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#d6d6d6]">
//           Media Coverage
//         </h2>

//         {/* Moving Text */}
//         <div className="overflow-hidden w-full h-10 relative">
//           <div key={article.id} className="absolute whitespace-nowrap animate-marquee">
//             <span className="text-2xl font-semibold text-[#a0aec0] mr-4">
//               {article.title} —
//             </span>
//             <span className="text-[#d6d6d6] text-lg">{article.description}</span>
//           </div>
//         </div>

//         {/* Fixed Button at Bottom */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//           <a
//             href={article.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-[#eccc93] text-[#1a334c] rounded-xl shadow-lg hover:bg-[#eccc99] font-bold transition px-6 py-3"
//             // className="bg-blue-200 text-[#011e35] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-300 transition"
//           >
//             View Full Article
//           </a>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       {/* <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//         }
//       `}</style> */}
//       <style jsx>{`
//   @keyframes marquee {
//     0% {
//       transform: translateX(100%);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }
//   .animate-marquee {
//     animation: marquee 25s linear infinite;
//   }
// `}</style>

//     </section>
<section
  className={`relative py-20 bg-[#011e35] text-[#d6d6d6] ${ptSerif.className} overflow-hidden`}
>
  <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-10">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-[#d6d6d6]">
      Media Coverage
    </h2>

    {/* Moving Text */}
    <div className="overflow-hidden w-full h-10 relative">
      <div className="absolute whitespace-nowrap animate-marquee">
        <span className="text-2xl font-semibold text-[#a0aec0] mr-4">
          {article.title} —
        </span>
        <span className="text-[#d6d6d6] text-lg">{article.description}</span>
      </div>
    </div>

    {/* Button (centered, not absolute now) */}
    <div className="mt-8">
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#eccc93] text-[#1a334c] rounded-xl shadow-lg hover:bg-[#f0d8aa] font-bold transition px-8 py-3"
      >
        View Full Article
      </a>
    </div>

  </div>

  {/* Animation Styles */}
  <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      animation: marquee 25s linear infinite;
    }
  `}</style>
</section>

  );
}
