import React from "react";
// Link works well for making simple navbars
import Link from "next/link"
import UserDisplay from "../components/userdisplay"

export default function Home() {
  return (
  
    <>
      <div className="p-10 max-w-2xl mx-auto bg-green-950 shadow-md">

        {/* A simple navbar allowing for navigation between the pages:
        I added some basic CSS using Tailwind for styling*/}

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
          A basic React.js page by: Daniel
        </h1>
      </div>

          {/* This area will be used for a little conditional rendering,
          asking the user for input in order to create a personalized welcome message*/}

      <div className="p-10 max-w-2x1 mx-35 bg-green-950 shadow-md">
        <div className="mt-20 mr-6 ml-6">
          <UserDisplay />
          <br />
          <p>This page will showcase various React.js functions such as:</p>
          <br />
          <ul>
            <li>∘ Components</li>
            <li>∘ Event Handling</li>
            <li>∘ Conditional Rendering</li>
            <li>∘ Basic CSS</li>
          </ul>

        </div>
      </div>

      {/* Just a little footer to make it look more professional, if basic */}

      <footer className="text-center text-xs mt-6">Daniel Gardiner 2025</footer>
    </>
  );
}
