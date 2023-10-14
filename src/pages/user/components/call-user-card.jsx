import { MdOutlineCalendarMonth } from "react-icons/md";
import { Button } from "../../../components/button";
import PropTypes from "prop-types";

const CallUserCard = ({ taskComplexity, price }) => {
  return (
    <div className="shadow-sm rounded-lg bg-white p-4 flex flex-col gap-5">
      <p className="flex  items-center justify-between">
        <span>{taskComplexity}</span>
        <span className="font-bold">{price}</span>
      </p>
      <div className="flex items-center gap-x-1">
        <MdOutlineCalendarMonth className="text-[#0076CE]" />
        <span>Delivers the job within 2 days</span>
      </div>
      <div className="flex justify-between gap-2 items-center">
        <Button variant={"primary"} className={"p-1 w-full rounded-md text-sm"}>
          Request Proposal
        </Button>
        <Button className={"p-1 w-full rounded-md text-sm"}>
          Call with me
        </Button>
      </div>
    </div>
  );
};

CallUserCard.propTypes = {
  price: PropTypes.string.isRequired,
  taskComplexity: PropTypes.string.isRequired,
};

export default CallUserCard;
