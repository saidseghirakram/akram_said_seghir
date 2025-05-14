
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import TimelineItem, { TimelineEvent } from '@/components/ui/TimelineItem';

const About = () => {
  const timeline: TimelineEvent[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      organization: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: 'Leading the frontend development team in building scalable and performant web applications. Implementing modern frontend architecture and best practices.',
      type: 'experience',
    },
    {
      id: '2',
      title: 'Frontend Developer',
      organization: 'Digital Solutions Co.',
      location: 'New York, NY',
      period: '2018 - 2021',
      description: 'Developed responsive web applications and websites for various clients using React, TypeScript, and modern CSS techniques.',
      type: 'experience',
    },
    {
      id: '3',
      title: 'Master of Computer Science',
      organization: 'Tech University',
      location: 'Boston, MA',
      period: '2016 - 2018',
      description: 'Specialized in web technologies and human-computer interaction. Completed thesis on improving user experience in web applications.',
      type: 'education',
    },
    {
      id: '4',
      title: 'Bachelor of Computer Science',
      organization: 'State University',
      location: 'Chicago, IL',
      period: '2012 - 2016',
      description: 'Graduated with honors. Focused on software engineering and web development.',
      type: 'education',
    },
  ];
  
  const skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS/Sass', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
    { name: 'Mobile', items: ['React Native', 'Flutter', 'iOS/Swift', 'Android/Kotlin'] },
    { name: 'Tools & Others', items: ['Git', 'Docker', 'Figma', 'AWS', 'CI/CD'] },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <AnimatedHeading 
              title="About Me"
              subtitle="Full Stack Web & Mobile Developer with a passion for creating elegant, efficient, and user-centered digital experiences"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <p>
                I'm Akram, a seasoned Full Stack Developer with a strong focus on creating intuitive and performant digital experiences. With over 5 years of professional experience, I specialize in building modern web and mobile applications that are not only beautiful but also functionally robust.
              </p>
              <p>
                My approach to development is centered around solving real problems and creating value for users. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices in the ever-evolving field of software development.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community through blog posts and technical talks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Experience & Education"
            subtitle="My professional journey and academic background"
          />
          
          <div className="mt-12">
            {timeline.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-card border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <svg 
                        width="6" 
                        height="6" 
                        viewBox="0 0 6 6" 
                        className="mr-2 text-primary"
                      >
                        <rect width="6" height="6" fill="currentColor" />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
