import { useRef } from 'react';
import { Reveal } from '../components/Reveal';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Building2, Heart, ShoppingCart, Layers, GraduationCap, Briefcase } from 'lucide-react';

const industries = [
    { icon: Building2, label: 'FinTech', color: 'from-blue-600/20 to-cyan-400/20' },
    { icon: Heart, label: 'Healthcare', color: 'from-rose-600/20 to-coral-400/20' },
    { icon: ShoppingCart, label: 'E-Commerce', color: 'from-amber-500/20 to-yellow-400/20' },
    { icon: Layers, label: 'SaaS', color: 'from-indigo-600/20 to-violet-400/20' },
    { icon: GraduationCap, label: 'Education', color: 'from-emerald-600/20 to-mint-400/20' },
    { icon: Briefcase, label: 'Enterprise', color: 'from-slate-700/20 to-slate-400/20' },
];

export default function IndustriesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBlob1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const yBlob2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section
            id="industries"
            ref={containerRef}
            className="py-40 bg-white relative overflow-hidden"
        >
            {/* Sentient Background Blobs */}
            <motion.div
                style={{ y: yBlob1 }}
                className="absolute top-20 -left-60 w-[800px] h-[800px] bg-primary/[0.02] blur-[160px] rounded-full pointer-events-none"
            />
            <motion.div
                style={{ y: yBlob2 }}
                className="absolute bottom-20 -right-60 w-[900px] h-[900px] bg-accent/[0.02] blur-[180px] rounded-full pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="text-center mb-32">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
                        >
                            Global Sector Intelligence
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-primary tracking-tighter mb-8 md:mb-10 leading-[0.9]">
                            Industries <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x px-2">We Power</span>
                        </h2>
                        <div className="w-40 h-2 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shadow-lg" />
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
                    {industries.map((industry, index) => (
                        <IndustryCard key={industry.label} industry={industry} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function IndustryCard({ industry, index }: { industry: typeof industries[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    return (
        <Reveal delay={index * 0.1}>
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="group relative cursor-pointer"
            >
                {/* Master Card Body */}
                <div
                    className="relative bg-white border-2 border-slate-50 rounded-[4rem] p-16 transition-all duration-1000 h-full flex flex-col justify-between overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.04)] group-hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.12)] group-hover:border-primary/5"
                >
                    {/* Dynamic Glare Overlay */}
                    <motion.div
                        style={{
                            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, transparent 60%)`
                        }}
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                    />

                    {/* 3D Depth Layer */}
                    <div style={{ transform: "translateZ(80px)" }} className="relative z-10 space-y-10">
                        {/* Iconic Core */}
                        <div className="relative inline-block">
                            <div className="w-28 h-28 rounded-[2.5rem] bg-primary flex items-center justify-center shadow-[0_20px_40px_rgba(15,23,42,0.2)] group-hover:rotate-[10deg] transition-all duration-700">
                                <industry.icon className="w-14 h-14 text-white" strokeWidth={1} />
                            </div>
                            <div className={`absolute -inset-6 bg-gradient-to-br ${industry.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10`} />
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-5xl font-black text-primary tracking-tighter leading-tight">
                                {industry.label}
                            </h3>
                            <p className="text-primary/40 text-xl font-medium leading-relaxed mb-8">
                                Architecting the sovereign infrastructure of {industry.label.toLowerCase()} progress.
                            </p>
                        </div>
                    </div>

                    {/* Infinite Button Reveal */}


                    {/* Mesh Gradient Texture */}
                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </div>
                </div>
            </motion.div>
        </Reveal>
    );
}
