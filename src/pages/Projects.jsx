import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { SquareTerminal } from "lucide-react";

import gan from "../assets/gan.jpg";
import vri from "../assets/vri.jpg";
import ocr from "../assets/ocr.jpg";
import av from "../assets/av.jpg";
import emosync from "../assets/emosync.jpg";
import medilog from "../assets/medilog.jpg";
import bcf from "../assets/bcf.jpg";
import fmd from "../assets/fmd.jpg";

const projects = [
  {
    title: "Synthetic Medical Image Generation",
    description:
      "Trained GAN models to generate synthetic blood cancer cell images with 85% similarity to real data.",
    tech: ["GANs", "Python"],
    img: gan,
    link: "https://github.com/Asjad1007/Synthetic_Medical_Image_Generation",
  },
  {
    title: "Visual Room Interfaces",
    description:
      "Used Stable Diffusion 3.5 to visualize sensor data for real-time environment rendering with 90% user success.",
    tech: ["Stable Diffusion", "GenAI", "Python", "InfluxDB", "Sensors"],
    img: vri,
    link: "https://github.com/Asjad1007/VisualRoom_Interfaces",
  },
  {
    title: "Automated Business Card Processor",
    description:
      "Built an OCR model using Tesseract & Flask for WhatsApp-based business card data extraction (94%+ accuracy).",
    tech: ["Python", "Tesseract", "Flask", "SQLite", "Pandas", "WhatsApp API"],
    img: ocr,
  },
  {
    title: "EmoSync: Emotion-Driven E-Learning UI",
    description:
      "Adaptive e-learning platform using facial and speech emotion detection to personalize UI and boost engagement.",
    tech: ["Python", "Machine Learning", "UI Design"],
    img: emosync,
    link: "https://github.com/Asjad1007/EmoSync",
  },
  {
    title: "Autonomous Driving Fault Simulation",
    description:
      "Simulated 3000+ scenarios using ScenarioNet & OpenPilot, revealing pedestrian/cyclist detection gaps.",
    tech: ["OpenPilot", "MetaDrive", "ScenarioNet", "Python", "Linux"],
    img: av,
  },
  {
    title: "Medilog: Pharma Blockchain System",
    description:
      "Deployed a tamper-proof medical supply chain on Ethereum, presented to Indian Medical Association.",
    tech: ["Solidity", "Ethereum", "MERN"],
    img: medilog,
  },
  {
    title: "Blockchain Crowdfunding for Startups",
    description:
      "Built a decentralized crowdfunding platform to support engineering startups using smart contracts.",
    tech: ["Blockchain", "Next.js"],
    img: bcf,
  },
  {
    title: "Face Mask Detection & Attendance",
    description:
      "Developed a contactless mask detection and attendance system using OpenCV and ML algorithms.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    img: fmd,
  },
];

export default function Projects() {
  return (
    <div className="p-10 min-h-screen">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center flex items-center justify-center gap-3"
      >
        <SquareTerminal size={36} />
        My Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-8 overflow-visible">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </div>
  );
}
