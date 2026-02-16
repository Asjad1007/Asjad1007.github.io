import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
            >
                <h2 className="text-xl md:text-2xl text-zinc-300 tracking-wide font-light flex items-center gap-3">
                    I am Asjad Nirban.
                </h2>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                    ARCHITECTING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                        SOFTWARE SYSTEMS.
                    </span>
                </h1>

                <div className="max-w-4xl space-y-4">
                    <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                        Master's Graduate in Computer Science from{' '}
                        <a
                            href="https://www.virginia.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-0.5 bg-[#E57200] text-[#232D4B] font-serif font-extrabold hover:bg-[#ff8c1a] transition-colors rounded-sm mx-1 tracking-tight"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            University of Virginia
                        </a>
                        .
                    </p>
                    <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                        Building backend systems, data pipelines, and intelligent software.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-zinc-500"
            >
                <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
                <ArrowDown className="animate-bounce" size={20} />
            </motion.div>
        </div>
    );
}
