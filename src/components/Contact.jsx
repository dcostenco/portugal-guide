import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMessageCircle, FiFacebook } from 'react-icons/fi';
import './Contact.css';

export default function Contact({ siteVars }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title" style={{ textAlign: 'left' }}>Давайте спланируем ваше путешествие</h2>
            <p className="contact-desc">
              Свяжитесь со мной любым удобным способом, и я отвечу на все ваши вопросы, помогу выбрать оптимальный маршрут и организую ваши незабываемые каникулы в Португалии.
            </p>
            
            <div className="contact-methods">
              <a href={`tel:${siteVars.phone.replace(/[^0-9+]/g, '')}`} className="contact-method">
                <div className="contact-icon phone"><FiPhone size={24} /></div>
                <div>
                  <span className="contact-label">Телефон</span>
                  <span className="contact-value">{siteVars.phone}</span>
                </div>
              </a>
              
              <a href={siteVars.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon whatsapp"><FiMessageCircle size={24} /></div>
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">Написать сообщение</span>
                </div>
              </a>
              
              <a href={`mailto:${siteVars.email}`} className="contact-method">
                <div className="contact-icon email"><FiMail size={24} /></div>
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{siteVars.email}</span>
                </div>
              </a>

              {siteVars.facebookUrl && (
                <a href={siteVars.facebookUrl} target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div className="contact-icon facebook"><FiFacebook size={24} /></div>
                  <div>
                    <span className="contact-label">Facebook</span>
                    <span className="contact-value">Мой профиль</span>
                  </div>
                </a>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Функция отправки будет настроена после привязки вашей почты!'); }}>
              <h3>Написать мне</h3>
              <div className="form-group">
                <label>Ваше имя</label>
                <input type="text" placeholder="Иван Иванов" required />
              </div>
              <div className="form-group">
                <label>Email или Телефон</label>
                <input type="text" placeholder="Укажите, как с вами связаться" required />
              </div>
              <div className="form-group">
                <label>Какая экскурсия вас интересует?</label>
                <textarea rows="4" placeholder="Ваши пожелания и даты..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Отправить заявку</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
