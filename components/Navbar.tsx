"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center">
                        {/* Stylized S Logo */}
                        <svg
                            viewBox="0 0 56 56"
                            className="h-14 w-14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="28" cy="28" r="26" stroke="#1e3a5f" strokeWidth="2" fill="none" />
                            <path
                                d="M20 22c0-4.2 3.5-7 8.4-7s8.4 2.8 8.4 7c0 3.5-2.8 5.6-8.4 7.7-5.6 2.1-8.4 4.2-8.4 7.7 0 4.2 3.5 7 8.4 7s8.4-2.8 8.4-7"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="20" y1="15" x2="36" y2="45">
                                    <stop offset="0%" stopColor="#1e3a5f" />
                                    <stop offset="50%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#f97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold tracking-tight text-[#1e3a5f]">Solvix</span>
                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-base font-medium text-gray-700 transition-colors hover:text-[#1e3a5f]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        href="/contact"
                        className="rounded bg-[#dc2626] px-6 py-2.5 text-base font-semibold text-white transition-all hover:bg-[#b91c1c] hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1e3a5f] md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {
                mobileMenuOpen && (
                    <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center justify-between py-2 text-base font-medium text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                    <svg
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="mt-2 rounded bg-[#dc2626] px-6 py-3 text-center text-base font-semibold text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
    );
}
