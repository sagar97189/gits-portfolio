import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Award, ChevronDown, Code, Palette, Brain } from 'lucide-react';

// Tilt Effect Component
const TiltEffect: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 20, y: y * -20 }); // Adjust tilt intensity here
  };

  return (
    <div
      className="relative transition-transform duration-200 ease-out"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1, 1, 1)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

// Ripple Effect Component
const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const createRipple = (x: number, y: number) => {
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <>
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
};

// Glitter Effect Component
const GlitterEffect: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    color: string;
    angle: number;
  }>>([]);

  useEffect(() => {
    const createParticle = (x: number, y: number) => {
      const colors = [
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 215, 0, 0.8)',  // Gold
        'rgba(176, 224, 230, 0.8)', // Powder blue
        'rgba(255, 182, 193, 0.8)'  // Light pink
      ];
      
      // Create multiple particles per mouse move
      const newParticles = Array.from({ length: 3 }, (_, i) => ({
        id: Date.now() + i,
        x,
        y,
        size: Math.random() * 15 + 10, // Larger particles
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2
      }));
      
      setParticles(prev => [...prev, ...newParticles]);
      
      // Remove particles after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
      }, 1000); // Longer duration
    };

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      createParticle(x, y);
    };

    const element = document.querySelector('.glitter-container');
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle at center, ${particle.color} 0%, transparent 70%)`,
            transform: `translate(-50%, -50%) rotate(${particle.angle}rad)`,
            animation: 'glitter-fade 1s ease-out forwards',
            boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
            zIndex: 50
          }}
        />
      ))}
      <style>{`
        @keyframes glitter-fade {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1) rotate(180deg);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Education data
const education = [
  {
    period: 'Present',
    degree: 'UI/UX Professional Program',
    institution: 'Arena Animation, Sector 7',
    description: 'Comprehensive training in UI/UX design principles, web design, and modern design tools.',
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD'],
    icon: <Palette className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    period: 'Completed',
    degree: '12th Class (Senior Secondary)',
    institution: 'CBSE Board',
    description: 'Completed senior secondary education with focus on Science stream.',
    skills: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    icon: <Code className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    period: 'Completed',
    degree: '10th Class (Secondary)',
    institution: 'CBSE Board',
    description: 'Completed secondary education with excellent academic performance.',
    skills: ['Science', 'Mathematics', 'English', 'Social Studies'],
    icon: <Brain className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500'
  }
];

const AboutSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            Get to know me better: my journey, passion, and what drives me as a designer and developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">I'm Sagar Bisht, a passionate UI/UX Designer and Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a creative UI/UX designer and web developer with a strong foundation in design principles and modern web technologies. Through my personal projects, I've gained hands-on experience in creating intuitive user interfaces and engaging user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My approach combines aesthetic sensibility with technical expertise, resulting in designs that are not only visually appealing but also highly functional and user-focused. I believe that great design should solve problems elegantly and create meaningful connections with users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not designing or coding, you can find me exploring new design trends, learning new technologies, or sketching ideas for future projects. I'm constantly seeking to expand my knowledge and refine my craft.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-bold text-xl mb-4">Let's Connect</h4>
                <a 
                  href="/src/images/cv.pdf" 
                  download 
                  className="btn btn-primary w-full justify-center"
                >
                  Download CV
                </a>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4">Availability</h4>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-3 rounded-lg text-center">
                  Open to new projects
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              <TiltEffect>
                <div 
                  className="aspect-square rounded-2xl overflow-hidden group relative hover:perspective-1000 cursor-pointer glitter-container"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const rippleEffect = e.currentTarget.querySelector('.ripple-effect') as any;
                    if (rippleEffect?.createRipple) {
                      rippleEffect.createRipple(x, y);
                    }
                  }}
                >
                  <div className="relative w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
                    <img 
                      src="/src/images/me.jpg" 
                      alt="Sagar Bisht at work" 
                      className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-110 group-hover:contrast-110"
                    />
                    
                    {/* Shine sweep effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                      <div className="absolute inset-0 transform -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>

                    {/* Glowing overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-transparent to-secondary-500/0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-primary-400/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
                    </div>

                    {/* Effects */}
                    <GlitterEffect />
                    <RippleEffect />
                  </div>
                </div>
              </TiltEffect>
              
              {/* Decorative elements with enhanced animations */}
              <div className="absolute -top-6 -right-6 w-44 h-44 border-2 border-primary-500 rounded-xl dark:border-primary-400 -z-10 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"></div>
              <div className="absolute -bottom-6 -left-6 w-44 h-44 border-2 border-secondary-500 rounded-xl dark:border-secondary-400 -z-10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"></div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-32">
          <div className="animate-on-scroll">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 mr-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div 
                  key={index}
                  className="group relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 pb-8 last:pb-0"
                >
                  <div 
                    className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} transform transition-transform group-hover:scale-125`}
                  ></div>
                  
                  {/* Main content */}
                  <div 
                    className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  >
                    <div className="absolute top-4 right-4 bg-gradient-to-r ${item.color} p-2 rounded-lg text-white">
                      {item.icon}
                    </div>
                    
                    <span className="inline-block px-3 py-1 text-sm bg-gradient-to-r ${item.color} text-white rounded-full mb-2">
                      {item.period}
                    </span>
                    
                    <h4 className="text-xl font-bold mb-1 pr-12">{item.degree}</h4>
                    <p className="text-secondary-600 dark:text-secondary-400 mb-3">{item.institution}</p>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${expandedCard === index ? 'max-h-96' : 'max-h-0'}`}>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-3 py-1 text-sm rounded-full bg-opacity-10 bg-gradient-to-r ${item.color} text-gray-700 dark:text-gray-300`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      className={`absolute bottom-4 right-4 p-2 rounded-full transition-transform duration-300 ${
                        expandedCard === index ? 'rotate-180' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  
                  {/* Progress line animation */}
                  <div 
                    className="absolute left-[-1px] top-0 w-0.5 bg-gradient-to-b from-transparent via-primary-500 to-transparent h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 1s cubic-bezier(0, 0, 0.2, 1);
          width: 12px;
          height: 12px;
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(100);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;