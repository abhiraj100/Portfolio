import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiUser, 
  FiMessageSquare,
  FiLinkedin,
  FiGithub,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#ea4335'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '#10b981'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: '#f59e0b'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Let's Work Together
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </motion.p>

          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-intro">
                <h3>Get in Touch</h3>
                <p>
                  I'm always excited to work on new projects and collaborate with 
                  amazing people. Whether you have a project in mind or just want 
                  to say hello, feel free to reach out!
                </p>
              </div>

              <div className="contact-methods">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      className="contact-method"
                      style={{ '--method-color': method.color }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="method-icon">
                        <IconComponent />
                      </div>
                      <div className="method-content">
                        <h4>{method.label}</h4>
                        <p>{method.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="social-connect">
                <h4>Connect with me</h4>
                <div className="social-links">
                  {socialLinks.slice(0, 4).map((social, index) => {
                    const IconComponent = social.name === 'LinkedIn' ? FiLinkedin :
                                       social.name === 'GitHub' ? FiGithub :
                                       social.name === 'Email' ? FiMail : FiGithub;
                    
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        style={{ '--social-color': social.color }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="availability-status">
                <div className="status-indicator">
                  <div className="status-dot"></div>
                  <span>Available for new projects</span>
                </div>
                <p>Currently accepting freelance work and full-time opportunities.</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Project discussion, collaboration, etc."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus ? submitStatus : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <FiCheckCircle />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <FiAlertCircle />
                      Try Again
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you for your message! I'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Something went wrong. Please try again or contact me directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="contact-cta" variants={itemVariants}>
            <h3>Ready to start your project?</h3>
            <p>
              Let's turn your ideas into reality. I'm here to help you build 
              something amazing that your users will love.
            </p>
            <div className="cta-actions">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary"
              >
                <FiMail />
                Send Email
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FiLinkedin />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;