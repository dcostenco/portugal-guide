import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import './Reviews.css';

export default function Reviews({ reviews }) {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <h2 className="section-title">Отзывы туристов</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon" fill="currentColor" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-author">
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
