export default function Wrapper({ title, description, tabs, activeTab, onTabChange, children }) {
    return (
      <section className="wrapper">
        <h2 className="wrapper-title">{title}</h2>
        {description && <p className="wrapper-description">{description}</p>}
        
        {/* Вкладки */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Контент */}
        <div className="wrapper-content">{children}</div>
      </section>
    );
  }
  