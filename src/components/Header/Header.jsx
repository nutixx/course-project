import "./Header.css";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const location = useLocation(); // Отримуємо поточний маршрут

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Перемикання стану
  };

  const handleClickOutside = (event) => {
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
      <nav className={`nav ${isMenuOpen ? "open" : ""}`} ref={navRef}>
        <ul>
          <HeaderButton
            url="/"
            isSelected={location.pathname === "/"}
          >
            Домівка
          </HeaderButton>
          <HeaderButton
            url="/careers"
            isSelected={location.pathname === "/careers"}
          >
            Кар&apos;єра
          </HeaderButton>
          <HeaderButton
            url="/about"
            isSelected={location.pathname === "/about"}
          >
            Про нас
          </HeaderButton>
          <HeaderButton
            url="/security"
            isSelected={location.pathname === "/security"}
          >
            Безпека
          </HeaderButton>
        </ul>
      </nav>
      <div className="login"></div>
      <button
        className={`burger-menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        ref={burgerRef}
      ></button>
    </header>
  );
}
