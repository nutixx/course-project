import WelcomeToPage from "../WelcomeToPage/WelcomeToPage";
import welcome_careers from "../../assets/images/Careers-welcome.png";
import ValuesSection from "./components/ValuesSection";
import JobCards from "./components/JobCards";
import InformationCard from "../InformationCard/InformationCard";
import "./Careers.css";

export default function Careers() {
  return (
    <>
      <WelcomeToPage image={welcome_careers}>
        <h1>
          Ласкаво просимо до <span className="highlight">YourOutsource</span>{" "}
          Кар&apos;єра!
        </h1>
        <p>
          Приєднуйтесь до нашої команди та розпочніть захоплюючу подорож у
          сфері аутсорсингу. У YourOutsource ми прагнемо розвивати культуру
          досконалості та надавати можливості для професійного зростання. З
          акцентом на інновації, обслуговування клієнтів та доброчесності, ми
          прагнемо позитивно впливати на життя наших клієнтів та суспільства.
          Приєднуйтесь до нас сьогодні та станьте частиною нашої місії з
          формування майбутнього аутсорсингу.
        </p>
      </WelcomeToPage>
      <h2>
        Наші <span className="highlight">цінності</span>
      </h2>
      <p className="section-p">
        У YourOutsource наші цінності складають основу нашої організації та керують
        нашими діями. Ми віримо у дотримання найвищих стандартів доброчесності,
        надання виняткового сервісу та впровадження інновацій. Ці цінності
        визначають нашу культуру та формують те, як ми працюємо разом для
        досягнення наших цілей.
      </p>
      <ValuesSection />
      <h2>
        Наші <span className="highlight">переваги</span>
      </h2>
      <p className="section-p">
        У YourOutsource ми пропонуємо конкурентні переваги, які підтримують наших
        працівників у досягненні їхніх професійних та особистих цілей.
      </p>
      <section className="grid-4-items-section">
        <InformationCard icon="📊" title="Конкурента компенсація">
          Ми надаємо конкурентоспроможний пакет заробітної плати, який визнає
          навички та досвід наших працівників.
        </InformationCard>
        <InformationCard icon="💡" title="Здоров'я та благополуччя">
          Ми надаємо пріоритет здоров&apos;ю та благополуччю наших працівників,
          пропонуючи комплексні медичні, стоматологічні та зорові страхові
          плани.
        </InformationCard>
        <InformationCard icon="💼" title="Планування пенсії">
          YourOutsource прагне допомогти працівникам спланувати їхнє майбутнє. Ми
          пропонуємо пенсійний план із щедрим співфінансуванням від
          роботодавця.
        </InformationCard>
        <InformationCard icon="🕒" title="Баланс роботи та особистого життя">
          Ми розуміємо важливість підтримки здорового балансу між роботою та
          особистим життям. YourOutsource пропонує гнучкі умови роботи.
        </InformationCard>
      </section>
      <h2>
        <span className="highlight">Відкриті вакансії</span>
      </h2>
      <p className="section-p">
        Перегляньте цікаві вакансії в YourOutsource, де ми цінуємо таланти, інновації
        та пристрасть до обслуговування клієнтів. Приєднуйтесь до нашої команди
        та станьте частиною формування світлого майбутнього аутсорсингової
        індустрії.
      </p>
      <JobCards />
    </>
  );
}
