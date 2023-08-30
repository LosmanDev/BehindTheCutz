import { useState } from "react";
import Waitlist from "./Waitlist";

export default function BehindTheApp() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return show ? (
    <Waitlist />
  ) : (
    <div className="animate-fadeIn">
      <h1 className="text-center lg:text-7xl text-4xl text-zinc-200 font-bold pt-28">
        Behind The <span className="text-colr">Cutz</span>
      </h1>
      <div className="text-center" style={{ paddingTop: "250px" }}>
        <p className="text-center lg:text-4xl  text-zinc-200 font-extralight pb-10">
          Take your <span className="text-colr">confidence</span> to the next
          level.
        </p>

        <button
          onClick={handleClick}
          type="button"
          className="px-5 py-3 text-base font-medium inline-flex mr-2 mb-2 rounded-lg  text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
        >
          Join Waitlist
        </button>
        {show && <Waitlist />}
      </div>
    </div>
  );
}
