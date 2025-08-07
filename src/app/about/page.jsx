'use client';
import Image from 'next/image'

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      style={{
        overflow: 'hidden',
        backgroundColor: '#0D1224',
        color: 'white',
        padding: '80px 24px',
      }}
    >

       

<div className="flex items-center justify-center mb-5 gap-0">
  <div className="flex-1 h-[2px] bg-[#231D4B] max-w-[120px]  md:mt-[0px] sm:mt-[5px] lg:mb-[60px] md:mb-[40px] mb-[20px]" />
  
  <h3 className="text-[1.25rem] font-medium bg-[#231D4B] text-white px-4 py-2 rounded-lg whitespace-nowrap 
                 text-center  md:mt-[0px] sm:mt-[5px] lg:mb-[60px] md:mb-[40px] mb-[20px]">
    About Me
  </h3>
  
  <div className="flex-1 h-[2px] bg-[#231D4B] max-w-[120px]  md:mt-[0px] sm:mt-[5px] lg:mb-[60px] md:mb-[40px] mb-[20px]" />
</div>


      

      {/* Container for About and Code side-by-side */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
        {/* Left Side: About Text */}



 <div className="flex-1">
  <p className="text-[#dddddd] text-[18px] leading-8 break-words whitespace-pre-wrap">
    My name is <strong className="text-[#EC4899]">Zohaib Hassan</strong>, a passionate and professional 
    <strong className="text-[#EC4899]"> software developer</strong> driven by curiosity and a love for programming. 
    I’m a quick learner with a self-motivated mindset, always eager to explore new technologies and solve real-world problems.

    <br /><br />

    With a strong foundation in <strong className="text-[#EC4899]">JavaScript</strong>, 
    I enjoy working across the full web stack and building modern, user-friendly applications. 
    My goal is to contribute to making the web more open, accessible, and impactful through clean and scalable code.
  </p>
</div>



        {/* Right Side: Code Preview */}
<div className="flex-1 flex justify-center md:justify-center items-center w-full md:w-auto mx-auto">
  <div className="group transition duration-500 transform hover:scale-105 w-[250px] md:w-[300px] lg:w-[350px] h-[250px] md:h-[300px] lg:h-[350px]">
    <div
      className="relative w-full h-full rounded-full overflow-hidden border-8 border-purple-600"
      style={{
        boxShadow: '0 0 90px 10px rgba(255, 255, 255, 0.3)',
      }}
    >
      <Image
        src="/zohaib.jpg"
        alt="Zohaib"
        fill
        className="object-cover rounded-full transition duration-500"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500 rounded-full z-10" />
    </div>
  </div>
</div>





      </div>
    </section>
  );
}