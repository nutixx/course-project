import InformationCard from "../InformationCard/InformationCard";
import WelcomeToPage from "../WelcomeToPage/WelcomeToPage";
import welcome_security from "../../assets/images/Security-welcome.png";
import FAQ from "../FAQ/FAQ";

export default function Security() {
  return (
    <>
      <WelcomeToPage image={welcome_security}>
        <h1>
          Ваша довіра - це наш{" "}
          <span className="highlight">Головний Пріоритет</span>
        </h1>
        <p>
          У YourOutsource ми розуміємо, наскільки важливо забезпечити якість та
          безпеку ваших бізнес-процесів. Ми використовуємо передові технології
          та найкращі практики для надання надійних аутсорсингових рішень.
        </p>
      </WelcomeToPage>
      <h2>
        Як ми <span className="highlight">Підтримуємо Вас</span>
      </h2>
      <p className="section-p">
        У YourOutsource ми надаємо пріоритет якості, безпеці та конфіденційності
        ваших даних. Наші рішення допомагають оптимізувати ваші бізнес-процеси,
        зменшити витрати та підвищити ефективність.
      </p>
      <section className="grid-4-items-section">
        <InformationCard icon="💻" title="Розробка програмного забезпечення">
          Ми пропонуємо повний цикл розробки програмного забезпечення, від
          ідеї до впровадження, використовуючи сучасні технології.
        </InformationCard>

        <InformationCard icon="📞" title="Підтримка клієнтів">
          Наша команда забезпечує високоякісну підтримку клієнтів, допомагаючи
          вам зосередитися на основних бізнес-цілях.
        </InformationCard>

        <InformationCard icon="📊" title="Аналітика та звітність">
          Ми надаємо інструменти для аналізу даних, які допоможуть вам приймати
          обґрунтовані бізнес-рішення.
        </InformationCard>

        <InformationCard icon="🌍" title="Віддалені команди">
          Ми створюємо ефективні віддалені команди, які працюють як частина
          вашого бізнесу, забезпечуючи гнучкість та продуктивність.
        </InformationCard>
      </section>
      <FAQ />
    </>
  );
}
