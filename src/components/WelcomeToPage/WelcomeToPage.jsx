import PropTypes from "prop-types";
import "./WelcomeToPage.css";

export default function WelcomeToPage({ image, children }) {
  return (
    <section className="welcome-to-page">
      <div className="welcome-image">
        <img src={image} alt="Welcoming image" className="image" />
      </div>
      <div className="welcome-content">{children}</div>
    </section>
  );
}

WelcomeToPage.propTypes = {
    image: PropTypes.string.isRequired, // URL зображення обов'язковий
    children: PropTypes.node.isRequired, // Контент, який буде передано в компонент
};