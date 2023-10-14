import PropTypes from "prop-types";
export const AboutItem = ({ title, value }) => {
  return (
    <div>
      <h1 className="text-[16px] font-bold text-slate-400 uppercase">
        {title}
      </h1>
      {(typeof value === "string" || typeof value === "number") && (
        <p className="text-sm md:text-[16px] my-2">{value}</p>
      )}
      {typeof value === "object" && (
        <ul className="list-disc">
          {value.map((item, index) => (
            <li className="text-sm ml-5" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

AboutItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired || PropTypes.object.isRequired,
};
