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
          width="100px"
          className="mr-2 mb-2 btn rounded-lg text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
