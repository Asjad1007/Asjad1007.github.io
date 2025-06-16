import Navbar from "./Navbar";
import bg from "../assets/background.jpg";

export default function Layout({ children }) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-40 z-0" />

      <Navbar />
      {/* Main Content */}
      <main className="relative z-10 pt-24 px-6 pb-12">{children}</main>
    </div>
  );
}
