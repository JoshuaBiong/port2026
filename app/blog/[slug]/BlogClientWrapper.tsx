'use client';

import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { BlogPost } from '../../data/blogPosts';
import { motion } from 'framer-motion';

interface BlogClientWrapperProps {
  post: BlogPost;
}

export default function BlogClientWrapper({ post }: BlogClientWrapperProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors flex flex-col">
      <Header onBack={() => router.push('/')} />
      
      <main className="flex-1 container mx-auto max-w-2xl px-6 pt-24 pb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-6"
        >
            <div className="space-y-4 border-b border-border pb-6">
                <div className="flex gap-3 items-center text-sm text-foreground-muted">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">{post.title}</h1>
            </div>

            <article className="prose prose-invert prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                {post.content}
            </article>

            <div className="border-t border-border pt-8 mt-12">
                <button 
                  onClick={() => router.push('/')}
                  className="text-accent hover:underline flex items-center gap-2 font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    Back to Home
                </button>
            </div>
        </motion.div>
      </main>

      <footer className="py-6 text-center text-sm text-foreground-muted border-t border-border mt-auto">
        <p>© 2026 Joshua Biong. All rights reserved.</p>
      </footer>
    </div>
  );
}
