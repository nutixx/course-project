import PropTypes from "prop-types";

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function FeaturesList({ features }) {
  return (
    <div className="features-list">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <h3 className="feature-title">{feature.title} <span>➜</span></h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
