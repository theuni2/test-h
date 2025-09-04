'use client';

import React from "react";

export default function HeroSection() {
  return (
    <>
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/full/266471.jpg')",
        }}
      ></div>

      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-2xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Empowering Through Tech
        </h1>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
          A student with a dream to empower people through the use of technology.
        </p>
      </div>
    </section>
        <section className="bg-gray-50 py-16 px-6 md:px-12" >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
          Research Papers, Publications
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 text-white" id="research">

          {/* Card 1 */}
          <div>
            <h3 className="text-lg font-bold text-indigo-700">
              Publication Author – Grimrush
            </h3>
            <p className="italic mb-2 text-gray-700">
              “Life Cycle Journey of a Self-Published Fiction Novel””
            </p>
            <p className="text-gray-700 mb-2">
              Wrote and self-published a fiction novel on Amazon, donating proceeds to Little Wings Foundation to support pediatric healthcare. Managed the complete publishing process — editing, design, marketing — demonstrating initiative and social impact.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline font-bold"
            >
             Available on Amazon →
            </a>
          </div>

          {/* Card 2 */}
          <div>
            <h3 className="text-lg font-bold text-indigo-700">
             Extended Project Qualification (EPQ) (Ongoing)
            </h3>
              <p className="italic mb-2 text-gray-700">
              “Application and Derivation of Euler’s Formula in Mechanical Vibrations”
            </p>
            <p className="text-gray-700 mb-2">
              Writing a dissertation on the application and derivation of Euler’s Formula to analyze vibrational modes in mechanical structures.
            </p>
            <a
              href="#"
              className="text-blue-900 font-bold hover:underline"
            >
              Ongoing – To Be Published 
            </a>
          </div>

       

        </div>
      </div>
    </section>
</>
  );
}
