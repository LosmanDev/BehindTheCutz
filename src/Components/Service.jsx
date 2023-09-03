import barber from "../assets/barber.png";
import beard from "../assets/beard.png";
import haircut from "../assets/haircut.png";
import taper from "../assets/taper.png";
import blade from "../assets/blade.png";
import kid from "../assets/kid.png";
import brow from "../assets/brow.png";

export default function Service() {
  return (
    <>
      <div>
        <div className="flex flex-wrap flex-row items-center justify-center animate-slideIn pt-20 pb-8">
          <h1 className="text-center lg:text-5xl text-4xl text-zinc-200 font-bold animate-fadeIn pr-5 ">
            Services
          </h1>
          <img
            className="align-middle"
            width={"50px"}
            src={barber}
            alt="Barbershop pole icon"
          />
        </div>

        <div className="overflow-x-auto text-center animate-slideIn h-screen">
          <table className="table animate-fadeIn">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>Select</label>
                </th>
                <th>Service</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={brow}
                          alt="Eyebrow"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Eyebrows</div>
                      <div className="text-sm opacity-50 font-bold">$15.00</div>
                    </div>
                  </div>
                </td>
                <td>Eyebrows</td>
                <td>$15.00</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />{" "}
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={taper}
                          alt="taper"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Fade/taper</div>
                      <div className="text-sm opacity-50 font-bold">$25.00</div>
                    </div>
                  </div>
                </td>
                <td>Fade/taper</td>
                <td>$25.00</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={beard}
                          alt="beard"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Haircut + beard</div>
                      <div className="text-sm opacity-50 font-bold">$30.00</div>
                    </div>
                  </div>
                </td>
                <td>Haircut + beard</td>
                <td>30.00</td>
              </tr>
              {/* row 4 */}
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={haircut}
                          alt="Eyebrow"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        Haircut + beard + eyebrows
                      </div>
                      <div className="text-sm opacity-50 font-bold">$35.00</div>
                    </div>
                  </div>
                </td>
                <td>Haircut + beard + eyebrows</td>
                <td>$35.00</td>
              </tr>
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={kid}
                          alt="Eyebrow"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        Kid&apos;s haircut under 10 yrs
                      </div>
                      <div className="text-sm opacity-50 font-bold">$15.00</div>
                    </div>
                  </div>
                </td>
                <td>Kid&apos;s under 10 haircut </td>
                <td>$15.00</td>
              </tr>
              <tr>
                <th>
                  <label>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-primary text-center mb-2"
                      value="firstAvailable"
                      // checked={selectedOption === "firstAvailable"}
                      // onChange={handleChange}
                    />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          className="mr-5 align-middle"
                          src={blade}
                          alt="blade"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Lineup</div>
                      <div className="text-sm opacity-50 font-bold">$15.00</div>
                    </div>
                  </div>
                </td>
                <td>Lineup </td>
                <td>$15.00</td>
              </tr>
            </tbody>
          </table>
          <button
            // onClick={handleClick}
            type="button"
            className="mt-10 animate-fadeIn px-5 py-3 text-base font-medium inline-flex mr-2 mb-2 rounded-lg btn text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 sticky top-0"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
