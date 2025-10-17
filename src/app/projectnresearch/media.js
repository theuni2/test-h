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

  const article = mediaArticles[0];

  return (
    <section
      className={`relative py-20 bg-[#011e35] text-[#d6d6d6] ${ptSerif.className} overflow-hidden`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center space-y-10">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#d6d6d6]">
          Media Coverage
        </h2>

        {/* Static Text */}
        <div className="w-full h-auto">
          <p className="text-2xl font-semibold text-[#a0aec0] mb-2">{article.title} </p>
          {/* <p className="text-[#d6d6d6] text-lg">{article.description}</p> */}
        </div>

        {/* Button */}
        <div>
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
    </section>
  );
}

