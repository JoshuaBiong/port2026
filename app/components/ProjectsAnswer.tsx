'use client';

import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function ProjectsAnswer() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-8 py-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Featured Projects</h1>
        <p className="text-lg text-foreground-muted">Selected works & contributions</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="group relative bg-bubble-bg border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all"
          >
            <div className="aspect-[2/1] bg-border/50 flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer z-10" />
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground-muted opacity-40"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-foreground">Project Name {i}</h3>
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wide">Web App</span>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                A brief description of this amazing project. It solves real-world problems using modern technologies like Next.js and Tailwind CSS.
              </p>
              <div className="flex gap-2">
                 <button className="text-xs font-medium bg-foreground text-background px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity">View Live</button>
                 <button className="text-xs font-medium border border-border text-foreground px-3 py-1.5 rounded-lg hover:bg-background transition-colors">GitHub</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={itemVariants} className="text-center pt-4">
        <p className="text-foreground-muted text-sm">More projects available on <a href="#" className="text-accent hover:underline">GitHub</a></p>
      </motion.div>
    </motion.div>
  );
}
