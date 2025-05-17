import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Github, Globe, Star, Code, Layers, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Project categories for filtering
const projectCategories = [
  { id: 'all', label: 'All Projects', icon: <Layers size={18} /> },
  { id: 'web', label: 'Web Development', icon: <Globe size={18} /> },
  { id: 'ui', label: 'UI/UX & Design', icon: <Eye size={18} /> },
  { id: 'code', label: 'Programming', icon: <Code size={18} /> }
];

// Enhanced projects data
const projects = [
  {
    id: 1,
    title: 'Admin Dashboard',
    subtitle: 'Modern Admin Panel',
    category: 'web',
    description: 'A comprehensive admin dashboard with modern UI and essential management features.',
    longDescription: 'A feature-rich admin dashboard built with modern web technologies. The dashboard provides a clean and intuitive interface for managing various aspects of your application.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://lppo-eim80pwhg-sagars-projects-66075d6a.vercel.app/',
    github: 'https://github.com/yourusername/admin-dashboard',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    stats: {
      stars: 156,
      forks: 42,
      views: 3200
    },
    screenshots: [
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 2,
    title: 'Jwels',
    subtitle: 'Luxury Jewelry E-commerce',
    category: 'web',
    description: 'An elegant e-commerce platform for luxury jewelry, featuring stunning product displays and seamless shopping experience.',
    longDescription: 'Jwels is a sophisticated jewelry e-commerce platform that combines beautiful design with powerful functionality. The website showcases luxury jewelry pieces with high-quality imagery and provides an intuitive shopping experience for customers seeking premium accessories.',
    image: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://jwels-ffc2b82r4-sagars-projects-66075d6a.vercel.app/',
    github: 'https://github.com/yourusername/jwels',
    featured: true,
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'E-commerce'],
    stats: {
      stars: 145,
      forks: 38,
      views: 3100
    },
    screenshots: [
      'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1616096/pexels-photo-1616096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 3,
    title: 'Nexus Games',
    subtitle: 'Gaming Marketplace Platform',
    category: 'web',
    description: 'A modern gaming marketplace built with React and Vite, featuring a responsive design, dark mode, and seamless game browsing experience.',
    longDescription: 'Nexus Games redefines the gaming marketplace experience with its modern interface and powerful features. Built using React and Vite, this platform offers gamers a seamless way to discover, purchase, and manage their game library.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://game-taupe-three-10.vercel.app/',
    github: 'https://github.com/yourusername/nexus-games',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    stats: {
      stars: 128,
      forks: 34,
      views: 2800
    },
    screenshots: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 4,
    title: 'Modern App Interface',
    subtitle: 'UI/UX Design Concept',
    category: 'ui',
    description: 'A sleek and modern mobile application interface design showcasing intuitive user experience and contemporary design patterns.',
    longDescription: 'This UI/UX design project demonstrates modern design principles with a focus on user-centric interaction. The interface features clean typography, thoughtful spacing, and an engaging color palette that enhances user engagement.',
    image: '/images/WhatsApp Image 2025-05-15 at 12.38.40_e0d59a20.jpg',
    link: '#',
    github: '#',
    featured: true,
    technologies: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    stats: {
      stars: 95,
      forks: 28,
      views: 2400
    },
    screenshots: [
      '/images/WhatsApp Image 2025-05-15 at 12.38.40_e0d59a20.jpg'
    ]
  },
  {
    id: 5,
    title: 'Brand Identity Design',
    subtitle: 'Visual Design & Branding',
    category: 'ui',
    description: 'Comprehensive brand identity design showcasing logo variations, color schemes, and typography guidelines.',
    longDescription: 'A complete brand identity project that includes logo design, color palette selection, typography hierarchy, and brand guidelines. The design system ensures consistency across various brand touchpoints.',
    image: '/images/WhatsApp Image 2025-05-15 at 12.38.49_60e153e2.jpg',
    link: '#',
    github: '#',
    featured: true,
    technologies: ['Adobe Illustrator', 'Brand Design', 'Typography', 'Color Theory'],
    stats: {
      stars: 112,
      forks: 32,
      views: 2800
    },
    screenshots: [
      '/images/WhatsApp Image 2025-05-15 at 12.38.49_60e153e2.jpg'
    ]
  },
  {
    id: 6,
    title: 'Digital Art Collection',
    subtitle: 'Creative Design Portfolio',
    category: 'ui',
    description: 'A collection of digital artwork and creative designs showcasing various styles and techniques.',
    longDescription: 'This creative portfolio showcases a diverse range of digital artwork, including illustrations, manipulations, and graphic designs. Each piece demonstrates mastery of different design tools and artistic techniques.',
    image: '/images/WhatsApp Image 2025-05-15 at 12.40.27_d3103997.jpg',
    link: '#',
    github: '#',
    featured: true,
    technologies: ['Photoshop', 'Digital Art', 'Illustration', 'Creative Design'],
    stats: {
      stars: 135,
      forks: 45,
      views: 3200
    },
    screenshots: [
      '/images/WhatsApp Image 2025-05-15 at 12.40.27_d3103997.jpg'
    ]
  }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my latest works showcasing innovative solutions and creative designs
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow'
              }`}
            >
              {category.icon}
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-xs font-medium">Featured</span>
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Star size={14} />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {project.stats.views}
                    </span>
                  </div>
                  <span className="text-primary-600 dark:text-primary-400 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={closeProjectModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Carousel */}
                <div className="relative aspect-video">
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={closeProjectModal}
                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white rounded-full text-sm backdrop-blur-sm">
                    {currentImageIndex + 1} / {selectedProject.screenshots.length}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{selectedProject.subtitle}</p>
                    </div>
                    {selectedProject.featured && (
                      <span className="flex items-center gap-2 text-yellow-500">
                        <Star size={20} fill="currentColor" />
                        <span className="font-medium">Featured Project</span>
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Description */}
                  <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.stars}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Stars</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.forks}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Forks</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {selectedProject.stats.views}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Views</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      <Globe size={18} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline flex-1 flex items-center justify-center gap-2"
                    >
                      <Github size={18} />
                      View Source
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;