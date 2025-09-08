// import React from 'react'

// export default function Gallery() {
//   return (
//     <div>

//     </div>
//   )
// }


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
    // { src: '/image/cricket/cricket1.JPG', alt: 'Cricket match action' },
    // { src: '/image/polo.JPEG', alt: 'Water Polo' },
    { src: '/image/cricket/1.jpg', alt: 'Water Polo' },
    { src: '/image/cricket/2.JPEG', alt: 'Batsman playing a shot' },
    { src: '/image/cricket/3.jpg', alt: 'Bowler mid-delivery' },
    { src: '/image/cricket/4.JPEG', alt: 'Team celebrating victory' },
    { src: '/image/cricket/5.JPG', alt: 'Cricket trophy moment' },
    { src: '/image/cricket/6.jpg', alt: 'Cricket trophy moment' },
    { src: '/image/cricket/7.jpg', alt: 'Cricket trophy moment' },
    { src: '/image/cricket/8.JPG', alt: 'Cricket trophy moment' },
    { src: '/image/cricket/9.jpg', alt: 'Cricket trophy moment' },
    // { src: '/images/polo.jpg', alt: 'Water polo match' },
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
    <section className={` bg-[#011e35] py-16  ${ptSerif.className} `} id="sports-gallery ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#d6d6d6] mb-10 border-b border-gray-700 pb-4">
          Sports Gallery
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
                className="object-cover w-full h-64 "
                // className="object-cover w-full h-64 "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
