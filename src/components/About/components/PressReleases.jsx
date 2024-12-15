import { useState, useEffect } from "react";
import pressReleasesData from "../../../data/pressReleasesData.json";

export default function PressReleases(){
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(pressReleasesData);
  }, []);

  return (
    <section className="cards-section">
      {news.map((item, index) => (
        <div className="yourbank-card" key={index}>
        <img src={item.image} alt={item.title} />
          <div className="pressreleases-content">
            <h3 className="title">{item.title}</h3>
          
            <div className="meta-block">
                <p className="meta">
                  {item.location}
                </p>
                <p className="meta">
                  {item.date}
                </p>
            </div>
          </div>
          <div className="description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
)}

{/* <section className="cards-section">
{news.map((item, index) => (
  <div className="yourbank-card" key={index}>
    <img src={item.image} alt={item.title} />
    <div className="news-content">
      <h3 className="news-title">{item.title}</h3>
      <div className="news-meta">
        <p>{item.location}</p>
        <p>{item.date}</p>
      </div>
      <p className="news-description">{item.description}</p>
    </div>
  </div>
))}
</section>
  );
}; */}