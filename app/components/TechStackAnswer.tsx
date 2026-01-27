'use client';

import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function TechStackAnswer() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-8 py-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Tech Stack</h1>
        <p className="text-lg text-foreground-muted">Tools & Technologies</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profileData.techStack.map((group, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-bubble-bg border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent opacity-70"></span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 bg-background rounded-md text-xs font-medium text-foreground-muted border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={itemVariants} className="bg-background-secondary rounded-xl p-4 border border-border text-sm text-foreground-muted italic text-center">
        "I believe in choosing the right tool for the job, prioritizing performance, accessibility, and developer experience."
      </motion.div>
    </motion.div>
  );
}
