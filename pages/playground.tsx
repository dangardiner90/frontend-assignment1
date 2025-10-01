import React from "react";
import Link from "next/link";
import Counter from "../components/counter";
import ToggleMessage from "../components/toggler";


{/* This page was created in order to showcase multiple components,
    in this case, a basic increment/decrement counter and a toggleable message */}


export default function Playground() {
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
                    React Playground
                </h1>
            </div>
            <div className="p-10 max-w-2x1 mx-35 bg-green-950 shadow-md">

                {/* Utilizing a basic increment/decrement counter, with a set initial value of 0:*/}

                <h2 className="text-xl">Here is an example of a counter:</h2>
                <Counter initialValue={0}></Counter>
                <br />

                {/* Utilizing a button in order to display/hide text at the push of a button:*/}

                <h2 className="text-xl">Here is an example of toggleable text:</h2>
                <ToggleMessage message={"This text will appear or disappear depending on the button click!"}></ToggleMessage>
            </div>
            <footer className="text-center text-xs mt-6">Daniel Gardiner 2025</footer>
        </>
    )
}