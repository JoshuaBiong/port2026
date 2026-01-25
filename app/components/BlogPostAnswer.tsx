'use client';

import { motion } from 'framer-motion';
import { blogPosts, blogList } from '../data/blogPosts';

const itemVariants = {
// ... variants (keep existing)
};

interface BlogPostAnswerProps {
  postId?: string;
  onQuestionClick?: (question: string) => void;
}

export default function BlogPostAnswer({ postId = 'learning-in-age-of-ai', onQuestionClick }: BlogPostAnswerProps) {
  const post = blogPosts[postId] || blogPosts['learning-in-age-of-ai'];
  
  // Get 2 other random or next posts for suggestions
  const suggestions = blogList
    .filter(b => b.id !== post.id)
    .slice(0, 2);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-6 py-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={itemVariants} className="space-y-4 border-b border-border pb-6">
        <div className="flex gap-3 items-center text-sm text-foreground-muted">
             <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{post.category}</span>
             <span>•</span>
             <span>{post.date}</span>
             <span>•</span>
             <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h1>
      </motion.div>

      <motion.article variants={itemVariants} className="prose prose-invert prose-lg max-w-none text-foreground leading-relaxed space-y-6">
        {post.content}
        <p className="border-t border-border pt-6 mt-8 text-foreground-muted text-sm">
          <em>Thanks for reading! If you found this insightful, share it or ask me more about my thoughts on AI.</em>
        </p>
      </motion.article>

      {/* Suggested Reading */}
      {suggestions.length > 0 && (
        <motion.div variants={itemVariants} className="pt-8 mt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {suggestions.map((blog) => (
                    <div 
                        key={blog.id}
                        className="group cursor-pointer p-4 bg-bubble-bg border border-border rounded-xl hover:border-accent/50 transition-all hover:bg-background-secondary"
                        onClick={() => onQuestionClick?.(blog.title)}
                    >
                        <span className="text-xs font-medium text-accent block mb-2">{blog.category}</span>
                        <h4 className="font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">{blog.title}</h4>
                    </div>
                ))}
            </div>
        </motion.div>
      )}
    </motion.div>
  );
}
