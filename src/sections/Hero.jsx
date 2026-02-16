import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto relative">
            <div className="space-y-8">


                <motion.h2
                    {...fadeUp(0.15)}
                    className="text-2xl md:text-3xl text-zinc-200 tracking-wide font-medium"
                >
                    I am Asjad Nirban.
                </motion.h2>

                <motion.h1
                    {...fadeUp(0.3)}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none"
                >
                    ARCHITECTING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
                        SOFTWARE SYSTEMS.
                    </span>
                </motion.h1>

                <motion.div {...fadeUp(0.45)} className="max-w-4xl space-y-4">
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
                </motion.div>
            </div>
        </div>
    );
}
