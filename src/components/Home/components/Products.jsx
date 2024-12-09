import { useState, useEffect } from "react";
import productsData from "../../../data/productsData.json";
import Tabs from "./Tabs";

export default function Products() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [tabs, setTabs] = useState([]);
  const [content, setContent] = useState({});

  // Завантаження даних із JSON
  useEffect(() => {
    setTabs(productsData.tabs);
    setContent(productsData.content);
  }, []);

  return (
    <section className="products">
      <div className="products-header">
        <div>
          <h2 className="products-title">
            Our <span className="highlight">Products</span>
          </h2>
          <p className="switch-wrapper__description">
            Discover a range of comprehensive and customizable banking products at
            YourBank, designed to suit your unique financial needs and aspirations.
          </p>
        </div>
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <div className="products-content">
      {content[activeTab]?.map((item, index) => (
          <div className="product-item" key={index}>
          <div className="product-icon">{item.icon}</div>
          <h3 className="product-title">{item.title}</h3>
          <p className="product-description">{item.description}</p>
        </div>
        ))}
      </div>
    </section>
  );
}


// import { useState } from "react";
// import Wrapper from "../Wrapper";
// import ProductItem from "./ProductItem";
// import productsData from "../../../../data/productsData.json";

// export default function Products() {
//   const [activeTab, setActiveTab] = useState("individuals");

//   return (
//     <Wrapper
//       title=
//        {<>
//           Our <span className="highlight">Products</span>
//         </>}
//       description="Discover a range of comprehensive and customizable banking products at
//               YourBank, designed to suit your unique financial needs and aspirations."
//       tabs={productsData.tabs}
//       activeTab={activeTab}
//       onTabChange={setActiveTab}
//     >
//       {productsData.content[activeTab]?.map((item, index) => (
//         <ProductItem
//           key={index}
//           icon={item.icon}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </Wrapper>
//   );
// }
