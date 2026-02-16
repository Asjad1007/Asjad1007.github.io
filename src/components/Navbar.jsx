import { useState, useEffect } from "react";
import { Home, FolderGit2, Briefcase, User, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "Work", id: "work", icon: FolderGit2 },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Skills", id: "skills", icon: User },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-2 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/[0.08] shadow-2xl">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-full transition-all duration-300 group relative ${isActive
                  ? "text-white bg-white/[0.12]"
                  : "text-zinc-500 hover:text-white hover:bg-white/[0.06]"
                }`}
            >
              <item.icon size={20} />
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-xs px-2 py-1 rounded border border-white/10 pointer-events-none whitespace-nowrap">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
