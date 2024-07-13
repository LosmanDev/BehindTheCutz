import Image from 'next/image';
import logo from '../../public/assets/logo.png';
export default function Navbar() {
  return (
    <div className="navbar bg-ghost">
      <div className="navbar-start">
        <a href="/">
          <Image
            src={logo}
            alt="logo for behind the cuts is a movie clipboard with the barber logo"
            className="h-16 w-20"
          />
        </a>
      </div>

      <div className="navbar-end gap-2">
        <a href="https://t.snapchat.com/8CMyFjNk" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="-2 -2.5 24 24"
          >
            <path
              fill="#f7f203"
              d="M15.899 7.75c.332-.075.5-.129.501-.164a3.66 3.66 0 0 0 .1-.045a.969.969 0 0 1 .406-.082c.152 0 .304.028.435.082c.391.139.636.424.642.744c.003.131-.037.334-.242.545c-.173.176-.433.332-.798.476a4.94 4.94 0 0 1-.292.099c-.37.117-.93.295-1.076.637c-.075.174-.043.403.105.703c.048.116 1.253 2.855 3.927 3.295a.465.465 0 0 1 .391.485a.594.594 0 0 1-.05.206c-.096.223-.317.411-.676.578c-.44.203-1.097.373-1.956.508c-.043.083-.09.295-.119.428a6.624 6.624 0 0 1-.115.465c-.071.244-.259.384-.536.384c-.116 0-.266-.02-.46-.057a5.256 5.256 0 0 0-1.049-.11c-.244 0-.496.02-.75.063c-.49.081-.912.379-1.402.724c-.715.503-1.525 1.075-2.763 1.075a2.43 2.43 0 0 1-.144-.004a1.37 1.37 0 0 1-.101.004c-1.237 0-2.047-.572-2.762-1.077c-.49-.345-.912-.642-1.402-.723a4.558 4.558 0 0 0-.75-.064c-.438 0-.791.069-1.048.119c-.177.033-.328.063-.46.063c-.35 0-.484-.212-.537-.39a6.207 6.207 0 0 1-.115-.468c-.031-.142-.076-.348-.12-.43c-.858-.134-1.516-.305-1.956-.51c-.36-.165-.581-.354-.677-.58a.592.592 0 0 1-.05-.203a.467.467 0 0 1 .392-.487a4.471 4.471 0 0 0 1.706-.664a5.63 5.63 0 0 0 1.215-1.073a6.63 6.63 0 0 0 1.018-1.58c.136-.277.169-.506.095-.68c-.146-.342-.708-.52-1.078-.637c-.106-.034-.207-.065-.292-.099c-.324-.127-.574-.271-.745-.426C2 8.597 2 8.319 2.026 8.179c.041-.214.191-.405.424-.542a1.2 1.2 0 0 1 .598-.167a.8.8 0 0 1 .339.07c.072.034.143.064.212.09c.002.032.14.072.414.123c.093.017.182.026.265.026a.801.801 0 0 0 .328-.062l-.028-.446c-.085-1.352-.191-3.036.257-4.035A5.449 5.449 0 0 1 6.053 1.49c.423-.4.913-.724 1.459-.964A5.806 5.806 0 0 1 9.798.042l.394-.003c.445 0 1.333.062 2.284.482a5.13 5.13 0 0 1 1.464.965a5.431 5.431 0 0 1 1.223 1.751c.448 1 .342 2.684.255 4.038l-.003.057c-.01.133-.017.262-.024.387a.765.765 0 0 0 .276.06c.074-.004.151-.014.232-.03z"
            />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@behindthecutz?_t=8fHUTLxwxeF&_r=1"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 290"
          >
            <path
              fill="#ff004f"
              d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"
            />
            <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" />
            <path
              fill="#00f2ea"
              d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"
            />
          </svg>
        </a>
        <a
          href="https://instagram.com/behindthecutz?igshid=MzRlODBiNWFlZA%3D%3D"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 256 256"
          >
            <g fill="none">
              <rect
                width="256"
                height="256"
                fill="url(#skillIconsInstagram0)"
                rx="60"
              />
              <rect
                width="256"
                height="256"
                fill="url(#skillIconsInstagram1)"
                rx="60"
              />
              <path
                fill="#fff"
                d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
              />
              <defs>
                <radialGradient
                  id="skillIconsInstagram0"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fd5" />
                  <stop offset=".1" stopColor="#fd5" />
                  <stop offset=".5" stopColor="#ff543e" />
                  <stop offset="1" stopColor="#c837ab" />
                </radialGradient>
                <radialGradient
                  id="skillIconsInstagram1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3771c8" />
                  <stop offset=".128" stopColor="#3771c8" />
                  <stop offset="1" stopColor="#60f" stopOpacity="0" />
                </radialGradient>
              </defs>
            </g>
          </svg>
        </a>
        <a
          href="https://youtube.com/@behindthecutz3480?si=AylTgMJEYddqajHX"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 256 180"
          >
            <path
              fill="#f00"
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
            />
            <path
              fill="#fff"
              d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
