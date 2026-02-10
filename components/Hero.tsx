"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const services = [
    "Artificial Intelligence (AI) Solutions",
    "Machine Learning (ML) Models",
    "AI Agents & Digital Assistants",
    "Automation & Intelligent Workflows",
    "Industrial & Process Automation",
    "AI Integration into Existing Systems",
    "Intelligent Chatbots & Virtual Assistants",
    "Data Science & Analytics",
    "Business Intelligence & Visualization",
    "Automated Data Entry & Reporting Systems",
    "Workflow Orchestration & Optimization",
    "Digital Transformation Solutions",
    "Cloud Systems & Integration",
    "Software & Systems Development",
    "Platform & System Architecture Design"
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typewriter effect logic
    useEffect(() => {
        if (subIndex === services[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % services.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 30 : 70);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <div id="home" className="relative w-full bg-[#0a1628] overflow-hidden" style={{ height: "calc(100vh - 96px)" }}>
            {/* Background Image with Cinematic Animation */}
            <div className="absolute inset-0 w-full h-full overflow-hidden animate-ken-burns will-change-transform">
                <Image
                    src="/circuit board.jpg"
                    alt="Circuit Board Interior"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
            </div>

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-[#0a1628]/60 z-1" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 select-none">
                <div className="mx-auto h-full max-w-7xl px-6 lg:px-8 flex flex-col justify-center text-left">
                    {/* Dynamic Service Badge */}
                    <div
                        key={index}
                        className="text-white text-lg md:text-xl font-semibold mb-8 tracking-wide uppercase opacity-90 animate-slide-down flex flex-wrap items-baseline"
                    >
                        <span className="whitespace-nowrap">We Provide&nbsp;</span>
                        <span className="text-[#e15b31]">
                            {services[index].substring(0, subIndex)}
                            <span className="animate-pulse ml-0.5 border-r-2 border-[#e15b31] inline-block h-[0.8em] translate-y-0.5">&nbsp;</span>
                        </span>
                    </div>

                    {/* Main Title - Reduced Font Size for better balance */}
                    <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl mb-6 max-w-4xl">
                        Solvix: Where present-day business challenges meet <span className="text-[#FBDB6B]">intelligent solutions.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-lg mb-16 font-medium">
                        Founded to deliver smarter, more efficient operations, Solvix leads with cutting-edge software and AI solutions, building lasting trust with organizations through transparent, forward-thinking collaboration.
                    </p>

                    {/* CTA Button */}
                    <div className="flex pointer-events-auto">
                        <button className="bg-[#FBDB6B] hover:bg-[#f5cf4a] text-[#0a1628] font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
