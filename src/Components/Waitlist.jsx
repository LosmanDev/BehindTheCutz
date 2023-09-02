import Staff from "./Staff";
import { useState } from "react";

export default function Waitlist() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return show ? (
    <Staff />
  ) : (
    <div className="flex flex-col items-center justify-center animate-slideIn">
      <h1 className="text-center lg:text-5xl text-4xl text-zinc-200 font-bold pt-20 mb-20 animate-fadeIn">
        Join The<span className="text-colr"> Waitlist</span>
      </h1>
      <input
        type="text"
        placeholder="Name"
        className="animate-fadeIn input input-bordered input-primary w-full max-w-xs mb-5"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className="animate-fadeIn input input-bordered input-primary w-full max-w-xs mb-20"
      />
      <button
        onClick={handleClick}
        type="button"
        className="animate-fadeIn px-5 py-3 text-base font-medium inline-flex mr-2 mb-2 rounded-lg btn text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
      >
        Submit
      </button>
    </div>
  );
}
