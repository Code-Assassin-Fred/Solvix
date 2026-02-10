"use client";

import { useState, useEffect } from "react";

const industries = [
    // Left Side
    {
        name: "Healthcare",
        color: "#0078d4",
        position: { angle: -125, xOffset: -20 }
    },
    {
        name: "Finance",
        color: "#0078d4",
        position: { angle: -160, xOffset: -10 }
    },
    {
        name: "Retail",
        color: "#0078d4",
        position: { angle: 185, xOffset: 0 }
    },
    {
        name: "Education",
        color: "#0078d4",
        position: { angle: 145, xOffset: -10 }
    },
    {
        name: "Manufacturing",
        color: "#0078d4",
        position: { angle: 110, xOffset: -20 }
    },
    // Right Side
    {
        name: "Customer Service",
        color: "#0078d4",
        position: { angle: -55, xOffset: 20 }
    },
    {
        name: "Sales & Marketing",
        color: "#0078d4",
        position: { angle: -20, xOffset: 10 }
    },
    {
        name: "Business Ops",
        color: "#0078d4",
        position: { angle: 10, xOffset: 0 }
    },
    {
        name: "Supply Chain",
        color: "#0078d4",
        position: { angle: 40, xOffset: 10 }
    },
    {
        name: "Human Resources",
        color: "#0078d4",
        position: { angle: 75, xOffset: 20 }
    }
];

export default function AIVisualization() {
    const [dimensions, setDimensions] = useState({ radius: 180, innerRadius: 80 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateDimensions = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDimensions({ radius: 140, innerRadius: 60 });
            } else if (width < 1024) {
                setDimensions({ radius: 160, innerRadius: 70 });
            } else {
                setDimensions({ radius: 190, innerRadius: 85 });
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative flex justify-center items-center w-full h-full min-h-[400px] scale-[0.8] lg:scale-100 transition-transform duration-500">
            {/* Central Hub circle */}
            <div className="relative z-30 w-32 h-32 rounded-full bg-white shadow-[0_10px_40px_rgba(0,120,212,0.15)] flex flex-col items-center justify-center p-4 text-center border-2 border-slate-50">
                <span className="text-xl font-extrabold text-[#0f2a4a] leading-none mb-1">AI apps</span>
                <span className="text-lg font-bold text-[#0f2a4a]">and agents</span>
            </div>

            {/* Orbital Dashed Rings */}
            <div className="absolute z-10 w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-[1.5px] border-sky-500/20 border-dashed" />
            <div className="absolute z-0 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-slate-200/20" />

            {/* Geometric Motifs on the middle ring */}
            {[...Array(8)].map((_, idx) => {
                const angle = (idx * (360 / 8) - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * (dimensions.innerRadius);
                const y = Math.sin(angle) * (dimensions.innerRadius);

                return (
                    <div
                        key={idx}
                        className={`absolute z-20 w-2.5 h-2.5 rounded-sm rotate-45 ${idx % 2 === 0 ? 'bg-emerald-400' : 'bg-sky-400'} shadow-md border border-white/50`}
                        style={{
                            transform: `translate(${x}px, ${y}px)`
                        }}
                    />
                );
            })}

            {/* Industry Nodes */}
            {industries.map((item, idx) => {
                const angle = item.position.angle * (Math.PI / 180);
                const x = Math.cos(angle) * (dimensions.radius) + item.position.xOffset;
                const y = Math.sin(angle) * (dimensions.radius);

                const isLeft = item.position.angle > 90 || item.position.angle < -90 || item.position.angle === 180 || item.position.angle === 185;

                return (
                    <div
                        key={item.name}
                        className="absolute z-40"
                        style={{
                            transform: `translate(${x}px, ${y}px)`
                        }}
                    >
                        <div className={`px-3 py-1.5 rounded-xl text-white text-[10px] md:text-[11px] font-bold shadow-lg whitespace-nowrap`}
                            style={{ backgroundColor: item.color }}>
                            {item.name}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
