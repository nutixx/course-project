import WelcomeToPage from "../WelcomeToPage/WelcomeToPage";
import welcome_careers from "../../assets/images/about-us-welcome.png";
import MissionVisionCard from "./components/MissionVisionCard";
import "./About.css";
import vision from "../../assets/images/vision.png";
import mission from "../../assets/images/mission.png";
import PressReleases from "./components/PressReleases";

export default function About() {
  return (
    <>
      <WelcomeToPage image={welcome_careers}>
        <h1>
          Де Аутсорсинг зустрічається з{" "}
          <span className="highlight">Досконалістю!</span>
        </h1>
        <p>
          У YourOutsource ми віримо, що аутсорсинг має бути чимось більшим, ніж
          просто передача завдань. Це має бути партнерство, яке допомагає
          бізнесу досягати нових висот. Ми прагнемо надавати виняткові послуги,
          які перевершують очікування.
        </p>
      </WelcomeToPage>
      <h2>
        <span className="highlight">Місія та Бачення</span>
      </h2>
      <p className="section-p">
        Ми прагнемо бути провідним партнером у галузі аутсорсингу, забезпечуючи
        інноваційні рішення, які допомагають бізнесу зростати та розвиватися.
      </p>
      <section className="mission-vision-section">
        <MissionVisionCard
          image={mission}
          title="Місія"
        >
          Наша місія — допомагати бізнесу досягати своїх цілей, надаючи
          високоякісні аутсорсингові послуги, які відповідають їхнім потребам.
        </MissionVisionCard>

        <MissionVisionCard
          image={vision}
          title="Візія"
        >
          Ми прагнемо стати глобальним лідером у сфері аутсорсингу, створюючи
          інноваційні рішення, які змінюють спосіб ведення бізнесу.
        </MissionVisionCard>
      </section>
      <h2>
        <span className="highlight">Публікації</span>
      </h2>
      <p className="section-p">
        Дізнайтеся більше про наші досягнення, інновації та партнерства, які
        допомагають нам залишатися на передовій у сфері аутсорсингу.
      </p>
      <PressReleases />
    </>
  );
}
