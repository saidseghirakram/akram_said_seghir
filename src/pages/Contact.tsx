
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Layout from '@/components/layout/Layout';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for form submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    setIsSubmitting(false);
  };
  
  const socialLinks = [
    {
      name: 'Github',
      icon: Github,
      url: 'https://github.com/'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@akram.dev'
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <AnimatedHeading 
            title="Get In Touch"
            subtitle="Ready to start your next project? Send me a message, and let's create something amazing together."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card border rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-medium mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-secondary rounded-lg p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-xl font-medium mb-6">Connect With Me</h3>
                
                <p className="text-muted-foreground mb-8">
                  Interested in working together or have a question? Feel free to reach out through any of these channels.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:hello@akram.dev" 
                      className="text-lg hover:underline"
                    >
                      hello@akram.dev
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-lg">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">
                    Social Media
                  </h4>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background rounded-full border hover:bg-primary hover:text-primary-foreground transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
