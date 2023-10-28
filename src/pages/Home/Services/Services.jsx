import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-delta-indol.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-32">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Service</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don{"'"}t look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            service={service}
            key={service._id}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center items-center my-10">
      <button className="btn btn-error btn-outline text-red-700 w-max mx-auto">Show More</button>
      </div>
    </div>
  );
};

export default Services;
