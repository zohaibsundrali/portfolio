'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import { HiDownload, HiUser } from 'react-icons/hi';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const name = 'Zohaib';
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoopKey((prev) => prev + 1);
    }, name.length * 300 + 1000);
    return () => clearTimeout(timeout);
  }, [loopKey]);

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.4,
      },
    }),
  };

  return (
<section
  id="hero"
  className="relative overflow-hidden bg-[#0D1224] text-white  lg:h-[90vh] md:h-[130vh] sm:h-[135vh] h-[148vh]"
>


      {/* Grid Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '70px 60px',
          zIndex: 0,
        }}
      />

      {/* Main Layout */}
   <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col lg:flex-row items-start gap-10 pt-[100px]  w-[90%] mx-auto relative z-10"
>

        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl  md:text-3xl lg:text-4xl xl:text-5xl  font-bold  mb-3 lg:mb-4 xl:mb-5 drop-shadow-text-[#FFFFFF]">
            Hello,
          </h1>

          <p
            style={{ color: '#FFFFF' }}
            className="text-2xl sm:text-3xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold  xl:mb-5 lg:mb-4 mb-3  drop-shadow-lg xl:leading-17 lg:leading-15 md:leading-13 sm:leading-10"
          > This is {' '}
            <span style={{ color: '#EC4899' }}>
              {name.split('').map((char, i) => (
                <motion.span
                  key={`${loopKey}-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariant}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>, Full-stack <span className='text-[#16F2B3]'>Software Developer</span> with modern <span className='text-[#EC4899]'>Tech expertise</span>.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 ">
            {[
              { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/zohaib-hassan-5ab563277/' },
              { icon: <FaGithub />, link: 'https://github.com/zohaibsundrali' },
              { icon: <FaFacebook />, link: 'https://www.facebook.com/profile.php?id=61579320874889' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full"
                style={{
                  backgroundColor: '#EC4899',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-4 mt-5">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group sm:px-6 sm:py-3 py-2 px-3  text-[12px] sm:text-[16px] rounded-full font-semibold flex items-center gap-2 justify-center transition-all duration-300"
              style={{
                border: '2px solid #EC4899',
                color: isHovered ? '#ffffff' : '#EC4899',
                backgroundColor: isHovered ? '#EC4899' : 'transparent',
              }}
            >
              Contact Me
              <HiUser
                size={20}
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Resume.pdf"  
              download
              style={{
                backgroundColor: '#EC4899',
                color: '#ffffff',
              }}
              className="group sm:px-6 sm:py-3 py-1 px-3 text-[12px] sm:text-[16px] rounded-full font-semibold shadow hover:opacity-90 transition duration-300 flex items-center gap-2 justify-center"
            >
              Download Resume
              <HiDownload
                size={20}
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Right: Image */}


 <div className="flex-1 w-full ">
  {/* Header */}
  <div className="h-[30px] border-t-2 border-l-1 border-r-1 border-b-1 border-[#312E81] flex items-center px-4 py-5 rounded-tl-xl rounded-tr-xl bg-gradient-to-r from-[#0D1224] to-[#0A0D36]">
    <div className="flex flex-cols gap-[7px]">
      <div className="w-[13px] h-[13px] bg-[#F87171] rounded-full"></div>
      <div className="w-[13px] h-[13px] bg-[#FB923C] rounded-full"></div>
      <div className="w-[13px] h-[13px] bg-[#BBF7D0] rounded-full"></div>
    </div>
  </div>

  {/* Code Box */}
  <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="w-full bg-[#111827] border-t-0 border-l-1 border-r-1 border-b-1 border-[#312E81] text-white p-6 rounded-bl-xl rounded-br-xl shadow-md font-mono text-sm leading-7 bg-gradient-to-r from-[#0D1224] to-[#0A0D36]"
>
  <pre className="whitespace-pre-wrap">
    <code>
      <span className="text-pink-500">const</span>{' '}
      <span className="text-white">coder</span> = &#123;
      {'\n  '}
      <span className="text-yellow-400">name</span>: <span className="text-green-400">'Zohaib Hassan'</span>,
      {'\n  '}
      <span className="text-yellow-400">skills</span>: [<span className="text-green-400">'HTML'</span>,{' '}
      <span className="text-green-400">'CSS'</span>, <span className="text-green-400">'JavaScript'</span>,{' '}
      <span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>,{' '}
      <span className="text-green-400">'Tailwind CSS'</span>, <span className="text-green-400">'Bootstrap'</span>,{' '}
      <span className="text-green-400">'Php'</span>, <span className="text-green-400">'MySQL'</span>,{' '}
      <span className="text-green-400">'Firebase'</span>, <span className="text-green-400">'Supabase'</span>,{' '}
      <span className="text-green-400">'Framer Motion'</span>, <span className="text-green-400">'Git'</span>,{' '}
      <span className="text-green-400">'GitHub'</span>, <span className="text-green-400">'REST API'</span>,{' '}
      <span className="text-green-400">'EmailJS'</span>,{' '}
      <span className="text-green-400">'Responsive Design'</span>,{' '}
      <span className="text-green-400">'UI/UX'</span>,{' '}
      <span className="text-green-400">'Problem Solving'</span>],
      {'\n  '}
      <span className="text-yellow-400">hardWorker</span>: <span className="text-blue-400">true</span>,
      {'\n  '}
      <span className="text-yellow-400">quickLearner</span>: <span className="text-blue-400">true</span>,
      {'\n  '}
      <span className="text-yellow-400">problemSolver</span>: <span className="text-blue-400">true</span>,
      {'\n  '}
      <span className="text-yellow-400">hireable</span>: <span className="text-pink-500">function</span>() &#123;
      {'\n    '}
      <span className="text-pink-500">return</span> (
      {'\n      '}
      <span className="text-blue-400">this</span>.hardWorker &&{' '}
      <span className="text-blue-400">this</span>.problemSolver &&{' '}
      <span className="text-blue-400">this</span>.skills.length &gt;= <span className="text-orange-400">5</span>
      {'\n    '});
      {'\n  '}
      &#125;
      {'\n'}&#125;;
    </code>
  </pre>
</motion.div>

</div>

   
      </motion.section>
    </section>
  );
}
