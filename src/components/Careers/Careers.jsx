import WelcomeToPage from "../WelcomeToPage/WelcomeToPage";
import welcome_careers from "../../assets/images/Careers-welcome.png";
import ValuesSection from "./ValuesSection";
import JobCards from "./JobCards";
import "./Careers.css";

export default function Careers() {
  return (
    <>
      <WelcomeToPage image={welcome_careers}>
        <h1>
          Welcome to <span className="highlight">YourBank</span> Careers!
        </h1>
        <p>
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </WelcomeToPage>
      <h2>
        Наші <span className="highlight">цінності</span>
      </h2>
      <p className="section-p">
        У YourBank наші цінності складають основу нашої організації та керують
        нашими діями. Ми віримо у дотримання найвищих стандартів доброчесності,
        надання виняткового сервісу та впровадження інновацій. Ці цінності
        визначають нашу культуру та формують те, як ми працюємо разом для
        досягнення наших цілей.
      </p>
      <ValuesSection />
      <h2>
        <span className="highlight">Відкриті вакансії</span>
      </h2>
      <p className="section-p">
        Перегляньте цікаві вакансії в YourBank, де ми цінуємо таланти, інновації
        та пристрасть до обслуговування клієнтів. Приєднуйтесь до нашої команди
        та станьте частиною формування світлого майбутнього банківської
        індустрії
      </p>
      <JobCards />
    </>
  );
}
