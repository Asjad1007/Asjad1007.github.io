import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const stats = [
    { label: "Master's in Computer Science GPA", value: 3.81, displayValue: "3.81", sub: "University of Virginia", isDecimal: true },
    { label: "Undergraduate GPA", value: 3.73, displayValue: "3.73", sub: "University of Mumbai", isDecimal: true },
    { label: "Reply Code Challenge", value: 285, displayValue: "285th", sub: "Global Rank", suffix: "th", isDecimal: false },
    { label: "ICPC", value: 699, displayValue: "699th", sub: "Regional Rank", suffix: "th", isDecimal: false },
];

const skills = [
    "Python", "C++", "SQL", "React", "Next.js", "Node.js", "AWS",
    "Docker", "Git", "TensorFlow", "PyTorch", "Solidity",
    "Tailwind", "PostgreSQL", "Laravel", "Flask"
];

const certs = [
    {
        name: "AWS Academy Graduate: Cloud Foundations",
        link: "https://www.credly.com/badges/ebc7a20c-517f-49f3-9799-b65349be8c36/public_url"
    },
    {
        name: "CCNA: Introduction to Networks",
        link: "https://www.credly.com/badges/6ccc9c91-f6c2-46cf-a5ca-080b70471b50/public_url"
    },
    {
        name: "CCNA: Switching, Routing, and Wireless Essentials",
        link: "https://www.credly.com/badges/f91af85e-2150-423b-ba9b-c78988765666/public_url"
    },
    {
        name: "CCNA: Enterprise Networking, Security, and Automation",
        link: "https://www.credly.com/badges/59c6e6e8-18f7-4cfb-91d8-a61fd762d980/public_url"
    }
];

function AnimatedNumber({ value, isDecimal, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState(isDecimal ? "0.00" : "0");

    useEffect(() => {
        if (!isInView) return;

        const duration = 1500;
        const start = performance.now();

        const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;

            if (isDecimal) {
                setDisplay(current.toFixed(2));
            } else {
                setDisplay(Math.round(current).toString());
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setDisplay(isDecimal ? value.toFixed(2) : value.toString());
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value, isDecimal]);

    return <span ref={ref}>{display}{suffix}</span>;
}

export default function Skills() {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-24">
            <div className="border-b border-zinc-800 pb-8">
                <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">04 / Arsenal & Statistics</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                {/* Stats & Skills */}
                <div className="space-y-12">
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="gradient-border text-center p-6 bg-zinc-900/40 rounded-2xl"
                            >
                                <div className="text-3xl font-bold text-white mb-2">
                                    <AnimatedNumber value={stat.value} isDecimal={stat.isDecimal} suffix={stat.suffix || ""} />
                                </div>
                                <div className="text-xs text-zinc-400 uppercase tracking-wider">{stat.sub}</div>
                                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Technical Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 text-sm text-zinc-300 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-white hover:bg-white/[0.04] transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Certifications & Education */}
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Education</h3>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <h4 className="text-white font-medium">University of Virginia</h4>
                                <p className="text-zinc-300 text-sm">Master of Science in Computer Science</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-white font-medium">University of Mumbai</h4>
                                <p className="text-zinc-300 text-sm">Bachelor of Engineering in Computer Engineering (9.12/10)</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
                        <div className="space-y-3">
                            {certs.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 p-4 border border-zinc-800 rounded-xl hover:bg-white/[0.03] hover:border-zinc-700 transition-all group cursor-pointer"
                                    onClick={() => window.open(cert.link, "_blank")}
                                >
                                    <ShieldCheck size={18} className="text-blue-500 group-hover:text-blue-400 transition-colors shrink-0" />
                                    <span className="text-zinc-300 text-sm font-light group-hover:text-white transition-colors">{cert.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500 shrink-0"><path d="M7 7h10v10" /><path d="M7 17L17 7" /></svg>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
