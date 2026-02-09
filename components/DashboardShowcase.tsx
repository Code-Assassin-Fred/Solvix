"use client";

import { useState, useEffect } from "react";

function ChartBar() {
    const [height, setHeight] = useState("50%");

    useEffect(() => {
        setHeight(`${Math.random() * 80 + 10}%`);
    }, []);

    return <div className="flex-1 bg-sky-500/20 rounded-t" style={{ height }}></div>;
}

export default function DashboardShowcase() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0a1628]">
                        Powerful tools that simplify <br /> the complex work of software engineering.
                    </h2>
                </div>

                {/* Laptop Mockup Container */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Screen Shadow */}
                    <div className="absolute inset-x-0 -bottom-10 mx-auto h-24 w-[90%] bg-slate-900/10 blur-3xl rounded-[100%]"></div>

                    {/* Laptop Body */}
                    <div className="relative z-10 bg-slate-800 rounded-t-2xl p-4 md:p-6 shadow-2xl border-x-4 border-t-4 border-slate-700">
                        {/* Fake Dashboard UI */}
                        <div className="bg-white rounded-lg overflow-hidden h-[400px] md:h-[600px] shadow-inner flex border border-slate-200">
                            {/* Dashboard Sidebar */}
                            <div className="w-16 md:w-48 bg-slate-50 border-r border-slate-200 p-4 space-y-4 hidden md:block">
                                <div className="h-6 w-3/4 bg-slate-200 rounded"></div>
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-slate-100 rounded"></div>
                                    <div className="h-4 w-full bg-slate-100 rounded"></div>
                                    <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                                </div>
                            </div>

                            {/* Dashboard Main Content */}
                            <div className="flex-1 p-6 space-y-8 overflow-y-auto">
                                <div className="flex justify-between items-center">
                                    <div className="h-8 w-48 bg-slate-100 rounded"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-8 w-24 bg-sky-100 rounded"></div>
                                        <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="h-24 bg-white border border-slate-100 rounded-xl p-4 shadow-sm flex flex-col justify-between">
                                            <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                                            <div className="h-6 w-3/4 bg-slate-200 rounded"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Main Chart Area */}
                                <div className="h-64 bg-slate-50 rounded-2xl border border-slate-100 p-6 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-sky-500/10 animate-pulse"></div>
                                    <div className="h-4 w-1/4 bg-slate-200 rounded mb-4"></div>
                                    <div className="w-full h-full flex items-end space-x-1">
                                        {[...Array(20)].map((_, i) => (
                                            <ChartBar key={i} />
                                        ))}
                                    </div>
                                </div>

                                {/* Notifications/Actions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                                        {[1, 2].map(i => (
                                            <div key={i} className="flex items-center space-x-4 p-3 bg-white border border-slate-100 rounded-lg">
                                                <div className="h-10 w-10 bg-amber-100 rounded-full"></div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                                                    <div className="h-2 w-1/2 bg-slate-50 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                                        <div className="h-32 bg-slate-50 rounded-xl border border-dashed border-slate-300 flex items-center justify-center p-4">
                                            <div className="h-8 w-32 bg-white rounded-lg border border-slate-200 shadow-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Laptop Bottom Plate */}
                    <div className="relative z-0 h-4 bg-slate-700 w-[105%] -ml-[2.5%] rounded-b-xl shadow-xl flex justify-center">
                        <div className="w-32 h-2 bg-slate-900/40 rounded-b-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
