"use client";

export default function CoreVisual() {
    return (
        <section className="relative pt-16 pb-24 bg-white overflow-hidden">
            {/* Background Wavy Visuals */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 600C200 500 400 700 700 600C1000 500 1200 600 1540 500" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="8 8" />
                    <path d="M-100 550C250 450 450 650 750 550C1050 450 1250 550 1590 450" stroke="#0ea5e9" strokeWidth="2" />
                    <path d="M-100 650C150 550 350 750 650 650C950 550 1150 650 1490 550" stroke="#0ea5e9" strokeWidth="1" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual Side (Sized Down) */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-sm">
                            {/* Main Dark Box */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] shadow-2xl flex items-center justify-center group">
                                {/* Animated Background Image */}
                                <div
                                    className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-center transition-transform duration-[10000ms] ease-out group-hover:scale-110 animate-slow-zoom"
                                />

                                <div className="absolute inset-0 bg-[#0a1628]/40 mix-blend-multiply z-10" />

                                {/* Technical Visuals Overlay */}
                                <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-20" />
                            </div>

                            {/* Floating Orange Badge */}
                            <div className="absolute -bottom-6 -right-4 bg-[#e15b31] text-white p-6 rounded-2xl shadow-2xl max-w-[220px] animate-slide-up z-20">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                                    Engineering Excellence
                                </span>
                                <p className="mt-2 text-xs font-medium leading-relaxed">
                                    Digital engineering that speaks your language—innovative and built to solve real problems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: About Text Side (Paragraph Only) */}
                    <div className="lg:pl-8">
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            We aim to empower modern businesses worldwide to innovate, transform, and thrive.
                            Our best-in-class solutions and expert guidance enable you to embrace innovative strategies,
                            challenge the status quo, and win in the competitive market.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.8); opacity: 0; }
                }
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.1); opacity: 0.5; }
                }
                @keyframes slow-zoom {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.15); }
                }
                @keyframes slide-up {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-ping-slow {
                    animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 6s ease-in-out infinite;
                }
                .animate-slow-zoom {
                    animation: slow-zoom 20s ease-in-out infinite alternate;
                }
                .animate-slide-up {
                    animation: slide-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </section>
    );
}
