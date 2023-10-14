import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterLinks = ({ links, title }) => {
  return (
    <div>
      <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
      <ul className="list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.href} className="mb-2">
            <Link to={link.href} className="text-white text-xs hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterLinks;
