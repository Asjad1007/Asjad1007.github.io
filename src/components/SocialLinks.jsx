import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-6">
      <a
        href="https://www.linkedin.com/in/asjadnirban"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/asjad1007"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 text-2xl hover:scale-110 transition"
      >
        <FaGithub className="text-gray-100" />
      </a>
      <a
        href="mailto:asjad.nirban@email.com"
        className="text-red-500 text-2xl hover:scale-110 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}
