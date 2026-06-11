import { Reveal } from '../components/Reveal';
import { ArrowRight } from 'lucide-react';

export default function CareersSection() {
    return (
        <section id="careers" className="py-32 bg-[#F5F7FA]">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight mb-8">
                            We're Building the Future. Join Us.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-xl text-[#0F172A]/70 mb-12 leading-relaxed">
                            Be part of a team that's shaping the next generation of enterprise technology.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <button className="group px-8 py-4 bg-[#111111] text-white rounded-full font-medium text-lg hover:bg-[#0F172A] transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
                            View Open Positions
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
