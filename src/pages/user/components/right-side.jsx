import { AboutItem } from "./about-item";
import PropTypes from "prop-types";
import CallUserCard from "./call-user-card";
import { FaStar } from "react-icons/fa";
import Slider from "../../../components/slider";

export const RightSide = ({
  rating,
  reviewCount,
  price,
  image,
  name,
  about,
  taskComplexity,
}) => {
  return (
    <div className="flex-grow py-10">
      <div className="aspect-square w-full max-h-[400px]">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] lg:text-[50px] font-bold my-4">
          About {name}
        </h1>
        <div className="flex items-center my-2 md:hidden">
          <span className="flex items-center gap-x-1 font-semibold text-[#0076CE]">
            <FaStar className="text-[#0076CE]" />
            {rating}
          </span>
          <span> ({reviewCount})</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-between my-5">
        <AboutItem title="From" value={about?.from} />
        <AboutItem
          title="Partner Since"
          value={about?.partnerSince.toString()}
        />
        <AboutItem
          title="Average Response Time"
          value={about?.averageResponseTime}
        />
      </div>
      <AboutItem title="About" value={about.description} />
      <div className="flex flex-wrap gap-10 my-5">
        <AboutItem title="SERVICES I OFFER" value={about?.services} />
        <AboutItem title="WHY ME?" value={about?.benefits} />
      </div>

      <div className="md:hidden">
        <CallUserCard price={price} taskComplexity={taskComplexity} />
      </div>
      <div className="bg-white w-full max-w-[600px] h-[300px] md:h-[400px] flex flex-col justify-center rounded-md shadow-md items-start p-5 my-2 md:hidden">
        <h2 className="text-2xl font-bold ">What people say?</h2>
        <Slider name={name} />
      </div>
    </div>
  );
};

RightSide.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  taskComplexity: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};
