import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import ChatBox from '../components/ChatBox';

const Home: React.FC = () => {
  useEffect(() => {
    // Animation on scroll functionality
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const slidingElements = document.querySelectorAll('.sliding-text-animation');
      
      const triggerAnimation = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      };
      
      const observer = new IntersectionObserver(triggerAnimation, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      });
      
      elements.forEach(element => {
        observer.observe(element);
      });
      
      slidingElements.forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        elements.forEach(element => {
          observer.unobserve(element);
        });
        
        slidingElements.forEach(element => {
          observer.unobserve(element);
        });
      };
    };
    
    animateOnScroll();
  }, []);

  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <ChatBox />
    </div>
  );
};

export default Home;