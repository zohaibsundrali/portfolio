'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: 'Elais Portfolio',
      image: '/stickman.png',
      tech: ['Tailwind', 'Next.JS', 'JS'],
      description:
        'Developed a modern and responsive portfolio website using Next.js and Tailwind CSS, featuring smooth animations, optimized performance, and a professional dark-themed UI',
      features: [
        'Responsive design (mobile, tablet, desktop)',
        'Contact form with EmailJS integration',
        'Optimized images & fast performance',
        'Dark-themed modern UI',
        '+3 Features',

      ],
      role: 'Frontend',
      demoLink: 'https://elais-portfolio.vercel.app/',
    },
    {
      title: 'Rental App',
      image: '/rent.jpg',
      tech: ['Next.js', 'Tailwind CSS', 'Capacitor', 'Supabase'],
      description:
        'Mobile rental app to list and browse rental properties, built with full deployment support for Android/iOS.',
      features: [
        'User authentication',
        'Property listing & filtering',
        'Mobile responsive & app deployment',
        'Realtime database updates with Supabase',
        '+4 Features',
      ],
      role: 'Frontend',
      demoLink: '#',
    },
    {
      title: 'Netflix Clone',
      image: '/netflix.jpg',
      tech: ['React', 'Tailwind CSS', 'Firebase', 'TMDB API'],
      description:
        'A clone of Netflix with user authentication, movie trailers, and responsive UI using TMDB API.',
      features: [
        'User sign-in & sign-up with Firebase',
        'Movie listing from TMDB API',
        'Trailer previews on hover',
        'Responsive layout and UI',
        '+3 Features',
      ],
      role: 'Frontend',
      demoLink: 'https://netflix-clone-nine-tan.vercel.app/',
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#0D1224] dark:bg-gray-900 pt-15 px-6"
    >
    <div className="flex items-center justify-center mb-4">
  <h2
    className="text-3xl md:text-4xl font-bold text-center 
               text-transparent bg-clip-text inline-block 
               bg-gradient-to-r from-[#34ebe1] via-[#4285F4] to-[#a855f7]"
  >
    Visit Live Projects
  </h2>
</div>


      <div className='w-full '>
<p className='text-gray-300 lg:text-[18px] text-[14px] text-center lg:w-[40%] sm:w-[60%] w-[80%] mx-auto mb-10 '>Discover my latest projects that reflect my dedication to crafting innovative solutions and redefining what&apos;s possible in web development.</p>

      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projectList.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-[#0A0E32] dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col leading-10 text-left group relative"
          >
            {/* Image Wrapper with Hover Overlay */}
            <div className="relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Live Demo Overlay Button */}
              <a
                href={proj.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300"
              >
                <span className="flex items-center gap-2 text-sm bg-[#c917c9] px-4 py-2 rounded-full hover:bg-[#bb1182] transition">
                  <FaExternalLinkAlt />
                  Live Demo
                </span>
              </a>
            </div>

            {/* Project Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#2debdb] dark:text-blue-400 mb-2">
                {proj.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#1E1E59] text-blue-400 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 dark:text-gray-300 text-sm mb-3">
                {proj.description}
              </p>
              <p className='text-[#2debdb] text-[16px] font-bold '>Key Features</p>
              <ul className="list-disc list-inside marker:text-[#2debdb] text-sm text-gray-400 dark:text-gray-400 mb-3">
                {proj.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <p className="text-sm font-semibold text-gray-400 dark:text-gray-300">
                <span className="text-[#2debdb]">Role:</span> {proj.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
      


<div className="flex justify-center mt-5">
  <a
    href="https://github.com/zohaibsundrali"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 font-semibold text-white text-sm transition-all duration-300"
    style={{
      borderImage: 'linear-gradient(90deg, #34ebe1, #646968,#adaab3,#8334eb) 1',
      borderStyle: 'solid',
      borderWidth: '2px',
      // borderRadius: '30px',
      background: 'transparent',
      marginTop: '40px',
      marginBottom: '40px',
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'linear-gradient(90deg, #34ebe1, #646968,#adaab3,#8334eb)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
    }}
  >
    View More Projects on GitHub
  </a>
</div>



    </motion.section>
  );
}
