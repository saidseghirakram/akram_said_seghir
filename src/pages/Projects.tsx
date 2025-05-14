
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ProjectCard, { Project } from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projectsData: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'web',
    },
    {
      id: '2',
      title: 'Travel Companion App',
      description: 'A mobile app for travelers to plan trips, find recommendations and connect with other travelers.',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'mobile',
    },
    {
      id: '3',
      title: 'Portfolio Design System',
      description: 'A customizable portfolio template built with design systems principles.',
      tags: ['Figma', 'React', 'Storybook', 'Design Systems'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'design',
    },
    {
      id: '4',
      title: 'Task Management Dashboard',
      description: 'An intuitive dashboard for managing tasks and projects with drag and drop functionality.',
      tags: ['Vue.js', 'Vuex', 'Firebase', 'TailwindCSS'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'web',
    },
    {
      id: '5',
      title: 'Fitness Tracker',
      description: 'A mobile application to track workouts, nutrition, and fitness progress.',
      tags: ['Flutter', 'Firebase', 'Google Fit API'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'mobile',
    },
    {
      id: '6',
      title: 'Open Source UI Component Library',
      description: 'A collection of reusable UI components built with React and TypeScript.',
      tags: ['React', 'TypeScript', 'Storybook', 'Jest'],
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com',
      type: 'open-source',
    },
  ];
  
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'design', label: 'Design' },
    { value: 'open-source', label: 'Open Source' },
  ];
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.type === filter));
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Projects"
            subtitle="A collection of my work across web, mobile, and design"
          />
          
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-16">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                onClick={() => handleFilterChange(option.value)}
                className="text-sm"
              >
                {option.label}
              </Button>
            ))}
          </div>
          
          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
              
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground">No projects found for this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
