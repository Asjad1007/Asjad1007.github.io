import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const stars = [];
        // Reduced star count for cleaner look
        const numStars = 150;

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.2, // Smaller, sharper stars
                alpha: Math.random() * 0.5 + 0.2,
                dx: (Math.random() - 0.5) * 0.1, // Even slower movement
                dy: (Math.random() - 0.5) * 0.1
            })
        }


        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Simpler draw loop
            ctx.fillStyle = "white";
            stars.forEach((star) => {
                ctx.globalAlpha = star.alpha;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                star.x += star.dx;
                star.y += star.dy;

                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;
            });

            requestAnimationFrame(draw);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        window.addEventListener("resize", handleResize);
        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-50 bg-zinc-950"
        />
    );
};

export default StarryBackground;
