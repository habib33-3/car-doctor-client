import { AiFillCalendar } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white py-24 max-w-6xl mx-auto rounded-xl md:flex justify-center items-center gap-14">
      <div className="flex items-center justify-center gap-5">
        <AiFillCalendar className=" text-3xl " />
        <div>
          <h5 className="font-medium">We are open monday-friday</h5>
          <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <BsFillTelephoneFill className=" text-3xl " />
        <div>
          <h5 className="font-medium">Have a question?</h5>
          <h3 className="text-2xl font-bold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <GrMapLocation className=" text-3xl " />
        <div>
          <h5 className="font-medium">Need a repair? our address</h5>
          <h3 className="text-2xl font-bold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
