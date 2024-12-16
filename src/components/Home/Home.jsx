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
      "Для приватних осіб наші іпотечні послуги прокладають шлях до власного житла, а гнучкі персональні кредити надають життєво важливу підтримку на різних життєвих етапах. Ми також надаємо пріоритет пенсійному плануванню, забезпечуючи фінансово безпечне майбутнє для наших клієнтів.",
    features: [
      { icon: "🪙", title: "Управління особистими фінансами" },
      { icon: "🌱", title: "Заощадження на майбутнє" },
      { icon: "🏠", title: "Власність житла" },
      { icon: "📚", title: "Фінансування освіти" },
    ],
    statistics: [
      { percentage: "78%", description: "Безпечне планування виходу на пенсію" },
      { percentage: "63%", description: "Керована консолідація боргу" },
      { percentage: "91%", description: "Зменшення фінансового навантаження" },
    ],
  };

  const businessData = {
    title: "Для бізнесу",
    description:
      "Для бізнесу ми сприяємо зростанню завдяки рішенням з управління оборотним капіталом, які оптимізують грошові потоки, а наші індивідуальні варіанти фінансування сприяють розширенню бізнесу. Якими б не були ваші фінансові прагнення, YourBank прагне надати правильні інструменти та підтримку для їх досягнення.",
    features: [
      { icon: "📊", title: "Стартапи та підприємці" },
      { icon: "💳", title: "Управління грошовими потоками" },
      { icon: "🏢", title: "Розширення бізнесу" },
      { icon: "📈", title: "Платіжні рішення" },
    ],
    statistics: [
      { percentage: "65%", description: "Управління грошовими потоками" },
      { percentage: "70%", description: "Стимулюйте розширення бізнесу" },
      { percentage: "45%", description: "Оптимізуйте обробку заробітної плати" },
    ],
  };

  return (
    <>
      <div className="home-back-img"></div>
      <section className="hero">
        <div className="hero-content">
          <div className="LLC">
            <img src={check_badge} alt="check-badge" />
            <p>Без ТОВ та перевірки кредитів.</p>
          </div>
          <h1>
          Ласкаво просимо до YourBank, що розширює можливості вашої <span className="highlight">Фінансової Подорожі</span>
          </h1>
          <p>
            Наша місія в YourBank - надавати комплексні банківські
            рішення, які дають можливість приватним особам та бізнесу досягати своїх
            фінансових цілей. Ми прагнемо надавати персоналізовані та
            інноваційні послуги, що відповідають потребам наших клієнтів.
          </p>
          <JoinUsModal/>
        </div>
        <div className="hero-image"></div>
      </section>
      <Products />
      <h2>
      Варіанти <span className="highlight"> Використання</span>
      </h2>
      <p className="section-p">
        У YourBank ми задовольняємо різноманітні потреби як фізичних, так і юридичних осіб
        та бізнесу, пропонуючи широкий спектр фінансових рішень
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
        Скористайтеся безліччю потужних функцій у YourBank, включаючи безперебійний
        онлайн-банкінг, безпечні транзакції та персоналізовану фінансову
        та персоналізовану фінансову інформацію - все для того, щоб покращити ваш банківський досвід.
      </p>
      <FeaturesTabs />
      <FAQ />
      <Testimonials />
      <section className="CTA">
        <h2>
          Почни свою фінансову подорож з{" "}
          <span className="highlight">YourBank сьогодні!</span>
        </h2>
        <p>
          Відкрий рахунок уже сьогодні та отримай доступ до сучасних банківських
          рішень, які спрощують управління фінансами. Надійність, зручність і
          підтримка — усе це чекає на тебе з YourBank. Не відкладай, зроби
          перший крок до фінансової свободи!
        </p>
        <JoinUsModal/>
      </section>
    </>
  );
}
