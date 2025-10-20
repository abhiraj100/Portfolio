import React from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const handleContactClick = () => {
    // const contactSection = document.querySelector('#contact');
    // if (contactSection) {
    //   contactSection.scrollIntoView({ behavior: 'smooth' });
    // }

    const subject = "Let's Work Together";
    const body =
      "Hi Abhiraj,%0D%0A%0D%0AI would like to discuss a project with you.";
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text">
            <motion.div className="hero-greeting" variants={itemVariants}>
              <span className="greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-highlight">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2 className="hero-title" variants={itemVariants}>
              {personalInfo.title}
            </motion.h2>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              {personalInfo.subtitle}
            </motion.p>

            <motion.div className="hero-location" variants={itemVariants}>
              <FiMapPin />
              <span>{personalInfo.location}</span>
            </motion.div>

            <motion.p className="hero-bio" variants={itemVariants}>
              {personalInfo.bio}
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <motion.button
                className="btn btn-primary"
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Get In Touch
              </motion.button>

              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                download="Abhiraj_Yadav_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download Resume
              </motion.a>
            </motion.div>

            {/* <motion.div className="hero-social" variants={itemVariants}>
              {socialLinks.slice(0, 4).map((social, index) => {
                const IconComponent = social.name === 'LinkedIn' ? FiLinkedin :
                                   social.name === 'GitHub' ? FiGithub :
                                   social.name === 'Email' ? FiMail : FiGithub;

                     const href = social.name === 'Email' 
                  ? `mailto:${personalInfo.email}?subject=Hello from Portfolio`
                  : social.url; */}

            <motion.div className="hero-social" variants={itemVariants}>
              {socialLinks.slice(0, 4).map((social, index) => {
                const IconComponent =
                  social.name === "LinkedIn"
                    ? FiLinkedin
                    : social.name === "GitHub"
                    ? FiGithub
                    : social.name === "Email"
                    ? FiMail
                    : FiGithub;

                // ✅ If it's Email, use mailto: link
                const href =
                  social.name === "Email"
                    ? `mailto:${personalInfo.email}?subject=Hello from Portfolio`
                    : social.url;

                return (
                  // <motion.a
                  //   key={social.name}
                  //   href={social.url}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   className="social-link"
                  //   style={{ '--social-color': social.color }}
                  //   whileHover={{ scale: 1.2, rotate: 5 }}
                  //   whileTap={{ scale: 0.9 }}
                  //   initial={{ opacity: 0, y: 20 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ delay: 0.8 + index * 0.1 }}
                  // >
                  //   <IconComponent size={20} />
                  // </motion.a>

                  <motion.a
                    key={social.name}
                    href={href}
                    target={social.name === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ "--social-color": social.color }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-container">
              <motion.div
                className="image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  // src="src/assets/profile.jpeg"
                  src="src/assets/mypic.jpeg"
                  alt={personalInfo.name}
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="tech-badge">React</div>
              </motion.div>

              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="tech-badge">Node.js</div>
              </motion.div>

              <motion.div
                className="floating-element element-3"
                animate={{
                  y: [-5, 15, -5],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="tech-badge">MongoDB</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;