import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function ProjectCard({ title, description, tech, img, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-5 max-w-sm w-full hover:scale-[1.02] hover:shadow-blue-500/20 transition duration-300 border border-white/20 text-white flex flex-col justify-between"
    >
      {/* Image */}
      <div
        className="w-full h-60 mb-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain rounded-lg bg-white/5 p-2"
        />
      </div>

      {/* Title & Description */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 text-sm mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-blue-600/20 border border-blue-400/40 text-blue-200 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 max-w-5xl w-[90%] max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              &times;
            </button>

            {/* Full Image */}
            <img
              src={img}
              alt={title}
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-md"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
