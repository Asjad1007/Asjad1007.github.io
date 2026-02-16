import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { useState } from "react";
import gan from "../assets/gan.jpg";
import vri from "../assets/vri.jpg";
import ocr from "../assets/ocr.jpg";
import av from "../assets/av.jpg";
import sales from "../assets/sales.jpg";

const projects = [
    {
        title: "Sales Intelligence AI Agent",
        description: "An AI agent that ingests company data, ranks leads, and generates personalized emails using a 30B-parameter LLM.",
        tech: ["Python", "LLM", "FAISS", "Transformers"],
        img: sales,
        link: "https://github.com/Asjad1007/sales-intel-agent",
    },
    {
        title: "Autonomous Driving Sims",
        description: "Pushing the limits of safety. Simulating over 3,000 edge-case driving scenarios to stress-test autonomous vehicle perception systems.",
        tech: ["OpenPilot", "MetaDrive", "Python"],
        img: av,
        link: null,
    },
    {
        title: "Synthetic Image Generation",
        description: "Architecting GANs to generate high-fidelity synthetic medical datasets, solving critical data scarcity issues in cancer research.",
        tech: ["Python", "PyTorch", "GANs"],
        img: gan,
        link: "https://github.com/Asjad1007/Synthetic_Medical_Image_Generation",
    },
    {
        title: "Visual Room Interfaces",
        description: "Bridging the physical and digital worlds. A real-time environment rendering engine powered by Stable Diffusion 3.5 and IoT sensor streams.",
        tech: ["GenAI", "Stable Diffusion", "InfluxDB"],
        img: vri,
        link: "https://github.com/Asjad1007/VisualRoom_Interfaces",
    },
    {
        title: "Automated Business Card Processor",
        description: "Built an OCR model using Tesseract & Flask for WhatsApp-based business card data extraction (94%+ accuracy).",
        tech: ["Tesseract", "Python", "Flask", "WhatsApp API"],
        img: ocr,
        link: null,
    },
];

export default function Work() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-16">
            <div className="border-b border-zinc-800 pb-8">
                <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">01 / Selected Work</h2>
            </div>

            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`order-2 ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                            <div
                                className="overflow-hidden rounded-xl relative cursor-pointer border border-white/[0.08] transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-violet-500/5"
                                onClick={() => setSelectedImage(project.img)}
                            >
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-black/50 backdrop-blur text-white p-3 rounded-full">
                                        <Maximize2 size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`order-1 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{project.title}</h3>
                            <p className="text-xl text-zinc-300 leading-relaxed font-light">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-white/[0.08] border border-white/[0.12] rounded-full hover:bg-white/[0.15] hover:border-white/25 transition-all"
                                >
                                    View Project <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-pointer"
                    >
                        <button
                            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Project Fullscreen"
                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
