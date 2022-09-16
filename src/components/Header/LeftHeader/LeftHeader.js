const LeftHeader = () => {
  return (
    <div className="col lg:w-1/5 w-2/6 flex justify-center">
      <div className="flex">
        <button
          aria-label="Menu"
          className="items-center justify-center outline-none lg:hidden shrink-0 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="14"
            viewBox="0 0 25.567 18"
          >
            <g transform="translate(-776 -462)">
              <rect
                data-name="Rectangle 941"
                width="12.749"
                height="2.499"
                rx="1.25"
                transform="translate(776 462)"
                fill="currentColor"
              ></rect>
              <rect
                data-name="Rectangle 942"
                width="25.567"
                height="2.499"
                rx="1.25"
                transform="translate(776 469.75)"
                fill="currentColor"
              ></rect>
              <rect
                data-name="Rectangle 943"
                width="17.972"
                height="2.499"
                rx="1.25"
                transform="translate(776 477.501)"
                fill="currentColor"
              ></rect>
            </g>
          </svg>
        </button>
        <a
          className="inline-flex focus:outline-none -mt-1 lg:pr-16 pr-0"
          href="/"
        >
          <img
            className="max-h-full lg:min-h-80 max-w-full lg:min-w-100 py-8 lg:py-14 min-h-60 min-w-80"
            src="https://borobazar.vercel.app/assets/images/logo.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default LeftHeader;
