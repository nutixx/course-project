import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import icon from "../../../assets/icons/Quartation.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tabs from "./Tabs";
import testimonialsData from "../../../data/testimonialsData.json";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [tabs, setTabs] = useState([]);
  const [content, setContent] = useState({});
  const swiperRef = useRef(null);

  useEffect(() => {
    setTabs(testimonialsData.tabs);
    setContent(testimonialsData.content);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0); // Скидання позиції на перший слайд }
    }
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <div className="testimonials-text">
          <h2 className="testimonials-title">
            Наші <span className="highlight">Відгуки</span>
          </h2>
          <p className="switch-wrapper__description">
            Дізнайтеся, як YourBank змінив життя завдяки інноваційним цифровим
            рішеннями та персоналізованим обслуговуванням клієнтів. Дізнайтеся,
            чому наші клієнти довіряють нам нам для безпечної та процвітаючої
            фінансової подорожі.
          </p>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        navigation
        // pagination={{ clickable: true }}
        className="custom-swiper"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {content[activeTab]?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-item">
              <img src={icon}></img>
              <div className="testimonial-content">
                <p className="testimonial-text">{item.quote}</p>
                <p className="testimonial-name">{item.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
