import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Skills categories and items
const skillCategories = [
  {
    name: 'Design',
    icon: '🎨',
    skills: [
      { name: 'UI/UX Design', level: 85 },
      { name: 'Web Design', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Wireframing', level: 80 },
      { name: 'Prototyping', level: 75 },
    ]
  },
  {
    name: 'Frontend',
    icon: '💻',
    skills: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Vite', level: 75 },
      { name: 'Responsive Design', level: 85 },
    ]
  }
];

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({ name, level, delay }) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px" });
  
  return (
    <div ref={skillRef} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="text-primary-600 dark:text-primary-400"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </motion.div>
      </div>
    </div>
  );
};

const SkillCategory: React.FC<{ category: typeof skillCategories[0]; index: number }> = ({ category, index }) => {
  const categoryRef = useRef(null);
  const isInView = useInView(categoryRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={categoryRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>
      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skillIndex}
            name={skill.name}
            level={skill.level}
            delay={index * 0.2 + skillIndex * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800/50">
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}
      </style>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">
            A showcase of my technical skills and design expertise gained through hands-on project experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>

        {/* Tools and technologies showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 
              'Vite', 'Figma', 'UI/UX Design', 'Web Design'
            ].map((tool, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400">{tool.charAt(0)}</div>
                </div>
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;