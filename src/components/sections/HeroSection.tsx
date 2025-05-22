import React from 'react';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-400/10 dark:bg-primary-700/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary-400/10 dark:bg-secondary-700/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="animate-on-scroll">
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-3">
                  Hello, I'm
                </p>
                <h1 className="sliding-text-animation">
                  <span>Sagar Bisht</span>
                </h1>
                <div className="h-0.5 w-24 bg-primary-500 my-6"></div>
              </div>
              
              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  <TypeAnimation
                    sequence={[
                      'UI/UX Designer',
                      2000,
                      'Web Developer',
                      2000,
                      'Creative Designer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-primary-600 dark:text-primary-400"
                  />
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  I craft exceptional digital experiences through innovative design and development.
                  Transforming complex problems into elegant, user-centered solutions.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 order-1 lg:order-2 relative animate-on-scroll">
            <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-600/20 dark:to-secondary-600/20">
              <img 
                src="/images/software.jpg" 
                alt="Sagar Bisht - UI/UX Designer & Web Developer" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary-500 rounded-xl dark:border-primary-400"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary-500 rounded-xl dark:border-secondary-400"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-sm">Scroll</span>
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;