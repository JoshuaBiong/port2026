'use client';

import { useState } from 'react';

const faqs = [
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
    answer: "Joshua has worked on a variety of web applications, ranging from landing pages to complex dashboard interfaces. He is currently preparing a showcase of his recent work—stay tuned for updates in the Projects section!"
  },
  {
    question: "How can I contact Joshua Biong?",
    answer: "You can connect with Joshua through LinkedIn, Twitter, or visit his GitHub repository for collaboration opportunities. Contact links are available at the bottom of his profile."
  },
  {
    question: "What is Joshua's tech stack?",
    answer: "He primarily works with TypeScript, React, Next.js, and Tailwind CSS. He's also experienced with various frontend tools and state management libraries."
  }
];

export default function PeopleAlsoAsk() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 pt-10 pb-20">
      <h3 className="text-2xl font-bold text-foreground mb-6">People also ask</h3>
      <div className="space-y-2 border-t border-border">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-border">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full py-4 flex items-center justify-between text-left hover:text-accent transition-colors group"
            >
              <span className="font-medium text-foreground group-hover:text-accent">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-foreground-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
