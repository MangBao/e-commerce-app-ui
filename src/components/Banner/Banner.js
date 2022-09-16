const Banner = () => {
  const urlBanner =
    "https://borobazar.vercel.app/assets/images/hero/banner-2.png";

  return (
    <div
      className="banner w-full bg-no-repeat bg-cover bg-center flex items-center bg-fill-thumbnail min-h-400 md:min-h-460 lg:min-h-500 xl:min-h-550 2xl:min-h-650 py-20 mb-10"
      style={{ backgroundImage: "url(" + urlBanner + ")" }}
    >
      <div className="mx-auto h-full flex flex-col text-center px-6 xl:max-w-750 2xl:max-w-850 max-w-480 md:max-w-550">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-manrope font-extrabold leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4 text-brand-tree-dark xl:text-5xl 2xl:text-6xl">
            Healthy Vegetable that you Deserve to Eat Fresh
          </h2>
          <p className="text-base md:text-base xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16 text-brand-dark text-opacity-80 2xl:px-32">
            We source and sell the very best beef, lamb and pork, sourced with
            the greatest care from farmer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
