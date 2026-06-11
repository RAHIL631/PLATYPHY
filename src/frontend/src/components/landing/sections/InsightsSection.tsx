import { Reveal } from '../components/Reveal';
import { Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    INSIGHT_THUMB_01_URL,
    INSIGHT_THUMB_02_URL,
    INSIGHT_THUMB_03_URL,
} from '@/config/assets';

const articles = [
    {
        title: 'Future of AI in Enterprise',
        excerpt: 'Exploring how artificial intelligence is reshaping enterprise operations and decision-making.',
        date: 'Feb 10, 2026',
        readTime: '5 min read',
        tags: ['AI', 'Enterprise'],
        image: INSIGHT_THUMB_01_URL,
        fallback: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Building Scalable Cloud Systems',
        excerpt: 'Best practices for architecting cloud-native infrastructure that grows with your business.',
        date: 'Feb 8, 2026',
        readTime: '7 min read',
        tags: ['Cloud', 'Architecture'],
        image: INSIGHT_THUMB_02_URL,
        fallback: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Security in Modern Applications',
        excerpt: 'Essential security patterns and practices for protecting enterprise applications.',
        date: 'Feb 5, 2026',
        readTime: '6 min read',
        tags: ['Security', 'Architecture'],
        image: INSIGHT_THUMB_03_URL,
        fallback: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    },
];

export default function InsightsSection() {
    return (
        <section id="insights" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#111111] text-center mb-20">
                        Insights & Perspectives
                    </h2>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {articles.map((article, index) => (
                        <Reveal key={article.title} delay={index * 0.1}>
                            <article className="group bg-[#F5F7FA] rounded-2xl overflow-hidden hover:bg-white hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[#0F172A]/10">
                                {/* Image with zoom effect */}
                                <div className="relative overflow-hidden aspect-video">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.src = article.fallback;
                                        }}
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                <div className="p-8">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {article.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-[#0F172A]/50 mb-4">
                                        <Calendar className="w-4 h-4" />
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#0F172A] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-[#0F172A]/70 leading-relaxed mb-6">{article.excerpt}</p>
                                    <button className="group/btn flex items-center gap-2 text-[#111111] font-medium hover:gap-3 transition-all duration-300">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
