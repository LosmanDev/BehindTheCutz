/* eslint-disable no-undef */
import BehindTheApp from "./BehindTheApp";
import NavBar from "./NavBar";
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
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />
      <BehindTheApp />
    </div>
  );
}

export default App;
