import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Сергей Корень
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>Обо мне</a>
          <a href="#tours" onClick={() => setIsOpen(false)}>Туры и Экскурсии</a>
          <a href="#blog" onClick={() => setIsOpen(false)}>О Португалии</a>
          <a href="#reviews" onClick={() => setIsOpen(false)}>Отзывы</a>
          <a href="#contact" className="nav-contact-btn" onClick={() => setIsOpen(false)}>Связаться</a>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}
