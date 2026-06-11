import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';

export default function ParallaxQuoteSection() {
    const [scrollY, setScrollY] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const handleScroll = () => {
            const section = document.getElementById('parallax-quote');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const scrollProgress = -rect.top / (rect.height + window.innerHeight);
            setScrollY(scrollProgress * 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prefersReducedMotion]);

    return (
        <section
            id="parallax-quote"
            className="relative py-48 bg-gradient-to-b from-[#0F172A] to-[#111111] overflow-hidden"
        >
            {/* Parallax Background */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * 0.5}px)`,
                    transition: 'transform 0.1s linear',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
                        style={{
                            transform: prefersReducedMotion ? 'none' : `translateY(${scrollY * -0.3}px)`,
                            transition: 'transform 0.1s linear',
                        }}
                    >
                        Technology Should Disappear.
                        <br />
                        Results Should Not.
                    </h2>

                    {/* Animated line */}
                    <div className="flex justify-center">
                        <div
                            className="h-1 bg-white rounded-full transition-all duration-1000"
                            style={{
                                width: prefersReducedMotion ? '120px' : `${Math.min(120, scrollY * 2)}px`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
