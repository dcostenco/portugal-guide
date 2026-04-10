import { motion } from 'framer-motion';
import { FiClock, FiMapPin } from 'react-icons/fi';
import './Tours.css';

export default function Tours({ tours }) {
  return (
    <section id="tours" className="section tours">
      <div className="container">
        <h2 className="section-title">Мои Экскурсии и Туры</h2>
        <div className="tours-grid">
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id} 
              className="tour-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="tour-image">
                <img src={tour.image} alt={tour.title} onError={(e) => { e.target.src = '/images/lisbon.png'; }} />
              </div>
              <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                
                <div className="tour-meta">
                  <div className="meta-item">
                    <FiClock className="meta-icon" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="meta-item">
                    <FiMapPin className="meta-icon" />
                    <span>{tour.route}</span>
                  </div>
                </div>
                
                <p className="tour-description">{tour.description}</p>
                <a href="#contact" className="btn btn-secondary tour-btn">Заказать</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
