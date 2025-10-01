import React from "react";
import Link from "next/link";
import UserForm from "../components/contactform";

{/* This page will display a basic form with some CSS styling*/}

export default function Form() {
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
                    Contact Me
                </h1>
            </div>
            <div className="p-10 max-w-2x1 mx-35 bg-green-950 shadow-md">
                <UserForm />
            </div>
<footer className="text-center text-xs mt-6">Daniel Gardiner 2025</footer>
        </>
    )
}