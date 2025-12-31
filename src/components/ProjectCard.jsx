import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300 flex flex-col h-full"
      >
        {/* Image Overlay Trigger */}
        <div
          className="relative h-48 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Image</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-blue-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg hover:shadow-blue-600/20"
            >
              <FaGithub className="text-lg" />
              View Code
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition"
            >
              <X size={32} />
            </button>
            <img
              src={img}
              alt={title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg text-white shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
