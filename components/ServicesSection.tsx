"use client";

import Image from "next/image";
import { ThumbsUp, Users, ArrowRightCircle } from "lucide-react";

const solutions = [
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
    "Platform & System Architecture Design",
    "Full-Stack Application Development"
];

const services = [
    {
        icon: <ThumbsUp className="w-6 h-6 text-white" />,
        title: "Service and Solutions",
        subtitle: "Excellence in Technology Solutions",
        image: "/service and solutions.png",
        description: [
            "We deliver industry-leading IT solutions backed by unmatched expertise, creativity, and professionalism. Our team of seasoned technology specialists approaches every project with precision, asking the right questions and delivering the most effective, results-driven answers.",
            "Whether you are seeking custom IT infrastructure, managed services, or strategic consulting, Solvix ensures that every solution is tailored to your business goals. Our commitment to excellence and innovation makes us a trusted partner for organizations navigating the complexities of today's digital landscape."
        ]
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Partnership",
        subtitle: "Building Reliable Partnerships",
        image: "/Patnerships.jpg",
        description: [
            "At Solvix, we believe that strong professional relationships are built on a foundation of proactive support, technical reliability, and transparent communication. Our team is committed to identifying and resolving any challenges that could impact your business performance—before they become problems.",
            "We don't just offer solutions; we offer the right solutions. By asking the right questions and applying deep industry insight, Solvix ensures that every recommendation is aligned with your goals and executed with precision. Our approach empowers clients to maximize their technology investments and achieve long term success."
        ]
    }
];

export default function ServicesSection() {
    return (
        <section className="bg-[#f4f9f4] py-16 overflow-hidden">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/5 border border-slate-900/10 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-900 flex items-center gap-1">
                            Our Services
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.1]">
                        Driving the cutting-edge and robust product line in the industry
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl p-10 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left">
                            {/* Icon Circle */}
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-6">
                                {service.icon}
                            </div>

                            {/* Titles */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{service.title}</h3>
                            <p className="text-slate-500 font-medium italic mb-6">{service.subtitle}</p>

                            {/* Image Container with Enhanced Presentation */}
                            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 relative group">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 contrast-[1.05] saturate-[1.1] brightness-[1.02]"
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Subtle Inner Glow/Overlay for depth */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                            </div>

                            {/* Descriptions */}
                            <div className="space-y-4">
                                {service.description.map((para, i) => (
                                    <p key={i} className="text-slate-600 leading-relaxed text-[0.95rem]">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Solutions List Section */}
                <div className="mt-24 pt-16 border-t border-slate-900/10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-1/2 relative min-h-[450px] rounded-3xl overflow-hidden group shadow-xl border border-white/20">
                            {/* Background Image Optimized */}
                            <Image
                                src="/solutions.png"
                                alt="Solvix Solutions"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 contrast-[1.05] brightness-[1.1]"
                                quality={100}
                                priority
                            />
                            {/* Intense Dark Orange / Deep Blue Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#e15b31]/80 via-[#e15b31]/30 to-[#0a1628]/95 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-[#e15b31]/10 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-transparent to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                                <h3 className="text-3xl md:text-4xl font-bold mb-3 flex flex-wrap items-center gap-2">
                                    <span className="text-[#e15b31]">Solvix</span>
                                    <span className="text-white">Product Line</span>
                                </h3>
                                <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-md pb-2">
                                    We offer a comprehensive product line that includes:
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {solutions.map((solution, idx) => (
                                    <li key={idx} className="flex items-start gap-3 group">
                                        <ArrowRightCircle className="w-6 h-6 text-[#e15b31] shrink-0 transition-transform group-hover:translate-x-1" />
                                        <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                            {solution}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
