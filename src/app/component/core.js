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
        "I love working at the juncture of engineering, mathematics, and imaginative problem-solving. The process of creating prototypes is prone to failure, but I guess that’s a learning opportunity! The more difficulty I face with the prototypes, the more driven I feel to find solutions. It makes me learn a lot about STEM overall, giving me innovative ideas. I was able to lead STEM projects in school with this approach!",
    },
    {
      title: "Resilience",
      description:
        "I’ve realized that complex problems don’t come with easy answers. Competing in rigorous academic tournaments, managing demanding leadership roles, and especially balancing sports with academics have taught me the value of pushing forward. To keep going."
        // "I’ve realized that complex problems don’t come with easy answers. Competing in rigorous academic tournaments, managing demanding leadership roles, and especially balancing sports with academics have taught me the value of pushing forward. To keep going."
    },
    {
      title: "Leadership",
      description:
        // "Helping out with physics workshops and mentoring younger students made me realize that being a leader is really about helping everyone grow alongside each other. When I was Head of the Physics & Engineering Society and helped start Physics in Motion, I got to work with my friends, run workshops, and put together events like the Dubai College Physics Olympiad. Playing cricket and water polo taught me the same thing: leadership is about letting the team work together so we can get more done than we ever could alone."
        // "To me, leadership is about inspiring others to grow alongside you. This is something I observed while conducting physics workshops and mentoring younger students."
    "Helping out with physics workshops and mentoring younger students made me realize that being a leader is really about helping everyone grow alongside each other. When I was Head of the Physics & Engineering Society and helped start Physics in Motion, I got to work with my friends, run workshops, and put together events like the Dubai College Physics Olympiad. ",
    
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
