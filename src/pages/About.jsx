import React from "react";
import { useState } from "react";
import g1 from "../assets/Glimpses_1.jpg";
import g2 from "../assets/Glimpses_2.jpg";
import g3 from "../assets/Glimpses_3.jpg";
import {
  Award,
  GraduationCap,
  Code2,
  Camera,
  Heart,
  BadgeCheck,
  Mail,
} from "lucide-react";

const skills = [
  "Python",
  "C++",
  "SQL",
  "NoSQL",
  "ReactJS",
  "Next.js",
  "Node.js",
  "REST APIs",
  "Tailwind CSS",
  "Flask",
  "CodeIgniter & Laravel",
  "Machine Learning",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "Blockchain",
  "Solidity",
  "AWS",
  "Git & GitHub",
  "Data Structures",
  "ETL Pipelines",
  "High-Performance Computing (HPC)",
];

export default function About() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="text-white max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* 👋 Intro */}
      <section>
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-300">
          Hi, I’m Asjad Nirban, currently pursuing my MSCS at UVA and working as
          a Data Engineering Research Assistant. I love making things more
          usable, whether it’s automating something tedious or building a tool
          out of pure curiosity. If it saves time or sparks “hey, that’s cool,”
          it’s probably something I’ve tried to build.
        </p>
      </section>

      {/* 🏆 Competitive Programming */}
      <section>
        <h2 className="text-3xl font-semibold mb-3 flex items-center gap-2">
          <Award size={28} /> Competitive Programming
        </h2>
        <div className="text-lg space-y-1 text-gray-300">
          <p>
            ICPC Rank: <span className="text-blue-400 font-semibold">699</span>
          </p>
          <p>
            Reply Code Challenge Rank:{" "}
            <span className="text-blue-400 font-semibold">285</span>
          </p>
        </div>
      </section>

      {/* 🎓 Education */}
      <section>
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
          <GraduationCap size={28} /> Education
        </h2>
        <div className="space-y-2 text-gray-300 text-lg">
          <div>
            <h3 className="text-xl text-white font-bold">
              University of Virginia
            </h3>
            <p>Master of Science in Computer Science (MSCS), GPA: 3.76</p>
          </div>
          <div>
            <h3 className="text-xl text-white font-bold">
              University of Mumbai
            </h3>
            <p>Bachelor's in Computer Engineering, GPA: 3.73</p>
          </div>
        </div>
      </section>

      {/* 🛠️ Skills */}
      <section>
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
          <Code2 size={28} /> Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
          <BadgeCheck size={28} /> Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "AWS Academy Graduate – Cloud Foundations",
              issuer: "Amazon Web Services (AWS), Jun 2022",
              link: "https://www.credly.com/badges/ebc7a20c-517f-49f3-9799-b65349be8c36/public_url",
            },
            {
              title: "CCNA: Introduction to Networks",
              issuer: "Cisco, Aug 2021",
              link: "https://www.credly.com/badges/6ccc9c91-f6c2-46cf-a5ca-080b70471b50/public_url",
            },
            {
              title: "CCNA: Switching, Routing, and Wireless Essentials",
              issuer: "Cisco, Sep 2021",
              link: "https://www.credly.com/badges/f91af85e-2150-423b-ba9b-c78988765666/public_url",
            },
            {
              title: "CCNA: Enterprise Networking, Security, and Automation",
              issuer: "Cisco, Nov 2021",
              link: "https://www.credly.com/badges/59c6e6e8-18f7-4cfb-91d8-a61fd762d980/public_url",
            },
          ].map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow"
            >
              <p className="font-semibold text-white mb-1">{cert.title}</p>
              <p className="text-sm text-gray-300 mb-2">
                Issued by {cert.issuer}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white hover:text-blue-400 hover:underline text-sm px-3 py-1 border border-white/20 rounded backdrop-blur-sm bg-white/10 transition"
              >
                View Credential
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 Hobbies */}
      <section>
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
          <Heart size={28} /> Hobbies
        </h2>
        <p className="text-lg text-gray-300">
          I’m endlessly fascinated by the universe from stars and singularities
          to the strange beauty of paradoxes. I enjoy reading about scientific
          theories that challenge how we perceive reality. Outside the cosmic
          rabbit holes, I’m a dedicated Formula 1 fan, always rooting for Max
          Verstappen on race day.
        </p>
      </section>

      {/* 📸 Gallery */}
      <section>
        <h2 className="flex items-center gap-2 text-3xl font-semibold mb-4">
          <Camera size={28} /> Glimpses
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img
            src={g1}
            alt="Moment 1"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
          <img
            src={g2}
            alt="Moment 2"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
          <img
            src={g3}
            alt="Moment 3"
            className="rounded-xl shadow-md object-cover w-full h-60"
          />
        </div>
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src={g1} alt="Moment 1" className="rounded-xl shadow-md" />
          <img src={g2} alt="Moment 2" className="rounded-xl shadow-md" />
          <img src={g3} alt="Moment 3" className="rounded-xl shadow-md" />
        </div> */}
      </section>

      <div className="mt-10">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Let’s Connect
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-white text-xl"
            >
              &times;
            </button>
            <h1 className="text-2xl font-bold mb-4 text-white text-center">
              📫 Contact Me
            </h1>
            <form
              action="mailto:asjad.nirban@email.com"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
