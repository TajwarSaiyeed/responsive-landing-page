import { FaStar } from "react-icons/fa";
import CallUserCard from "./call-user-card";
import PropTypes from "prop-types";
import Slider from "../../../components/slider";

export const LeftSide = ({ user }) => {
  const { name, intro, rating, reviewCount, price, taskComplexity } = user;
  return (
    <div className="hidden md:flex gap-5 flex-col md:w-[300px] lg:w-[400px] pt-10 md:mr-5">
      <h1 className="text-3xl font-bold">
        {/* {name} */}
        {name}
      </h1>
      <p className="text-[16px]">
        {/* intro */}
        {intro}
      </p>
      {/* rating */}
      <div className="flex items-center">
        <span className="flex items-center gap-x-1 font-semibold text-[#0076CE]">
          <FaStar className="text-[#0076CE]" />
          {rating}
        </span>
        <span> ({reviewCount})</span>
      </div>
      {/* call user card */}
      <CallUserCard price={price} taskComplexity={taskComplexity} />
      {/* testimonial */}
      <div className="bg-white w-full h-[300px] md:h-[400px] flex flex-col justify-center rounded-md shadow-md items-start p-5">
        <h2 className="text-2xl font-bold">What people say?</h2>
        <Slider name={name} />
      </div>
    </div>
  );
};

LeftSide.propTypes = {
  user: PropTypes.object.isRequired,
};
