'use client';

import { useState } from 'react';
import { profileData } from '../data/profile';

export default function PeopleAlsoAsk() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderAnswer = (answer: string) => {
    if (answer === "contact_links") {
      const linkedIn = profileData.socialLinks.find(l => l.platform === 'linkedin')?.url;
      const twitter = profileData.socialLinks.find(l => l.platform === 'twitter')?.url;
      const github = profileData.socialLinks.find(l => l.platform === 'github')?.url;

      return (
        <span>
          You can connect with Joshua through{" "}
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">LinkedIn</a>,{" "}
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Twitter</a>, or visit his{" "}
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">GitHub</a> repository for opportunities.
        </span>
      );
    }
    return answer;
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 pt-10 pb-20">
      <h3 className="text-2xl font-bold text-foreground mb-6">People also ask</h3>
      <div className="space-y-2 border-t border-border">
        {profileData.faqs.map((faq, index) => (
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
              <div className="text-foreground-muted leading-relaxed">
                {renderAnswer(faq.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
