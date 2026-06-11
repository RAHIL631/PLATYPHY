import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';

export default function InnovationStatementSection() {
    const { ref, isInView } = useInViewOnce();
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section className="py-32 bg-dark-section relative overflow-hidden">
            {/* Animated light streak */}
            {!prefersReducedMotion && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                        animation: 'lightStreak 8s ease-in-out infinite',
                    }}
                />
            )}

            <div className="container mx-auto px-6 relative z-10">
                <div ref={ref} className="max-w-5xl mx-auto text-center">
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
                        style={{
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                            transition: 'opacity 1s ease-out, transform 1s ease-out',
                        }}
                    >
                        Built for Scale.
                        <br />
                        Designed for Impact.
                    </h2>
                    <div
                        className="w-32 h-1 bg-accent mx-auto rounded-full shadow-glow"
                        style={{
                            opacity: isInView ? 1 : 0,
                            width: isInView ? '128px' : '0px',
                            transition: 'opacity 0.8s ease-out 0.3s, width 0.8s ease-out 0.3s',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
