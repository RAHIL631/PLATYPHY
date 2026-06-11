import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDY_01_URL, CASE_STUDY_02_URL, CASE_STUDY_03_URL } from '@/config/assets';

const caseStudies = [
    {
        image: CASE_STUDY_01_URL,
        title: 'Enterprise Cloud Migration',
        industry: 'FinTech',
        description: 'Migrated legacy infrastructure to cloud-native architecture, achieving 99.99% uptime and 40% cost reduction.',
    },
    {
        image: CASE_STUDY_02_URL,
        title: 'AI-Powered Analytics Platform',
        industry: 'Healthcare',
        description: 'Built intelligent data platform processing 10M+ records daily with real-time insights and predictive analytics.',
    },
    {
        image: CASE_STUDY_03_URL,
        title: 'Global E-Commerce Ecosystem',
        industry: 'E-Commerce',
        description: 'Developed scalable multi-region platform handling 100K+ concurrent users with sub-second response times.',
    },
];

export default function FeaturedWorkSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="work" className="py-32 bg-slate-50/50">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-20">
                        Featured Work
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <Reveal key={study.title} delay={index * 0.1}>
                            <div
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-primary/10"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                        style={{
                                            transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0 bg-[#111111] transition-opacity duration-500"
                                        style={{
                                            opacity: hoveredIndex === index ? 0.4 : 0,
                                        }}
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-semibold text-primary/50 uppercase tracking-wider mb-2">
                                        {study.industry}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-3">{study.title}</h3>
                                    <p className="text-primary/70 leading-relaxed mb-4">{study.description}</p>
                                    <button className="group/btn flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300">
                                        View Case Study
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
