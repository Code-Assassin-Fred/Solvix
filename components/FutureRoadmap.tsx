"use client";

export default function FutureRoadmap() {
    return (
        <section className="py-24 bg-sky-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <span className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                            </span>
                            Coming 2026
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0a1628] leading-tight">
                            Solvix AI <br />Enterprise Platform
                        </h2>
                        <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
                            Smarter insights for enterprise IT operations. Measurable gains across your entire technology stack through better visibility, smarter workflows, and integrated AI support.
                        </p>
                        <div className="mt-12">
                            <button className="px-8 py-4 bg-[#0a1628] text-white font-bold rounded-xl hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl">
                                Join the Waitlist
                            </button>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/3] w-full bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-white"></div>
                            {/* Abstract Feature Visualization */}
                            <div className="absolute inset-x-8 top-12 bottom-0 bg-slate-50 rounded-t-2xl shadow-inner p-6 transform group-hover:-translate-y-4 transition-transform duration-700">
                                <div className="space-y-6">
                                    <div className="h-8 w-1/3 bg-slate-200 rounded"></div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                                        <div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                                        <div className="h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                                    </div>
                                    <div className="h-48 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent animate-shimmer"></div>
                                        <div className="m-4 h-4 w-1/2 bg-slate-100 rounded"></div>
                                        <div className="mx-4 mt-8 space-y-3">
                                            <div className="h-2 w-full bg-slate-50 rounded"></div>
                                            <div className="h-2 w-5/6 bg-slate-50 rounded"></div>
                                            <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Elements */}
                            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-sky-400/20 blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 -right-8 w-48 h-48 bg-amber-400/10 blur-3xl animate-pulse-slow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.1; }
                    50% { transform: scale(1.1); opacity: 0.2; }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
