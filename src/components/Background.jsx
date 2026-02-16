export default function Background() {
    return (
        <div className="fixed inset-0 -z-50 bg-zinc-950 overflow-hidden">
            {/* Gradient Orbs */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] animate-drift-slow"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
            />
            <div
                className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] animate-drift-reverse"
                style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
            />
            <div
                className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px] animate-drift-slow"
                style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '128px 128px',
                }}
            />
        </div>
    );
}
