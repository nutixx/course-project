import FeatureItem from "./FeatureItem";
import StatisticItem from "./StatisticItem";
import PropTypes from "prop-types";

UseCases.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function UseCases({ title, description, features, statistics }) {
  return (
    <section className="useCases">
      <div className="use-cases">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
      <div className="useCases-wrapper">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="statistics-list">
          {statistics.map((stat, index) => (
            <StatisticItem
              key={index}
              percentage={stat.percentage}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
