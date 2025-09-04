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
        "I view every challenge as an opportunity to create something better. Whether I'm designing a rover to deliver supplies to remote communities or leading STEM projects at school, I enjoy transforming “what if” into real solutions.",
    },
    {
      title: "Resilience",
      description:
        "Complex problems rarely have easy answers. From challenging academic tournaments to balancing leadership roles and sports with schoolwork, I've learned that progress comes from moving forward. This is true even when the way ahead isn't very clear."
    },
    {
      title: "Leadership",
      description:
        "Leadership, to me, is less about being a boss and more about growing together. Whether I'm running physics workshops, mentoring juniors, or organizing competitions, I lead with a combination of empathy, vision, and a team-first approach. Success feels better when everyone improves."
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
      className="bg-[#011e35] p-8 flex flex-col justify-start rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className={`text-xl font-bold text-[#d6d6d6] mb-4 mx-auto ${ptSerif.className}`}>{value.title}</h3>
      <p className={`text-[#d6d6d6] leading-relaxed text-center ${ptSerif.className}`}>{value.description}</p>
    </div>
  ))}
</div>

    </section>
  );
}
