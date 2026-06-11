import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Code, Sparkles, Cloud, MessageSquare, Palette } from 'lucide-react';

const solutions = [
    {
        icon: Code,
        title: 'Custom Software Development',
        description: 'Tailored enterprise solutions engineered to your exact specifications, built with modern architectures and best practices.',
    },
    {
        icon: Sparkles,
        title: 'AI & Intelligent Automation',
        description: 'Leverage cutting-edge AI and machine learning to automate workflows, enhance decision-making, and drive operational efficiency.',
    },
    {
        icon: Cloud,
        title: 'Cloud-Native Infrastructure',
        description: 'Scalable, resilient cloud solutions designed for high availability, security, and performance at enterprise scale.',
    },
    {
        icon: MessageSquare,
        title: 'Digital Transformation Consulting',
        description: 'Strategic guidance to modernize legacy systems, adopt emerging technologies, and accelerate your digital evolution.',
    },
    {
        icon: Palette,
        title: 'Ads & Poster Design',
        description: 'Creative visual design services for impactful advertisements, posters, and marketing collateral that captivate your audience.',
    },
];

export default function ServicesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="solutions" className="py-32 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary text-center mb-12 md:mb-20">
                        Enterprise Solutions
                    </h2>
                </Reveal>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                    {solutions.map((solution, index) => (
                        <Reveal key={solution.title} delay={index * 0.1}>
                            <div
                                className="group relative glass-card rounded-3xl p-8 hover:shadow-glass-lg hover-glow-lift overflow-hidden"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Glass reflection */}
                                <div className="absolute inset-0 glass-reflection pointer-events-none" />

                                {/* Animated glow on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                                        transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                        transition: 'transform 0.8s ease-out',
                                    }}
                                />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glass">
                                        <solution.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">
                                        {solution.title}
                                    </h3>
                                    <p className="text-primary/70 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
