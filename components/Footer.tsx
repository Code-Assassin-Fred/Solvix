"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
                // Update hash without jumping
                window.history.replaceState(null, "", href);
            }
        }
    };

    const PrivacyModal = () => (
        <AnimatePresence>
            {isPrivacyOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative border border-slate-100"
                    >
                        <button
                            onClick={() => setIsPrivacyOpen(false)}
                            className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-slate-900" />
                        </button>

                        <div className="prose prose-slate max-w-none">
                            <h2 className="text-3xl font-black text-slate-900 mb-6">Privacy Policy</h2>
                            <div className="space-y-4 text-slate-900 font-medium leading-relaxed">
                                <p>
                                    At Solvix, we are committed to protecting your privacy and ensuring the security of your data. This policy outlines how we handle information in our AI and digital transformation systems.
                                </p>
                                <h3 className="text-xl font-bold">1. Data Collection</h3>
                                <p>
                                    We collect only the information necessary to provide and improve our services, including contact details and operation-specific data provided through our platforms.
                                </p>
                                <h3 className="text-xl font-bold">2. Data Security</h3>
                                <p>
                                    Solvix employs enterprise-grade encryption and security protocols to safeguard all processed information against unauthorized access or disclosure.
                                </p>
                                <h3 className="text-xl font-bold">3. Shared Information</h3>
                                <p>
                                    We do not sell or trade your data. Information is only shared with trusted partners essential to delivering our services, or when required by law.
                                </p>
                                <p className="pt-4 text-sm text-slate-500 italic">
                                    Last updated: February 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-t border-slate-100 py-12"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Info */}
                    <div className="col-span-2">
                        <p className="text-slate-700 font-medium max-w-xs leading-relaxed">
                            Leading with cutting-edge software and AI solutions, building lasting trust through transparent, forward-thinking collaboration.
                        </p>
                        <p className="mt-4 text-sm text-slate-600 font-semibold">
                            AACC, Waiyaki Way, Westlands,<br />Nairobi, Kenya
                        </p>
                    </div>

                    {/* Balanced Company Links (3 + 2) */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3">
                        <h4 className="text-sm font-black text-[#1e3a5f] uppercase tracking-widest mb-6">Company</h4>
                        <div className="grid grid-cols-2 gap-x-12">
                            <ul className="space-y-4 text-slate-700 font-bold text-sm">
                                <li><a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-[#1e3a5f] transition-colors">Home</a></li>
                                <li><a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-[#1e3a5f] transition-colors">About</a></li>
                                <li><a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-[#1e3a5f] transition-colors">Services</a></li>
                            </ul>
                            <ul className="space-y-4 text-slate-700 font-bold text-sm">
                                <li><a href="#solutions" onClick={(e) => handleScroll(e, "#solutions")} className="hover:text-[#1e3a5f] transition-colors">Solutions</a></li>
                                <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-[#1e3a5f] transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-600 font-bold">© {new Date().getFullYear()} Solvix. All rights reserved.</p>
                    <div className="flex space-x-8 text-sm text-slate-600 font-bold">
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="hover:text-[#1e3a5f] transition-colors cursor-pointer"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>

            <PrivacyModal />
        </motion.footer>
    );
}
