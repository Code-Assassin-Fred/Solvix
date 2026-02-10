"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AIDashboard() {
    const [metrics, setMetrics] = useState({
        inference: 94.2,
        latency: 18,
        uptime: 99.99,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setMetrics(prev => ({
                inference: Number((93.5 + Math.random() * 1.5).toFixed(1)),
                latency: Math.floor(16 + Math.random() * 6),
                uptime: prev.uptime,
            }));
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-[#0a1628] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col p-6 md:p-8 relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8 relative z-10">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e293b] border border-sky-500/50 flex items-center justify-center">
                        <div className="w-5 h-5 bg-sky-400 rounded-sm" />
                    </div>
                    <div>
                        <h3 className="text-xs md:text-sm font-black text-white uppercase tracking-[0.2em]">Neural Core v4.0</h3>
                        <p className="text-[9px] text-sky-400 font-bold uppercase tracking-widest leading-none mt-1">Status: Operational</p>
                    </div>
                </div>
                {/* <div className="px-3 py-1 rounded-full bg-[#064e3b] border border-emerald-500/50 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black text-emerald-500 uppercase">Secure Link</span>
                </div> */}
            </div>

            {/* Main Content Overlay */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 overflow-hidden">

                {/* Left Side: Real-time Visualization Area */}
                <div className="relative bg-[#0d1b2a] rounded-2xl border border-slate-800 flex items-center justify-center p-8 overflow-hidden">
                    {/* Central Core Element */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 180, 270, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="relative w-32 h-32 md:w-40 md:h-40 border-2 border-dashed border-sky-500/30 rounded-full flex items-center justify-center"
                    >
                        <div className="w-12 h-12 border-2 border-sky-400/50 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-sky-400 animate-pulse" />
                        </div>

                        {/* Orbital Components */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-sky-500 rounded-sm shadow-lg"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${i * 60}deg) translate(80px)`
                                }}
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            />
                        ))}
                    </motion.div>

                    {/* Scanning Beam */}
                    <motion.div
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-px bg-sky-400 z-20"
                    />
                </div>

                {/* Right Side: Solid Metrics Panel */}
                <div className="flex flex-col justify-between space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Inference Speed</span>
                            <div className="text-xl font-black text-white tabular-nums">{metrics.latency}ms</div>
                        </div>
                        <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl">
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1">Core Load</span>
                            <div className="text-xl font-black text-white tabular-nums">{metrics.inference}%</div>
                        </div>
                    </div>

                    {/* Status Console Block */}
                    <div className="bg-[#0f172a] border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Model Training Progress</h4>
                                <p className="text-[9px] text-slate-500 font-bold mt-1">Epoch 82/100 • Processing Shards</p>
                            </div>
                            <span className="text-xl font-black text-sky-400 tabular-nums">82%</span>
                        </div>
                        <div className="h-2 w-full bg-[#1e293b] rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: "82%" }}
                                className="h-full bg-sky-500"
                            />
                        </div>
                    </div>

                    {/* Bottom Data Grid */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: "Uptime", val: `${metrics.uptime}%` },
                            { label: "Clusters", val: "12 Active" },
                            { label: "Capacity", val: "4.2 PF" }
                        ].map((m, i) => (
                            <div key={i} className="flex flex-col items-center justify-center py-3 bg-[#1e293b] rounded-xl border border-slate-800">
                                <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter block">{m.label}</span>
                                <span className="text-[10px] font-black text-white mt-0.5">{m.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Terminal Output */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center text-[8px] font-mono text-slate-500 relative z-10 shrink-0 uppercase tracking-widest">
                <span>[LOG] Root encryption verified...</span>
                <span className="text-sky-400 animate-pulse font-black">Running Neural Link...</span>
            </div>
        </div>
    );
}
