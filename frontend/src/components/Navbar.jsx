function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <h1 className="text-2xl font-bold text-blue-600">
                    HireFlow
                </h1>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Find Jobs
                    </a>

                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        Companies
                    </a>

                    <button className="rounded-lg border px-4 py-2">
                        Sign In
                    </button>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                        Register
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar