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
        <section className="py-12 bg-slate-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-8">
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
                        <div className="bg-white rounded-lg overflow-hidden h-[400px] md:h-[500px] shadow-inner flex border border-slate-200">
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
                            <div className="flex-1 p-6 space-y-8 overflow-hidden">
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

                    {/* Mobile Phone Mockup - Overlapping */}
                    <div className="absolute -right-4 -bottom-12 md:-right-12 md:-bottom-20 z-20 w-[180px] md:w-[280px] animate-float group">
                        {/* Phone Container/Shadow */}
                        <div className="relative h-[380px] md:h-[580px] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-4 shadow-2xl border-4 border-slate-700">
                            {/* Inner Bezel */}
                            <div className="absolute inset-0 border-[3px] border-slate-800/50 rounded-[2.5rem] md:rounded-[3.5rem] pointer-events-none"></div>

                            {/* Physical Buttons */}
                            <div className="absolute -left-[6px] top-24 w-1.5 h-12 bg-slate-700 rounded-l-md border-y border-slate-800"></div>
                            <div className="absolute -left-[6px] top-40 w-1.5 h-12 bg-slate-700 rounded-l-md border-y border-slate-800"></div>
                            <div className="absolute -right-[6px] top-32 w-1.5 h-20 bg-slate-700 rounded-r-md border-y border-slate-800"></div>

                            {/* Screen */}
                            <div className="relative bg-white w-full h-full rounded-[2rem] md:rounded-[2.8rem] overflow-hidden flex flex-col border border-slate-200">
                                {/* Status Bar / Dynamic Island */}
                                <div className="h-10 md:h-14 flex items-center justify-center relative">
                                    <div className="w-20 md:w-28 h-5 md:h-7 bg-black rounded-full mt-2 md:mt-3 flex items-center justify-center">
                                        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-slate-800 rounded-full mr-2"></div>
                                    </div>

                                    {/* Status Bar Icons */}
                                    <div className="absolute left-6 top-3 md:top-5 text-[8px] md:text-[10px] font-bold">9:41</div>
                                    <div className="absolute right-6 top-3 md:top-5 flex space-x-1">
                                        <div className="w-3 md:w-4 h-1.5 md:h-2 bg-slate-200 rounded-sm"></div>
                                        <div className="w-3 md:w-3.5 h-1.5 md:h-2 bg-slate-200 rounded-sm"></div>
                                    </div>
                                </div>

                                {/* Mobile Dashboard Content */}
                                <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 overflow-hidden">
                                    <div className="flex justify-between items-center">
                                        <div className="h-6 w-24 bg-slate-100 rounded-full"></div>
                                        <div className="h-8 w-8 bg-sky-50 rounded-full animate-pulse"></div>
                                    </div>

                                    {/* Mini Stats Grid */}
                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        {[1, 2].map(i => (
                                            <div key={i} className="h-16 md:h-20 bg-slate-50 border border-slate-100 rounded-xl p-2 md:p-3 flex flex-col justify-between">
                                                <div className="h-1.5 md:h-2 w-1/2 bg-slate-200 rounded"></div>
                                                <div className="h-4 md:h-5 w-3/4 bg-sky-500/20 rounded"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mobile Chart Peak */}
                                    <div className="h-24 md:h-32 bg-sky-50 rounded-2xl border border-sky-100 p-3 relative overflow-hidden">
                                        <div className="flex items-end space-x-1 h-full">
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className="flex-1 bg-sky-400/40 rounded-t" style={{ height: `${20 + (i * 5)}%` }}></div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Task List */}
                                    <div className="space-y-2 md:space-y-3">
                                        <div className="h-3 md:h-4 w-1/3 bg-slate-200 rounded"></div>
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center space-x-3 p-2 md:p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                                                <div className="h-6 w-6 md:h-8 md:w-8 bg-amber-100 rounded-full shrink-0"></div>
                                                <div className="flex-1 space-y-1 md:space-y-2">
                                                    <div className="h-2 md:h-2.5 w-3/4 bg-slate-100 rounded"></div>
                                                    <div className="h-1.5 md:h-2 w-1/2 bg-slate-50 rounded"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Home Indicator */}
                                <div className="h-6 md:h-8 flex justify-center items-end pb-2">
                                    <div className="w-16 md:w-32 h-1 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
