'use client';

import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import { blogList } from '../data/blogPosts';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function BlogIndexClient() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors flex flex-col">
      <Header onBack={() => router.push('/')} />
      
      <main className="flex-1 container mx-auto max-w-2xl px-6 pt-24 pb-24">
        <div className="space-y-2 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Writings</h1>
            <p className="text-lg text-foreground-muted">Thoughts on engineering, design, and tech.</p>
        </div>

        <motion.div 
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
        >
            {blogList.map((blog, i) => (
            <motion.div 
                key={i} 
                variants={itemVariants}
                className="group cursor-pointer p-6 bg-bubble-bg border border-border rounded-xl hover:border-accent/50 hover:shadow-md transition-all"
                whileHover={{ y: -2 }}
                onClick={() => router.push(`/blog/${blog.id}`)}
            >
                <div className="flex gap-3 items-center mb-3 text-xs text-foreground-muted">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{blog.category}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{blog.title}</h3>
                <p className="text-base text-foreground-muted leading-relaxed mb-4">
                    {blog.preview}
                </p>
                <span className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
            </motion.div>
            ))}
        </motion.div>
      </main>

      <footer className="py-6 text-center text-sm text-foreground-muted border-t border-border mt-auto">
        <p>© 2026 Joshua Biong. All rights reserved.</p>
      </footer>
    </div>
  );
}
