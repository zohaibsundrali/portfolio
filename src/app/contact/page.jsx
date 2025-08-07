'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    emailjs.init('rXmCEAz6Ag16Rojcc'); // Replace with your public key
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_geqs6nr',
        'template_poa8gmr',
        templateParams
      );

      setShowPopup(true);
      setForm({ name: '', email: '', message: '' });

      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" data-aos="fade-up">
      {/* Injecting custom CSS for focus effect */}
      <style>{`
        .input-focus {
          width: 100%;
          padding: 12px;
          margin-bottom: 20px;
          border-radius: 6px;
          border: 1px solid #555;
          background-color: #1a1f35;
          color: #fff;
          font-size: 1rem;
          outline: none;
          transition: border 0.3s ease;
              
        }

        .input-focus:focus {
          border-color: #16F2B3;
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          backgroundColor: '#0D1224',
          color: 'white',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          marginLeft:'-50px !important',
        }}
      >
       

<div className="flex items-center justify-center mb-5 gap-0">
  <div className="flex-1 h-[2px] bg-[#231D4B] max-w-[120px]  md:mt-[0px] sm:mt-[5px]  mb-[20px]" />
  
  <h3 className="text-[1.25rem] font-medium bg-[#231D4B] text-white px-4 py-2 rounded-lg whitespace-nowrap 
                 text-center  md:mt-[0px] sm:mt-[5px]  mb-[20px]">
    Contact Me
  </h3>
  
  <div className="flex-1 h-[2px] bg-[#231D4B] max-w-[120px]  md:mt-[0px] sm:mt-[5px]  mb-[20px]" />
</div>


        <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '40px' } } className='sm:text-[1.1rem] text-[0.7rem]'>
          Have a project or idea? Let’s work together!
        </p>

       <div className="flex flex-col md:flex-row justify-center items-stretch flex-wrap gap-[30px] max-w-[1100px] mx-auto px-[20px]">
  
  {/* Form */}
<form
  onSubmit={handleSubmit}
  className="flex-1 min-w-[300px] md:basis-[40%] bg-[#11152C] p-[30px] 
             rounded-[14px] shadow-[0_0_20px_rgba(0,0,0,0.5)] 
             text-white text-left md:ml-[30px]"
>
    <p className="mb-[20px] text-[#aaa] text-[0.94rem]">
      Feel free to reach out with any questions or collaboration ideas.
      I'm always open to new opportunities that match my skills and passions.
    </p>

    <label className="block mb-1 text-sm font-medium">Name</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      className="input-focus"
    />

    <label className="block mt-4 mb-1 text-sm font-medium">Email</label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      className="input-focus"
    />

    <label className="block mt-4 mb-1 text-sm font-medium">Message</label>
    <textarea
      name="message"
      value={form.message}
      onChange={handleChange}
      rows="5"
      required
      className="input-focus resize-y"
    />

    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      type="submit"
      className="mt-[20px] w-full py-[12px] bg-gradient-to-r from-pink-500 to-blue-400 text-white font-bold rounded-[8px] text-[1rem] cursor-pointer border-none"
    >
      Send Message
    </motion.button>
  </form>

  {/* Contact Info */}
  <div
  className="flex-1 min-w-[300px] md:basis-[35%] bg-[#11152C] p-[30px] 
             rounded-[14px] shadow-[0_0_20px_rgba(0,0,0,0.5)] 
             flex flex-col justify-center gap-[30px] md:ml-[30px]"
>
    <ContactItem icon="📧" label="zohaib6511@example.com" />
    <ContactItem icon="📱" label="+92 319 0164715" />
    <ContactItem icon="📍" label="Sargodha, Pakistan" />
    <div className="flex justify-center gap-[20px] mt-[30px]">
      <SocialIcon link="https://www.linkedin.com/in/zohaib-hassan-5ab563277/" Icon={FaLinkedin} />
      <SocialIcon link="https://github.com/zohaibsundrali" Icon={FaGithub} />
      <SocialIcon link="https://facebook.com" Icon={FaFacebook} />
    </div>
  </div>
</div>


        {/* Popup Message */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                position: 'fixed',
                top: '10%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#1f2937',
                color: '#fff',
                padding: '30px 40px',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                textAlign: 'center',
                zIndex: 10000,
              }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✅ Submitted!</h3>
              <p style={{ fontSize: '1rem' }}>
                Your message has been successfully sent.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </section>
  );
}

// Label Style
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '0.95rem',
  fontWeight: '600',
  color: '#ccc',
};

// Contact Item
function ContactItem({ icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '14px 20px',
        borderBottom: '1px solid #2c324f',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: '#11152C',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#11152C'}
    >
      <span style={{ fontSize: '22px' }}>{icon}</span>
      <span style={{ fontSize: '16px' }}>{label}</span>
    </motion.div>
  );
}

// Social Icon
function SocialIcon({ link, Icon }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: '#EC4899',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon color="white" size={24} />
    </motion.a>
  );
}
