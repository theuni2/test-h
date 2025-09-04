// import React from 'react'

// export default function Section_rl() {
//   return (
//     <div>

// {/* Right img section */}


//         <section class="text-gray-700 body-font bg-gray-50">
//   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//        Co-Founder – Physics in Motion Club
//       </h1>
//       <p class="mb-8 leading-relaxed">Founded and led a hands-on physics club; conducted workshops on aerodynamics, combustion engines, and mechanical systems.</p>
//       <div class="flex justify-center">
//         {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//         <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img class="object-cover object-center rounded" alt="hero" src="https://fastly.picsum.photos/id/10/2500/1667.jpg"/>
//     </div>
//   </div>
// </section>


//     </div>
//   )
// }


// 



'use client';

import React, { useEffect } from "react";
// import  from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Section_rl() {

useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation runs only once
    });
  }, []);

  return (
    <div>
      {/* Section 1 - Image Right */}
      <section className="relative  py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center md:text-left animate-fadeIn">
            <div className="bg-[#011e35] p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Co‑Founder – Physics in Motion Club
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
                Founded and led a hands‑on physics club, organizing engaging workshops on aerodynamics, combustion engines, and mechanical systems. Inspired curiosity and practical learning through interactive demonstrations and projects.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Physics Workshop"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left text-center animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Head – Physics & Engineering Society
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
               Facilitated workshops, delivered guest lectures, and guided collaborative group projects for a vibrant student community passionate about STEM innovation.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Engineering Project"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
          </div>
        </div>
      </section>


{/* Section 3 - Image Right */}

 <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center  animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Chief Editor – School Engineering Magazine
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
                Directed editorial content and shaped strategic vision for a student‑run publication highlighting groundbreaking developments in science and engineering.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Physics Workshop"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
          </div>
        </div>
      </section>


 {/* Section 4 - Image Left */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left text-center animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Lower School Liaison

              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
              Spearheaded academic support initiatives for younger students, offering peer tutoring and leading extracurricular engagement programs to enhance learning and participation.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Engineering Project"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
          </div>
        </div>
      </section>




{/* Section 5 - Image Right */}

 <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center md:text-left animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Co-Organizer – DC Physics Olympiad
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
                Managed event logistics and participant engagement for an inter‑school physics competition, introducing a tiered certification system to recognize varying levels of achievement.
                              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Physics Workshop"
              src="https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            />
          </div>
        </div>
      </section>


{/* Section 6 - Image Left */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left text-center animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Varsity Cricket U19 – Captain
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
              Competed in national and international tournaments, including the ARCH Trophy, and captained the team to multiple inter‑school championship victories.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Engineering Project"
              src="/image/cricket.JPEG"
            />
          </div>
        </div>
      </section>


{/* Section 7 - Image Right */}

 <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5">
          
          {/* Text */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center md:text-left animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h1 className="title-font sm:text-3xl text-2xl mb-6 font-bold text-indigo-700">
                Varsity Water Polo U19 – Starting Center

              </h1>
              <p className="mb-6 leading-relaxed text-gray-700 text-lg">
                Core player in an undefeated team, contributing to two consecutive inter‑school championship victories since Year 10.
                              </p>
            </div>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center animate-fadeInUp">
            <img
              className="object-cover object-center rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Polo Sports"
              src="/image/polo.JPEG"
            />
          </div>
        </div>
      </section>


      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}


