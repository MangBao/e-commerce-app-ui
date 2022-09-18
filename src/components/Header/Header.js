import React, { useEffect, useRef, useState } from "react";
import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RightHeader from "./RightHeader";

const Header = () => {
  
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return (
    <header
      className={`header w-full z-20 shadow-bottom bg-white ${
        isSticky ? "sticky" : ""
      }`}
      ref={ref}
    >
      <div className="container">
        <div className="row justify-between">
          <LeftHeader />
          <CenterHeader />
          <RightHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
