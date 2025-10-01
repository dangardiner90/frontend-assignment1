import React from "react";
import Link from "next/link";


{/* This page is just for extra content in order to create some continuity*/}

export default function About() {
    return (
        <>
            <div className="p-10 max-w-2xl mx-auto bg-green-950 shadow-md">

                <nav className="mt-6">
                    <ul className="flex justify-center space-x-6">
                        <li>
                            <Link href="/" className="text-white-500 hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white-500 hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/playground" className="text-white-500 hover:underline">
                                React Playground
                            </Link>
                        </li>
                        <li>
                            <Link href="/form" className="text-white-500 hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <br />
                <h1 className="text-3xl font-bold text-center text-gray-300">
                    About Me
                </h1>
            </div>

            <div className="p-10 max-w-2x1 mx-35 bg-green-950 shadow-md">
                <div className="mt-20 mr-6 ml-6">

                    <p>I&apos;m a first year student in the Computer Programming & Analysis program at Humber Polytechnic.</p>
                    <br />
                    <p>In my current profession, I&apos;m a networking, audiovisual and security tech and programmer.</p>


                </div>
            </div>

        <footer className="text-center text-xs mt-6">Daniel Gardiner 2025</footer>

        </>

    );
}