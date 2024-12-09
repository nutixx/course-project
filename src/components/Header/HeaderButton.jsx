import { Link } from "react-router-dom";
import PropTypes from "prop-types";

HeaderButton.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool,
  url: PropTypes.string.isRequired,
};

export default function HeaderButton({ children, isSelected, url, ...props }) {
  return (
    <li>
      <Link to={url} className={isSelected ? "active" : ""} {...props}>
        {children}
      </Link>
    </li>
  );
}
