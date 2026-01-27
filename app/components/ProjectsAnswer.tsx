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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsAnswer() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-8 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Featured Projects</h1>
        <p className="text-lg text-foreground-muted">Selected works & contributions</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {profileData.projects.map((project, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group relative bg-bubble-bg border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="aspect-[21/9] bg-border/50 flex items-center justify-center relative overflow-hidden">
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-2">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-accent mb-1 block">
                        {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                </div>
              </div>
              <p className="text-foreground-muted text-base leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex gap-3">
                 <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold bg-foreground text-background px-5 py-2.5 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-md shadow-foreground/10"
                 >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
                 </a>
                 <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold border border-border text-foreground px-5 py-2.5 rounded-xl hover:bg-background transition-all active:scale-95"
                 >
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={itemVariants} className="text-center pt-8">
        <p className="text-foreground-muted text-sm border-t border-border pt-8 mt-4">
            Projects that are funny on <a href="https://github.com/joshuabiong" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">GitHub</a>
        </p>
      </motion.div>
    </motion.div>
  );
}
