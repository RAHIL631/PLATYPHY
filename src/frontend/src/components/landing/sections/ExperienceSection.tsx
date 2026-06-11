import { Reveal } from '../components/Reveal';
import { InnovationIcon, SecurityIcon, ArchitectureIcon } from '../components/FeatureIcons';

const features = [
    {
        icon: InnovationIcon,
        title: 'Innovation-Driven',
        description: 'Cutting-edge technology and forward-thinking approaches to every challenge.',
    },
    {
        icon: SecurityIcon,
        title: 'Security-First Architecture',
        description: 'Bank-grade security protocols protecting your data and operations.',
    },
    {
        icon: ArchitectureIcon,
        title: 'Performance Optimized',
        description: 'Systems designed to deliver exceptional speed and reliability at scale.',
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-32 bg-[#0F172A] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
                        Built for Scale. Designed for Impact.
                    </h2>
                </Reveal>

                {/* Animated divider line */}
                <Reveal delay={0.2}>
                    <div className="flex justify-center mb-16">
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent animated-divider" />
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    {features.map((feature, index) => (
                        <Reveal key={feature.title} delay={0.3 + index * 0.15}>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center mb-6">
                                    <feature.icon />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                <p className="text-lg text-white/70 leading-relaxed">{feature.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scaleX(1);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.2);
          }
        }

        .animated-divider {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animated-divider {
            animation: none;
            opacity: 0.5;
          }
        }
      `}</style>
        </section>
    );
}
