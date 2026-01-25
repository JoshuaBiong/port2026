import React from 'react';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  preview: string;
  content: React.ReactNode;
}

export const blogPosts: Record<string, BlogPost> = {
  'learning-in-age-of-ai': {
    id: 'learning-in-age-of-ai',
    title: "The Learning Curve in the Age of AI",
    date: "Jan 26, 2026",
    category: "AI & Tech",
    preview: "How artificial intelligence is reshaping not just how we code, but how we learn and grow as developers in the modern tech industry.",
    content: (
      <>
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
      </>
    )
  },
  'scalable-ui-components': {
    id: 'scalable-ui-components',
    title: "Building Scalable UI Components",
    date: "Jan 15, 2026",
    category: "Design Systems",
    preview: "A deep dive into component architecture and how to create flexible, maintainable design systems for large-scale applications.",
    content: (
        <>
            <p>
                In large-scale applications, UI consistency is key. But how do you maintain consistency without sacrificing flexibility? 
                The answer lies in a robust component architecture that separates concerns and prioritizes composability.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Atomic Approach</h3>
            <p>
                Breaking down interfaces into atoms, molecules, and organisms isn't just a metaphor—it's a survival strategy. 
                By creating small, focused primitives (buttons, inputs, labels), we can assemble complex UIs that are easier to test and maintain.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Component API Design</h3>
            <p>
                A great component API is intuitive. It should "fall into the pit of success," making the right way to use it the easiest way. 
                Avoid prop drilling hell by using composition slots (children) and context where appropriate.
            </p>
        </>
    )
  },
  'tailwind-conquered-web': {
    id: 'tailwind-conquered-web',
    title: "Why Tailwind CSS Conquered the Web",
    date: "Dec 10, 2025",
    category: "CSS",
    preview: "Reflecting on the shift from semantic CSS to utility-first frameworks and why it massively improves developer velocity.",
    content: (
        <>
            <p>
                Utility-first CSS felt wrong at first. "Inline styles with extra steps" they said. 
                But Tailwind CSS proved that colocation of styles and markup is actually a feature, not a bug, for component-driven development.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Velocity is King</h3>
            <p>
                The biggest advantage of Tailwind isn't the file size (though that's great)—it's the lack of context switching. 
                You don't have to name things. You don't have to jump between files. You just build.
            </p>
            <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Constraint-Based Design</h3>
            <p>
                Tailwind enforces a design system by default. You aren't picking random pixels; you're picking from a carefully curated scale. 
                This leads to more consistent UIs with less effort.
            </p>
        </>
    )
  }
};

export const blogList = Object.values(blogPosts);
