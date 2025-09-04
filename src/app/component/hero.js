// import { PT_Serif } from "next/font/google";

// const ptSerif = PT_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"], // add weights you’ll use
// });

// export default function AboutMe() {
//   return (
//     <section className={`py-16 px-6 md:px-20 bg-[#d6d6d6] ${ptSerif.className}`}>
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
//         {/* Left: Text */}
//         <div className="flex-1">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-950">About Me</h2>
//           {/* <p className={`text-[#1a334c] leading-relaxed mb-4 ${ptSerif.className}`}>
//             I’m Humayl Fazal, an A-Level student at Dubai College, pursuing Mathematics, Further Mathematics, Physics, and Chemistry. My passion lies at the intersection of engineering, mathematics, and innovation — areas where curiosity meets practical problem-solving.
//           </p>
//           <p className="text-[#1a334c] leading-relaxed mb-4">
//             From a young age, I’ve been fascinated by how mechanical systems work, whether it’s the precision of an aircraft engine or the efficiency of a rover navigating challenging terrain. That curiosity has grown into hands-on experience: designing prototypes for remote healthcare delivery, exploring aerospace engineering during industry internships, and leading STEM-focused clubs and competitions.
//           </p>
//           <p className="text-[#1a334c] leading-relaxed mb-4">
//             As Head of the Physics & Engineering Society and Co-Founder of the Physics in Motion Club, I lead workshops, mentor peers, and organize events that inspire others to explore STEM. My participation in competitions such as the British Mathematics Olympiad, ISMTF Senior Olympiad, and Stanford Math Challenge has sharpened my problem-solving skills under pressure.
//           </p>
//           <p className="text-[#1a334c] leading-relaxed">
//             Whether it’s showcasing projects at Expo 2020, representing my school’s U19 cricket team, or developing innovative engineering solutions, I’m driven by the same goal: to make an impact through innovation, collaboration, and perseverance.
//           </p> */}

//           <p className={`text-[#1a334c] leading-relaxed mb-4 ${ptSerif.className}`}>
//   Hey, I’m Humayl Fazal — currently an A-Level student at Dubai College diving deep into Maths, Further Maths, Physics, and Chemistry. I’m big on anything that mixes numbers, problem-solving, and innovation. Basically, if it’s about building, designing, or figuring out how things work, I’m all in.
// </p>
// <p className="text-[#1a334c] leading-relaxed mb-4">
//   I’ve always been that kid who wanted to know how engines roar and how machines move. Over time, that curiosity turned into real projects — from designing a healthcare rover to interning in aerospace workshops, and even leading STEM clubs that push creative engineering ideas forward.
// </p>
// <p className="text-[#1a334c] leading-relaxed mb-4">
//   As Head of the Physics & Engineering Society and Co-Founder of Physics in Motion Club, I love bringing people together to experiment, brainstorm, and learn. Competitions like the British Mathematics Olympiad, ISMTF Senior Olympiad, and Stanford Math Challenge? They’ve trained me to think fast and problem-solve under pressure.
// </p>
// <p className="text-[#1a334c] leading-relaxed">
//   Outside of academics, you’ll probably find me on the cricket pitch or in the pool with my water polo team. Whether it’s sports, research, or tech projects, I’m always chasing the same thing — creating impact through teamwork, curiosity, and persistence.
// </p>

//         </div>

//         {/* Right: Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src="/image/him.jpg" // Place your image in public/ folder
//             alt="Humayl Fazal"
//             className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function AboutMe() {
  return (
    <section className={`py-16 px-6 md:px-20 bg-[#d6d6d6] ${ptSerif.className}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-950">About Me</h2>
          
          <p className={`text-[#1a334c] leading-relaxed mb-4 ${ptSerif.className}`}>
            I’m Humayl Fazal, an A-Level student at Dubai College, studying Maths, Further Maths, Physics, and Chemistry. 
            I practically live in equations. I enjoy working at the intersection of engineering, math, and innovation. 
            Curiosity is not just a question; it’s a project waiting to unfold.
          </p>
          
          <p className="text-[#1a334c] leading-relaxed mb-4">
            I’m fascinated by engines, rovers, and machines. If it moves, I want to understand it. 
            This curiosity has driven me from asking “how does this work?” to actually building things. 
            I’ve created a healthcare rover prototype, completed aerospace internships, and participated in STEM clubs 
            where ideas are tested, broken, fixed, and improved.
          </p>
          
          <p className="text-[#1a334c] leading-relaxed mb-4">
            As the Head of the Physics & Engineering Society and co-founder of the Physics in Motion Club, 
            I spend a lot of time running workshops, mentoring my peers, and presenting challenges to those 
            who enjoy thinking creatively. Competitions like the British Mathematics Olympiad, ISMTF, and 
            the Stanford Math Challenge have trained me in problem-solving under pressure.
          </p>
          
          <p className="text-[#1a334c] leading-relaxed">
            When I’m not in the lab or classroom, I trade equations for cricket pitches and water polo matches. 
            Whether in sports, research, or designing solutions, I’m after the same goal: making an impact through 
            curiosity, teamwork, and enough persistence to turn “what if” into “why not.”
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/image/him.jpg" // Place your image in public/ folder
            alt="Humayl Fazal"
            className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
