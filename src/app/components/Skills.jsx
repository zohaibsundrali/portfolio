'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Skills() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    { src: '/icons/html.svg', title: 'HTML5' },
    { src: '/icons/css.svg', title: 'CSS3' },
    { src: '/icons/js.svg', title: 'JavaScript' },
    { src: '/icons/bootstrap.svg', title: 'Bootstrap' },
    { src: '/icons/tailwind.svg', title: 'Tailwind CSS' },
    { src: '/icons/git.svg', title: 'Git & GitHub' },
    { src: '/icons/react.svg', title: 'React JS' },
    { src: '/icons/next.svg', title: 'Next.js' },
    { src: '/icons/php.svg', title: 'PHP' },
    { src: '/icons/firebase.svg', title: 'Firebase' },
    { src: '/icons/supabase.svg', title: 'Supabase' },
    { src: '/icons/mysql.svg', title: 'MySQL' },
  ];

  const loopSkills = [...skills, ...skills]; // for infinite scroll

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += 3.5;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div style={{backgroundColor:'#0D1224', }} id="skills">
      {/* Skills Heading */}
  <div
  className="mb-8 mx-auto h-[1px] w-[70%] bg-gradient-to-r from-gray-700 via-[#7F55E0] to-gray-700"
/>


      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          gap: '0px',
        
       
        }}
      >
        <div
          style={{
            flex: 1,
            height: '2px',
            backgroundColor: '#231D4B',
            maxWidth: '120px',
               marginTop:'30px'
          }}
        />
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: '500',
            backgroundColor: '#231D4B',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            marginTop:'30px'
          }}
        >
          Skills
        </h3>
        <div
          style={{
            flex: 1,
            height: '2px',
            backgroundColor: '#231D4B',
            maxWidth: '120px',
            marginTop:'30px'
          }}
        />
      </div>

      {/* Skills Scroller */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          gap: '25px',
          margin: '0 auto',
          width: '90%',
          padding: '30px 0',
          overflowX: 'hidden',
         
          whiteSpace: 'nowrap',
          scrollBehavior: 'smooth',
        }}
      >
        {loopSkills.map((skill, index) => (


<div
  key={index}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="bg-[#11152C] min-w-[140px] h-[140px] p-[25px] rounded-[14px] text-white flex flex-col justify-center items-center flex-none shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105"
  style={{
    borderTop: '1px solid',
    borderImage: 'linear-gradient(to right, #0D1224 0%, #7E55DD 80%, #0D1224 90%) 1',
    borderImageSlice: 1,
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.border = '1px solid #493588';
    e.currentTarget.style.borderImage = 'none';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.borderTop = '1px solid';
    e.currentTarget.style.borderImage = 'linear-gradient(to right, #0D1224 0%, #7E55DD 80%, #0D1224 90%) 1';
    e.currentTarget.style.borderImageSlice = 1;
    e.currentTarget.style.borderLeft = 'none';
    e.currentTarget.style.borderRight = 'none';
    e.currentTarget.style.borderBottom = 'none';
  }}
>
  <Image src={skill.src} alt={skill.title} width={50} height={50} />
  <div
    style={{
      marginTop: '12px',
      fontSize: '15px',
      fontWeight: '600',
      color: '#FEFEFE',
    }}
  >
    {skill.title}
  </div>
</div>



        ))}
      </div>
    </div>
  );
}
