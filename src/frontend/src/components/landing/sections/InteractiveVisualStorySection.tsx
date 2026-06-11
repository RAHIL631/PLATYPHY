import { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import { Target, Lightbulb, Cog, TrendingUp } from 'lucide-react';

const storyBlocks = [
    {
        icon: Target,
        title: 'Problem',
        description: 'We identify the core challenges holding your business back from achieving its full digital potential.',
    },
    {
        icon: Lightbulb,
        title: 'Strategy',
        description: 'We architect a comprehensive roadmap that aligns technology with your business objectives.',
    },
    {
        icon: Cog,
        title: 'Execution',
        description: 'We build robust, scalable systems using cutting-edge technologies and proven methodologies.',
    },
    {
        icon: TrendingUp,
        title: 'Impact',
        description: 'We deliver measurable results that drive growth, efficiency, and competitive advantage.',
    },
];

export default function InteractiveVisualStorySection() {
    const [activeBlock, setActiveBlock] = useState(0);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const handleScroll = () => {
            const section = document.getElementById('visual-story');
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)));

            const blockIndex = Math.min(
                storyBlocks.length - 1,
                Math.floor(scrollProgress * storyBlocks.length)
            );

            setActiveBlock(blockIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prefersReducedMotion]);

    return (
        <section id="visual-story" className="py-32 bg-gradient-to-b from-white via-[#F5F7FA] to-white relative overflow-hidden">
            {/* Background Morphing Effect */}
            <div
                className="absolute inset-0 opacity-20 transition-all duration-1000"
                style={{
                    background: `radial-gradient(circle at ${25 + activeBlock * 25}% 50%, rgba(15, 23, 42, 0.1) 0%, transparent 70%)`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#111111] text-center mb-20">
                        Where Vision Meets Engineering.
                    </h2>
                </Reveal>

                <div className="max-w-5xl mx-auto space-y-24">
                    {storyBlocks.map((block, index) => (
                        <Reveal key={block.title} delay={index * 0.1}>
                            <div
                                className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-700 ${activeBlock === index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                                    }`}
                            >
                                {/* Icon */}
                                <div
                                    className={`w-24 h-24 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-700 ${activeBlock === index
                                            ? 'bg-gradient-to-br from-[#111111] to-[#0F172A] shadow-2xl scale-110'
                                            : 'bg-[#F5F7FA] shadow-md'
                                        }`}
                                >
                                    <block.icon
                                        className={`w-12 h-12 transition-colors duration-700 ${activeBlock === index ? 'text-white' : 'text-[#0F172A]/50'
                                            }`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3
                                        className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-700 ${activeBlock === index ? 'text-[#111111]' : 'text-[#0F172A]/60'
                                            }`}
                                    >
                                        {block.title}
                                    </h3>
                                    <p
                                        className={`text-lg md:text-xl leading-relaxed transition-colors duration-700 ${activeBlock === index ? 'text-[#0F172A]/80' : 'text-[#0F172A]/50'
                                            }`}
                                    >
                                        {block.description}
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
