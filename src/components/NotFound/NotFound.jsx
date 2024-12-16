import './NotFound.css';

export default function NotFound () {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Упс! Сторінку не знайдено.</p>
      <a href="/" className="not-found__button">
        Повернутися на головну
      </a>
    </div>
  );
};
