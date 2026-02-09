"use client";

export default function CTAContact() {
    return (
        <section className="relative py-24 bg-[#0a1628] overflow-hidden">
            {/* Technical Backdrop (SVG Circuitry/Grid) */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    <circle cx="200" cy="200" r="150" fill="none" stroke="#e15b31" strokeWidth="1" className="animate-pulse" />
                    <circle cx="800" cy="800" r="200" fill="none" stroke="#e15b31" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Be one of the first with better visibility, smarter workflows, and integrated support.
                    </h2>
                    <p className="mt-8 text-xl text-slate-400">
                        Lead to measurable gains across your entire IT operation with Solvix's forward-thinking AI ecosystem.
                    </p>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-[#0a1628] font-bold rounded-full hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl text-lg">
                            Contact Us
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-lg">
                            Schedule a Demo
                        </button>
                    </div>
                </div>

                <div className="mt-20 flex justify-center space-x-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Placeholder for Client/Tech partner logos */}
                    <div className="h-8 w-24 bg-white/20 rounded-md"></div>
                    <div className="h-8 w-24 bg-white/20 rounded-md"></div>
                    <div className="h-8 w-24 bg-white/20 rounded-md"></div>
                    <div className="h-8 w-24 bg-white/20 rounded-md"></div>
                </div>
            </div>
        </section>
    );
}
