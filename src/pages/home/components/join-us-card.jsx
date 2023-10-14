import PropTypes from "prop-types";

export const JoinUsCard = ({
  serial,
  title,
  description,
  dueDate,
  panaltyFees,
}) => {
  return (
    <div className="p-5 max-w-[350px] max-h-[250px] relative rounded-2xl shadow-xl bg-white">
      <div className="absolute -top-2 -left-2 z-[50] flex justify-center items-center rounded-md w-10 h-10 bg-gradient-to-r from-[#0600CE] to-[#9400D3] text-white text-[20px] font-bold">
        {serial}
      </div>
      <div className="relative">
        <h1 className="text-[18px] font-bold text-center my-2">{title}</h1>
        <p className="text-[14px] text-center">{description}</p>
      </div>
      <div className="bg-[#F4F4F4] my-2 min-h-[80px] max-h-[100px] rounded-lg flex justify-evenly p-2">
        <div className="flex flex-col justify-start items-start w-1/2">
          <p className="text-[12px] text-center font-bold text-[#0076CE]">
            Due Date
          </p>
          <p className="text-xs text-start">{dueDate}</p>
        </div>
        <div className="flex flex-col justify-start items-start w-1/2">
          <p className="text-[12px] text-center text-[#FF6666] font-bold">
            Penalty Fees
          </p>
          <div className="text-[14px] text-start">
            {panaltyFees.map((fee, _) => (
              <p
                className="text-xs"
                key={_}
                dangerouslySetInnerHTML={{ __html: fee }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

JoinUsCard.propTypes = {
  serial: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  panaltyFees: PropTypes.arrayOf(PropTypes.string).isRequired,
};
