
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
  // const images = [
  //   { src: '/image/ismtf/1.JPEG', alt: 'ISMTF' },
  //   { src: '/image/ismtf/2.jpg', alt: 'ISMTF' },
  //   { src: '/image/ismtf/3.jpg', alt: 'ISMTF' },
  //   // { src: '/image/ismtf/img4.JPG',  alt: 'ISMTF' },
  //   { src: '/image/ismtf/4.JPEG', alt: 'ISMTF' },
  //   { src: '/image/ismtf/5.jpg', alt: 'ISMTF' },
  //   // { src: '/image/ismtf/6.JPEG', alt: 'ISMTF' },
  //   { src: '/image/ismtf/6.JPEG', alt: 'ISMTF' },
  //   // { src: '/images/polo.jpg', alt: 'Water polo match' },
  // ];

  // const kenken = [
  //   { src: '/image/kenken/1.JPG', alt: 'Rover' },
  //   { src: '/image/kenken/2.JPG', alt: 'Rover' },
  //   { src: '/image/kenken/3.JPG', alt: 'Rover' },
  //   { src: '/image/kenken/4.JPG', alt: 'Rover' },
  //   { src: '/image/kenken/5.JPG', alt: 'Rover' },
  //   { src: '/image/kenken/6.JPG', alt: 'Rover' },
  //   // { src: '/images/polo.jpg', alt: 'Water polo match' },
  // ];
  // const doe = [
  //   { src: '/image/doe/1.jpg', alt: 'doe' },
  //   { src: '/image/doe/2.JPEG', alt: 'doe' },
  //   { src: '/image/doe/3.jpg', alt: 'doe' },
  //   { src: '/image/doe/4.jpeg', alt: 'doe' },
  //   { src: '/image/doe/5.JPG', alt: 'doe' },
  //   { src: '/image/doe/6.JPG', alt: 'doe' },
  //   // { src: '/images/polo.jpg', alt: 'Water polo match' },
  // ];
  // const rubric = [
  //   { src: '/image/rubric/img1.jpg', alt: 'Rover' },
  //   { src: '/image/rubric/img2.JPG', alt: 'Rover' },
  //   { src: '/image/rubric/img3.JPG', alt: 'Rover' },
  // //  { src: '/image/rubric/img4.jpg', alt: 'Rover' },
  //   { src: '/image/rubric/img5.JPG', alt: 'Rover' },
  //   { src: '/image/rubric/img6.jpg', alt: 'Rover' },
  //   // { src: '/images/polo.jpg', alt: 'Water polo match' },
  // ];
  // const stem = [
  //   { src: '/image/stem2025/img1.JPG', alt: 'STEM 2025' },
  //   { src: '/image/stem2025/img2.JPG', alt: 'STEM 2025' },
    
  // ];


  const imgVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };


  const rover = [
    { src: '/image/rover/1.PNG', alt: 'Rover' },
    { src: '/image/rover/2.png', alt: 'Rover' },
    { src: "/image/rover/C.jpg", alt: 'Rover' },
    // { src: '/image/rover/3.png', alt: 'Rover' },
    { src: '/image/rover/4.png', alt: 'Rover' },
    { src: '/image/rover/5.png', alt: 'Rover' },
    { src: '/image/rover/6.JPG', alt: 'Rover' },
    { src: '/image/rover/7.JPG', alt: 'Rover' },
    { src: '/image/rover/8.JPG', alt: 'Rover' },
    { src: '/image/rover/9.JPG', alt: 'Rover' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
  ];

  return (
    <>

    <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="mrover">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
    Mobility Rover for Landlocked Communities
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
                className="object-cover w-full h-72"
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
</section> */}

    </>
  );
}
