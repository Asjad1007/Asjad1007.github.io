export function Badge({ children, className = "" }) {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700/50 ${className}`}
        >
            {children}
        </span>
    );
}
