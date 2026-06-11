import { Reveal } from '../components/Reveal';
import { Shield } from 'lucide-react';
import { SiNextdotjs, SiAmazon, SiDocker, SiNodedotjs, SiReact } from 'react-icons/si';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function TrustSection() {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section id="trust" className="py-32 bg-[#0F172A] relative overflow-hidden">
            {/* Subtle animated background */}
            {!prefersReducedMotion && (
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                        animation: 'pulseGlow 4s ease-in-out infinite',
                    }}
                />
            )}

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="text-center mb-16">
                        {/* Animated Shield Icon */}
                        <div
                            className="inline-block mb-8"
                            style={{
                                animation: prefersReducedMotion ? 'none' : 'float 3s ease-in-out infinite',
                            }}
                        >
                            <div className="relative">
                                <Shield className="w-20 h-20 text-white mx-auto" />
                                {!prefersReducedMotion && (
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            filter: 'blur(20px)',
                                            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                                            animation: 'pulseGlow 2s ease-in-out infinite',
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                            Security Built Into Every Layer.
                        </h2>
                        <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                            From architecture to deployment, PLATYPHY prioritizes resilience and compliance.
                        </p>
                    </div>
                </Reveal>

                {/* Compliance Badges */}
                <Reveal delay={0.2}>
                    <div className="flex flex-wrap justify-center items-center gap-6 mb-16">
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium text-white">ISO 27001</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium text-white">SOC 2 Type II</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-medium text-white">GDPR Compliant</span>
                        </div>
                    </div>
                </Reveal>

                {/* Tech Stack */}
                <Reveal delay={0.3}>
                    <div className="text-center">
                        <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-8">
                            Built with modern technologies
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-12">
                            <SiNextdotjs className="w-10 h-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                            <SiAmazon className="w-10 h-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                            <SiDocker className="w-10 h-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                            <SiNodedotjs className="w-10 h-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                            <SiReact className="w-10 h-10 text-white/70 hover:text-white transition-all duration-300 hover:scale-110" />
                        </div>
                    </div>
                </Reveal>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
          }
          @keyframes pulseGlow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
          }
        }
      `}</style>
        </section>
    );
}
