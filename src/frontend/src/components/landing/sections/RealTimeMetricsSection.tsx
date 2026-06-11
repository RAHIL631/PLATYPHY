import { useInViewOnce } from '../../../hooks/useInViewOnce';
import { Counter } from '../components/Counter';

const metrics = [
    { label: 'Projects Delivered', value: 100, suffix: '+' },
    { label: 'Systems Deployed', value: 60, suffix: '+' },
    { label: 'Client Satisfaction', value: 99, suffix: '%' },
    { label: 'Uptime', value: 99.9, suffix: '%', decimals: 1 },
];

export default function RealTimeMetricsSection() {
    const { ref, isInView } = useInViewOnce();

    return (
        <section ref={ref} className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.label}
                            className="glass-card rounded-3xl p-8 text-center hover:shadow-glass hover-glow-lift transition-all duration-500"
                            style={{
                                opacity: isInView ? 1 : 0,
                                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
                                transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
                            }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 glow-primary blur-2xl opacity-30" />
                                <div className="relative text-4xl md:text-5xl font-bold text-primary mb-2">
                                    <Counter
                                        end={metric.value}
                                        decimals={metric.decimals}
                                        suffix={metric.suffix}
                                    />
                                </div>
                            </div>
                            <p className="text-sm text-primary/70 font-medium">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
