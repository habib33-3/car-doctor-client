import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-32 text-center w-max-7xl mx-auto ">
      <h5 className="text-orange-600 text-xl font-bold">Popular Products</h5>
      <h2 className="text-gray-900 text-5xl font-bold my-5">
        Browse Our Products
      </h2>
      <p className="text-gray-500 ">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don{"'"}t look even slightly believable.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6 mt-12">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
