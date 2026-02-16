import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center space-y-8 pt-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Let's Build Something.
            </h2>
            <p className="text-xl text-zinc-300 font-light">
                Always open to discussing new opportunities.
            </p>

            <div className="flex justify-center gap-8 pt-8">
                <a href="https://github.com/asjad1007" className="text-zinc-400 hover:text-white transition-colors">
                    <Github size={32} />
                </a>
                <a href="https://linkedin.com/in/asjadnirban" className="text-zinc-400 hover:text-white transition-colors">
                    <Linkedin size={32} />
                </a>
                <a href="mailto:asjad.nirban@email.com" className="text-zinc-400 hover:text-white transition-colors">
                    <Mail size={32} />
                </a>
            </div>

            <footer className="pt-24 text-zinc-500 text-sm">
                © {new Date().getFullYear()} Asjad Nirban. Crafted with React & Framer Motion.
            </footer>
        </div>
    );
}
