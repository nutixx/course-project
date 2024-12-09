import PropTypes from "prop-types";

FeatureItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default function FeatureItem({ icon, title }) {
  return (
    <div className="use-cases-item">
      <div className="use-cases-icon">{icon}</div>
      <div className="use-cases-title">{title}</div>
    </div>
  );
}
