"use client";

export default function FutureRoadmap() {
    return (
        <section className="relative py-24 bg-[#0a1628] overflow-hidden">
            {/* Wavy Backdrop - Perfected Ribbons - Inspired by Image 2 */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="vibrant-blue" x1="0" y1="400" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0ea5e9" />
                            <stop offset="0.5" stopColor="#22d3ee" />
                            <stop offset="1" stopColor="#0ea5e9" />
                        </linearGradient>
                        <linearGradient id="deep-blue" x1="0" y1="0" x2="0" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0a1628" />
                            <stop offset="0.5" stopColor="#0c2547" />
                            <stop offset="1" stopColor="#0a1628" />
                        </linearGradient>
                    </defs>

                    {/* Background Mesh/Glow */}
                    <rect width="1440" height="800" fill="url(#deep-blue)" />

                    {/* Layered Wavy Ribbons */}
                    <g className="opacity-60">
                        {[...Array(6)].map((_, i) => (
                            <path
                                key={i}
                                d={`M-100 ${400 + i * 20}C200 ${300 + i * 30} 400 ${500 - i * 30} 720 ${400 + i * 10}C1040 ${300 + i * 30} 1240 ${500 - i * 30} 1540 ${400 + i * 20}`}
                                stroke="url(#vibrant-blue)"
                                strokeWidth="0.5"
                                className={`animate-wave-${(i % 3) + 1}`}
                                opacity={0.1 + i * 0.05}
                            />
                        ))}
                    </g>

                    <path d="M-100 500C300 350 500 650 820 500C1140 350 1340 650 1640 500" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.3" className="animate-wave-2" />
                    <path d="M-100 450C250 300 450 600 720 450C990 300 1190 600 1440 450" stroke="#22d3ee" strokeWidth="1" strokeOpacity="0.2" className="animate-wave-1" />
                    <path d="M-100 550C350 400 550 700 880 550C1210 400 1410 700 1740 550" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.1" className="animate-wave-3" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Whatever your need, <br />we can solve IT.
                        </h2>
                        <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-xl">
                            Contact us today to schedule a free expert consultation or to learn more about our services.
                        </p>
                    </div>

                    {/* Visual Side */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/3] w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white"></div>
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
                            {/* Floating Glows */}
                            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-sky-400/20 blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-1/4 -right-8 w-48 h-48 bg-purple-400/10 blur-3xl animate-pulse-slow"></div>
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
                @keyframes wave-1 {
                    0%, 100% { transform: translateY(0) scaleY(1); }
                    50% { transform: translateY(-30px) scaleY(1.05); }
                }
                @keyframes wave-2 {
                    0%, 100% { transform: translateY(0) scaleY(1); }
                    50% { transform: translateY(20px) scaleY(0.95); }
                }
                @keyframes wave-3 {
                    0%, 100% { transform: translateY(0) scaleY(1); }
                    50% { transform: translateY(-15px) scaleY(1.02); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 5s ease-in-out infinite;
                }
                .animate-wave-1 {
                    animation: wave-1 8s ease-in-out infinite;
                }
                .animate-wave-2 {
                    animation: wave-2 12s ease-in-out infinite;
                }
                .animate-wave-3 {
                    animation: wave-3 10s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
