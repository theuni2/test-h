
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PT_Serif } from "next/font/google";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // add weights you’ll use
});

export default function Gallery() {
  const images = [
    { src: '/image/ismtf/img1.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img2.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img3.JPEG', alt: 'ISMTF' },
    // { src: '/image/ismtf/img4.JPG',  alt: 'ISMTF' },
    { src: '/image/ismtf/img5.JPEG', alt: 'ISMTF' },
    { src: '/image/ismtf/img6.JPEG', alt: 'ISMTF' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const rover = [
    { src: '/image/sea_rover/img1.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img2.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img3.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img4.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img5.JPG', alt: 'Rover' },
    { src: '/image/sea_rover/img6.JPG', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const kenken = [
    { src: '/image/kenken/img1.jpg', alt: 'Rover' },
    { src: '/image/kenken/img2.JPG', alt: 'Rover' },
    { src: '/image/kenken/img3.JPG', alt: 'Rover' },
    { src: '/image/kenken/img4.JPG', alt: 'Rover' },
    { src: '/image/kenken/img5.JPG', alt: 'Rover' },
    { src: '/image/kenken/img6.jpg', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const doe = [
    { src: '/image/doe/img1.JPEG', alt: 'doe' },
    { src: '/image/doe/img2.jpg', alt: 'doe' },
    { src: '/image/doe/img3.jpeg', alt: 'doe' },
    { src: '/image/doe/img4.JPG', alt: 'doe' },
    { src: '/image/doe/img5.JPG', alt: 'doe' },
    { src: '/image/doe/img6.jpg', alt: 'doe' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const rubric = [
    { src: '/image/rubric/img1.jpg', alt: 'Rover' },
    { src: '/image/rubric/img2.JPG', alt: 'Rover' },
    { src: '/image/rubric/img3.JPG', alt: 'Rover' },
  //  { src: '/image/rubric/img4.jpg', alt: 'Rover' },
    { src: '/image/rubric/img5.JPG', alt: 'Rover' },
    { src: '/image/rubric/img6.jpg', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];
  const stem = [
    { src: '/image/stem2025/img1.JPG', alt: 'STEM 2025' },
    { src: '/image/stem2025/img2.JPG', alt: 'STEM 2025' },
    
  ];


  const imgVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <>

    <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="ismtf-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
    ISMTF Vienna Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="expo">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      
                    Expo 2020 Innovator Competition Gallery

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rover.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      
                    Rubik’s Cube Solver Gallery 

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rubric.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* kenken */}
   <section className={`bg-[#011e35] py-16 ${ptSerif.className}`} id="gallery">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      KenKen Competitions Gallery
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {kenken.map((img, index) => (
       <motion.div
  key={index}
  className="relative overflow-hidden rounded-lg shadow-lg"
  variants={imgVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={index}
  whileHover={{ scale: 1.03 }}
>
  <div className="rounded-xl border-2 border-blue-950 bg-[#d6d6d6]">
    <Image
      src={img.src}
      alt={img.alt}
      width={600}
      height={400}
      className="object-contain w-full h-64 rounded-xl"
    />
  </div>
</motion.div>

      ))}
    </div>
  </div>
</section>


    <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="doe-gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      
                   Duke of Edinburgh Awards (Bronze, Silver & Gold)


        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doe.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    
    {/* <section className={`bg-[#011e35] py-16 ${ptSerif.className}`} id="stem-gallery">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      STEM Challenge 2025
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stem.map((img, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={800}
            className="object-fit w-full h-100 rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section> */}


<section className={`bg-[#011e35] py-16 ${ptSerif.className}`} id="stem-gallery">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
      STEM Challenge 2025
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {stem.map((img, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-lg shadow-lg"
          variants={imgVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative w-full aspect-[3/4]"> 
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
