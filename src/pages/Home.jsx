import SocialLinks from "../components/SocialLinks";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="relative z-10 text-center px-6 pt-32 pb-12">
      <img
        src={profile}
        alt="Asjad Nirban"
        className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-lg mx-auto mb-6 object-cover"
      />
      <h1 className="text-4xl sm:text-5xl font-bold mb-2">
        Hi, I’m Asjad Nirban 👋
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 mb-6">
        Software Developer • Data Engineer
      </p>
      <a
        href="/Asjad_Nirban_Resume.pdf"
        download
        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Download Resume
      </a>

      <SocialLinks />
    </div>
  );
}
