import { useState } from "react";

// A basic increment/decrement counter component

// Allowing the initial value to be set on calling the function:
export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="mt-4">
      <p>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-3 py-1 bg-blue-500 text-white mr-2"
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        className="px-3 py-1 bg-red-500 text-white"
      >
        Decrement
      </button>
    </div>
  );
}
