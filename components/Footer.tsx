"use client";

export default function Footer() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
                // Update hash without jumping
                window.history.replaceState(null, "", href);
            }
        }
    };

    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Info */}
                    <div className="col-span-2">
                        <p className="text-slate-500 max-w-xs leading-relaxed">
                            Leading with cutting-edge software and AI solutions, building lasting trust through transparent, forward-thinking collaboration.
                        </p>
                        <p className="mt-4 text-sm text-slate-400">
                            AACC, Waiyaki Way, Westlands,<br />Nairobi, Kenya
                        </p>
                    </div>

                    {/* Balanced Company Links (3 + 2) */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3">
                        <h4 className="text-sm font-bold text-[#1e3a5f] uppercase tracking-widest mb-6">Company</h4>
                        <div className="grid grid-cols-2 gap-x-12">
                            <ul className="space-y-4 text-slate-500 text-sm">
                                <li><a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-[#1e3a5f] transition-colors">Home</a></li>
                                <li><a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-[#1e3a5f] transition-colors">About</a></li>
                                <li><a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-[#1e3a5f] transition-colors">Services</a></li>
                            </ul>
                            <ul className="space-y-4 text-slate-500 text-sm">
                                <li><a href="#solutions" onClick={(e) => handleScroll(e, "#solutions")} className="hover:text-[#1e3a5f] transition-colors">Solutions</a></li>
                                <li><a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-[#1e3a5f] transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
                    <div className="flex space-x-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-[#1e3a5f] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#1e3a5f] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
