/* eslint-disable react/prop-types */

const Product = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="w-full lg:w-96 px-5 py-6 border border-gray-200">
      <div className="bg-gray-100 p-3 w-11/12 mx-auto">
        <img
          src={image}
          alt=""
          className="w-36 h-32 mx-auto"
        />
      </div>
      <div className="rating mt-5">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </div>
      <h2 className="text-gray-700 text-2xl font-bold my-2">{name}</h2>
      <p className="text-orange-600 text-xl font-semibold">${price}</p>
    </div>
  );
};

export default Product;
