import { useState } from "react";
import Waitlist from "./Waitlist";
import map from "../assets/map.png";

export default function BehindTheApp() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return show ? (
    <Waitlist />
  ) : (
    <div className="animate-fadeIn">
      <h1 className="text-center lg:text-7xl text-4xl text-zinc-200 font-bold pt-20">
        Behind The <span className="text-colr">Cutz</span>
      </h1>

      <div className="text-center" style={{ paddingTop: "50px" }}>
        <h2 className="lg:text-3xl text-2xl text-center pb-2">
          Business <span className="text-colr">Hours</span>
        </h2>
        <p className="text-lg md:text-xl font-bold">
          Mon: <span className="text-colr">Closed</span>
        </p>
        <p className="text-lg md:text-xl font-bold">
          Tue-Sat: <span className="text-colr">7am-6pm</span>
        </p>
        <p className="text-lg md:text-xl pb-5 font-bold">
          Sun: <span className="text-colr">7am-3pm </span>
        </p>
        <a href="tel:7816051426" className="text-lg md:text-xl font-bold pb-2">
          Phone: <span className="text-colr">(781) 605-1426</span>
        </a>

        <a
          href="https://maps.apple.com/?address=509+Main+St%2C+Malden%2C+MA++02148%2C+United+States&auid=16012953759820253414&ll=42.428257%2C-71.066889&lsp=9902&q=Fen+Fen%27s+Barber+Shop&t=m"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center">
            <address className="text-lg md:text-3xl  font-bold">
              509 Main St, <span className="text-colr">Malden</span>, MA 02148
            </address>
            <img className="mr-3 w-30 sm:w-48" src={map} alt="map" />
          </div>
        </a>

        <p className="text-center lg:text-4xl  text-zinc-200 font-extralight pb-10 pt-10">
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
