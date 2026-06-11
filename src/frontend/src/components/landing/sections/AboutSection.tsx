import { Reveal } from '../components/Reveal';
import { AbstractShape3D } from '../visuals/AbstractShape3D';

export default function AboutSection() {
    return (
        <section id="solutions" className="section-spacing bg-[#F8FAFC] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Statement */}
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111111] leading-tight">
                            We connect innovation with execution.
                        </h2>
                    </Reveal>

                    {/* Right: 3D Shape */}
                    <Reveal delay={0.2}>
                        <div className="w-full h-96 flex items-center justify-center">
                            <AbstractShape3D />
                        </div>
                    </Reveal>
                </div>

                {/* Paragraph below */}
                <Reveal delay={0.4}>
                    <p className="text-xl md:text-2xl text-[#0F172A]/70 mt-16 max-w-4xl leading-relaxed">
                        PLATYPHY builds scalable software architecture that empowers companies to lead in the digital era.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
