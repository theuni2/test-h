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
  const investInImages = [
    { src: '/image/investin/img1.JPEG', alt: 'img 1' },
    { src: '/image/investin/img2.JPEG', alt: 'img 2' },
    { src: '/image/investin/img3.JPEG', alt: 'img 3' },
    { src: '/image/investin/img4.JPEG', alt: 'img 4' },
    { src: '/image/investin/img5.JPEG', alt: 'img 5' },
    { src: '/image/investin/img6.JPEG', alt: 'img 6' },
  ];

  const sarsanImages = [
    { src: '/image/sarsan/img1.jpeg', alt: 'sarsan img 1' },
    { src: '/image/sarsan/img2.jpeg', alt: 'sarsan img 2' },
    { src: '/image/sarsan/img3.jpeg', alt: 'sarsan img 3' },
    { src: '/image/sarsan/img4.jpeg', alt: 'sarsan img 4' },
  ];

  const sarsanVideos = [
    { src: '/image/sarsan/vid1.mp4', alt: 'sarsan video 1' },
    { src: '/image/sarsan/vid2.mp4', alt: 'sarsan video 2' },
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
      {/* InvestIN Gallery */}
      <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="sports-gallery">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4  ${ptSerif.className} `}>
            InvestIN Young Engineer Summer Experience Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {investInImages.map((img, index) => (
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

      {/* Sarsan Aviation Gallery */}
      <section className={`bg-[#011e35] py-16 ${ptSerif.className} `} id="sarsan-gallery">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-300 pb-4">
            Sarsan Aviation Experience Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Images */}
            {sarsanImages.map((img, index) => (
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

            {/* Videos */}
            {sarsanVideos.map((video, index) => (
              <motion.div
                key={`video-${index}`}
                className="relative overflow-hidden rounded-lg shadow-lg"
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ scale: 1.03 }}
              >
                <video
                  controls
                  className="w-full h-64 object-cover rounded-lg"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
