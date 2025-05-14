import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import TimelineItem, { TimelineEvent } from '@/components/ui/TimelineItem';

const About = () => {
  const timeline: TimelineEvent[] = [
    {
      id: '1',
      title: 'Master\'s in System Information (Software Engineering)',
      organization: 'University Yahia Fares',
      location: 'Médéa, Algeria',
      period: '2023 - Present',
      description: 'Pursuing advanced studies in software engineering and system information.',
      type: 'education',
    },
    {
      id: '2',
      title: 'Founder & Lead Organizer',
      organization: 'Techverse',
      location: 'Algeria',
      period: '2023 - Present',
      description: 'Established a tech club to organize workshops, mentor young developers, and foster a tech community in Algeria.',
      type: 'experience',
    },
    {
      id: '3',
      title: 'Freelance Developer',
      organization: 'Self-employed',
      location: 'Remote',
      period: '2021 - Present',
      description: 'Developed multiple full-stack web and mobile apps for clients using modern frameworks and tools. Focused on delivering real value and business impact.',
      type: 'experience',
    },
    {
      id: '4',
      title: 'Bachelor\'s in System Information',
      organization: 'University Yahia Fares',
      location: 'Médéa, Algeria',
      period: '2020 - 2023',
      description: 'Graduated with a strong foundation in software systems and development.',
      type: 'education',
    },
  ];
  
  const skills = [
    { 
      name: 'Web Development', 
      items: [
        'Next js',
        'React',
        'TypeScript',
        'Node.js',
        'Firebase',
        'MongoDB'
      ] 
    },
    { 
      name: 'Mobile Development', 
      items: [
        'React Native',
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'Mobile UI/UX'
      ] 
    },
    { 
      name: 'AI/ML', 
      items: [
        'TensorFlow',
        'scikit-learn',
        'Python',
        'Machine Learning',
        'AI Integration'
      ] 
    },
    { 
      name: 'Tools & Others', 
      items: [
        'Git',
        'Figma',
        'Docker',
        'RESTful APIs'
      ] 
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <AnimatedHeading 
              title="About Me"
              subtitle="Software Engineer | Web, Mobile & AI/ML Developer | Founder of Techverse club| Content Creator"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <p>
                I'm Akram Said Seghir, a passionate Software Engineer from Algeria with a strong focus on web development, mobile applications, and AI/ML solutions. With a solid background in both academic and real-world environments, I love building intelligent and impactful digital products that solve real-world problems.
              </p>
              <p>
                I work with modern technologies including React, React Native, TypeScript, Node.js, Firebase, MongoDB, and also integrate machine learning models into apps using Python frameworks like TensorFlow and scikit-learn. Whether it's a business dashboard, an e-commerce platform, or a smart app powered by AI, I aim to deliver clean, maintainable, and scalable solutions.
              </p>
              <p>
                In 2023, I founded Techverse, a tech community that brings together developers and learners to share knowledge and grow together. I'm also a content creator, sharing tips and tutorials in Arabic to support and inspire the next generation of developers in the MENA region.
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
