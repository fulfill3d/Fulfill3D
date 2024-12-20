import React from "react";
import Link from "next/link";

const Home = () => {

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-between px-6 py-10 overflow-hidden">
            <div className="w-full h-full max-w-5xl text-center space-y-10 flex flex-col items-center justify-center">
                {/* Heading */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                    Welcome to Fulfill3D
                </h1>

                {/* Short Description */}
                <p className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                    Fulfill3D showcases modern full stack web solutions using technologies:
                    <br/>
                    <br/>
                    <span className="text-blue-600 font-bold text-3xl md:text-4xl">Azure</span>
                    <br/>
                    <span className="text-purple-600 font-bold text-3xl md:text-4xl">.NET</span>
                    <br/>
                    <span className="text-coral-600 font-bold text-3xl md:text-4xl">Next.js</span>
                    <br/>
                    <br/>
                    Explore the projects or read insightful posts to learn more about building scalable, modern web
                    applications.
                </p>

                {/* Call to Action (CTA) Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    {/* Projects Card */}
                    <Link
                        href='/projects'
                        className="cursor-pointer p-6 bg-indigo-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">View Projects</h2>
                        <p className="mt-2 text-lg">Explore the latest projects and solutions built with modern technologies.</p>
                    </Link>

                    {/* Posts Card */}
                    <Link
                        href="/posts"
                        className="cursor-pointer p-6 bg-teal-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">Read Posts</h2>
                        <p className="mt-2 text-lg">Read insightful posts on best practices, tips, and modern web solutions.</p>
                    </Link>
                </div>
            </div>

            {/* Link to Fulfill3D Frontend Repo */}
            <div className="text-gray-600 font-semibold text-sm mt-10">
                <a
                    href="https://github.com/fulfill3d/Fulfill3D_Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    View src of this app
                </a>
            </div>
        </div>
    );
}

export default Home;
