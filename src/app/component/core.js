import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description:
        // "I love working at the juncture of engineering, mathematics, and imaginative problem-solving. The process of creating prototypes is prone to failure, but I guess that’s a learning opportunity! The more difficulty I face with the prototypes, the more driven I feel to find solutions. It makes me learn a lot about STEM overall, giving me innovative ideas. I was able to lead STEM projects in school with this approach!",
   "To me, innovation means transforming ideas into tangible impact. Whether designing a rover to deliver supplies to remote areas or leading STEM initiatives at school, I’m driven to create solutions that make a difference. I see every setback as a spark for better ideas because true innovation begins where challenges inspire new ways of thinking."
      },
    {
      title: "Resilience",
      description:
        // "I’ve realized that complex problems don’t come with easy answers. Competing in rigorous academic tournaments, managing demanding leadership roles, and especially balancing sports with academics have taught me the value of pushing forward. To keep going."
        // "I’ve realized that complex problems don’t come with easy answers. Competing in rigorous academic tournaments, managing demanding leadership roles, and especially balancing sports with academics have taught me the value of pushing forward. To keep going."
 "I’ve learned that complex problems rarely have simple answers. Competing in challenging academic tournaments, managing leadership responsibilities, and balancing sports with academics have all taught me the importance of persistence. Resilience, to me, is about staying focused when things get difficult: adapting, learning, and moving forward even when the path isn’t clear."
      },
    {
      title: "Leadership",
      description:
        // "Helping out with physics workshops and mentoring younger students made me realize that being a leader is really about helping everyone grow alongside each other. When I was Head of the Physics & Engineering Society and helped start Physics in Motion, I got to work with my friends, run workshops, and put together events like the Dubai College Physics Olympiad. Playing cricket and water polo taught me the same thing: leadership is about letting the team work together so we can get more done than we ever could alone."
        // "To me, leadership is about inspiring others to grow alongside you. This is something I observed while conducting physics workshops and mentoring younger students."
    // "Helping out with physics workshops and mentoring younger students made me realize that being a leader is really about helping everyone grow alongside each other. When I was Head of the Physics & Engineering Society and helped start Physics in Motion, I got to work with my friends, run workshops, and put together events like the Dubai College Physics Olympiad. ",
    "To me, leadership is about inspiring others to grow together. As Head of the Physics & Engineering Society and Co-Founder of Physics in Motion, I’ve led workshops, mentored younger students, and organized the Dubai College Physics Olympiad. I’ve learned that true leadership means creating an environment where every team member feels valued and motivated because success is always a shared achievement."
      }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#d6d6d6]">
      <div className="max-w-6xl mx-auto text-center">
        {/* text-3xl md:text-4xl font-bold mb-6 text-blue-950 */}
        <h2 className={`text-3xl md:text-4xl text-blue-950 font-bold tracking-wide mb-4 ${ptSerif.className} `}>
          Core Values
        </h2>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {values.map((value, index) => (
    <div
      key={index}
      className="bg-[#011e35] p-8 flex border-t-4 border-[#eccc93] flex-col justify-start rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className={`text-xl font-bold text-[#d6d6d6] mb-4 mx-auto ${ptSerif.className}`}>{value.title}</h3>
      <p className={`text-[#d6d6d6] leading-relaxed text-center  ${ptSerif.className}`}>{value.description}</p>
    </div>
  ))}
</div>

    </section>
  );
}
