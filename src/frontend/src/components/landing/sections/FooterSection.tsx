import { SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../components/Logo';

interface FooterSectionProps {
    onOpenTerms?: () => void;
    onOpenPrivacy?: () => void;
}

export default function FooterSection({ onOpenTerms, onOpenPrivacy }: FooterSectionProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const getAppIdentifier = () => {
        if (typeof window !== 'undefined') {
            return encodeURIComponent(window.location.hostname);
        }
        return 'platyphy-app';
    };

    return (
        <footer className="bg-[#0F172A] py-16">
            <div className="container mx-auto px-6">
                {/* Top Section: Logo + Tagline */}
                <div className="mb-12 text-center md:text-left">
                    <Logo
                        className="h-32 w-auto object-contain mb-4 mx-auto md:mx-0"
                        variant="inverted"
                    />
                    <h3 className="text-2xl font-bold text-white mb-2">PLATYPHY</h3>
                    <p className="text-white/70">Connecting Innovation with Execution</p>
                </div>

                {/* Middle Section: Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('careers')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Careers
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Solutions</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('solutions')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Enterprise Solutions
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('industries')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Industries
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('process')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Process
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection('insights')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Insights
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('work')}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    Case Studies
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Office */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Office</h4>
                        <ul className="space-y-4 text-white/70 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                <span>Richmont Town, Langford Road, <br />Bangalore - 560047, India</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+91 8792602510</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>Platyphy@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/company/platyphyy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <SiLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61587854711249"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="Facebook"
                            >
                                <SiFacebook className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/platyphy?igsh=MWppcGsxMTA4NHd4eg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                                <SiInstagram className="w-6 h-6" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Bottom Section: Legal + Attribution */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-6 text-sm text-white/50">
                            <button
                                onClick={onOpenPrivacy}
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={onOpenTerms}
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </button>
                        </div>
                        <div className="text-sm text-white/50 flex items-center gap-2">
                            <span>© {new Date().getFullYear()} PLATYPHY. Built with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
