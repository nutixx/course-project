import { useState, useEffect } from "react";
import faqsData from "../../../data/faqsData.json";

export default function FAQ() {
  const [visibleCount, setVisibleCount] = useState(4); // Початково відображати 4 питання
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(faqsData.faqs); // Підвантаження питань з JSON
  }, []);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Додати ще 4 питання
  };

  const isLoadMoreVisible = visibleCount < faqs.length; // Перевірка, чи є ще питання для завантаження

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span className="highlight">Frequently</span> Asked Questions
      </h2>
      <p className="faq-description section-p">
        Still have any questions? Contact our Team via support@yourbank.com
      </p>
      <div className="faq-list">
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <hr />
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
        {isLoadMoreVisible && <div className="faq-gradient"></div>}
      </div>
      {isLoadMoreVisible && (
        <button className="load-more-button" onClick={loadMore}>
          Load All FAQs
        </button>
      )}
    </section>
  );
}
