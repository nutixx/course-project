import { useState, useEffect } from "react";
import FeaturesList from "./FeaturesList";
import featuresData from "../../../../data/featuresData.json"; // Імпортуємо JSON-файл

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("online-banking");
  const [tabs, setTabs] = useState([]);
  const [content, setContent] = useState({});

  // Підвантаження даних із JSON-файла
  useEffect(() => {
    // Симуляція завантаження (можна використовувати API або просто підставити локальні дані)
    setTabs(featuresData.tabs);
    setContent(featuresData.content);
  }, []);

  return (
      <section className="feature-tabs">
          <div className="tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
          </div>
  
        {content[activeTab] && <FeaturesList features={content[activeTab]} />}
      </section>
  );
}
