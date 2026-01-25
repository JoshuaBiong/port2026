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

export default function DevignlabsAnswer() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto space-y-6 py-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Devignlabs</h1>
        <p className="text-lg text-foreground-muted">Innovative Web Development Agency</p>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-bubble-bg rounded-2xl p-6 border border-border">
        <p className="text-foreground leading-relaxed mb-4">
          <strong>Devignlabs</strong> is a forward-thinking web development agency where Joshua currently serves as a <strong>Frontend Developer</strong>.
          The company specializes in crafting high-fidelity design systems and building scalable web applications for modern businesses.
        </p>
        <p className="text-foreground leading-relaxed">
          At Devignlabs, the focus is on bridging the gap between cutting-edge design and robust engineering, ensuring every product is not just functional but also visually stunning.
        </p>
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <h3 className="text-lg font-semibold text-foreground mb-3">Key Focus Areas</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {['Design Systems', 'React & Next.js', 'Performance Optimization', 'Modern UI/UX'].map((item, i) => (
            <li key={i} className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg text-sm text-foreground-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
