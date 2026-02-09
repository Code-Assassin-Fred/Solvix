"use client";

import { useState, useEffect } from "react";

const industries = [
    { name: "Healthcare", description: "AI diagnostics, Patient onboarding, Clinical assistant agents" },
    { name: "Finance", description: "Robo-advisors for investment, AI-driven fraud detection, AI-based credit scoring" },
    { name: "Retail", description: "Personalized product recommendations, AI-driven inventory forecasting, Customer service chatbots" },
    { name: "Manufacturing", description: "Predictive maintenance agents, AI-driven quality control, AI-driven supply chain optimization" },
    { name: "Education", description: "AI tutoring agents, Personalized learning paths, Automated grading system" },
    { name: "Supply Chain", description: "AI-driven predictive forecasting, Intelligent route planning, Continuous monitoring agents" },
    { name: "Human Resources", description: "Recruitment agents, Individualized programming, Predictive retention and engagement" },
    { name: "Customer Service", description: "24/7 availability bots, Routine automation agents, Quality standardization agents" }
];

export default function IndustryApps() {
    const [radius, setRadius] = useState(300);

    useEffect(() => {
        const updateRadius = () => {
            setRadius(window.innerWidth < 768 ? 160 : 300);
        };
        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-sky-600 uppercase tracking-widest">Efficiency Redefined</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl">
                        AI apps and agents for every industry
                    </p>
                </div>

                <div className="relative flex justify-center items-center py-20 min-h-[600px]">
                    {/* Central Hub */}
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-white shadow-2xl flex items-center justify-center p-8 text-center border-4 border-sky-100 animate-pulse-subtle">
                        <span className="text-xl md:text-2xl font-bold text-[#0a1628]">AI apps <br /> and agents</span>
                    </div>

                    {/* Orbital Rings - Decorative */}
                    <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-sky-200 opacity-50 border-dashed animate-spin-slow"></div>
                    <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-sky-100 opacity-30"></div>

                    {/* Industry Nodes */}
                    {industries.map((item, idx) => {
                        const angle = (idx * (360 / industries.length)) * (Math.PI / 180);
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={item.name}
                                className="absolute z-20 transition-all duration-500 hover:scale-110 group"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`
                                }}
                            >
                                <div className="bg-white p-4 rounded-xl shadow-lg border border-sky-50 w-44 md:w-56 overflow-hidden">
                                    <div className="h-1 w-full bg-sky-600 mb-2"></div>
                                    <h3 className="font-bold text-[#0a1628] mb-1">{item.name}</h3>
                                    <p className="text-xs text-slate-500 line-clamp-2 group-hover:line-clamp-none transition-all">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-sky-600 -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-sm"></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-pulse-subtle {
                    animation: pulse-subtle 4s ease-in-out infinite;
                }
                .animate-spin-slow {
                    animation: spin-slow 60s linear infinite;
                }
            `}</style>
        </section>
    );
}
