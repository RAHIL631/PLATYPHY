import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';
import { useMagnetic } from '@/hooks/useMagnetic';
import { useRipple } from '@/hooks/useRipple';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
];

export default function HeaderSection() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ctaBtnRef = useRef<HTMLButtonElement>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const createRipple = useRipple();

    useMagnetic(ctaBtnRef, !prefersReducedMotion);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-header-scrolled shadow-glass' : 'glass-header'
                    }`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection('#hero')}
                            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                        >
                            <Logo className="w-20 h-20 object-contain" variant="default" />
                            <span className="text-xl font-bold text-primary">PLATYPHY</span>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <button
                                ref={ctaBtnRef}
                                onClick={(e) => {
                                    createRipple(e);
                                    scrollToSection('#contact');
                                }}
                                className="px-6 py-3 glass-button text-primary rounded-full font-medium text-sm hover:shadow-glass transition-all duration-300 hover:scale-105 ripple-container overflow-hidden"
                            >
                                Start a Project
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div
                        className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute top-20 left-0 right-0 glass-panel m-4 rounded-3xl p-6 shadow-glass-lg">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left px-4 py-3 text-lg font-medium text-primary hover:bg-primary/5 rounded-xl transition-all"
                                    style={{
                                        animation: `fade-in 0.3s ease-out ${index * 0.05}s both`,
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={(e) => {
                                    createRipple(e);
                                    scrollToSection('#contact');
                                }}
                                className="mt-4 px-6 py-3 btn-glow-primary text-white rounded-full font-medium text-lg transition-all duration-300 ripple-container overflow-hidden"
                            >
                                Start a Project
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}
