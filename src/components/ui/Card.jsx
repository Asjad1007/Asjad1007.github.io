import { motion } from "framer-motion";

export function Card({ children, className = "", hover = true }) {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={`glass-panel rounded-3xl overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function CardTitle({ children, className = "" }) {
    return (
        <h3 className={`text-xl font-semibold text-white tracking-tight ${className}`}>
            {children}
        </h3>
    );
}

export function CardDescription({ children, className = "" }) {
    return (
        <p className={`text-zinc-400 text-sm leading-relaxed ${className}`}>
            {children}
        </p>
    );
}
