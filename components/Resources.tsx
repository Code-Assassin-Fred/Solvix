"use client";

import AIVisualization from "./AIVisualization";

export default function Resources() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-[#0a1628] rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[650px]">
                    {/* Left: Content Side */}
                    <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center relative z-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Scale your development resources effortlessly.
                        </h2>
                        <div className="mt-8 space-y-6">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Our software development resources provide significant benefits in terms of scalability,
                                which is crucial for firms looking to adapt and thrive in today’s fast-paced digital market.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Companies can scale their development efforts up or down with Solvix based on current needs
                                and future estimates, eliminating the overhead of hiring and the delays involved with onboarding.
                            </p>
                        </div>
                        <div className="mt-12 flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full border-2 border-[#e15b31] flex items-center justify-center">
                                <div className="h-4 w-4 bg-[#e15b31] rounded-full animate-ping"></div>
                            </div>
                            <span className="text-white font-bold tracking-widest uppercase text-sm">On-Demand Expertise</span>
                        </div>
                    </div>

                    {/* Right: Visual Side (Integrated AI Visualization) */}
                    <div className="flex-1 relative bg-slate-900/40 flex flex-col items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
                        {/* Background Depth */}
                        <div className="absolute inset-0 bg-radial-gradient from-sky-500/5 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
                            <AIVisualization />
                        </div>

                        {/* Subtle code-like grid overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                    </div>
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
