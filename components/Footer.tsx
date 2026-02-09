"use client";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
                    {/* Logo & Info */}
                    <div className="col-span-2">
                        <span className="text-2xl font-bold text-[#0a1628]">Solvix</span>
                        <p className="mt-4 text-slate-500 max-w-xs leading-relaxed">
                            Leading with cutting-edge software and AI solutions, building lasting trust through transparent, forward-thinking collaboration.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-[#0a1628] uppercase tracking-widest mb-6">Company</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-sky-600 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Career</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-bold text-[#0a1628] uppercase tracking-widest mb-6">Resources</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Insights</a></li>
                        </ul>
                    </div>

                    {/* Social/Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-[#0a1628] uppercase tracking-widest mb-6">Connect</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-sky-600 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-sky-600 transition-colors">Twitter</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-400">© {new Date().getFullYear()} Solvix Technologies. All rights reserved.</p>
                    <div className="flex space-x-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-sky-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
