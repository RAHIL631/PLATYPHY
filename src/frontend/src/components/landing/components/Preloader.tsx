import { useEffect, useState } from 'react';
import Logo from './Logo';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface PreloaderProps {
    isVisible: boolean;
    onSkip: () => void;
}

export default function Preloader({ isVisible, onSkip }: PreloaderProps) {
    const [showSkip, setShowSkip] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setShowSkip(true), 800);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-dark-section flex items-center justify-center"
            style={{
                animation: prefersReducedMotion ? 'none' : isVisible ? 'none' : 'fadeOut 0.8s ease-out forwards',
            }}
        >
            <div className="text-center">
                {/* Logo with shimmer and glow */}
                <div
                    className="relative inline-block mb-8"
                    style={{
                        animation: prefersReducedMotion ? 'none' : 'float 3s ease-in-out infinite',
                    }}
                >
                    <div className="absolute inset-0 glow-accent blur-3xl opacity-50 animate-pulse-glow" />
                    <Logo
                        className="w-32 h-32 object-contain relative z-10"
                        variant="inverted"
                    />
                    {/* Shimmer effect */}
                    {!prefersReducedMotion && (
                        <div
                            className="absolute inset-0 overflow-hidden rounded-full"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                animation: 'shimmer 2s ease-in-out infinite',
                            }}
                        />
                    )}
                </div>

                {/* Brand name */}
                <h1
                    className="text-3xl font-bold text-white mb-2"
                    style={{
                        animation: prefersReducedMotion ? 'none' : 'fade-in 1s ease-out 0.3s both',
                    }}
                >
                    PLATYPHY
                </h1>
                <p
                    className="text-accent text-sm"
                    style={{
                        animation: prefersReducedMotion ? 'none' : 'fade-in 1s ease-out 0.5s both',
                    }}
                >
                    Engineering Intelligent Digital Infrastructure
                </p>
            </div>

            {/* Skip button */}
            {showSkip && (
                <button
                    onClick={onSkip}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 px-6 py-3 glass-button text-white rounded-full text-sm font-medium hover:shadow-glass transition-all duration-300 hover:scale-105"
                    style={{
                        animation: prefersReducedMotion ? 'none' : 'fade-in 0.5s ease-out',
                    }}
                >
                    Skip Intro
                </button>
            )}

            <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>
        </div>
    );
}
