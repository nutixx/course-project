import "./Footer.css";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import mail from "../../assets/icons/Mail.svg";
import phone from "../../assets/icons/Phone.svg";
import location from "../../assets/icons/Location.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <span className="logo-icon"></span> YourBanK
        </div>
        <nav className="footer-nav">
          <a href="/">Домівка</a>
          <a href="/careers">Кар&apos;єра</a>
          <a href="/about">Про нас</a>
          <a href="/security">Безпека</a>
        </nav>
      </div>
      <ul className="footer-contact">
        <li>
          <img src={mail} alt="" /> hello@skillbridge.com
        </li>
        <li>
          <img src={phone} alt="" /> +91 91815 23 2309
        </li>
        <li>
          <img src={location} alt="" />
          Somewhere in the World
        </li>
      </ul>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </div>
        <p>YourBank All Rights Reserved</p>
        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
