
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const AnimatedHeading = ({ title, subtitle, center = false }: AnimatedHeadingProps) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <motion.h2
        className="inline-block font-light mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default AnimatedHeading;
