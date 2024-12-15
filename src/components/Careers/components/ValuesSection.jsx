import { useState, useEffect } from "react";
import valuesData from "../../../data/valuesData.json";

export default function ValuesSection() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(valuesData.values);
  }, []);

  return (
    <section className="values-section">
      {values.map((value, index) => (
        <div className="value-item" key={index}>
          <h3 className="value-title">{value.title}</h3>
          <p className="value-description">{value.description}</p>
        </div>
      ))}
    </section>
  );
}
