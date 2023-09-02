/* eslint-disable no-undef */
import BehindTheApp from "./Components/BehindTheApp";
import NavBar from "./Components/NavBar";

import "./App.css";
import backgroundImage from "./assets/background-photo.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        // minWidth: "100vw",
      }}
    >
      <NavBar />
      <BehindTheApp />
    </div>
  );
}

export default App;
