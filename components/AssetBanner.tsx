"use client";

import { motion } from "framer-motion";

export default function AssetBanner() {
    return (
        <section className="relative py-16 bg-[#002a54] overflow-hidden text-center">
            {/* Background Decorative Shapes */}
            {/* Left Shape */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 md:w-32 md:h-64 bg-sky-300/30 rounded-r-3xl -ml-4 z-0"
            ></motion.div>

            {/* Right Shape (Abstract Circles) */}
            <div className="absolute right-0 top-0 h-full w-1/4 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute right-4 top-1/4 w-32 h-32 md:w-48 md:h-48 border-[24px] border-sky-600/20 rounded-full blur-sm"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, -10, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -right-12 top-1/2 w-48 h-48 md:w-64 md:h-64 border-[32px] border-sky-400/10 rounded-full"
                ></motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center"
            >
                <p className="text-lg md:text-xl text-white font-medium max-w-3xl">
                    The Technology Suite Just Got Even Better. A Complete Range of AI, Software, and Automation Solutions for Smarter Business and Organizational Control.
                </p>
            </motion.div>
        </section>
    );
}

