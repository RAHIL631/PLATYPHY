import { useState, useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: 'PLATYPHY transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and attention to detail exceeded our expectations.',
        author: 'Jennifer Walsh',
        role: 'CTO, TechVentures Inc.',
    },
    {
        quote: 'The AI automation solutions delivered by PLATYPHY have revolutionized our operations, saving us countless hours and significantly improving accuracy.',
        author: 'David Park',
        role: 'VP of Operations, DataFlow Systems',
    },
    {
        quote: 'Working with PLATYPHY felt like having an extension of our own team. Their strategic approach and technical excellence are unmatched.',
        author: 'Maria Rodriguez',
        role: 'CEO, InnovateLabs',
    },
    {
        quote: 'From concept to deployment, PLATYPHY delivered a world-class enterprise solution that has become the backbone of our digital transformation.',
        author: 'James Mitchell',
        role: 'Head of Digital, GlobalCorp',
    },
];

export default function TestimonialsSliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <Reveal>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#111111] text-center mb-20">
                        Client Testimonials
                    </h2>
                </Reveal>

                <div
                    className="max-w-4xl mx-auto relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Quote Icon */}
                    <Quote className="w-16 h-16 text-[#0F172A]/10 mb-8 mx-auto" />

                    {/* Testimonial Content */}
                    <div className="relative min-h-[300px] flex items-center justify-center">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ${index === currentIndex
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentIndex
                                            ? 'opacity-0 -translate-x-full'
                                            : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <blockquote className="text-center">
                                    <p className="text-2xl md:text-3xl text-[#111111] leading-relaxed mb-8 font-light">
                                        "{testimonial.quote}"
                                    </p>
                                    <footer>
                                        <p className="text-lg font-semibold text-[#111111]">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-[#0F172A]/60 mt-1">{testimonial.role}</p>
                                    </footer>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={goToPrevious}
                            className="p-3 rounded-full bg-[#F5F7FA] hover:bg-[#111111] hover:text-white transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-[#111111] w-8'
                                            : 'bg-[#0F172A]/20 hover:bg-[#0F172A]/40'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="p-3 rounded-full bg-[#F5F7FA] hover:bg-[#111111] hover:text-white transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
