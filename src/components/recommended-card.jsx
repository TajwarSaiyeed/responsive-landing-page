import { FaStar } from "react-icons/fa";
import { Button } from "./button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RecommendedCard = ({
  name,
  image,
  price,
  intro,
  rating,
  reviewCount,
}) => {
  return (
    <div className="shadow-md hover:shadow-lg transition w-full max-w-[350px] bg-white border rounded-lg">
      <div className="aspect-square w-full max-h-[250px]">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-5">
        <p className="flex items-center justify-between my-3 font-bold">
          <span>{name}</span>
          <span>{price}</span>
        </p>

        <p className="my-2 text-sm">{intro}</p>

        {/* rating */}
        <div className="flex items-center mb-4">
          <span className="flex items-center gap-x-1 font-semibold text-[#0076CE]">
            <FaStar className="text-[#0076CE]" />
            {rating}
          </span>
          <span> ({reviewCount})</span>
        </div>
        <Link to={`/${name.split(" ").join("-")}`}>
          <Button
            variant={"primary"}
            className={"p-2 w-full rounded-md text-sm"}
          >
            View Services
          </Button>
        </Link>
      </div>
    </div>
  );
};

RecommendedCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default RecommendedCard;
