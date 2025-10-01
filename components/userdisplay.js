import React, { useState } from 'react';

{/* This is the component for the main page username display */}

function UserDisplay() {
    // Variables for getting and setting the username: 
    const [usernameInput, setUsernameInput] = useState('');
    // Variables for getting and setting the username on display: 
    const [displayedUsername, setDisplayedUsername] = useState('');
    // Establishing that the username setting will be the event targeted:
    const handleInputChange = (event) => {
        setUsernameInput(event.target.value);
    };
    // Once the username is submitted:
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default
        setDisplayedUsername(usernameInput); // Update username
        setUsernameInput(''); // Clear input
    };

    return (
        <div className="bg-green-900 rounded p-5">
            <form onSubmit={handleSubmit} className="underline">
                <label htmlFor="username">Enter your name:</label>
                <input
                    type="text"
                    id="username"
                    value={usernameInput}
                    onChange={handleInputChange}
                    placeholder="Input here"
                    className="p-1"
                />
                <button type="submit" className="bg-gray-900 rounded ml-2 p-2.5 hover:cursor-pointer">Submit</button>
            </form>
            {/* Displaying the input:*/}
            {displayedUsername && (
                <h2>Hello {displayedUsername}, and welcome!</h2>
            )}
        </div>
    );
}

export default UserDisplay;