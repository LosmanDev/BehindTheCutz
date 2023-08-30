export default function BehindTheApp() {
  return (
    <div>
      <h1 className="text-center lg:text-7xl text-4xl text-zinc-200 font-bold pt-28">
        Behind The <span className="text-colr">Cutz</span>
      </h1>
      <div className="text-center" style={{ paddingTop: "400px" }}>
        <p className="text-center lg:text-4xl  text-zinc-200 font-extralight pb-10">
          Take your <span className="text-colr">confidence</span> to the next
          level
        </p>

        <button
          type="button"
          className="text-white text-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Join Waitlist
        </button>
      </div>
    </div>
  );
}
