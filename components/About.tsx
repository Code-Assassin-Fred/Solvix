"use client";

export default function About() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Wavy Visuals (SVG) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 600C200 500 400 700 700 600C1000 500 1200 600 1540 500" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M-100 550C250 450 450 650 750 550C1050 450 1250 550 1590 450" stroke="#0ea5e9" strokeWidth="1" />
                    <path d="M-100 650C150 550 350 750 650 650C950 550 1150 650 1490 550" stroke="#0ea5e9" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[#0a1628] leading-[1.1]">
                        Bridge the gap between <br />
                        <span className="text-sky-600">AI’s promise</span> and its <br />
                        real-world performance.
                    </h2>

                    <div className="mt-12 border-l-4 border-sky-600 pl-8">
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
                            We aim to empower modern businesses worldwide to innovate, transform, and thrive.
                            Our best-in-class solutions and expert guidance enable you to embrace innovative strategies,
                            challenge the status quo, and win in the competitive market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
