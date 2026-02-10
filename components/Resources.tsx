"use client";

import AIVisualization from "./AIVisualization";
import { motion } from "framer-motion";

export default function Resources() {
    return (
        <section id="resources" className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-[#0a1628] rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
                    {/* Left: Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 p-12 lg:p-20 flex flex-col justify-center relative z-20"
                    >
                        <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                            Unleash Your Growth Potential in your industry with our advanced digital systems.
                        </h2>
                        <div className="mt-8">
                            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                                we deliver advanced AI agents and automation frameworks designed to transform complex
                                data into actionable value. Our intelligent digital systems provide the foundation for seamless
                                scalability, empowering your organization to optimize performance and drive continuous innovation.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Visual Side (Integrated AI Visualization) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative bg-slate-900/40 flex flex-col items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800"
                    >
                        {/* Background Depth */}
                        <div className="absolute inset-0 bg-radial-gradient from-sky-500/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                            <AIVisualization />
                        </div>

                        {/* Subtle code-like grid overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .bg-radial-gradient {
                    background: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
                }
            `}</style>
        </section>
    );
}
