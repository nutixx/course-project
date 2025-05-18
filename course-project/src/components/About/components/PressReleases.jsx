import { useQuery } from '@tanstack/react-query';
import { fetchVacancies } from '../../../util/http';

export default function PressReleases() {
  const { data: news = [], isLoading, error } = useQuery({
    queryKey: ['press-releases'],
    queryFn: () => fetchVacancies('press-releases'),
  });

  if (isLoading) return <div>Завантаження публікацій...</div>;
  if (error) return <div>Помилка при завантаженні публікацій</div>;

  function formatDate(dateStr) {
    // Якщо dateStr містить "Дата: ", видаляємо його
    const clean = dateStr.replace(/^Дата:\\s*/, '').trim();
    // Якщо формат dd/mm/yyyy, перетворюємо на yyyy-mm-dd
    const [day, month, year] = clean.split('/');
    const iso = `${year}-${month}-${day}`;
    const date = new Date(iso);
    if (isNaN(date)) return dateStr; // fallback
    return date.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  

  return (
    <section className="cards-section">
      {news.map((item, index) => (
        <div className="yourbank-card" key={index}>
          <img src={item.image} alt={item.title} />
          <div className="pressreleases-content">
            <h3 className="title">{item.title}</h3>
            <div className="meta-block">
              <p className="meta">{item.location}</p>
              <p className="meta">{formatDate(item.date)}</p>
            </div>
          </div>
          <div className="description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}