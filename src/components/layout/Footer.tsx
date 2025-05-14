
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Github', icon: Github, url: 'https://github.com/saidseghirakram' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/akram-saidseghir/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/akram4dev/?hl=fr' },
    { name: 'Mail', icon: Mail, url: 'akramsaidseghir26@gmail.com' },
  ];
  
  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-secondary py-12 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-medium mb-4">AKRAM<span className="text-muted-foreground">.DEV</span></h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Web & Mobile Developer focused on creating elegant, efficient, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              Ready to start your next project? Send me an email or connect on social media.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center text-primary border-b border-primary hover:opacity-80 transition-opacity"
            >
              Let's work together
            </Link>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Akram said seghir. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Designed & Developed with ♥ by Akram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
