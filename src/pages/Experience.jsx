import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <h1 className="flex items-center justify-center gap-3 text-4xl font-bold text-center mb-12">
        <Briefcase size={38} />
        My Experience
      </h1>

      <VerticalTimeline lineColor="#3b82f6">
        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(59, 130, 246, 0.1)",
            backdropFilter: "blur(6px)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
          date="Mar 2025 – Present"
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-xl font-semibold">
            Data Engineering Research Assistant
          </h3>
          <h4 className="text-md text-blue-300">
            Darden School of Business, UVA
          </h4>
          <p className="mt-2 text-gray-200 text-sm">
            • Built ETL pipelines for massive datasets (15K+ columns)
            <br />
            • Deployed scalable Python/Selenium scripts on HPC + AWS
            <br />• Accelerated research across finance, law, and economics
            departments
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(59, 130, 246, 0.1)",
            backdropFilter: "blur(6px)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
          date="Jan 2024 – Mar 2024"
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-xl font-semibold">Software Developer Intern</h3>
          <h4 className="text-md text-blue-300">Crayon Infotech, India</h4>
          <p className="mt-2 text-gray-200 text-sm">
            • Built 5 full-stack apps (Laravel + CodeIgniter)
            <br />
            • Optimized SQL for 1M+ record databases
            <br />• Created RESTful APIs and collaborated with QA teams
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{
            background: "rgba(59, 130, 246, 0.1)",
            backdropFilter: "blur(6px)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
          date="Jul 2022 – Feb 2023"
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="text-xl font-semibold">Blockchain Research Intern</h3>
          <h4 className="text-md text-blue-300">
            Lab Systems Pvt. Ltd., India
          </h4>
          <p className="mt-2 text-gray-200 text-sm">
            • Set up and analyzed blockchain nodes (Bitcoin, etc.)
            <br />
            • Built forensic Python scripts for suspicious transactions
            <br />• Trained a 12-member team on blockchain investigation
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          iconStyle={{ background: "#10b981", color: "#fff" }}
          icon={<FaGraduationCap />}
        /> */}
      </VerticalTimeline>
    </div>
  );
}
