import check from "../assets/check.png";
import { useState } from "react";

export default function Confirmation() {
  const [place, setPlace] = useState(2);
  const [wait, setWait] = useState("65 - 85");

  return (
    <>
      <div
        style={{ backgroundColor: "black", height: "100%" }}
        className="animate-fadeIn"
      >
        <div className="flex flex-col items-center justify-center pt-15 text-center animate-fadeIn">
          <img src={check} alt="check mark" />

          <div className="flex flex-row items-center justify-center pt-5 ">
            <h1 className="text-center lg:text-4xl text-4xl text-zinc-200 font-bold pb-5">
              Thanks for <span className="text-colr"> Waiting!</span>
            </h1>
          </div>

          <p className="text-zinc-200 font-medium">
            Stay on This page to get notified when it&apos;s your turn.
          </p>
          <p className="text-zinc-200 font-medium">
            We will also shoot you a text!
          </p>
        </div>
        <div className="flex flex-row items-center justify-center pt-10 space-x-4 animate-fadeIn">
          <div className="flex flex-col items-center">
            <p className="text-zinc-200 font-medium">Place in Line</p>
            <span className=" font-semibold text-lg">{place}</span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-zinc-200 font-medium">Estimated Wait:</p>
            <span className="font-semibold text-lg">{wait} min</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center pt-5 animate-fadeIn">
          <hr />
          <p className="text-zinc-200 font-medium">Name</p>
          <p className=" font-medium">...</p>
          <p className="text-zinc-200 font-medium">Phone</p>
          <p className=" font-medium">...</p>
          <p className="text-zinc-200 font-medium">Staff</p>
          <p className=" font-medium">...</p>
          <p className="text-zinc-200 font-medium">Services</p>
          <p className=" font-medium">....</p>
          <button
            type="button"
            className="mt-10 animate-fadeIn px-5 py-3 text-base font-medium inline-flex rounded-lg btn text-white text-center bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80"
          >
            Leave Waitlist
          </button>
        </div>
      </div>
    </>
  );
}
