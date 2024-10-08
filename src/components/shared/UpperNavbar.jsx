const UpperNavbar = () => {
  return (
    <>
      <link rel="stylesheet" href="UpperNavbar.css" />
      <div className="border flex justify-center">
        <header className="bg-white shadow-lg h-10 hidden md:flex flex-row w-full">
          {/* 1st section */}
          <div className="basis-1/2">
            <ul className="flex items-center justify-start h-10 ml-10">
              <li className="hover:text-[#58A745]">
                <a
                  href="/"
                  className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
                >
                  <div>
                    <svg
                      className="h-5 opacity-9 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 368.666 368.666"
                    >
                      <path
                        d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515
                      c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51
                      c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355
                      c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552
                      c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297
                      C313.629,178.709,304.004,206.393,285.795,229.355z"
                      />
                      <path
                        d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374
                      S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374
                      s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 font-bold">Rajbari-7700, Rajbari</div>
                </a>
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.1082471882332!2d89.64845687402703!3d23.759334688435754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe41d9033ca26d%3A0x33174c27edf0899a!2sBeradanga%20Rd%20No.%202%2C%20Rajbari!5e1!3m2!1sen!2sbd!4v1712573092600!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border:"0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}
              </li>
              <li className="hover:text-[#58A745]">
                <a
                  href="/about"
                  className="flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
                >
                  <div>
                    <svg
                      className="h-5 opacity-9 ml-2 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          d="M385 4396 c-69 -22 -127 -56 -183 -109 -63 -61 -97 -115 -123 -198
              -18 -58 -19 -110 -19 -1104 0 -996 1 -1046 19 -1104 49 -158 186 -280 350
              -311 35 -6 496 -10 1306 -10 l1252 0 22 -81 c46 -172 146 -344 273 -470 356
              -353 908 -405 1323 -126 90 60 220 192 281 283 317 475 199 1114 -266 1440
              -114 80 -274 150 -387 169 l-43 7 0 603 c0 368 -4 623 -10 656 -31 164 -153
              301 -311 350 -59 18 -119 19 -1752 18 -1338 0 -1700 -3 -1732 -13z m3488 -160
              c20 -11 37 -22 36 -25 0 -3 -391 -364 -869 -801 -517 -473 -879 -797 -896
              -802 -16 -4 -39 -2 -58 7 -27 12 -1737 1575 -1744 1594 -1 5 19 18 45 29 l48
              21 1700 -2 c1659 -2 1701 -2 1738 -21z m-3014 -706 c325 -299 591 -547 591
              -550 0 -14 -1202 -1110 -1210 -1105 -6 3 -17 30 -25 59 -23 77 -18 2083 5
              2133 12 28 17 31 31 20 10 -6 283 -257 608 -557z m3179 -107 l3 -623 -43 0
              c-76 -1 -241 -28 -313 -53 -126 -43 -278 -129 -352 -200 l-32 -30 -43 38
              c-264 237 -467 430 -461 436 4 4 278 255 608 558 l600 551 15 -28 c13 -23 15
              -116 18 -649z m-1048 -829 c113 -104 204 -192 203 -196 -2 -5 -18 -29 -37 -55
              -97 -136 -160 -317 -179 -511 l-11 -122 -1271 2 c-1268 3 -1270 3 -1309 24
              l-39 21 596 546 c328 301 599 551 602 557 3 5 13 10 21 10 8 0 106 -84 217
              -186 111 -103 220 -195 242 -205 53 -24 147 -25 200 0 22 10 134 104 250 210
              l209 191 51 -48 c27 -27 142 -134 255 -238z m1250 26 c320 -77 578 -338 661
              -670 21 -83 18 -337 -5 -420 -99 -360 -384 -614 -748 -670 -94 -14 -267 0
              -376 30 -295 82 -531 319 -623 625 -29 95 -37 311 -16 410 60 282 250 520 513
              641 65 30 181 64 269 78 60 9 242 -4 325 -24z"
                        />
                        <path
                          d="M3860 2245 c-205 -42 -345 -141 -431 -305 -21 -39 -24 -59 -24 -150
              0 -98 2 -110 32 -171 56 -114 191 -222 336 -269 35 -11 43 -20 79 -95 21 -45
              52 -95 68 -110 50 -48 134 -51 191 -6 13 10 44 60 69 110 35 72 50 93 70 98
              102 25 242 119 306 205 164 223 74 496 -206 631 -55 26 -128 52 -172 61 -92
              19 -228 19 -318 1z m319 -150 c240 -57 369 -244 285 -413 -45 -90 -136 -156
              -269 -196 l-70 -21 -50 -103 c-27 -56 -52 -102 -55 -102 -3 0 -26 41 -50 91
              -25 49 -51 96 -60 104 -8 7 -38 20 -66 28 -121 36 -234 119 -274 203 -78 161
              56 352 286 408 79 19 243 19 323 1z"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="ml-2 font-bold">nowraofficial@gmail.com</div>
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd section */}
          <div className="basis-1/2">
            <div className="flex items-center px-4 lg:px-6 xl:px-8 justify-end">
              <button className="inline-flex items-center px-4 py-1.5 mt-0.5 hover:text-[#58A745] transition-all text-gray-700 text-m font-bold rounded-md">
                Language
                <svg
                  className="h-4 opacity-9 svg-inline--fa fa-chevron-down fa-w-14 fa-7x"
                  fill="#58A745"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_30_"
                    d="M154.394,325.606C157.322,328.535,161.161,330,165,330s7.678-1.465,10.607-4.394l75-75
              c5.858-5.857,5.858-15.355,0-21.213c-5.858-5.857-15.356-5.857-21.213,0L180,278.787V15c0-8.284-6.716-15-15-15
              c-8.284,0-15,6.716-15,15v263.787l-49.394-49.394c-5.858-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213
              L154.394,325.606z"
                  />
                </svg>
              </button>
              <ul className="col-span-2 flex justify-start gap-3 lg:col-span-4 lg:justify-end mr-10">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-[#58A745]"
                  >
                    <span className="sr-only">Facebook</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-[#58A745]"
                  >
                    <span className="sr-only">Instagram</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-[#58A745]"
                  >
                    <span className="sr-only">Twitter</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-[#58A745]"
                  >
                    <span className="sr-only">GitHub</span>

                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default UpperNavbar;
