import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Logo from '../components/Logo';
import AnimatedBackground from '../components/AnimatedBackground';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useRipple } from '@/hooks/useRipple';
import { HERO_FUTURISTIC_DARK_BG_URL, HERO_VIDEO_BG_URL } from '@/config/assets';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const prefersReducedMotion = usePrefersReducedMotion();
    const primaryBtnRef = useRef<HTMLButtonElement>(null);
    const createRipple = useRipple();

    useMagnetic(primaryBtnRef, !prefersReducedMotion);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;

            requestAnimationFrame(() => {
                setMousePosition({ x, y });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [prefersReducedMotion]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 md:py-24"
        >
            {/* Full-screen video background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover pointer-events-none"
                poster={HERO_FUTURISTIC_DARK_BG_URL}
            >
                <source src={HERO_VIDEO_BG_URL} type="video/mp4" />
            </video>

            {/* Dark scrim overlay for text contrast */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                }}
            />

            {/* Subtle animated background layer - toned down */}
            <div className="absolute inset-0 z-0 opacity-30">
                <AnimatedBackground />
            </div>

            {/* Subtle parallax overlay - toned down */}
            {!prefersReducedMotion && (
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out',
                    }}
                />
            )}

            {/* Glass Panel Container */}
            <div className="container mx-auto px-6 py-24 text-center relative z-10">
                <div
                    className="glass-panel rounded-3xl md:rounded-4xl p-8 md:p-16 lg:p-20 max-w-5xl mx-auto relative overflow-hidden"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                        transition: 'opacity 1s ease-out, transform 1s ease-out',
                    }}
                >
                    {/* Glass reflection highlight */}
                    <div className="absolute inset-0 glass-reflection pointer-events-none" />

                    {/* Logo with floating animation */}
                    <div
                        className="mb-12 inline-block relative z-10"
                        style={{
                            animation: isVisible && !prefersReducedMotion ? 'float 6s ease-in-out infinite' : 'none',
                        }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 glow-accent blur-2xl opacity-50" />
                            <Logo
                                className="w-56 h-56 mx-auto object-contain relative z-10"
                                variant="default"
                            />
                        </div>
                    </div>

                    {/* Main headline */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 md:mb-8 leading-tight tracking-tight relative z-10"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s',
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Architecting Intelligent
                        <br />
                        Digital Ecosystems.
                    </h1>

                    {/* Subtext */}
                    <p
                        className="text-lg md:text-2xl text-primary/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed relative z-10"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1s ease-out 0.4s, transform 1s ease-out 0.4s',
                            textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        PLATYPHY builds enterprise-grade software platforms engineered for performance, resilience, and growth.
                    </p>

                    {/* CTAs */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1s ease-out 0.6s, transform 1s ease-out 0.6s',
                        }}
                    >
                        <button
                            ref={primaryBtnRef}
                            onClick={(e) => {
                                createRipple(e);
                                scrollToSection('contact');
                            }}
                            className="group relative px-6 py-3 md:px-8 md:py-4 btn-glow-primary text-white rounded-full font-medium text-base md:text-lg transition-all duration-300 flex items-center gap-2 ripple-container overflow-hidden"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={(e) => {
                                createRipple(e);
                                scrollToSection('solutions');
                            }}
                            className="group px-6 py-3 md:px-8 md:py-4 glass-button text-primary rounded-full font-medium text-base md:text-lg hover:shadow-glass transition-all duration-300 hover:scale-105 flex items-center gap-2 ripple-container overflow-hidden"
                        >
                            Explore Solutions
                            <Sparkles className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-out 0.8s',
                        animation: isVisible && !prefersReducedMotion ? 'bounce 2s ease-in-out infinite' : 'none',
                    }}
                >
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex flex-col items-center gap-2 text-primary/50 hover:text-primary transition-colors"
                        aria-label="Scroll down"
                    >
                        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                        <ChevronDown className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
