import WelcomeToPage from "../WelcomeToPage/WelcomeToPage";
import welcome_careers from "../../assets/images/about-us-welcome.png";
import MissionVisionCard from "./components/MissionVisionCard";
import "./About.css";
import vision from "../../assets/images/vision.png"
import mission from "../../assets/images/mission.png"
import PressReleases from "./components/PressReleases";

export default function About() {
  return (
    <>
      <WelcomeToPage image={welcome_careers}>
        <h1>
          Де Банківська Справа зустрічається з{" "}
          <span className="highlight">Досконалістю!</span>
        </h1>
        <p>
          У YourBank ми віримо, що банківські послуги мають бути чимось більшим,
          ніж просто транзакції. Це має бути досвід, який дає можливість
          фізичним та юридичним особам процвітати та досягати своїх фінансових
          цілей. Як фінансова установа, якій довіряють, ми прагнемо надавати
          виняткові банківські послуги, що перевершують очікування. Приєднуйтесь
          до нас у цій захоплюючій подорожі та відкрийте для себе новий рівень
          банківської досконалості.
        </p>
      </WelcomeToPage>
      <h2>
        <span className="highlight">Місія та Бачення</span>
      </h2>
      <p className="section-p">
        Ми бачимо себе провідною силою в галузі, яка керується інноваціями,
        доброчесністю та інклюзивністю, створюючи світле фінансове майбутнє для
        приватних осіб та бізнесу, зберігаючи при цьому тверду прихильність до
        задоволення потреб клієнтів та розвитку суспільства.
      </p>
      <section className="mission-vision-section">
        <MissionVisionCard
          image={mission} // Замінити на реальний URL зображення
          title="Місія"
        >
          У YourBank наша місія — надавати клієнтам інструменти для досягнення
          фінансової свободи. Ми прагнемо задовольняти фінансові потреби,
          пропонуючи інноваційні послуги, індивідуальний підхід і технології.
        </MissionVisionCard>

        <MissionVisionCard
          image={vision} // Замінити на реальний URL зображення
          title="Візія"
        >
          Наша візія — переосмислити банківське обслуговування, створюючи
          персоналізований досвід для клієнтів із використанням інноваційних
          технологій, довіри та досконалості.
        </MissionVisionCard>
      </section>
      <h2>
        <span className="highlight">Публікації</span>
      </h2>
      <p className="section-p">
        Ми бачимо себе провідною силою в галузі, яка керується інноваціями,
        доброчесністю та інклюзивністю, створюючи світле фінансове майбутнє для
        приватних осіб та бізнесу, зберігаючи при цьому тверду прихильність до
        задоволення потреб клієнтів та розвитку суспільства.
      </p>
      <PressReleases />
    </>
  );
}
