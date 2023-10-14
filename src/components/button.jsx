import PropTypes from "prop-types";
import { cn } from "../lib/utils";

export const Button = ({ children, variant, onClick, className, type }) => {
  return (
    <button
      className={cn(
        "border-[#0076CE] border-2 px-6 py-2 rounded-md text-[#0076CE] hover:bg-[#0076CE] hover:text-white transition-colors duration-300 font-bold",
        variant === "primary" && "bg-[#0076CE] text-white hover:bg-[#005EA6]",
        className
      )}
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["submit", "button"]),
};
