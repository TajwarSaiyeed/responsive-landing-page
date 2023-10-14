import PropTypes from "prop-types";
export const Details = ({ image, impText, text }) => {
  return (
    <div className="flex p-5 gap-2">
      <img src={image} className="max-w-[40px] max-h-[40px]" />
      <p className="max-w-[150px] text-sm md:text-[16px]">
        <span className="font-bold uppercase">{impText} </span>
        {text}
      </p>
    </div>
  );
};

Details.propTypes = {
  image: PropTypes.any,
  impText: PropTypes.string,
  text: PropTypes.string,
};
