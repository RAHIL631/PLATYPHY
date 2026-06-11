import { Reveal } from '../components/Reveal';
import { WORLD_MAP_OUTLINE_URL } from '@/config/assets';

export default function GlobalPresenceSection() {
    return (
        <section id="global" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-20">
                        Serving Ambitious Businesses Worldwide.
                    </h2>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="max-w-6xl mx-auto text-center relative">
                        {/* Custom High-fidelity Map Container */}
                        <div className="relative inline-block w-full overflow-hidden rounded-3xl bg-slate-50/50 p-4 border border-slate-100 shadow-sm">
                            <img
                                src={WORLD_MAP_OUTLINE_URL}
                                alt="Official World Map"
                                className="w-full h-auto opacity-100"
                                loading="lazy"
                            />

                            {/* Regional Markers - adjusted for new map proportions */}
                            {/* Americas */}
                            <div className="absolute top-[35%] left-[25%] w-4 h-4 bg-primary rounded-full animate-ping" />
                            {/* Europe/Africa */}
                            <div className="absolute top-[45%] left-[50%] w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                            {/* Asia/Australia */}
                            <div className="absolute top-[60%] left-[75%] w-4 h-4 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                        </div>

                        <p className="text-center text-xl text-primary/70 mt-12 max-w-3xl mx-auto leading-relaxed">
                            From Silicon Valley to Singapore, we partner with forward-thinking organizations across continents to build the future of digital infrastructure.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
