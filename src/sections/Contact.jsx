import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Contact() {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center space-y-8 pt-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold tracking-tight"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                    Let's Build Something.
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-zinc-300 font-light"
            >
                Always open to discussing new opportunities.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
                <a
                    href="mailto:asjad.nirban@email.com"
                    className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white rounded-full border border-white/20 bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-emerald-600/20 hover:from-violet-600/30 hover:via-blue-600/30 hover:to-emerald-600/30 hover:border-white/40 transition-all shadow-lg shadow-violet-500/5"
                >
                    <Mail size={18} />
                    Send me an email
                </a>
                <a
                    href="/Asjad_Nirban_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-zinc-300 rounded-full border border-zinc-700 hover:border-zinc-500 hover:text-white hover:bg-white/[0.05] transition-all"
                >
                    <Download size={18} />
                    Download Resume
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center gap-6 pt-6"
            >
                {[
                    { icon: Github, href: "https://github.com/asjad1007", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/asjadnirban", label: "LinkedIn" },
                ].map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
                        aria-label={social.label}
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </motion.div>

            <footer className="pt-20 pb-24 text-zinc-500 text-sm">
                © {new Date().getFullYear()} Asjad Nirban
            </footer>
        </div>
    );
}
