function Navbar() {
    return (
        <nav className="border-b border-gray-800 bg-[#0B0F19]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-tight">
                    <span className="text-white">Hire</span>
                    <span className="text-blue-500">Flow</span>
                </div>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Find Jobs
                    </a>

                    <a
                        href="#"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        Companies
                    </a>

                    <a
                        href="#"
                        className="text-sm text-gray-300 transition hover:text-white"
                    >
                        For Employers
                    </a>
                </div>

                {/* Auth */}
                <div className="flex items-center gap-3">
                    <button className="rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white">
                        Sign In
                    </button>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;