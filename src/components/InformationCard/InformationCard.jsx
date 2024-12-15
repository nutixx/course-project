import styles from './InformationCard.module.css';

const Card = ({ icon, title, children }) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Card;
