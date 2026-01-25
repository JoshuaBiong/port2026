'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Skeleton loader component
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-bubble-bg via-border to-bubble-bg bg-[length:200%_100%] animate-shimmer rounded-2xl" />
  );
}

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function ProfileAnswer() {
  const [imagesLoaded, setImagesLoaded] = useState({
    main: false,
    small1: false,
    small2: false,
  });

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-8 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Info */}
      <motion.div className="space-y-1" variants={itemVariants}>
        <h1 className="text-3xl font-bold text-foreground">Joshua Biong</h1>
        <p className="text-lg text-foreground-muted">Software Engineer + Frontend Developer</p>
      </motion.div>

      {/* Image Gallery Placeholder */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[300px]" variants={itemVariants}>
        <div className="md:col-span-2 bg-bubble-bg rounded-2xl flex items-center justify-center text-foreground-muted overflow-hidden relative border border-border">
          {!imagesLoaded.main && <ImageSkeleton />}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bubble-bg to-border-light">
            <span className="text-sm font-medium opacity-50">Main Portrait Placeholder</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-1/2 bg-bubble-bg rounded-2xl flex items-center justify-center text-foreground-muted border border-border relative overflow-hidden">
            {!imagesLoaded.small1 && <ImageSkeleton />}
            <span className="text-xs font-medium opacity-50 relative z-10">Small Image 1</span>
          </div>
          <div className="h-1/2 bg-bubble-bg rounded-2xl flex items-center justify-center text-foreground-muted border border-border relative overflow-hidden">
            {!imagesLoaded.small2 && <ImageSkeleton />}
            <span className="text-xs font-medium opacity-50 relative z-10">Small Image 2</span>
          </div>
        </div>
      </motion.div>

      {/* Bio Section */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <p className="text-foreground leading-relaxed">
          <strong>Joshua Biong</strong> is a passionate <strong>Software Engineer</strong> specializing in <strong>Frontend Development</strong>. 
          He focuses on building premium, high-performance web applications with a keen eye for aesthetics and user experience.
          Currently based in the Philippines, he explores the latest web technologies to craft seamless digital products.
        </p>
      </motion.div>

      {/* Current Roles */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Current Roles</h3>
        <ul className="space-y-4">
          <motion.li className="flex gap-4" variants={itemVariants}>
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Devignlabs — Frontend Developer</p>
              <p className="text-sm text-foreground-muted">Working on innovative design systems and high-fidelity web experiences.</p>
            </div>
          </motion.li>
          <motion.li className="flex gap-4" variants={itemVariants}>
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Freelance — Software Engineer</p>
              <p className="text-sm text-foreground-muted">Building custom solutions for early-stage startups and creative businesses.</p>
            </div>
          </motion.li>
        </ul>
      </motion.div>

      {/* Projects Section - Future items space */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="group p-4 rounded-xl border border-dashed border-border hover:border-accent hover:bg-background-secondary transition-all cursor-pointer"
              variants={itemVariants}
            >
              <div className="w-full aspect-video bg-bubble-bg rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                <ImageSkeleton />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground-muted opacity-30 group-hover:opacity-100 group-hover:text-accent transition-opacity relative z-10"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
              <h4 className="font-medium text-foreground mb-1 italic opacity-60">Project Title (Coming Soon)</h4>
              <p className="text-sm text-foreground-muted">Stay tuned for an exciting project update in this space.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Blog Section */}
      <motion.div className="space-y-4" variants={itemVariants}>
        <div className="flex items-center justify-between border-b border-border pb-2">
            <h3 className="text-xl font-semibold text-foreground">Latest Writings</h3>
            <button className="text-xs font-medium text-accent hover:underline">View all</button>
        </div>
        <div className="grid grid-cols-1 gap-4">
            <motion.div 
              className="group cursor-pointer p-5 bg-bubble-bg border border-border rounded-xl hover:border-accent/50 hover:shadow-sm transition-all"
              whileHover={{ y: -2 }}
            >
                <div className="flex gap-3 items-center mb-2 text-xs text-foreground-muted">
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">AI & Tech</span>
                    <span>•</span>
                    <span>Jan 26, 2026</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">The Learning Curve in the Age of AI</h4>
                <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                    How artificial intelligence is reshaping not just how we code, but how we learn and grow as developers in the modern tech industry.
                </p>
            </motion.div>
            
            <motion.div 
              className="group cursor-pointer p-5 bg-bubble-bg border border-border rounded-xl hover:border-accent/50 hover:shadow-sm transition-all"
              whileHover={{ y: -2 }}
            >
                 <div className="flex gap-3 items-center mb-2 text-xs text-foreground-muted">
                    <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Design Systems</span>
                    <span>•</span>
                    <span>Jan 15, 2026</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">Building Scalable UI Components</h4>
                <p className="text-sm text-foreground-muted leading-relaxed line-clamp-2">
                    A deep dive into component architecture and how to create flexible, maintainable design systems for large-scale applications.
                </p>
            </motion.div>
        </div>
      </motion.div>

      {/* Connect Section */}
      <motion.div className="space-y-4 pt-4" variants={itemVariants}>
        <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">Connect</h3>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-foreground-muted hover:text-accent font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 text-foreground-muted hover:text-accent font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            Twitter
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 text-foreground-muted hover:text-accent font-medium text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
