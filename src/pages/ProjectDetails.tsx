import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { projectsData, Project } from '@/constants/projectsData';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    const foundProject = projectsData.find(p => p.id === id);
    setTimeout(() => {
      setProject(foundProject || null);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-4xl font-light mb-6">Project not found</h1>
          <Link to="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto py-16"
      >
        {/* Back Button */}
        <Link to="/projects">
          <Button variant="ghost" className="mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 inline-block">
              {project.type}
            </span>
            <h1 className="text-4xl md:text-5xl font-light mb-6">{project.title}</h1>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
           {/*  <div className="mt-8 rounded-lg overflow-hidden border bg-card">
              <img 
                src={project.image || '/images/placeholder.jpg'} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div> */}
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-card border rounded-lg p-6 sticky top-24">
              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent text-accent-foreground"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    <span className="flex items-center">
                      <Github className="w-5 h-5 mr-3" />
                      View Source Code
                    </span>
                    <ArrowLeft className="w-4 h-4 rotate-[-135deg]" />
                  </a>
                )}
                
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <span className="flex items-center">
                      <ExternalLink className="w-5 h-5 mr-3" />
                      Visit Live Site
                    </span>
                    <ArrowLeft className="w-4 h-4 rotate-[-135deg]" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProjectDetails; 