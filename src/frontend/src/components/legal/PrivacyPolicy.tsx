import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Eye, ShieldAlert, Cpu } from 'lucide-react';

interface PrivacyPolicyProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
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
                                <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                                    <Lock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-primary tracking-tighter">Privacy Policy</h2>
                                    <p className="text-sm font-bold text-accent uppercase tracking-widest">Data Sovereignty Protocols</p>
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
                                {/* Section  section */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <Eye className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">1. Translucent Data Collection</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        PLATYPHY operates on a "Zero-Knowledge" baseline. We do not harvest browser telemetry or biometric datasets for commercial extraction. The only data we process is the information you explicitly provide through our encrypted contact canisters, which is used solely to architect your digital solutions.
                                    </p>
                                </section>

                                {/* Section 2 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <Cpu className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">2. Decentralized Processing</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        Unlike legacy platforms, our data processing occurs on the Internet Computer’s decentralized nodes. This ensures that your information is fragmented and encrypted across a global mesh, making central-server breaches architecturally impossible.
                                    </p>
                                </section>

                                {/* Section 3 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <ShieldAlert className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">3. Neural Privacy Shields</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        We utilize AI-driven neural privacy shields to mask user identities during complex analytics runs. Your business intelligence remains your own; PLATYPHY serves as the secure conduit, not the owner, of your operational data.
                                    </p>
                                </section>

                                {/* Section 4 */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary">
                                        <Lock className="w-6 h-6" />
                                        <h3 className="text-2xl font-black tracking-tight">4. Sovereign Access Rights</h3>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        You maintain absolute governance over your digital footprint. At any timestamp, you may request a total "Protocol Wipe" of your information from our active canisters. PLATYPHY respects the fundamental right to digital erasure in the post-web3 landscape.
                                    </p>
                                </section>

                                {/* Footer of Content */}
                                <div className="pt-8 border-t border-slate-100">
                                    <p className="text-sm text-slate-400 font-medium italic">
                                        Last Updated: February 2026 | Privacy Protocol v3.4.0
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
                                Secure My Privacy
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
