import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    type: 'web' as const,
  },
  {
    id: '2',
    title: 'Travel Companion App',
    description: 'A mobile app for travelers to plan trips, find recommendations and connect with other travelers.',
    tags: ['React Native', 'Firebase', 'Google Maps API'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    type: 'mobile' as const,
  },
  {
    id: '3',
    title: 'Portfolio Design System',
    description: 'A customizable portfolio template built with design systems principles.',
    tags: ['Figma', 'React', 'Storybook', 'Design Systems'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
    type: 'design' as const,
  },
];

const services = [
  {
    title: 'Web Development',
    description: 'Creating fast, responsive, and user-friendly web applications using modern technologies.',
  },
  {
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications for iOS and Android.',
  },
  {
    title: 'AI & ML Integration',
    description: 'Integrating machine learning models and AI solutions into applications, including model fine-tuning and deployment.',
  },
];


const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CTO at TechStart',
    content: 'Akram delivered our project ahead of schedule and exceeded all expectations. His technical expertise and communication made the development process seamless.',
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, DesignHub',
    content: 'Working with Akram was a game-changer for our product. His ability to translate complex requirements into elegant solutions is remarkable.',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnoTech',
    content: 'I\'ve worked with many developers, but Akram stands out for his attention to detail and problem-solving skills. Highly recommended!',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO, WebSolutions',
    content: 'Akram\'s work on our platform was exceptional. He brings both technical skill and creative vision to every project.',
  },
  {
    name: 'David Park',
    role: 'Marketing Director, GrowthLabs',
    content: 'The website Akram built for us has significantly increased our conversion rates. His understanding of both design and functionality is impressive.',
  }
];

const skills = [
  { name: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript','shadCn'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'NextJs', 'REST API'] },
  { name: 'Mobile', items: ['React Native' , 'Multi platform'] },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'] },
];

const TypewriterText = () => {
  const words = ["Web Apps.", "Mobile Apps.", "ML Models.", "Digital Experiences."];
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [text, setText] = React.useState('');
  const [typingSpeed, setTypingSpeed] = React.useState(150);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(150);
      }
      
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWordIndex, typingSpeed, words]);
  
  return (
    <span className="relative">
      {text}
      <span className="absolute right-[-8px] top-0 inline-block h-full w-[3px] bg-primary animate-blink"></span>
    </span>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 border-b">
        <div className="container mx-auto flex flex-col items-center text-center">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-thin mb-6 max-w-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Akram — a Software Engineer Web & Mobile Developer
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-muted-foreground mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I build <TypewriterText />
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/projects">
              <Button size="lg" className="group">
                Explore my work
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity,
                    repeatType: "reverse", 
                    duration: 1,
                    repeatDelay: 1
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Button>
            </Link>
          </motion.div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-b">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Tech Stack"
            subtitle="Technologies and tools I work with to bring ideas to life"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-card border p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-medium mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Featured Projects"
            subtitle="A selection of my recent work across web, mobile, and design"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/projects">
              <Button variant="outline" size="lg">
                View all projects
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="What Clients Say"
            subtitle="Feedback from people I've worked with"
            center
          />
          
          <div className="relative mx-auto max-w-5xl px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="bg-card border p-6 rounded-lg h-full flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative  left-0 right-0 translate-y-0" />
                <CarouselNext className="relative  left-0 right-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="What I Do"
            subtitle="I offer a range of services to help bring your digital ideas to life"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-card border p-8 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 border-t">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to bring your ideas to life?
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I'm currently available for freelance work and exciting opportunities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact">
                <Button size="lg">
                  Let's work together
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
