"use client";

import Image from "next/image";

const detailServices = [
    { id: "01", title: "Autonomous Decision Systems", desc: "Building AI agents that can navigate complex operational workflows with minimal human oversight." },
    { id: "02", title: "Enterprise ML Infrastructure", desc: "Deploying robust, scalable machine learning models tailored to high-load business environments." },
    { id: "03", title: "Industrial Vision & QC", desc: "AI-powered quality control systems that detect process drift in real-time on factory floors." },
    { id: "04", title: "Surgical Workflow Automation", desc: "Optimizing backend operations and resource orchestration for healthcare and logistics providers." }
];

export default function ServicesDetail() {
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0 bg-[#0a1628]/10 mix-blend-overlay z-10" />
                            {/* Grainy Technical Visual (Using Gradient + Canvas-like Mesh) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#1e293b] flex items-center justify-center">
                                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                                <div className="w-64 h-64 border-4 border-[#e15b31]/30 rounded-full animate-ping-slow" />
                                <div className="absolute w-48 h-48 border-2 border-sky-400/20 rounded-full animate-pulse" />
                                <div className="absolute text-[#e15b31] text-4xl font-mono animate-pulse">SOLVIX_CORE</div>
                            </div>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -bottom-6 -right-6 md:right-0 bg-[#e15b31] text-white p-8 rounded-2xl shadow-xl max-w-xs animate-slide-up">
                            <span className="text-sm font-bold uppercase tracking-widest opacity-80">Engineering Excellence</span>
                            <p className="mt-2 font-medium">Digital engineering that speaks your language—innovative and built to solve real problems.</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-base font-semibold leading-7 text-[#e15b31] uppercase tracking-widest">Our Expertise</h2>
                        <h3 className="mt-2 text-4xl font-bold tracking-tight text-[#0a1628] sm:text-5xl leading-tight">
                            Crafting success through <br />digital engineering
                        </h3>

                        <div className="mt-16 space-y-12">
                            {detailServices.map((service) => (
                                <div key={service.id} className="group flex gap-8">
                                    <span className="text-4xl font-bold text-[#e15b31]/20 group-hover:text-[#e15b31] transition-colors duration-500 font-mono">
                                        {service.id}
                                    </span>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#0a1628] group-hover:translate-x-2 transition-transform duration-500">
                                            {service.title}
                                        </h4>
                                        <p className="mt-2 text-slate-600 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes ping-slow {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.5); opacity: 0; }
                }
                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-ping-slow {
                    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                .animate-slide-up {
                    animation: slide-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
