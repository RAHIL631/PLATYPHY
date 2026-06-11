import { useState, useEffect } from 'react';
import Preloader from './components/landing/components/Preloader';
import HeaderSection from './components/landing/sections/HeaderSection';
import HeroSection from './components/landing/sections/HeroSection';
import ValuePropositionSection from './components/landing/sections/ValuePropositionSection';
import AboutSection from './components/landing/sections/AboutSection';
import ServicesSection from './components/landing/sections/ServicesSection';
import InteractiveVisualStorySection from './components/landing/sections/InteractiveVisualStorySection';
import LiveTechnologyShowcaseSection from './components/landing/sections/LiveTechnologyShowcaseSection';
import IndustriesSection from './components/landing/sections/IndustriesSection';
import FeaturedWorkSection from './components/landing/sections/FeaturedWorkSection';
import ExperienceSection from './components/landing/sections/ExperienceSection';
import RealTimeMetricsSection from './components/landing/sections/RealTimeMetricsSection';
import TrustSection from './components/landing/sections/TrustSection';
import GlobalPresenceSection from './components/landing/sections/GlobalPresenceSection';
import ParallaxQuoteSection from './components/landing/sections/ParallaxQuoteSection';
import InnovationStatementSection from './components/landing/sections/InnovationStatementSection';
import ProcessSection from './components/landing/sections/ProcessSection';
import InsightsSection from './components/landing/sections/InsightsSection';
import TeamLeadershipSection from './components/landing/sections/TeamLeadershipSection';
import TestimonialsSliderSection from './components/landing/sections/TestimonialsSliderSection';
import CareersSection from './components/landing/sections/CareersSection';
import ContactSection from './components/landing/sections/ContactSection';
import FooterSection from './components/landing/sections/FooterSection';
import WhatsAppFloatingButton from './components/landing/components/WhatsAppFloatingButton';
import AskConnectiveAIFloating from './components/landing/components/AskConnectiveAIFloating';
import CursorGlow from './components/landing/components/CursorGlow';
import TermsOfService from './components/legal/TermsOfService';
import PrivacyPolicy from './components/legal/PrivacyPolicy';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    const handleSkipIntro = () => {
        setIsLoading(false);
    };

    return (
        <>
            <Preloader isVisible={isLoading} onSkip={handleSkipIntro} />
            <div className="min-h-screen bg-[#F8FAFC]">
                <CursorGlow />
                <HeaderSection />
                <HeroSection />
                <ValuePropositionSection />
                <AboutSection />
                <ServicesSection />
                <InteractiveVisualStorySection />
                <LiveTechnologyShowcaseSection />
                <IndustriesSection />
                <FeaturedWorkSection />
                <ExperienceSection />
                <RealTimeMetricsSection />
                <TrustSection />
                <GlobalPresenceSection />
                <ParallaxQuoteSection />
                <InnovationStatementSection />
                <ProcessSection />
                <InsightsSection />
                <TeamLeadershipSection />
                <TestimonialsSliderSection />
                <CareersSection />
                <ContactSection />
                <FooterSection
                    onOpenTerms={() => setIsTermsOpen(true)}
                    onOpenPrivacy={() => setIsPrivacyOpen(true)}
                />
                <WhatsAppFloatingButton />
                <AskConnectiveAIFloating />

                {/* Legal Modals */}
                <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
                <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
            </div>
        </>
    );
}

export default App;
