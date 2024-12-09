import "./Home.css";
import check_badge from "../../assets/icons/check-badge-mini.svg";
import Products from "./components/Products";
import UseCases from "./components/UseCases/UseCases";
import FeaturesTabs from "./components/Features/FeaturesTabs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  const individualData = {
    title: "For Individuals",
    description:
      "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers.",
    features: [
      { icon: "🪙", title: "Managing Personal Finances" },
      { icon: "🌱", title: "Saving for the Future" },
      { icon: "🏠", title: "Homeownership" },
      { icon: "📚", title: "Education Funding" },
    ],
    statistics: [
      { percentage: "78%", description: "Secure Retirement Planning" },
      { percentage: "63%", description: "Manageable Debt Consolidation" },
      { percentage: "91%", description: "Reducing financial burdens" },
    ],
  };

  const businessData = {
    title: "For Business",
    description:
      " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    features: [
      { icon: "📊", title: "Startups and Enterpreneurs" },
      { icon: "💳", title: "Cash Flow Management" },
      { icon: "🏢", title: "Business Expansion" },
      { icon: "📈", title: "Payment Solutions" },
    ],
    statistics: [
      { percentage: "65%", description: "Cash Flow Management" },
      { percentage: "70%", description: "Drive Business Expansion" },
      { percentage: "45%", description: "Streamline payroll processing" },
    ],
  };

  return (
    <>
      <div className="home-back-img"></div>
      <section className="hero">
        <div className="hero-content">
          <div className="LLC">
            <img src={check_badge} alt="check-badge" />
            <p>No LLC Required, No Credit Check.</p>
          </div>
          <h1>
            Welcome to YourBank Empowering Your <span className="highlight">Financial Journey</span>
          </h1>
          <p>
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers&apos; needs.
          </p>
          <a href="#" className="button">
            Open Account
          </a>
        </div>
        <div className="hero-image"></div>
      </section>
      <Products />
      <h2>
        <span className="highlight">Use Cases</span>
      </h2>
      <p className="section-p">
        At YourBank, we cater to the diverse needs of individuals and businesses
        alike, offering a wide range of financial solutions
      </p>
      <UseCases
        title={individualData.title}
        description={individualData.description}
        features={individualData.features}
        statistics={individualData.statistics}
      />
      <UseCases
        title={businessData.title}
        description={businessData.description}
        features={businessData.features}
        statistics={businessData.statistics}
      />
      <h2 className="section-title">
        Our <span className="highlight">Features</span>
      </h2>
      <p className="section-p">
        Experience a host of powerful features at YourBank, including seamless
        online banking, secure transactions, and personalized financial
        insights, all designed to enhance your banking experience.
      </p>
      <FeaturesTabs/>
      <FAQ />
      <Testimonials/>
      <section className="CTA">
        <h2>Почни свою фінансову подорож з <span className="highlight">YourBank сьогодні!</span></h2>
        <p>Відкрий рахунок уже сьогодні та отримай доступ до сучасних банківських рішень, які спрощують управління фінансами. Надійність, зручність і підтримка — усе це чекає на тебе з YourBank. Не відкладай, зроби перший крок до фінансової свободи!</p>
        <a href=""  className="button">Створити рахунок</a>
      </section>
    </>
  );
}
