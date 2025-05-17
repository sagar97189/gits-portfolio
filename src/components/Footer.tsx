import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/', label: 'Twitter' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/', label: 'Instagram' },
    { icon: <Mail size={20} />, href: 'mailto:contact@sagarbisht.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary-600 dark:text-primary-400 mb-4">
              Sagar Bisht
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Transforming ideas into exceptional digital experiences through innovative design and development.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <a 
              href="#contact" 
              className="btn btn-primary mb-4"
            >
              Let's work together
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Sagar Bisht. All rights reserved.
          </p>
          
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;