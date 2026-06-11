import { Shield, Layers, Sparkles, Zap } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const values = [
    { icon: Shield, label: 'Enterprise Architecture' },
    { icon: Sparkles, label: 'AI-Powered Systems' },
    { icon: Layers, label: 'Security-First Design' },
    { icon: Zap, label: 'Performance Optimized' },
];

export default function ValuePropositionSection() {
    return (
        <section className="py-16 bg-white/50 backdrop-blur-sm border-y border-primary/5">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {values.map((value, index) => (
                            <div
                                key={value.label}
                                className="group flex flex-col items-center text-center gap-3 hover-glow-lift"
                                style={{
                                    opacity: 0,
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 glow-subtle blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <p className="text-sm md:text-base font-medium text-primary">{value.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes fadeInUp {
            from, to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
        </section>
    );
}
