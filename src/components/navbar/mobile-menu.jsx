import PropTypes from "prop-types";
import { Bars3Icon } from "@heroicons/react/24/solid";

export const MobileMenu = ({ setIsMenuOpen }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsMenuOpen((value) => !value)}
        type="button"
        className="border-[#0076CE] border-2 p-2 rounded-md text-[#0076CE] hover:bg-[#0076CE] group hover:text-white transition font-bold"
      >
        <Bars3Icon className="h-6 w-6 group-hover:text-white" />
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};
