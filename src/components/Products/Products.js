import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
        <div className="mb-12 lg:mb-14 xl:mb-16">
          <div className="-mt-1.5 mb-5 xl:mb-6 text-center pb-2 lg:pb-3 xl:pb-4 3xl:pb-7">
            <h2 className="text-brand-dark text-lg lg:text-xl xl:text-2xl xl:leading-8 font-bold font-manrope 3xl:text-2xl">
              Best seller grocery near you
            </h2>
            <p className="text-brand-muted text-sm leading-7 lg:text-15px xl:text-base pb-0.5 mt-1.5 lg:mt-2.5 xl:mt-3">
              We provide best quality &amp; fresh grocery items near your
              location
            </p>
          </div>

          <div className="row">
            {products !== [] &&
              products.map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
