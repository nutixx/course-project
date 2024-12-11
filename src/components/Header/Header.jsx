import "./Header.css";
import { useState, useRef, useEffect } from "react";
import HeaderButton from "./HeaderButton";

let lastSelected;

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('');

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Перемикання стану
  };

  function handleClick(event) {
    lastSelected = event.target.innerText
    setSelectedPage(lastSelected);
    console.log(lastSelected)
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
      console.log(lastSelected)
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
          <HeaderButton url="/" isSelected={lastSelected === 'Home'} onClick={handleClick}>Домівка
          </HeaderButton>
          <HeaderButton url="/careers" isSelected={lastSelected === 'Careers'} onClick={handleClick}>Кар&apos;єра
          </HeaderButton>
          <HeaderButton url="/about" isSelected={lastSelected === 'About'} onClick={handleClick}>Про нас
          </HeaderButton>
          <HeaderButton url="/security" isSelected={lastSelected === 'Security'} onClick={handleClick}>Безпека
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
