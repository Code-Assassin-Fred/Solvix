"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
    LayoutDashboard,
    Brain,
    Network,
    ShieldCheck,
    BarChart3,
    Activity,
    Cpu,
    Bell,
    Settings,
    ChevronRight,
    Circle
} from "lucide-react";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Operations Hub" },
    { icon: Brain, label: "Human Capital" },
    { icon: Network, label: "Inventory Control" },
    { icon: ShieldCheck, label: "Compliance Portal" },
    { icon: BarChart3, label: "Strategy & BI" },
];

const activityLogs = [
    { text: "KRA iTax Sync completed successfully", time: "2 min ago", status: "success" },
    { text: "Payroll processing for February finished", time: "5 min ago", status: "success" },
    { text: "Fleet Tracking: Vehicle KCD reached Nakuru", time: "12 min ago", status: "success" },
];

function LiveIndicator() {
    return (
        <div className="flex items-center space-x-2">
            <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"
            />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Live System</span>
        </div>
    );
}

export default function DashboardShowcase() {
    const [stats, setStats] = useState({ agents: 1248, sync: 99.8, load: 42.5 });
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const mobileY = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const mobileRotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                agents: prev.agents + (Math.random() > 0.5 ? 1 : -1),
                sync: Number((99.7 + Math.random() * 0.3).toFixed(1)),
                load: Number((42.1 + Math.random() * 0.8).toFixed(1))
            }));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="pt-12 pb-32 bg-slate-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0a1628]">
                        Powerful platforms that simplify <br /> the complex work of digital transformation.
                    </h2>
                </motion.div>

                {/* Laptop Mockup Container */}
                <div className="relative mx-auto max-w-5xl">
                    <div className="absolute inset-x-0 -bottom-10 mx-auto h-24 w-[90%] bg-slate-900/10 blur-3xl rounded-[100%]"></div>

                    {/* Laptop Body */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: 20 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 bg-slate-800 rounded-t-2xl p-4 md:p-5 shadow-2xl border-x-4 border-t-4 border-slate-700"
                    >
                        {/* Fake Dashboard UI */}
                        <div className="bg-[#fcfdfd] rounded-lg overflow-hidden h-[360px] md:h-[520px] shadow-inner flex border border-slate-200">

                            {/* Dashboard Sidebar */}
                            <div className="w-16 md:w-52 bg-[#0a1628] border-r border-slate-200 p-4 space-y-8 hidden md:flex flex-col">
                                <div className="px-2">
                                    <div className="text-sky-400 font-extrabold text-lg tracking-tight">DASHBOARD</div>
                                </div>

                                <nav className="space-y-1">
                                    {sidebarItems.map((item, i) => (
                                        <div key={i} className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors group cursor-pointer ${i === 0 ? 'bg-sky-500/10 text-sky-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                                            <item.icon className="w-4 h-4" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-auto px-3 py-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Node Status</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            animate={{ width: ["80%", "95%", "85%"] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="h-full bg-sky-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Dashboard Main Content */}
                            <div className="flex-1 flex flex-col min-w-0">
                                {/* Top Bar */}
                                <header className="h-14 border-b border-slate-100 bg-white/80 backdrop-blur-md px-6 flex items-center justify-between z-20">
                                    <div className="flex items-center space-x-4">
                                        <h3 className="text-sm font-bold text-slate-800">Enterprise Operations Portal</h3>
                                        <LiveIndicator />
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="relative">
                                            <Bell className="w-4 h-4 text-slate-400" />
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 overflow-hidden bg-gradient-to-tr from-sky-400 to-indigo-500"></div>
                                    </div>
                                </header>

                                <div className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                        {[
                                            { label: "Active Assets", value: stats.agents.toLocaleString(), icon: Cpu, color: 'text-sky-500' },
                                            { label: "Process Sync", value: `${stats.sync}%`, icon: Brain, color: 'text-indigo-500' },
                                            { label: "Daily Volume", value: `${stats.load} M`, icon: Activity, color: 'text-amber-500' },
                                            { label: "Reliability", value: "99.99%", icon: ShieldCheck, color: 'text-emerald-500' },
                                        ].map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm group hover:border-sky-200 transition-colors"
                                            >
                                                <div className="flex justify-between items-start mb-1 md:mb-2">
                                                    <span className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                                                    <stat.icon className={`w-2.5 h-2.5 md:w-3 md:h-3 ${stat.color}`} />
                                                </div>
                                                <div className="text-sm md:text-lg font-black text-slate-800 tabular-nums">{stat.value}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Main Content Areas */}
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                        {/* Chart Section */}
                                        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm overflow-hidden relative">
                                            <div className="flex items-center justify-between mb-6">
                                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Enterprise Transaction Flow</h4>
                                                <div className="flex space-x-1">
                                                    {[1, 2, 3].map(j => <Circle key={j} className="w-1.5 h-1.5 text-slate-200 fill-slate-200" />)}
                                                </div>
                                            </div>
                                            <div className="h-32 md:h-44 w-full flex items-end space-x-1 px-2 relative">
                                                {/* Scanline Effect */}
                                                <motion.div
                                                    animate={{ left: ["-10%", "110%"] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent z-10"
                                                />
                                                {[...Array(24)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: "10%" }}
                                                        animate={{
                                                            height: mounted
                                                                ? [`${20 + Math.random() * 60}%`, `${30 + Math.random() * 50}%`]
                                                                : "40%"
                                                        }}
                                                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.05 }}
                                                        className="flex-1 bg-gradient-to-t from-sky-400 to-indigo-500 rounded-t-sm min-w-[4px]"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Activity Log */}
                                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Operations Log</h4>
                                            <div className="space-y-4">
                                                {activityLogs.map((log, i) => (
                                                    <div key={i} className="flex items-start space-x-3 group">
                                                        <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${log.status === 'success' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                                                        <div className="min-w-0">
                                                            <p className="text-[11px] font-medium text-slate-700 leading-snug line-clamp-2">{log.text}</p>
                                                            <span className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">{log.time}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="w-full mt-6 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center space-x-1">
                                                <span>View Full Logs</span>
                                                <ChevronRight className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Laptop Bottom Plate */}
                    <div className="relative z-0 h-4 bg-slate-700 w-[105%] -ml-[2.5%] rounded-b-xl shadow-xl flex justify-center">
                        <div className="w-32 h-2 bg-slate-900/40 rounded-b-full"></div>
                    </div>

                    {/* Mobile Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ y: mobileY, rotate: mobileRotate }}
                        className="absolute -right-4 -bottom-12 md:-right-12 md:-bottom-20 z-20 w-[180px] md:w-[280px]"
                    >
                        <div className="relative h-[380px] md:h-[580px] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-4 shadow-2xl border-4 border-slate-700">
                            {/* Bezel */}
                            <div className="absolute inset-0 border-[3px] border-slate-800/50 rounded-[2.5rem] md:rounded-[3.5rem] pointer-events-none"></div>

                            {/* Physical Buttons */}
                            {/* Left Side: Volume Buttons */}
                            <div className="absolute -left-[6px] top-24 w-[6px] h-10 bg-slate-800 border border-slate-700/50 rounded-l-sm" />
                            <div className="absolute -left-[6px] top-36 w-[6px] h-10 bg-slate-800 border border-slate-700/50 rounded-l-sm" />

                            {/* Right Side: Power Button */}
                            <div className="absolute -right-[6px] top-32 w-[6px] h-16 bg-slate-800 border border-slate-700/50 rounded-r-sm" />

                            {/* Screen */}
                            <div className="relative bg-[#f1f5f9] w-full h-full rounded-[2rem] md:rounded-[2.8rem] overflow-hidden flex flex-col border border-slate-200">
                                {/* Dynamic Island */}
                                <div className="h-10 md:h-14 flex items-center justify-center relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="w-16 md:w-24 h-5 md:h-7 bg-black rounded-full mt-2 md:mt-3 flex items-center justify-center px-2"
                                    >
                                        <div className="flex-1 flex justify-center space-x-1">
                                            <div className="w-1 h-3 bg-sky-500 rounded-full" />
                                            <div className="w-1 h-3 bg-sky-500 rounded-full" />
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex-1 p-3 md:p-6 space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar">
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs font-black text-slate-800 italic uppercase tracking-tighter">Field Ops Manager</div>
                                        <Settings className="w-4 h-4 text-slate-400" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-sm border border-slate-100">
                                            <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Daily Targets</p>
                                            <div className="text-xs md:text-sm font-black text-emerald-500">+12.5%</div>
                                        </div>
                                        <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-sm border border-slate-100">
                                            <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Staff</p>
                                            <div className="text-xs md:text-sm font-black text-slate-800">42/45</div>
                                        </div>
                                    </div>

                                    {/* Mini Card */}
                                    <div className="bg-[#0a1628] rounded-xl md:rounded-2xl p-3 md:p-4 text-white shadow-lg space-y-2 md:space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] uppercase font-bold text-sky-400 tracking-widest">Fleet Connectivity</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                        </div>
                                        <div className="flex items-end justify-between">
                                            <div className="text-xl md:text-2xl font-black">99.8%</div>
                                            <div className="h-6 md:h-8 w-12 md:w-16 flex items-end space-x-0.5">
                                                {[...Array(6)].map((_, k) => (
                                                    <div
                                                        key={k}
                                                        className="flex-1 bg-sky-500/40 rounded-t-[1px]"
                                                        style={{ height: mounted ? `${40 + Math.random() * 60}%` : '60%' }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Critical Tasks */}
                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pending Approvals</h4>
                                        {[
                                            { t: "Approve Mombasa Warehouse PO", time: "High Priority" },
                                            { t: "Quarterly VAT Return Audit", time: "Processing" }
                                        ].map((task, i) => (
                                            <div key={i} className="flex items-center space-x-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
                                                    <Circle className={`w-2.5 h-2.5 ${i === 0 ? 'text-amber-500' : 'text-sky-500'} fill-current`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[11px] font-bold text-slate-800 truncate">{task.t}</p>
                                                    <p className="text-[9px] font-medium text-slate-400">{task.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-4 flex justify-center items-end pb-2">
                                    <div className="w-16 h-1 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
