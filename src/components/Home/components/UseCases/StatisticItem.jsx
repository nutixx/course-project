import PropTypes from "prop-types";

StatisticItem.propTypes = {
  percentage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default function StatisticItem({ percentage, description }) {
  return (
    <div className="stat-item">
      <div className="stat-percentage">{percentage}</div>
      <div className="stat-description">{description}</div>
    </div>
  );
}
