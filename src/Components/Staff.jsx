import { useState } from "react";
import Service from "./Service";

export default function Staff() {
  const [selectedOption, setSelectedOption] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return show ? (
    <Service />
  ) : (
    <>
      <div className="flex flex-col items-center justify-center animate-slideIn">
        <h1 className="text-center lg:text-5xl text-4xl text-zinc-200 font-bold animate-fadeIn pb-10 pt-20">
          Select<span className="text-colr"> Staff</span>
        </h1>
        <div
          style={{ backgroundColor: "#1D232A" }}
          className="px-5 mb-5 border border-primary rounded-lg animate-fadeIn"
        >
          <p className="pb-5 font-medium text-zinc-200 pt-4">
            First Available
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary align-middle ml-2"
              value="firstAvailable"
              checked={selectedOption === "firstAvailable"}
              onChange={handleChange}
            />
          </p>
        </div>

        <div
          style={{ backgroundColor: "#1D232A" }}
          className="px-10 mb-5 border border-primary rounded-lg animate-fadeIn"
        >
          <p className="pb-5 font-medium text-zinc-200 pt-3">
            Acxonse
            <input
              type="radio"
              name="radio-2"
              className="radio radio-primary align-middle ml-2"
              value="acxonse"
              checked={selectedOption === "acxonse"}
              onChange={handleChange}
            />
          </p>
        </div>

        <button
          onClick={handleClick}
          type="button"
          className="mt-10 animate-fadeIn px-5 py-3 text-base font-medium inline-flex mr-2 mb-2 rounded-lg btn text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
        >
          Next
        </button>
      </div>
    </>
  );
}
