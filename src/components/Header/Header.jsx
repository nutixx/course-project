import "./Header.css";
import { useState, useRef, useEffect } from "react";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Home');

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Перемикання стану
  };

  function handleClick(event) {
    setSelectedPage(event.target.innerText);
  }

  const handleClickOutside = (event) => {
    // Перевірка: чи клік відбувся поза меню або бургер-кнопки
    if (
      isMenuOpen &&
      navRef.current &&
      !navRef.current.contains(event.target) &&
      burgerRef.current &&
      !burgerRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  };

  // Додаємо слухач кліків на документ
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen && "bottom-radius-adaptive"}`}>
      <div className="logo">
        <span className="logo-icon"></span> YourBanK
      </div>
      <nav
        className={`nav ${isMenuOpen ? "open" : ""}`}
        ref={navRef}
      >
        <ul>
          <HeaderButton url="/" isSelected={selectedPage === 'Home'} onClick={handleClick}>Home
          </HeaderButton>
          <HeaderButton url="/careers" isSelected={selectedPage === 'Careers'} onClick={handleClick}>Careers
          </HeaderButton>
          <HeaderButton url="/about" isSelected={selectedPage === 'About'} onClick={handleClick}>About
          </HeaderButton>
          <HeaderButton url="/security" isSelected={selectedPage === 'Security'} onClick={handleClick}>Security
          </HeaderButton>
        </ul>
      </nav>
      <div className="login">
      </div>
      <button className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} ref={burgerRef}>
      </button>
    </header>
  );
}
