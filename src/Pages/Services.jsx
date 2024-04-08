const Services = () => {
  return (
    <div>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')`,
        }}
      >
        <div className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 lg:h-8 xl:h-10 w-6 lg:w-8 xl:w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                ></path>
              </svg>
              <span className="text-xl lg:text-2xl xl:text-3xl font-bold">
                MediCheck
              </span>
            </div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">
              Coming Soon
            </h1>
            <div className="flex flex-col items-center space-y-4 mt-24">
              <p className="text-gray-300 uppercase text-sm">
                Notify me when its ready
              </p>
              <form className="w-full flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-72 p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded-tl rounded-bl text-sm"
                  placeholder="Email"
                  autoComplete="off"
                />
                <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 text-gray-100 border border-blue-600 rounded-tr rounded-br text-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/nowraofficials"
                  title="Facebook"
                >
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/><stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/><stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
