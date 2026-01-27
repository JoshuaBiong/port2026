'use client';

import { motion } from 'framer-motion';
import { profileData } from '../data/profile';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BookRecommendationsAnswer() {
  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto py-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="mb-8" variants={itemVariants}>
        <h2 className="text-2xl font-bold text-foreground mb-2">Book Recommendations</h2>
        <p className="text-foreground-muted">
          Here are some of the books that have significantly influenced my perspective on software engineering, entrepreneurship, and creativity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profileData.recommendedBooks.map((book, index) => (
          <motion.a
            key={index}
            href={book.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 p-4 bg-bubble-bg border border-border rounded-2xl hover:border-accent/40 hover:bg-bubble-hover transition-all"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="w-20 h-28 shrink-0 overflow-hidden rounded-lg shadow-md border border-border bg-background">
                <img 
                    src={book.cover} 
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1">
                {book.category}
              </span>
              <h3 className="font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {book.title}
              </h3>
              <p className="text-xs text-foreground-muted italic mb-2">
                by {book.author}
              </p>
              <div className="mt-auto flex items-center gap-1 text-[11px] font-semibold text-accent/80 group-hover:text-accent">
                View on Amazon
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17L17 7"/></svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
