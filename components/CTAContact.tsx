"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function CTAContact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setResult("Sending....");
        const formData = new FormData(form);
        formData.append("access_key", "23293999-fc0f-49dc-af2c-ce463c73f4c9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Submitted");
            form.reset();
            setTimeout(() => {
                setResult("");
            }, 7000);
        } else {
            setResult("Error! Please try again later.");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-white">
            {/* Split Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
                <div className="h-24 bg-white" />
                <div className="flex-1 bg-[#cfe3f1]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row min-h-[700px]">

                {/* Left Column: Follett Inspired */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-[40%] bg-[#0a1628] text-white p-12 lg:p-20 flex flex-col justify-center rounded-r-[4rem] lg:rounded-r-[6rem] relative z-10"
                >
                    <div className="space-y-12">
                        {/* Custom Geometric Graphic placeholder */}
                        <div className="flex space-x-2">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 bg-sky-500 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: [0, 90, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 bg-sky-600 rounded-tr-full"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-12 h-12 bg-sky-400 rotate-45"
                            />
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Let's build <br />something great.
                            </h2>
                            <p className="mt-6 text-slate-300 text-lg">
                                Ready to transform your operations? Our team is here to help you navigate the next step in your digital journey.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-white/10">
                            <div>
                                <h4 className="text-xl font-bold mb-2">Our Location</h4>
                                <p className="text-slate-400 leading-relaxed">
                                    AACC, Waiyaki Way,<br />
                                    Westlands, Nairobi, Kenya
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Direct Contact</h4>
                                <p className="text-slate-400">+254 768094564</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Light Form Section */}
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-[#0f2a4a] mb-8"
                        >
                            Get In Touch
                        </motion.h2>

                        <motion.form
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onSubmit={onSubmit}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Work Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Organization (Optional)</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        placeholder="Enter organization name"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your answer"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm resize-none"
                                    ></textarea>
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="flex items-center space-x-6 justify-end lg:justify-start">
                                <button
                                    type="submit"
                                    disabled={result === "Sending...."}
                                    className="px-12 py-4 bg-[#FBDB6B] text-[#0a1628] font-extrabold rounded-full hover:bg-[#f3cc4a] transition-all active:scale-95 shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    <span className="group-hover:tracking-wider transition-all duration-300">
                                        {result === "Sending...." ? "Submitting..." : "Submit"}
                                    </span>
                                </button>

                                {result === "Submitted" && (
                                    <span className="text-emerald-600 font-bold text-lg animate-in fade-in slide-in-from-left-4 duration-300">
                                        Submitted
                                    </span>
                                )}

                                {result.includes("Error") && (
                                    <span className="text-rose-500 font-bold">
                                        {result}
                                    </span>
                                )}
                            </motion.div>
                        </motion.form>
                    </div>
                </div>

            </div>
        </section>
    );
}
