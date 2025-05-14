
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'From simple landing pages to complex web applications, I build fast, responsive, and user-friendly websites using modern technologies.',
      features: [
        'Custom website development',
        'Web application development',
        'E-commerce solutions',
        'CMS integration and development',
        'Web performance optimization',
        'API development and integration'
      ],
      icon: '💻',
    },
    {
      title: 'Mobile App Development',
      description: 'I create native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform app development',
        'UI/UX design for mobile',
        'App performance optimization',
        'App store deployment'
      ],
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'I design intuitive interfaces and seamless user experiences that help your products stand out and delight your users.',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'UI design & visual design',
        'Interaction design',
        'Design systems',
        'User testing'
      ],
      icon: '🎨',
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <AnimatedHeading 
              title="Services"
              subtitle="Specialized services tailored to meet your digital needs"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-muted-foreground">
                I offer a range of services to help bring your digital ideas to life. With a focus on creating elegant, efficient, and user-centered experiences, I work closely with clients to deliver solutions that not only meet their needs but exceed their expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  custom={index + 0.2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  className={`bg-secondary rounded-lg border p-8 md:p-12 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="aspect-square w-full rounded-md bg-gradient-to-br from-black to-neutral-800 flex items-center justify-center">
                    <span className="text-8xl">{service.icon}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to start your project?
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's discuss your requirements and create a solution that meets your needs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button size="lg">
                Get in touch
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
