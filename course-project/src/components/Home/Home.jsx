import "./Home.css";
import check_badge from "../../assets/icons/check-badge-mini.svg";
import Products from "./components/Products";
import UseCases from "./components/UseCases/UseCases";
import FeaturesTabs from "./components/Features/FeaturesTabs";
import Testimonials from "./components/Testimonials";
import FAQ from "../FAQ/FAQ";
import JoinUsModal from "../Modal/JoinUsModal";

export default function Home() {
  const individualData = {
    title: "Для фізичних осіб",
    description:
      "Для приватних осіб наші послуги з аутсорсингу допомагають оптимізувати процеси, зменшити витрати та зосередитися на основних цілях. Ми також надаємо підтримку в управлінні проектами та аналітиці.",
    features: [
      { icon: "💻", title: "Розробка програмного забезпечення" },
      { icon: "📞", title: "Підтримка клієнтів" },
      { icon: "📊", title: "Аналітика та звітність" },
      { icon: "🌍", title: "Віддалені команди" },
    ],
    statistics: [
      { percentage: "85%", description: "Покращення ефективності процесів" },
      { percentage: "70%", description: "Зниження операційних витрат" },
      { percentage: "90%", description: "Підвищення задоволеності клієнтів" },
    ],
  };

  const businessData = {
    title: "Для бізнесу",
    description:
      "Для бізнесу ми пропонуємо індивідуальні аутсорсингові рішення, які сприяють зростанню, оптимізують процеси та забезпечують доступ до глобальних талантів.",
    features: [
      { icon: "📊", title: "Управління проектами" },
      { icon: "💡", title: "Інноваційні рішення" },
      { icon: "🌍", title: "Глобальні команди" },
      { icon: "📈", title: "Оптимізація процесів" },
    ],
    statistics: [
      { percentage: "75%", description: "Покращення продуктивності" },
      { percentage: "80%", description: "Зниження витрат на персонал" },
      { percentage: "65%", description: "Швидке впровадження інновацій" },
    ],
  };

  return (
    <>
      <div className="home-back-img"></div>
      <section className="hero">
        <div className="hero-content">
          <div className="LLC">
            <img src={check_badge} alt="check-badge" />
            <p>Без зайвих витрат та складнощів.</p>
          </div>
          <h1>
            Ласкаво просимо до YourOutsource, що розширює можливості вашого <span className="highlight">Бізнесу</span>
          </h1>
          <p>
            Наша місія в YourOutsource - надавати комплексні аутсорсингові
            рішення, які допомагають бізнесу досягати своїх цілей. Ми прагнемо
            надавати персоналізовані та інноваційні послуги, що відповідають
            потребам наших клієнтів.
          </p>
          <JoinUsModal />
        </div>
        <div className="hero-image"></div>
      </section>
      <Products />
      <h2>
        Варіанти <span className="highlight">Використання</span>
      </h2>
      <p className="section-p">
        У YourOutsource ми задовольняємо різноманітні потреби як фізичних осіб, так і бізнесу,
        пропонуючи широкий спектр аутсорсингових рішень.
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
        Наші <span className="highlight">Можливості</span>
      </h2>
      <p className="section-p">
        Скористайтеся безліччю потужних функцій у YourOutsource, включаючи безперебійний
        менеджмент проектів, аналітику та підтримку клієнтів - усе для того, щоб покращити ваш бізнес-досвід.
      </p>
      <FeaturesTabs />
      <FAQ />
      <Testimonials />
      <section className="CTA">
        <h2>
          Почни свою бізнес-подорож з{" "}
          <span className="highlight">YourOutsource сьогодні!</span>
        </h2>
        <p>
          Зв'яжіться з нами вже сьогодні та отримайте доступ до сучасних аутсорсингових
          рішень, які спрощують управління бізнесом. Надійність, зручність і
          підтримка — усе це чекає на вас з YourOutsource. Не відкладай, зроби
          перший крок до успіху!
        </p>
        <JoinUsModal />
      </section>
    </>
  );
}
