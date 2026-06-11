import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Orb particles
        const orbs: Array<{
            x: number;
            y: number;
            radius: number;
            vx: number;
            vy: number;
            color: string;
        }> = [];

        // Create orbs
        for (let i = 0; i < 3; i++) {
            orbs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: 100 + Math.random() * 150,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                color: i % 2 === 0 ? 'rgba(30, 58, 138, 0.08)' : 'rgba(59, 130, 246, 0.06)'
            });
        }

        // Subtle particles
        const particles: Array<{
            x: number;
            y: number;
            size: number;
            vx: number;
            vy: number;
        }> = [];

        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw gradient mesh background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'rgba(248, 250, 252, 0.5)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(245, 247, 250, 0.5)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (!prefersReducedMotion) {
                // Animate and draw orbs
                orbs.forEach(orb => {
                    orb.x += orb.vx;
                    orb.y += orb.vy;

                    // Bounce off edges
                    if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.vx *= -1;
                    if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.vy *= -1;

                    // Draw orb with gradient
                    const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                    orbGradient.addColorStop(0, orb.color);
                    orbGradient.addColorStop(1, 'transparent');
                    ctx.fillStyle = orbGradient;
                    ctx.beginPath();
                    ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                    ctx.fill();
                });

                // Animate and draw particles
                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    // Wrap around edges
                    if (particle.x < 0) particle.x = canvas.width;
                    if (particle.x > canvas.width) particle.x = 0;
                    if (particle.y < 0) particle.y = canvas.height;
                    if (particle.y > canvas.height) particle.y = 0;

                    // Draw particle
                    ctx.fillStyle = 'rgba(30, 58, 138, 0.15)';
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                });
            } else {
                // Static version for reduced motion
                orbs.forEach(orb => {
                    const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                    orbGradient.addColorStop(0, orb.color);
                    orbGradient.addColorStop(1, 'transparent');
                    ctx.fillStyle = orbGradient;
                    ctx.beginPath();
                    ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [prefersReducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.6 }}
        />
    );
}
