"use client";

export default function AssetBanner() {
    return (
        <section className="relative py-16 bg-[#002a54] overflow-hidden text-center">
            {/* Background Decorative Shapes */}
            {/* Left Shape */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 md:w-32 md:h-64 bg-sky-300/40 rounded-r-3xl -ml-4 z-0"></div>

            {/* Right Shape (Abstract Circles) */}
            <div className="absolute right-0 top-0 h-full w-1/4 z-0">
                <div className="absolute right-4 top-1/4 w-32 h-32 md:w-48 md:h-48 border-[24px] border-sky-600/20 rounded-full blur-sm"></div>
                <div className="absolute -right-12 top-1/2 w-48 h-48 md:w-64 md:h-64 border-[32px] border-sky-400/10 rounded-full"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                <p className="text-lg md:text-xl text-white font-medium max-w-3xl">
                    The Technology Suite Just Got Even Better. A Complete Range of AI, Software, and Automation Solutions for Smarter Business Control.
                </p>
            </div>
        </section>
    );
}
