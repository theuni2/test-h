
// import Navbar from "./nav";
// import { PT_Serif } from "next/font/google";

// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"], // optional weights
// });

// export default function Home() {
//   return (
//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('/image/cricket/cricket1.JPG')", // Place image in public folder
//       }}
//     >
//       <Navbar />

//       {/* Dark overlay for text readability */}
//       <div className="absolute inset-0 bg-black/70 bg-opacity-30"></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
//        <h1 className={`text-6xl font-extrabold ${ptSerif.className}`}>
//          Humayl Fazal {/* LEAPS <span className="text-orange-400">&amp;</span> BOUNDS */}
//         </h1>
//       <p className={`mt-4 text-lg tracking-widest font-bold  text-blue-100 ${ptSerif.className}`}>
//           Aspiring Engineer | Innovator | STEM Leader

//         </p>
//       <p className={`mt-4 text-lg tracking-widest font-bold  text-blue-100 ${ptSerif.className}`}>
//           humaylfazal@icloud.com

//         </p>
//       </div>
//     </div>
//   );
// }

import Navbar from "./nav";
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // optional weights
});

export default function Home() {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/image/cricket/cricket1.JPG')", // Place image in public folder
      }}
    >
      <Navbar />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className={`text-6xl font-extrabold ${ptSerif.className}`}>
          Humayl Fazal
        </h1>

        <p
          className={`mt-4 text-lg tracking-widest font-bold text-blue-100 ${ptSerif.className}`}
        >
          Aspiring Engineer | Innovator | STEM Leader
        </p>

        {/* <p
          className={`mt-4 text-lg tracking-widest font-bold text-blue-100 ${ptSerif.className}`}
        >
          Aspiring Engineer | Innovator | STEM Leader
        </p> */}

        <p
          className={`mt-2 text-lg tracking-widest font-bold text-blue-100 ${ptSerif.className}`}
        >
         Email Me: humaylfazal@icloud.com
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href="/pdf/Resume.docx"
            download
            className="px-6 py-3 bg-[#eccc93] text-[#1a334c] rounded-xl shadow-lg hover:bg-[#eccc99] font-bold transition"
          >
            Download Resume
          </a>

          {/* <a
            href="mailto:humaylfazal@icloud.com?subject=Inquiry%20from%20Portfolio"
            className="px-6 py-3 border border-[#d6d6d6] text-[#d6d6d6] rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a> */}
        </div>
      </div>
    </div>
  );
}
