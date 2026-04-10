import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero({ content }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.p 
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {content.greeting}
        </motion.p>
        <motion.h1 
          className="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.heading}
        </motion.h1>
        <motion.p 
          className="hero-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.subheading}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#tours" className="btn btn-secondary hero-btn">
            {content.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
