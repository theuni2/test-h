'use client';





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function Slider() {
  const slides = [

      { src: '/image/ocean_rover.png', text: 'Ocean Clean-up Rover Prototype', para:"Created for Expo 2020 Sustainability Pavilion; designed to collect ocean waste and promote sustainability.  " },
      { src: '/image/three.png', text: 'Pneumonia Detection Model (Inspirit AI Scholars Program)', para:"Built a machine learning model to detect pneumonia from X-ray data; integrated AI ethics considerations." },
      { src: '/image/rover.png', text: 'Mobility Rover for Landlocked Communities', para:"Designed and prototyped a functional rover capable of transporting essential medical and relief supplies to landlocked areas; focused on optimizing mechanical systems, terrain adaptability, and material efficiency to ensure safe and reliable delivery without human transport. " },
    { src: '/image/four.png', text: 'Machine Learning Systems (Stanford Pre-Collegiate Summer Institute)', para:"Designed AI systems in Python under mentorship from top AI researchers." },
    
  ];

  return (
    <div className='bg-[#d6d6d6] py-10 px-6 md:px-8' id="projects">
        <h1 className={`text-center text-3xl my-2 md:text-4xl font-bold mb-6 text-blue-950 ${ptSerif.className} `}>Engineering Projects</h1>
      <div className="w-full h-screen overflow-hidden relative">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="relative flex justify-center items-center h-full"
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
                <h2 className={`text-[#d6d6d6] my-1 text-3xl md:text-4xl font-extrabold drop-shadow-lg ${ptSerif.className} `}>
                  {slide.text}
                </h2>
                <p className={`text-[#d6d6d6] text-2xl md:text-3xl font-bold ${ptSerif.className} `}>
                    {slide.para}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
