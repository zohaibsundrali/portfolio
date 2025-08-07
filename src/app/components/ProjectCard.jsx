// src/components/ProjectCard.js
'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, link, image, tags }) {
  return (
    <section id="contact" className="..." data-aos="fade-up">

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-blue-700 rounded-xl shadow-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-secondary text-sm px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a href={link} target="_blank" className="text-blue-200 underline">
          View Project →
        </a>
      </div>
    </motion.div>
    </section>
  );
}
