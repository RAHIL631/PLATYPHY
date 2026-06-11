import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { useSubmitContact } from '../../../hooks/useQueries';
import { FormFieldError } from '../components/FormFieldError';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { useRipple } from '../../../hooks/useRipple';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showSuccess, setShowSuccess] = useState(false);
    const createRipple = useRipple();

    const submitContact = useSubmitContact();

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company is required';
        }

        if (!formData.projectType) {
            newErrors.projectType = 'Please select a project type';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            await submitContact.mutateAsync(formData);
            setShowSuccess(true);
            setFormData({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: '',
            });
            setErrors({});

            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
        } catch (error) {
            setErrors({ submit: 'Failed to submit. Please try again.' });
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section id="contact" className="py-32 bg-[#F8FAFC]">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Headline */}
                    <Reveal>
                        <div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-8">
                                Let's Build the Future Together.
                            </h2>
                            <p className="text-xl text-primary/70 leading-relaxed mb-4">
                                Ready to transform your vision into reality? Get in touch with our team.
                            </p>
                            <p className="text-sm text-primary/50">
                                We respond within 24 hours.
                            </p>
                        </div>
                    </Reveal>

                    {/* Right: Glass Form */}
                    <Reveal delay={0.2}>
                        <div className="glass-panel rounded-4xl p-8 md:p-12 shadow-glass-lg relative overflow-hidden">
                            {/* Glass reflection */}
                            <div className="absolute inset-0 glass-reflection pointer-events-none" />

                            <div className="relative z-10">
                                {showSuccess ? (
                                    <div className="text-center py-12">
                                        <div
                                            style={{
                                                animation: 'successPulse 0.6s ease-out',
                                            }}
                                        >
                                            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary mb-2">Thank you!</h3>
                                        <p className="text-primary/70">
                                            We've received your message and will get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 glass-input rounded-2xl outline-none form-focus-glow transition-all duration-300"
                                                placeholder="Your name"
                                            />
                                            <FormFieldError message={errors.name} />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 glass-input rounded-2xl outline-none form-focus-glow transition-all duration-300"
                                                placeholder="your@email.com"
                                            />
                                            <FormFieldError message={errors.email} />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 glass-input rounded-2xl outline-none form-focus-glow transition-all duration-300"
                                                placeholder="Your company"
                                            />
                                            <FormFieldError message={errors.company} />
                                        </div>

                                        <div>
                                            <label htmlFor="projectType" className="block text-sm font-medium text-primary mb-2">
                                                Project Type
                                            </label>
                                            <select
                                                id="projectType"
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 glass-input rounded-2xl outline-none form-focus-glow transition-all duration-300"
                                            >
                                                <option value="">Select a project type</option>
                                                <option value="Custom Software Development">Custom Software Development</option>
                                                <option value="Enterprise Web Applications">Enterprise Web Applications</option>
                                                <option value="Mobile App Engineering">Mobile App Engineering</option>
                                                <option value="AI & Automation">AI & Automation</option>
                                                <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                                                <option value="System Architecture & Consulting">System Architecture & Consulting</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <FormFieldError message={errors.projectType} />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-3 glass-input rounded-2xl outline-none form-focus-glow transition-all duration-300 resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                            <FormFieldError message={errors.message} />
                                        </div>

                                        {errors.submit && <FormFieldError message={errors.submit} />}

                                        <button
                                            type="submit"
                                            disabled={submitContact.isPending}
                                            onClick={createRipple}
                                            className="w-full px-8 py-4 btn-glow-primary text-white rounded-full font-medium text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group ripple-container overflow-hidden"
                                        >
                                            {submitContact.isPending ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Start the Conversation
                                                    <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <style>{`
        @keyframes successPulse {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes successPulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        }
      `}</style>
        </section>
    );
}
