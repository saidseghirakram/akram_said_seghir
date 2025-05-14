
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  type: 'web' | 'mobile' | 'design' | 'open-source';
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="group relative bg-card border rounded-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background gradient overlay that appears on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="p-6 relative z-10">
        <div className="mb-4 flex justify-between items-start">
          <div>
            <motion.span 
              className="text-xs font-medium px-2 py-1 rounded bg-accent text-accent-foreground inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {project.type}
            </motion.span>
            <motion.h3 
              className="text-xl font-medium"
              animate={{ color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <motion.span 
              key={tag} 
              className="text-xs px-2 py-1 border rounded-full text-muted-foreground"
              whileHover={{ 
                backgroundColor: 'hsl(var(--accent))', 
                scale: 1.05 
              }}
              transition={{ duration: 0.2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mt-auto p-6 pt-0 flex justify-between items-center relative z-10">
        <div className="flex space-x-3">
          <TooltipProvider>
            {project.githubUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="GitHub Repository"
                  >
                    <Github size={16} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub Repository</p>
                </TooltipContent>
              </Tooltip>
            )}

            {project.liveUrl && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Live Demo</p>
                </TooltipContent>
              </Tooltip>
            )}
          </TooltipProvider>
        </div>

        <Link 
          to={`/projects/${project.id}`}
          className="flex items-center text-sm font-medium group relative"
        >
          <span className="mr-2">View Project</span>
          <motion.div
            className="relative"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRight size={16} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
