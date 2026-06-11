import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        // Only enable on hover-capable devices
        const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (!hasHover || prefersReducedMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [prefersReducedMotion]);

    if (prefersReducedMotion) return null;

    return (
        <div
            className="fixed pointer-events-none z-50 transition-opacity duration-300"
            style={{
                left: position.x,
                top: position.y,
                opacity: isVisible ? 0.4 : 0,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                className="w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />
        </div>
    );
}
