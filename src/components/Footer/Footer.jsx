import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUp,
  FiHeart,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ Email handler function
  const handleEmailClick = () => {
    const subject = "Hello! Let's Connect";
    const body =
      "Hi Abhiraj,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ARegards";
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const quickContact = [
    {
      icon: FiMail,
      text: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      text: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    { icon: FiMapPin, text: personalInfo.location, href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-brand">
                <h3 className="brand-name">{personalInfo.name}</h3>
                <p className="brand-tagline">{personalInfo.title}</p>
              </div>
              <p className="footer-description">
                Passionate Full Stack Developer creating innovative web
                solutions with modern technologies. Always learning, always
                building.
              </p>
              <div className="footer-social">
                {socialLinks.slice(0, 4).map((social, index) => {
                  const IconComponent =
                    social.name === "LinkedIn"
                      ? FiLinkedin
                      : social.name === "GitHub"
                      ? FiGithub
                      : social.name === "Email"
                      ? FiMail
                      : FiGithub;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ "--social-color": social.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="section-title">Quick Links</h4>
              <nav className="footer-nav">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="section-title">Get in Touch</h4>
              <div className="contact-info">
                {quickContact.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a key={index} href={contact.href} className="contact-item">
                      <IconComponent className="contact-icon" />
                      <span>{contact.text}</span>
                    </a>
                  );
                })}
              </div>
              <div className="availability-badge">
                <div className="status-dot"></div>
                <span>Available for projects</span>
              </div>
            </div>

            {/* Newsletter/CTA */}
            <div className="footer-section">
              <h4 className="section-title">Let's Connect</h4>
              <p className="cta-text">
                Have a project in mind? Let's discuss how we can work together
                to bring your ideas to life.
              </p>
              <div className="cta-buttons">
                <a
                  // href={`mailto:${personalInfo.email}`}
                  // href={`mailto:${personalInfo.email}?subject=Hello! Let's Connect&body=Hi Abhiraj,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0ARegards`}
                  href={`mailto:${personalInfo.email}?subject=Hello! Let's Connect`}
                  className="btn btn-primary"
                >
                  <FiMail />
                  Say Hello
                </a>
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  download="Abhiraj_Yadav_Resume.pdf"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} {personalInfo.name}. Made with{" "}
                <FiHeart className="heart-icon" /> using React.js
              </p>
              <div className="footer-bottom-links">
                <a href="#" className="bottom-link">
                  Privacy Policy
                </a>
                <a href="#" className="bottom-link">
                  Terms of Service
                </a>
                <a href="#" className="bottom-link">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <FiArrowUp />
      </motion.button>

      {/* Background Elements */}
      <div className="footer-bg">
        <div className="footer-gradient"></div>
        <div className="footer-pattern"></div>
      </div>
    </footer>
  );
};

export default Footer;
