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
      title: "Subay App",
      description: "Subay is a private interal file system tool for a team to organize and manage files.",
      stack: ["React", "Tailwind", "Laravel", "Inertia.js", "MySQL", "Cloudflare R2"],
      url: "",
      github: "",
      category: "Internal Tool",
      isFlagship: false,
      image: "/projects/Subay.png"
    },
    {
      title: "Solve50",
      description: "Solve50, a chrome extension designed to be simple on breaking down problems and track progress.",
      stack: ["Manifest V3", "React", "Tailwind"],
      url: "https://solve50.vercel.app",
      github: "",
      category: "Chrome Extension",
      isFlagship: false,
      image: "/projects/solve50.png"
    },
    {
      title: "Personal Portfolio",
      description: "A ChatGPT like interface for my portfolio",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      url: "https://joshuabiong.com",
      github: "https://github.com/joshuabiong/port",
      category: "Web App",
      isFlagship: true,
      image: "/projects/port.png"
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
  ],
  techStackQuote: "I believe in choosing the right tool for the job, prioritizing performance, accessibility, and developer experience.",
  faqs: [
    {
      question: "What does Joshua Biong do?",
      answer: "Joshua is a software engineer specializing in frontend development. He builds modern, responsive, and performance-optimized web applications using React, Next.js, and Tailwind CSS."
    },
    {
      question: "What is Devignlabs?",
      answer: "Devignlabs is where Joshua currently works as a Frontend Developer, contributing to cutting-edge web projects and design system implementations."
    },
    {
      question: "What projects has Joshua worked on?",
      answer: "Joshua has worked on a variety of web applications, ranging from landing pages to complex dashboard interfaces. His most recent projects include Subay App, Solve50, and this Personal Portfolio."
    },
    {
      question: "How can I contact Joshua Biong?",
      answer: "contact_links"
    },
    {
      question: "What is Joshua's tech stack?",
      answer: "He encounter various tech stack such as Nextjs, React, Nuxtjs, Laravel, Inertiajs, Cloudflare R2, Docker but he is mainly a diving to Shopify now."
    }
  ],
  featuredBlogIds: ['learning-in-age-of-ai', 'scalable-ui-components']
};
