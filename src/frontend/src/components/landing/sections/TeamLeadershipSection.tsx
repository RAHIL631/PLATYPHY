import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import {
    TEAM_PORTRAIT_01_URL,
    TEAM_PORTRAIT_02_URL,
    TEAM_PORTRAIT_03_URL,
} from '@/config/assets';

const team = [
    {
        name: 'MD Musadiq Khan',
        role: 'Strategy + Tech Lead',
        image: '/assets/generated/musadiq.png',
        fallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
        linkedin: 'https://www.linkedin.com/in/mohammed-musadiq-khan-44bb3b364?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    {
        name: 'Rahil Hassan',
        role: 'Web & Tech Lead',
        image: '/assets/generated/rahil.jpeg',
        fallback: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600',
        linkedin: 'https://www.linkedin.com/in/rahil-hassan-94327629a/?trk=public-profile-join-page',
    },
    {
        name: 'Mohamed Fawwaz',
        role: 'Performance & Growth Lead',
        image: '/assets/generated/Fawwaz.png',
        fallback: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
        linkedin: 'https://www.linkedin.com/in/mohamed-fawwaz-32074822a',
    },
    {
        name: 'Mohammed Umer',
        role: 'Creative Lead',
        image: '/assets/generated/Umer.jpeg',
        fallback: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
        linkedin: 'https://www.linkedin.com/in/mohammed-umar-47aa12277/',
    },
];

export default function TeamLeadershipSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="team" className="py-32 bg-[#F5F7FA]">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#111111] text-center mb-20">
                        Leadership Team
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {team.map((member, index) => (
                        <Reveal key={member.name} delay={index * 0.1}>
                            <div
                                className="group relative cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onTouchStart={() => setHoveredIndex(index)}
                            >
                                {/* Portrait */}
                                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-glass hover:shadow-glass-lg transition-all duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = member.fallback;
                                        }}
                                    />

                                    {/* Overlay with role */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent flex items-end p-6 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        <div className="text-white">
                                            <p className="text-sm font-medium uppercase tracking-wider mb-1">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Name */}
                                <h3 className="text-2xl font-bold text-[#111111] text-center group-hover:text-primary transition-colors">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
                                    >
                                        {member.name}
                                    </a>
                                </h3>
                                <p className="text-[#0F172A]/60 text-center mt-2 md:hidden">
                                    {member.role}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
