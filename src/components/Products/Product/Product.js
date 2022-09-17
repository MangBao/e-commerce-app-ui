const Product = ({ product }) => {
  return (
    <div className="col w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-full py-6">
      <div className="shadow-card bg-white rounded-md cursor-pointer overflow-hidden transition-all duration-300 relative">
        <div className="relative ">
          <div className="flex overflow-hidden max-w-[230px] mx-auto transition duration-200 ease-in-out transform group-hover:scale-105 relative">
            <span
              className="box-border inline-block overflow-hidden bg-none opacity-100 border-0 m-0 p-0 relative max-w-full"
              style={{
                width: "initial",
                height: "initial",
              }}
            >
              <span
                className="box-border block bg-none opacity-100 border-0 m-0 p-0 max-w-full"
                style={{
                  width: "initial",
                  height: "initial",
                }}
              >
                <img
                  className="block max-w-full bg-none opacity-100 border-0 m-0 p-0"
                  style={{
                    width: "initial",
                    height: "initial",
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27230%27%20height=%27200%27/%3e"
                />
              </span>
              <img
                alt="Fresh Green Leaf Lettuce"
                src={product.image}
                decoding="async"
                data-nimg="intrinsic"
                className="object-cover absolute top-0 left-0 right-0 bottom-0 box-border p-0 m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                srcSet={product.image}
              />
            </span>
            <div className="w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
              {product.sale === "yes" && (
                <span className="text-[11px] md:text-xs font-bold text-white uppercase inline-block bg-green-400 rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">
                  on sale
                </span>
              )}
              <div className=" absolute bottom-[0.75rem] flex w-full justify-center px-[0.625rem] left-[0.25rem]">
                <button
                  className="flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-green-400 lg:w-10 lg:h-10 text-white focus:outline-none"
                  aria-label="Count Button"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="1">
                      <path
                        d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 h-full">
          <div className="mb-1 lg:mb-1.5 -mx-1">
            <span className="inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark">
              ${product.price}
            </span>
            <del className="mx-1 text-sm text-brand-dark text-opacity-70">
              $2.74
            </del>
          </div>
          <h2 className="text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5">
            {product.productName}
          </h2>
          <div className="mt-auto text-13px sm:text-sm">1 {product.unit}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
