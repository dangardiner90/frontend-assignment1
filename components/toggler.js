import { useState } from "react";

export default function ToggleMessage({ message }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className="mt-4">
      <button
        onClick={() => setVisible(!visible)}
        className="px-3 py-1 bg-blue-500 text-white"
      >
        Appear/Disappear
      </button>
      {visible && <p className="mt-2">{message}</p>}
    </div>
  );
}