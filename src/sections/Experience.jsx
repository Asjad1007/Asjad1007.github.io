import { motion } from "framer-motion";

const workExperience = [
    {
        period: "Mar 2025 – Present",
        role: "Data Engineering Research Assistant",
        company: "Darden School of Business, University of Virginia",
        description: [
            "Designed and automated scalable data pipelines processing 10TB+ of raw data, improving workflow efficiency by 70%.",
            "Redesigned ETL jobs and scheduling logic, cutting runtime by 60% and improving reliability across research projects.",
            "Integrated fine-tuned LLM models using OpenAI API into data pipelines to parse unstructured filings into structured records.",
            "Utilized MPI and HPC to scale computational tasks across Multi-GPU and Multi-Processing leveraging CUDA cores."
        ],
    },
    {
        period: "Jun 2023 – Jul 2024",
        role: "Full Stack Software Developer Intern",
        company: "Lab Systems (I) Pvt. Ltd.",
        description: [
            "Built full-stack forensic dashboards using ReactJS and Flask, supporting blockchain investigations on systems processing transaction of $20M+ in cryptocurrency network.",
            "Built scalable enterprise-grade UIs in NextJs and 20+ REST APIs supporting large-scale data queries for enterprise clients.",
            "Delivered Python automation and AI driven forensic services that cut forensic review time by ∼70% and improved casehandling efficiency.",
            "Integrated Bitcoin and other data nodes into backend services, enabling fast on-chain lookups for investigation teams.",
            "Deployed cryptocurrency full nodes and architected software for on-premises deployments while managing global clients."
        ],
    },
];

const research = [
    {
        type: "patent",
        period: "2024",
        role: "Patent: MediLog",
        company: "Granted Patent",
        description: "DE202023102823U1. A decentralized medical data logging system ensuring integrity in pharma supply chains.",
        link: "https://register.dpma.de/DPMAregister/pat/register?AKZ=2020231028233&CURSOR=0",
    },
    {
        type: "paper",
        period: "2021",
        role: "Face Mask Detection & Attendance System",
        company: "IRJET (Impact Factor: 7.5)",
        description: "Developed real-time computer vision algorithms for contactless mask compliance verification.",
        link: "https://www.irjet.net/archives/V8/i6/IRJET-V8I6601.pdf",
    },
    {
        type: "paper",
        period: "2022",
        role: "Blockchain Crowdfunding",
        company: "IJRAR (Impact Factor: 7.17)",
        description: "Proposed a transparent funding model for startups using Ethereum smart contracts to mitigate fraud.",
        link: "https://www.ijrar.org/viewfull.php?&p_id=IJRAR22B1545",
    },
];

export default function Experience() {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto space-y-24">

            {/* Work Experience */}
            <div>
                <div className="border-b border-zinc-800 pb-8 mb-12">
                    <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">02 / Professional Experience</h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {workExperience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group grid md:grid-cols-4 gap-4 md:gap-12 border-b border-zinc-900 pb-12 last:border-0"
                        >
                            <div className="md:col-span-1">
                                <span className="text-zinc-400 font-mono text-sm block mb-1">{item.period}</span>
                            </div>

                            <div className="md:col-span-3 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{item.role}</h3>
                                    <h4 className="text-lg text-zinc-300">{item.company}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {item.description.map((desc, i) => (
                                        <li key={i} className="text-zinc-400 leading-relaxed max-w-3xl flex gap-3">
                                            <span className="text-zinc-700 mt-1.5">•</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Research & Patents */}
            <div>
                <div className="border-b border-zinc-800 pb-8 mb-12">
                    <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">03 / Research & Patents</h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {research.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group grid md:grid-cols-4 gap-4 md:gap-12 border-b border-zinc-900 pb-12 last:border-0"
                        >
                            <div className="md:col-span-1">
                                <span className="text-zinc-400 font-mono text-sm block mb-1">{item.period}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full border ${item.type === 'patent' ? 'border-yellow-900 text-yellow-500' : 'border-blue-900 text-blue-500'
                                    }`}>
                                    {item.type.toUpperCase()}
                                </span>
                            </div>

                            <div className="md:col-span-3 space-y-2">
                                <h3 className="text-2xl font-semibold text-zinc-100 group-hover:text-white transition-colors">{item.role}</h3>
                                <h4 className="text-lg text-zinc-300">{item.company}</h4>
                                <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm mb-4">{item.description}</p>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5"
                                    >
                                        View {item.type === 'patent' ? 'Patent' : 'Paper'}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17L17 7" /></svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
