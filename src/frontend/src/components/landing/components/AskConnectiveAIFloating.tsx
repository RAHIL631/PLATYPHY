import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';

const faqs = [
    {
        question: 'What services does PLATYPHY offer?',
        answer: 'We specialize in custom software systems, AI & intelligent automation, cloud-native infrastructure, and digital transformation consulting for enterprise clients.',
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on scope and complexity. Most enterprise projects range from 3-12 months, with ongoing support and optimization.',
    },
    {
        question: 'Do you work with startups or only enterprises?',
        answer: 'We work with both ambitious startups and established enterprises. Our solutions are tailored to your specific needs and growth stage.',
    },
    {
        question: 'What technologies do you use?',
        answer: 'We leverage modern technologies including Next.js, Node.js, AWS, Docker, AI/ML frameworks, and cloud-native architectures to build scalable solutions.',
    },
    {
        question: 'How do I get started?',
        answer: 'Simply reach out through our contact form or WhatsApp. We\'ll schedule a consultation to discuss your needs and how we can help.',
    },
];

export default function AskConnectiveAIFloating() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 z-50 flex items-center gap-3 px-5 py-3 bg-[#111111] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2"
                aria-label="Ask PLATYPHY AI"
            >
                <MessageSquare className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Ask PLATYPHY AI</span>
            </button>

            {/* FAQ Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#111111]">
                            How can we help you?
                        </DialogTitle>
                        <DialogDescription className="text-[#0F172A]/70">
                            Find answers to common questions about PLATYPHY and our services.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-[#0F172A]/10 pb-6 last:border-0">
                                <h3 className="text-lg font-semibold text-[#111111] mb-2">
                                    {faq.question}
                                </h3>
                                <p className="text-[#0F172A]/70 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-[#F5F7FA] rounded-lg">
                        <p className="text-sm text-[#0F172A]/70 text-center">
                            Still have questions?{' '}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="text-[#111111] font-medium hover:underline"
                            >
                                Contact us directly
                            </button>
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
