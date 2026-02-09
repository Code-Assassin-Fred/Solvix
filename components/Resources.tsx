"use client";

import Image from "next/image";

export default function Resources() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-[#0a1628] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    {/* Left: Content Side */}
                    <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
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

                    {/* Right: Visual Side */}
                    <div className="flex-1 relative min-h-[400px]">
                        {/* Placeholder for Development Team Visual */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent z-10 lg:hidden"></div>
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Code/Nodes visual overlay */}
                            <div className="absolute inset-0 opacity-40">
                                <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
                                    <path d="M0 100 L400 300 M0 200 L400 400 M0 300 L400 500" stroke="#0ea5e9" strokeWidth="0.5" />
                                    <circle cx="100" cy="150" r="4" fill="#0ea5e9" />
                                    <circle cx="300" cy="350" r="4" fill="#0ea5e9" />
                                    <circle cx="200" cy="250" r="6" fill="#e15b31" className="animate-pulse" />
                                </svg>
                            </div>
                            <div className="z-20 text-center px-12">
                                <div className="inline-block px-4 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-4 uppercase tracking-tighter">Collaborative Ecosystem</div>
                                <h3 className="text-2xl font-bold text-white mb-4">Alignment with your company's goals</h3>
                                <p className="text-slate-400">Improving the capacity to scale quickly while retaining high-quality outputs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
