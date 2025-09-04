// import React from 'react'

// export default function Work_ex() {
//   return (
//     <div>
//         <section className="bg-black py-12 px-6">
//   <h2 className="text-3xl font-bold text-orange-400 mb-10">Work Experience</h2>
  
//   <div className="relative border-l border-gray-600 ml-4">
//     {/* Diebold Nixdorf */}
//     <div className="mb-10 ml-6">
//       <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-[7px] top-2"></div>
//       <h3 className="text-white font-semibold">Diebold Nixdorf — Intern <span className="text-gray-400 text-sm">(Mar 2025 – Apr 2025)</span></h3>
//       <ul className="text-gray-300 list-disc ml-5 mt-2 space-y-1">
//         <li>Tested and troubleshot integrated ATM systems, gaining expertise in hardware–software interactions within fintech infrastructure.</li>
//         <li>Collaborated with engineering and product teams to streamline workflows and identify performance improvements in ATM deployment.</li>
//       </ul>
//     </div>

//     {/* Sarsan Aviation */}
//     <div className="ml-6">
//       <div className="absolute w-3 h-3 bg-orange-400 rounded-full -left-[7px] top-2"></div>
//       <h3 className="text-white font-semibold">Sarsan Aviation — Intern <span className="text-gray-400 text-sm">(Jul 2025)</span></h3>
//       <ul className="text-gray-300 list-disc ml-5 mt-2 space-y-1">
//         <li>Worked with landing gear components and the Soloviev D-30 turbofan engine, gaining hands-on aerospace mechanics experience.</li>
//         <li>Applied principles of fluid dynamics and structural design to understand flight systems and jet propulsion.</li>
//       </ul>
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }



'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Work_ex() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6" id="workex">
      <h2 className="md:text-3xl text-2xl font-bold text-indigo-700 text-center mb-10">
        Work Experience
      </h2>

      <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
        {/* Diebold Nixdorf */}
        <div
          className="flex-1 bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex items-center mb-4">
            <span className="bg-orange-400 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold mr-4">
              1
            </span>
            <h3 className="text-xl font-semibold text-white">
              Diebold Nixdorf — Intern
            </h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">(Mar 2025 – Apr 2025)</p>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>
              Tested and troubleshot integrated ATM systems, gaining expertise
              in hardware–software interactions within fintech infrastructure.
            </li>
            <li>
              Collaborated with engineering and product teams to streamline
              workflows and identify performance improvements in ATM deployment.
            </li>
          </ul>
        </div>

        {/* Sarsan Aviation */}
        <div
          className="flex-1 bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center mb-4">
            <span className="bg-orange-400 text-black w-8 h-8 flex items-center justify-center rounded-full font-bold mr-4">
              2
            </span>
            <h3 className="text-xl font-semibold text-white">
              Sarsan Aviation — Intern
            </h3>
          </div>
          <p className="text-sm text-gray-400 mb-3">(Jul 2025)</p>
          <ul className="text-gray-300 list-disc ml-5 space-y-1">
            <li>
              Worked with landing gear components and the Soloviev D-30 turbofan
              engine, gaining hands-on aerospace mechanics experience.
            </li>
            <li>
              Applied principles of fluid dynamics and structural design to
              understand flight systems and jet propulsion.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

