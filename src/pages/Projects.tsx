import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';
import { Project, projectsData, filterCategories } from '@/constants/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => 
        project.type.toLowerCase() === filter.toLowerCase()
      ));
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Projects"
            subtitle="A collection of my work across web, mobile, and AI"
          />
          
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-16">
            {filterCategories.map((option) => (
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
