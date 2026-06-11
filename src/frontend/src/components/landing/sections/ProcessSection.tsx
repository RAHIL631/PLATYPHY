import { useInViewOnce } from '../../../hooks/useInViewOnce';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'Understanding your vision, goals, and challenges through deep collaboration.',
    },
    {
        number: '02',
        title: 'Architect',
        description: 'Designing scalable systems and robust technical foundations.',
    },
    {
        number: '03',
        title: 'Engineer',
        description: 'Building with precision, quality, and industry best practices.',
    },
    {
        number: '04',
        title: 'Deploy',
        description: 'Launching your solution with confidence and comprehensive support.',
    },
    {
        number: '05',
        title: 'Optimize',
        description: 'Continuously refining performance, security, and user experience.',
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-20">
                        Our Process
                    </h2>

                    {/* Desktop: Horizontal Timeline */}
                    <div className="hidden md:flex items-start justify-between gap-4 relative">
                        {/* Connection line */}
                        <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

                        {steps.map((step, index) => (
                            <ProcessStepHorizontal key={step.number} step={step} index={index} />
                        ))}
                    </div>

                    {/* Mobile: Stacked Cards */}
                    <div className="md:hidden space-y-6">
                        {steps.map((step, index) => (
                            <ProcessStepMobile key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProcessStepHorizontal({ step, index }: { step: typeof steps[0]; index: number }) {
    const { ref, isInView } = useInViewOnce();

    return (
        <div
            ref={ref}
            className="flex-1 relative"
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease-out ${index * 0.15}s, transform 0.8s ease-out ${index * 0.15}s`,
            }}
        >
            <div className="glass-card rounded-3xl p-6 hover:shadow-glass hover-glow-lift transition-all duration-500 relative">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-glass">
                    {step.number}
                </div>

                <h3 className="text-xl font-bold text-primary mb-3 text-center">{step.title}</h3>
                <p className="text-sm text-primary/70 leading-relaxed text-center">{step.description}</p>
            </div>
        </div>
    );
}

function ProcessStepMobile({ step, index }: { step: typeof steps[0]; index: number }) {
    const { ref, isInView } = useInViewOnce();

    return (
        <div
            ref={ref}
            className="relative"
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.8s ease-out ${index * 0.1}s, transform 0.8s ease-out ${index * 0.1}s`,
            }}
        >
            <div className="glass-card rounded-3xl p-8 hover:shadow-glass transition-all duration-500 relative">
                {/* Large Background Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5 select-none pointer-events-none">
                    {step.number}
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-glass">
                            {step.number}
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-primary/70 leading-relaxed">{step.description}</p>
                </div>
            </div>
        </div>
    );
}
