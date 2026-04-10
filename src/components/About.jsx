import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import './About.css';

export default function About({ content }) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">{content.title}</h2>
        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-placeholder">
              <span>Фото Сергея</span>
              <p className="image-tip">(Здесь будет ваше фото. Вы сможете заменить его, загрузив файл portrait.jpg)</p>
            </div>
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {content.text.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
            
            <div className="license-badge">
              <FiCheckCircle size={24} className="license-icon" />
              <span>{content.license}</span>
            </div>
            
            <a href="#tours" className="btn btn-primary about-btn">Посмотреть туры</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
