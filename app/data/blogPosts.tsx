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
  'top-5-programming-languages-2024': {
    id: 'top-5-programming-languages-2024',
    title: "Top 5 Programming Languages to Learn in 2024",
    date: "Feb 20, 2024",
    category: "Career Growth",
    preview: "Whether you’re an experienced developer or a complete beginner, mastering these 5 languages will future-proof your career in the age of AI.",
    content: (
      <>
        <p>
          In 2024, the demand for developers continues to soar, with AI advancements driving the need for skilled professionals. 
          Whether you’re an experienced developer or a complete beginner, learning a new programming language is a great way to level up your skills. 
          Here are the top 5 programming languages that I recommend you cultivate this year.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">1. JavaScript</h3>
        <p>
          JavaScript consistently ranks in the top 5 most in-demand languages for a reason. It is the language of the web.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
          <li><strong>Beginner-friendly:</strong> Easy to pick up and run in any browser.</li>
          <li><strong>Versatile:</strong> Build full-stack applications with Node.js, mobile apps with React Native, and interactive UIs.</li>
          <li><strong>Ecosystem:</strong> Massive community support and robust frameworks.</li>
        </ul>
        <div className="bg-bubble-bg border-l-4 border-accent p-4 my-6 rounded-r-xl italic text-foreground-muted">
          Recommended for: Beginners and those wanting to build visual, interactive products immediately.
        </div>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">2. Python</h3>
        <p>
          Versatile and readable, Python is the lingua franca of the AI revolution.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
          <li><strong>Data Science & AI:</strong> The primary language for machine learning, automation, and data analysis.</li>
          <li><strong>Backend Power:</strong> Robust frameworks like Django and FastAPI make backend development a breeze.</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">3. Go (Golang)</h3>
        <p>
          Modern, fast, and efficient. Go is designed for the cloud-native era.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
          <li><strong>Performance:</strong> Compiled to machine code for blazing speed.</li>
          <li><strong>Concurrency:</strong> Built-in primitives make handling multiple tasks simultaneous and easy.</li>
          <li><strong>Infrastructure:</strong> The language behind Docker and Kubernetes.</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">4. Rust</h3>
        <p>
          Rust is gaining massive traction for performance-critical applications.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
          <li><strong>Memory Safety:</strong> Prevents entire classes of bugs without a garbage collector.</li>
          <li><strong>Systems Programming:</strong> Ideal for game engines, operating systems, and high-performance tooling.</li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">5. Swift (iOS) & Kotlin (Android)</h3>
        <p>
          Mobile development remains a massive market.
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
          <li><strong>Swift:</strong> The golden standard for the Apple ecosystem (iOS, macOS, watchOS).</li>
          <li><strong>Kotlin:</strong> The preferred, modern language for Android development.</li>
        </ul>

        <p className="mt-6">
          At the end of the day, programming languages are tools. Select the best tool for the job you want to do. 
          Focus on <strong>building</strong>, and the language proficiency will follow.
        </p>
      </>
    )
  },
  'react-future-jeopardy-version-19': {
    id: 'react-future-jeopardy-version-19',
    title: "Is React’s Future in Jeopardy? A Closer Look at Version 19",
    date: "Feb 20, 2024",
    category: "Tech Trends",
    preview: "React 19 brings the 'React Forget' compiler and Server Actions, but are these changes hiding fundamental issues with the framework?",
    content: (
      <>
        <p>
          The React team has announced major update with the release of version 19. 
          These changes shape the future of React development, but not everyone is thrilled. 
          Let's critique the three biggest shifts.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The React Forget Compiler</h3>
        <p>
          Promises to automate memoization and improve performance.
          <strong> The Concern:</strong> Is this just a band-aid? Some developers worry this hides the underlying complexity of React's re-render model rather than fixing it. 
          If the mental model is so complex we need a compiler to manage it, is the abstraction leaking?
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Server Actions & Full-Stack Capabilities</h3>
        <p>
          React is moving aggressively towards becoming a full-stack framework. 
          <strong> The Concern:</strong> Coupling. Tying your UI library to your backend logic can lead to vendor lock-in and a monolithic architecture that is hard to migrate away from.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">React Canary</h3>
        <p>
           Adopting features as they stabilize. While this shows agility, it also contributes to "framework fatigue," where best practices shift under your feet every few months.
        </p>
        
        <p className="mt-6 font-medium">
            Conclusion: React is at a pivot point. It is no longer just a "View" library—it is a platform. Whether that is a good thing depends on how much you value simplicity versus power.
        </p>
      </>
    )
  },
  'my-chapter-one-have-words': {
    id: 'my-chapter-one-have-words',
    title: "My Chapter One: Have Words",
    date: "Dec 31, 2024",
    category: "Personal Growth",
    preview: "From tutorial hell to landing a role as a full-stack software engineer. A personal reflection on impostor syndrome and the struggles that made me grow.",
    content: (
      <>
         <p>
          It’s been more than 2 years since I started crafting my story. 
          I had dreams—becoming a software engineer, building apps, starting a company. 
          It sounded exciting, but honestly? It’s been one of the toughest battles I've faced.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Where It All Started</h3>
        <p>
          Just me and the internet. Even my IT degree didn't prepare me for the vastness of the tech ocean. 
          I bounced from language to language—one day Python, the next data analytics. 
          It wasn't learning; it was <strong>motion without progress</strong>.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Struggles That Made Me Grow</h3>
        <ul className="list-disc pl-6 space-y-4 my-6 marker:text-accent">
            <li>
                <strong>Tutorial Hell:</strong> I learned that watching isn’t doing. You have to get your hands dirty. 
                Build things that break.
            </li>
            <li>
                <strong>Impostor Syndrome:</strong> It never fully goes away. I’ve started seeing it as a sign of growth. 
                If you're the smartest person in the room, you're in the wrong room.
            </li>
            <li>
                <strong>Decision Fatigue:</strong> There are too many tools. I learned to pick one stack and go deep, rather than wide and shallow.
            </li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Chapter One is Starting</h3>
        <p>
          Now, I’m stepping into "Chapter One". I’ve found my footing as a full-stack web developer. 
          This isn't the end of the journey—it's just the prologue to the real work.
        </p>
        
        <div className="bg-bubble-bg border-l-4 border-accent p-4 my-6 rounded-r-xl italic text-foreground-muted">
           To anyone struggling: You are not alone. Every bug you fix, every concept that finally clicks—that is the victory. Keep moving forward.
        </div>
      </>
    )
  },
  'ai-builders-are-here-now-what': {
    id: 'ai-builders-are-here-now-what',
    title: "AI Builders Are Here — Now What?",
    date: "Feb 19, 2025",
    category: "AI & Future",
    preview: "Are we looking at an industry shift or an extinction-level event for developers? How to survive and thrive in the age of AI coding assistants.",
    content: (
      <>
        <p>
          Everywhere you look, a new AI tool promises to code your next project in minutes. 
          No-code, low-code, and AI-assisted development are flooding the market. 
          The question on everyone's mind: <strong>Is this an extinction-level event for software engineers?</strong>
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Threat (If You Ignore It)</h3>
        <p>
          AI is only a threat if you refuse to adapt. If your value proposition is writing boilerplate syntax, you are in trouble. 
          Companies want efficiency. If an AI can do the junior-level work faster and cheaper, the bar for entry-level roles just got much higher.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Opportunity (If You Adapt)</h3>
        <p>
          However, for those who integrate AI, it is a superpower. 
          AI handles the "how" (syntax, patterns), freeing you to focus on the "what" and "why" (architecture, user values, problem-solving).
          We are moving from being <em>Code Writers</em> to <em>System Architects</em>.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-8 mb-4">How to Stay Ahead</h3>
        <ul className="list-disc pl-6 space-y-2 my-4 marker:text-accent">
            <li><strong>Master AI Tools:</strong> Copilot, Cursor, ChatGPT. Treat them as your pair programmer, not your replacement.</li>
            <li><strong>Deepen Fundamentals:</strong> AI can generate code, but it cannot judge quality or security. You need the expertise to review the machine's work.</li>
            <li><strong>Soft Skills:</strong> Empathy, communication, and leadership are things AI cannot replicate.</li>
        </ul>
        
        <p className="mt-6">
            The future belongs to the <strong>augmented developer</strong>. Adapt, stay curious, and make AI work for you.
        </p>
      </>
    )
  },
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
