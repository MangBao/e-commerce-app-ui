const CenterHeader = () => {
  return (
    <div className="col lg:w-3/5 w-2/6 items-center flex">
      <nav className="lg:block hidden">
        <ul className="flex ">
          <li className="items-center px-10">
            <a className="inline-flex focus-right pb-14 pt-16" href="/">
              Category
            </a>
          </li>
          <li className="items-center px-10">
            <a className="inline-flex focus-right pb-14 pt-16" href="/">
              Shop
            </a>
          </li>
          <li className="items-center px-10">
            <a className="inline-flex focus-right pb-14 pt-16" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="search w-full ">
        <input
          className="min-h-40 rounded-50 px-8 w-full"
          type="text"
          placeholder="Enter keywords..."
        />
      </div>
    </div>
  );
};

export default CenterHeader;
