const jobs = [
    {
        title: "Java Backend Developer",
        company: "TechNova",
        location: "Bangalore, India",
        type: "Full-time",
        salary: "₹8L - ₹14L",
    },
    {
        title: "Frontend Developer",
        company: "PixelLabs",
        location: "Remote",
        type: "Full-time",
        salary: "₹6L - ₹12L",
    },
    {
        title: "Software Engineer",
        company: "CloudWorks",
        location: "Hyderabad, India",
        type: "Full-time",
        salary: "₹10L - ₹18L",
    },
];

function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="relative overflow-hidden px-6 py-24">
                <div className="mx-auto max-w-5xl text-center">

                    <p className="mb-4 text-sm font-medium text-blue-500">
                        YOUR NEXT OPPORTUNITY STARTS HERE
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                        Find work that
                        <span className="text-blue-500"> moves you forward.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
                        Discover thousands of opportunities from companies looking for
                        people like you.
                    </p>

                    {/* Search */}
                    <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-2xl border border-gray-800 bg-[#111827] p-3 md:flex-row">

                        <input
                            type="text"
                            placeholder="Job title, skills or keywords"
                            className="flex-1 rounded-xl bg-[#0B0F19] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="text"
                            placeholder="Location"
                            className="flex-1 rounded-xl bg-[#0B0F19] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500"
                        />

                        <button className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-500">
                            Search Jobs
                        </button>
                    </div>
                </div>
            </section>

            {/* Jobs */}
            <section className="mx-auto max-w-7xl px-6 pb-20">

                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white">
                        Featured Jobs
                    </h2>

                    <p className="mt-2 text-gray-400">
                        Explore opportunities from growing companies.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <div
                            key={job.title}
                            className="rounded-2xl border border-gray-800 bg-[#111827] p-6 transition hover:-translate-y-1 hover:border-gray-700"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg font-bold text-blue-500">
                                {job.company.charAt(0)}
                            </div>

                            <h3 className="text-lg font-semibold text-white">
                                {job.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                {job.company}
                            </p>

                            <div className="mt-5 space-y-2 text-sm text-gray-400">
                                <p>📍 {job.location}</p>
                                <p>💼 {job.type}</p>
                                <p>💰 {job.salary}</p>
                            </div>

                            <button className="mt-6 w-full rounded-lg border border-gray-700 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                                View Job
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;