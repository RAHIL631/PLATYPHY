import { useEffect, useRef } from 'react';

export function AbstractShape3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        let animationId: number;
        let rotation = 0;

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const radius = Math.min(rect.width, rect.height) * 0.3;

            rotation += 0.005;

            // Draw abstract geometric shape
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(rotation);

            // Outer ring
            ctx.strokeStyle = 'rgba(15, 23, 42, 0.1)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.stroke();

            // Inner shapes
            for (let i = 0; i < 3; i++) {
                const angle = (Math.PI * 2 * i) / 3 + rotation;
                const x = Math.cos(angle) * (radius * 0.5);
                const y = Math.sin(angle) * (radius * 0.5);

                ctx.fillStyle = `rgba(15, 23, 42, ${0.05 + i * 0.02})`;
                ctx.beginPath();
                ctx.arc(x, y, radius * 0.2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ width: '100%', height: '100%' }}
        />
    );
}
