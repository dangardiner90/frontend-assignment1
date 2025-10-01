import { useState } from "react";

// This component will act as a basic contact form with fields for name, email and a message


export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Preventing a blank submission:
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="mt-6 p-6 bg-green-900 max-w-lg mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-200">Contact Us</h2>
            {/* Using a ternary operator to handle submission data: */}
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            className="w-full border border-gray-300 p-1 focus:outline focus:outline-offset-2 focus:outline-blue-200"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 p-1 focus:outline focus:outline-offset-2 focus:outline-blue-200"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            name="message"
                            placeholder="Leave a message!"
                            className="w-full border border-gray-300 p-1 focus:outline focus:outline-offset-2 focus:outline-blue-200"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        Send Message
                    </button>
                </form>
            ) : (
                <div className="text-center text-green-700 font-medium">
                    Thank you for the message, {formData.name}. You will receive a message at {formData.email}.
                </div>
            )}
        </div>
    );
}