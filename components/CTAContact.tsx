"use client";

export default function CTAContact() {
    return (
        <section id="contact" className="relative py-24 overflow-hidden bg-white">
            {/* Split Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none flex flex-col">
                <div className="h-24 bg-white" />
                <div className="flex-1 bg-[#cfe3f1]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl flex flex-col lg:flex-row min-h-[700px]">

                {/* Left Column: Follett Inspired */}
                <div className="lg:w-[40%] bg-[#0a1628] text-white p-12 lg:p-20 flex flex-col justify-center rounded-r-[4rem] lg:rounded-r-[6rem] relative z-10">
                    <div className="space-y-12">
                        {/* Custom Geometric Graphic placeholder */}
                        <div className="flex space-x-2">
                            <div className="w-12 h-12 bg-sky-500 rounded-full" />
                            <div className="w-12 h-12 bg-sky-600 rounded-tr-full" />
                            <div className="w-12 h-12 bg-sky-400 rotate-45" />
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Connecting with <br />Solvix Software
                            </h2>
                            <p className="mt-6 text-slate-300 text-lg">
                                Discover how our dedicated teams can support you by exploring the options below.
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
                                <p className="text-slate-400">hello@solvix.ai</p>
                                <p className="text-slate-400">+254 700 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Light Form Section */}
                <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-[#0f2a4a] mb-8">Get In Touch</h2>

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-8">
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter full name"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter email address"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Work Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="Enter phone number"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Organization *</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        required
                                        placeholder="Enter organization name"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-base font-bold text-[#0f2a4a]">Message</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Enter your answer"
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-all shadow-sm resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="px-12 py-4 bg-[#FBDB6B] text-[#0a1628] font-extrabold rounded-full hover:bg-[#f3cc4a] transition-all active:scale-95 shadow-lg text-lg"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
