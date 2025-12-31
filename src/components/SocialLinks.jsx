import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-8">
      <a
        href="https://www.linkedin.com/in/asjadnirban"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 text-3xl transition-all hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/asjad1007"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-3xl transition-all hover:scale-110"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:asjad.nirban@email.com"
        className="text-gray-400 hover:text-red-500 text-3xl transition-all hover:scale-110"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
