/* eslint-disable no-undef */
import logo from "../assets/logo.png";
import tiktok from "../assets/tiktok.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import snapchat from "../assets/snapchat.png";

export default function NavBar() {
  return (
    <div className="navbar animate-fadeIn">
      <div className="flex-1">
        <a href="https://behind-the-cutz.netlify.app/">
          <img width={"80px"} src={logo} alt="behind the cut logo" />
        </a>
      </div>
      <div className="flex-none">
        <a
          href="https://www.tiktok.com/@behindthecutz?_t=8fHUTLxwxeF&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mr-3 w-30 sm:w-48" src={tiktok} alt="Tiktok" />
        </a>
        <a
          href="https://instagram.com/behindthecutz?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mr-3 w-30 sm:w-48" src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://t.snapchat.com/8CMyFjNk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mr-3 w-30 sm:w-48" src={snapchat} alt="Snapchat" />
        </a>
        <a
          href="https://youtube.com/@behindthecutz3480?si=AylTgMJEYddqajHX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mr-3 w-30 sm:w-48" src={youtube} alt="YouTube" />
        </a>
      </div>
    </div>
  );
}
