import './Footer.css';

export default function Footer({ siteVars }) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Сергей Корень</h3>
            <p>{siteVars.description}</p>
          </div>
          
          <div className="footer-links">
            <h4>Навигация</h4>
            <a href="#about">Обо мне</a>
            <a href="#tours">Туры и Экскурсии</a>
            <a href="#reviews">Отзывы</a>
            <a href="#contact">Контакты</a>
          </div>
          
          <div className="footer-legal">
            <h4>Документы</h4>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {siteVars.title}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
