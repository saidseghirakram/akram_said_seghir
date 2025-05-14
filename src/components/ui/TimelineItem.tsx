
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export interface TimelineEvent {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ event, index, isLast }: TimelineItemProps) => {
  return (
    <motion.div 
      className="grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_3fr] gap-6 items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Date (Hidden on mobile) */}
      <div className="hidden md:flex justify-end items-start text-right">
        <div className="pr-4">
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            {event.period}
          </span>
          <h3 className="text-lg font-medium">{event.title}</h3>
          <p className="text-sm text-muted-foreground">{event.organization}</p>
        </div>
      </div>

      {/* Timeline Indicator */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary"></div>
        {!isLast && <div className="w-px h-full bg-border absolute top-4"></div>}
      </div>

      {/* Content */}
      <div className="pb-8">
        {/* Title (Only shown on mobile) */}
        <div className="md:hidden mb-2">
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <Calendar size={14} className="mr-1" />
            {event.period}
          </span>
          <h3 className="text-lg font-medium">{event.title}</h3>
          <p className="text-sm text-muted-foreground">{event.organization}</p>
        </div>

        <div className="bg-card border rounded-lg p-5 transform transition-transform hover:scale-[1.02]">
          <p className="text-sm leading-relaxed">{event.description}</p>
          {event.location && (
            <p className="text-sm text-muted-foreground mt-2">
              {event.location}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
