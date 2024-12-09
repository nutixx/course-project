import "./Header.css";
import { useState } from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Home');

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Перемикання стану
  };

  function handleClick(event) {
    setSelectedPage(event.target.innerText);
  }

  return (
    <header className={`header ${isMenuOpen && "bottom-radius-adaptive"}`}>
      <div className="logo">
        <span className="logo-icon"></span> YourBanK
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <HeaderButton url="/" isSelected={selectedPage === 'Home'} onClick={handleClick}>Home
          </HeaderButton>
          <HeaderButton url="/careers" isSelected={selectedPage === 'Careers'} onClick={handleClick}>Careers
          </HeaderButton>
          <HeaderButton url="/about" isSelected={selectedPage === 'About'} onClick={handleClick}>About
          </HeaderButton>
          <HeaderButton url="/security" isSelected={selectedPage === 'Security'} onClick={handleClick}>Security
          </HeaderButton>
          {/* <li>
            <Link to="/security" onClick={handleClick}>
              Security
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="login">
      </div>
      <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
      </button>
    </header>
  );
}
