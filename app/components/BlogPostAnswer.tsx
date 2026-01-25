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

export default function BlogPostAnswer() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-6 py-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={itemVariants} className="space-y-4 border-b border-border pb-6">
        <div className="flex gap-3 items-center text-sm text-foreground-muted">
             <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-medium">AI & Tech</span>
             <span>•</span>
             <span>Jan 26, 2026</span>
             <span>•</span>
             <span>5 min read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">The Learning Curve in the Age of AI</h1>
      </motion.div>

      <motion.article variants={itemVariants} className="prose prose-invert prose-lg max-w-none text-foreground leading-relaxed space-y-6">
        <p>
          The tech industry has always been synonymous with rapid change, but the advent of Generative AI has accelerated this pace to unprecedented levels. 
          For developers, the question isn't just "what to learn next," but "how to learn" in a world where code can be generated in seconds.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Shift from Syntax to Strategy</h3>
        <p>
          Traditionally, the junior developer's journey was paved with syntax errors and StackOverflow searches. Today, AI copilots handle the boilerplate. 
          This shifts the premium from <em>memorization</em> to <em>architecture</em>. Understanding system design, data flow, and security implications is becoming far more valuable than knowing every array method by heart.
        </p>

        <div className="bg-bubble-bg border-l-4 border-accent p-4 my-6 rounded-r-xl italic text-foreground-muted">
          "AI doesn't replace the need for expertise; it elevates the baseline of what's expected."
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Navigating the Noise</h3>
        <p>
          With new models and tools releasing weekly, the fear of missing out (FOMO) is real. However, the core principles of computer science remain constant. 
          The smartest engineers I know aren't chasing every new framework; they're using AI to deepen their understanding of fundamental concepts.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Human Edge</h3>
        <p>
          Empathy, user experience intuition, and problem-solving within ambiguous constraints—these are the areas where human developers still reign supreme. 
          AI works best as a force multiplier, handling the "how" so we can focus on the "why" and "who" we are building for.
        </p>

        <p className="border-t border-border pt-6 mt-8 text-foreground-muted text-sm">
          <em>Thanks for reading! If you found this insightful, share it or ask me more about my thoughts on AI.</em>
        </p>
      </motion.article>
    </motion.div>
  );
}
