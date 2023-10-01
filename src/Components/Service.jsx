import beard from "../assets/beard.png";
import haircut from "../assets/haircut.png";
import taper from "../assets/taper.png";
import blade from "../assets/blade.png";
import kid from "../assets/kid.png";
import brow from "../assets/brow.png";
import Confirmation from "./Confirmation";
import { useState } from "react";

export default function Service() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return show ? (
    <Confirmation />
  ) : (
    <>
      <div className="flex flex-row items-center justify-center animate-fadeDown pt-20 pb-8">
        <h1 className="animate-fadeIn text-center lg:text-7xl text-3xl text-zinc-200 font-bold  pr-5 ">
          Select <span className="text-colr"> Service</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center animate-fadeDown mb-28">
        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={brow} alt="Eyebrows" />
          <p className="font-medium text-zinc-200 p-2">Eyebrows</p>
          <span className="italic p-2">$15.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2"
          />
        </div>

        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg  text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={taper} alt="shaver" />
          <p className="font-medium text-zinc-200 p-2">Fade/taper</p>
          <span className="italic p-2">$25.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2"
          />
        </div>

        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg  text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={beard} alt="beard" />
          <p className="font-medium text-zinc-200 p-2">Haircut + Beard</p>
          <span className="italic p-2">$30.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2"
          />
        </div>

        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg  text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={haircut} alt="clippers" />
          <p className="font-medium text-zinc-200 p-2">
            Haircut + beard + eyebrows
          </p>
          <span className="italic p-2">$35.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2 m-2"
          />
        </div>
        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg  text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={kid} alt="kid" />
          <p className="font-medium text-zinc-200 p-2">Kid&apos;s haircut</p>
          <span className="italic p-2">$15.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2"
          />
        </div>
        <div
          style={{ backgroundColor: "#1D232A" }}
          className="animate-fadeIn flex flex-row items-center justify-center border border-primary rounded-lg  text-center w-full max-w-xs mb-5"
        >
          <img className="p-2" src={blade} alt="blade" />
          <p className="font-medium text-zinc-200 p-2">Lineup</p>
          <span className="italic p-2">$15.00</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary align-middle p-2"
          />
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
