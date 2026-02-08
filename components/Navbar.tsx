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
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center">
                        {/* Stylized S Logo */}
                        <svg
                            viewBox="0 0 40 40"
                            className="h-10 w-10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="20" cy="20" r="18" stroke="#1e3a5f" strokeWidth="2" fill="none" />
                            <path
                                d="M14 16c0-3 2.5-5 6-5s6 2 6 5c0 2.5-2 4-6 5.5-4 1.5-6 3-6 5.5 0 3 2.5 5 6 5s6-2 6-5"
                                stroke="url(#gradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                fill="none"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="14" y1="11" x2="26" y2="32">
                                    <stop offset="0%" stopColor="#1e3a5f" />
                                    <stop offset="50%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="#f97316" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight text-[#1e3a5f]">Solvix</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group flex items-center gap-1 text-sm font-medium text-[#1e3a5f] transition-colors hover:text-blue-600"
                        >
                            {item.label}
                            <svg
                                className="h-3 w-3 text-gray-400 transition-transform group-hover:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="hidden items-center gap-4 md:flex">
                    <Link
                        href="/contact"
                        className="rounded-full bg-[#1e3a5f] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2d4a6f] hover:shadow-lg"
                    >
                        Contact
                    </Link>
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#1e3a5f] transition-colors hover:bg-gray-50"
                        aria-label="Search"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
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
            {mobileMenuOpen && (
                <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center justify-between py-2 text-sm font-medium text-[#1e3a5f]"
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
                            className="mt-2 rounded-full bg-[#1e3a5f] px-6 py-3 text-center text-sm font-medium text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
