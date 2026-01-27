export const profileData = {
  name: "Joshua Biong",
  suggestedQuestions: [
    "Who is Joshua Biong?",
    "What does he do at Devignlabs?",
    "What books does he recommend?",
  ],
  title: "Software Engineer + Frontend Developer",
  bio: "is a **Software Engineer** dedicated to building high-performance web applications. By profession, he excels in **Frontend Development**, leveraging modern technologies to craft seamless user experiences. Outside of his professional scope, he is a passionate **Shopify Developer** and an active **iOS hobbyist**, constantly pushing the boundaries of e-commerce and mobile innovation.",
  roles: [
    {
      company: "Devignlabs",
      title: "Frontend Developer",
      description: "Working on innovative design systems and high-fidelity web experiences."
    },
    {
      company: "Freelance",
      title: "Software Engineer",
      description: "Building custom solutions for early-stage startups and creative businesses."
    }
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/joshuabiong",
      platform: "linkedin"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/joshuabiong",
      platform: "twitter"
    },
    {
      label: "GitHub",
      url: "https://github.com/joshuabiong",
      platform: "github"
    }
  ],
  gallery: [
    { url: '/me/google%20i:o.avif', label: 'Joshua Biong - Attending Google I/O Technical Conference' },
    { url: '/me/data%20engineering.avif', label: 'Joshua Biong - Data Engineering and Software Architecture Workspace' },
    { url: '/me/forrest.avif', label: 'Joshua Biong - Lifestyle and Outdoor Photography in Forrest' },
    { url: '/me/hoddie%20gray.avif', label: 'Joshua Biong - Software Engineer and Frontend Developer Portrait' },
  ],
  recommendedBooks: [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      cover: "https://m.media-amazon.com/images/I/41-S6pu3qxL._SY445_SX342_.jpg",
      url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      category: "Software Engineering"
    },
    {
      title: "Refactoring",
      author: "Martin Fowler",
      cover: "https://m.media-amazon.com/images/I/41m9R6q3rML._SY445_SX342_.jpg",
      url: "https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0134757599",
      category: "Software Engineering"
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      cover: "https://m.media-amazon.com/images/I/71m6H-Y99GL._SY445_SX342_.jpg",
      url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
      category: "Entrepreneurship"
    },
    {
      title: "Show Your Work!",
      author: "Austin Kleon",
      cover: "https://m.media-amazon.com/images/I/41uS6p2vGjL._SX342_SY445_.jpg",
      url: "https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X",
      category: "Creativity"
    }
  ],
  projects: [
    {
      title: "Devign UI",
      description: "A premium headless UI library built for React and Framer Motion, focusing on buttery-smooth interactions and accessibility.",
      stack: ["React", "Tailwind", "Framer Motion", "TypeScript"],
      url: "https://devign-ui.com",
      github: "https://github.com/joshuabiong/devign-ui",
      category: "Open Source",
      isFlagship: true,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "EcoTask",
      description: "Collaborative task management platform with built-in productivity analytics and carbon footprint tracking for remote teams.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Supabase"],
      url: "https://ecotask.app",
      github: "https://github.com/joshuabiong/ecotask",
      category: "Web App",
      isFlagship: false,
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "SwiftChat",
      description: "A secure, real-time messaging application with end-to-end encryption and custom emoji Support.",
      stack: ["WebSocket", "Redux", "Node.js", "Express"],
      url: "https://swiftchat.io",
      github: "https://github.com/joshuabiong/swiftchat",
      category: "Web App",
      isFlagship: false,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  devignlabs: {
    description: "Devignlabs is a forward-thinking web development agency where Joshua currently serves as a Frontend Developer. The company specializes in crafting high-fidelity design systems and building scalable web applications for modern businesses.",
    tagline: "Innovative Web Development Agency",
    focus: [
      "Design Systems",
      "React & Next.js",
      "Performance Optimization",
      "Modern UI/UX"
    ]
  },
  techStack: [
    { category: "Core", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
    { category: "Frameworks", items: ["React.js", "Next.js", "Vue.js"] },
    { category: "Styling", items: ["Tailwind CSS", "Framer Motion", "SASS/SCSS", "Shadcn UI"] },
    { category: "Tools", items: ["Git/GitHub", "Figma", "Vercel", "VS Code"] },
  ]
};
