import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock, Globe } from 'lucide-react';

interface TermsOfServiceProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsOfService({ isOpen, onClose }: TermsOfServiceProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 lg:p-24 overflow-hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/20 backdrop-blur-3xl"
                        onClick={onClose}
                    />

                    {/* Window */}
                    <motion.div
                        initial={{ y: 100, scale: 0.9, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 100, scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-5xl h-full bg-white border border-slate-200 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-12 py-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-primary tracking-tighter">Terms of Service</h2>
                                    <p className="text-sm font-bold text-accent uppercase tracking-widest">Legal Architecture & Protocols</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-colors group"
                            >
                                <X className="w-6 h-6 text-primary group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-12 py-12 scroll-smooth">
                            <div className="max-w-3xl space-y-16">
                                {/* Section 1 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <FileText className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">1. Protocol Acceptance</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        By accessing the PLATYPHY ecosystem, you agree to adhere to our standard operating protocols. This is a legally binding agreement between you and PLATYPHY regarding your use of our digital infrastructure, decentralized applications, and high-fidelity services.
                                    </p>
                                </section>

                                {/* Section 2 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <Globe className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">2. Intellectual Property Architecture</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        All source code, design systems, AI models, and visual assets are derived from the PLATYPHY Core Engine. Any unauthorized replication of our proprietary "Anti-Gravity" UI patterns or Motoko backend optimizations is strictly prohibited under global digital integrity laws.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <Lock className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">3. Data & Privacy Integrity</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Your identity is protected via Internet Computer (IC) protocols. PLATYPHY does not store personal identifiable information on legacy centralized servers. All data transformations occur within encrypted canisters focused on sovereign user privacy.
                                    </p>
                                </section>

                                {/* Section 4 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <ShieldCheck className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">4. Limitation of Liability</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        PLATYPHY provides mission-critical infrastructure "as-is." While we strive for 99.99% uptime via our decentralized mesh network, we are not liable for any digital deviations resulting from planetary-scale network anomalies or quantum-level processing shifts.
                                    </p>
                                </section>

                                {/* Footer of Content */}
                                <div className="pt-8 border-t border-slate-100">
                                    <p className="text-sm text-slate-400 font-medium italic">
                                        Last Updated: February 2026 | Protocol Version 2.0.1
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Action */}
                        <div className="px-12 py-8 bg-slate-50 border-t border-slate-100 flex justify-end">
                            <button
                                onClick={onClose}
                                className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all text-sm uppercase tracking-widest"
                            >
                                Acknowledge Protocols
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
