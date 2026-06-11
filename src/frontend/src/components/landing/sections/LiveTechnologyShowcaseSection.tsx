import { Reveal } from '../components/Reveal';
import { SiNextdotjs, SiNodedotjs, SiAmazon, SiDocker } from 'react-icons/si';
import { Sparkles, Cloud } from 'lucide-react';

const technologies = [
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'AWS', icon: SiAmazon },
    { name: 'Docker', icon: SiDocker },
    { name: 'AI Models', icon: Sparkles },
    { name: 'Cloud Systems', icon: Cloud },
];

export default function LiveTechnologyShowcaseSection() {
    return (
        <section id="tech-showcase" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#111111] text-center mb-20">
                        Powered by Modern Technology
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                    {technologies.map((tech, index) => (
                        <Reveal key={tech.name} delay={index * 0.1}>
                            <div className="group relative bg-[#F5F7FA] rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#0F172A]/10 flex flex-col items-center justify-center aspect-square">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#111111]/5 to-transparent" />
                                </div>

                                {/* Icon */}
                                <tech.icon className="w-16 h-16 text-[#0F172A] group-hover:text-[#111111] transition-all duration-500 group-hover:scale-110 relative z-10" />

                                {/* Label */}
                                <p className="mt-4 text-sm font-medium text-[#0F172A]/70 group-hover:text-[#111111] transition-colors duration-500 relative z-10">
                                    {tech.name}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
