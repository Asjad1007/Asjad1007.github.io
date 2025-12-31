import React from "react";
import { Home, FolderGit2, Briefcase, User, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "home", icon: Home },
  { name: "Work", id: "work", icon: FolderGit2 },
  { name: "Experience", id: "experience", icon: Briefcase },
  { name: "Skills", id: "skills", icon: User },
  { name: "Contact", id: "contact", icon: Mail },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 p-2 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all group relative"
          >
            <item.icon size={20} />
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900 text-white text-xs px-2 py-1 rounded border border-white/10 pointer-events-none whitespace-nowrap">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
