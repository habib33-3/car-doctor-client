/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      <div className="p-10 items-center text-center">
        <h2 className="card-title">{title}</h2>
       <div className="flex justify-between items-center">
       <p>Price ${price}</p>
        <div className="">
          <button className="btn btn-primary">Buy Now</button>
        </div>
       </div>
      </div>
    </div>
  );
};

export default ServiceCard;
