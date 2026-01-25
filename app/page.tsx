'use client';

import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import ProfileAnswer from "./components/ProfileAnswer";
import PeopleAlsoAsk from "./components/PeopleAlsoAsk";
import DevignlabsAnswer from "./components/DevignlabsAnswer";
import TechStackAnswer from "./components/TechStackAnswer";
import ProjectsAnswer from "./components/ProjectsAnswer";
import BlogAnswer from "./components/BlogAnswer";
import BlogPostAnswer from "./components/BlogPostAnswer";

const suggestedQuestions = [
  "Who is Joshua Biong?",
  "What does he do at Devignlabs?",
  "What projects is he working on?",
];

type MessageType = 'question' | 'answer' | 'text-answer' | 'devignlabs-answer' | 'tech-stack-answer' | 'projects-answer' | 'blog-answer' | 'blog-post-answer';

interface Message {
  type: MessageType;
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || inputValue.length > 0;
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const lastQuestionRef = useRef<HTMLDivElement>(null);

  const scrollToLastQuestion = () => {
    if (lastQuestionRef.current) {
        setTimeout(() => {
            lastQuestionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToLastQuestion();
    }
  }, [messages, isLoading]);

  const handleQuestionClick = (question: string, id?: string) => {
    setIsLoading(true);
    setMessages(prev => [...prev, { type: 'question', content: question }]);
    
    const lowerQuestion = question.toLowerCase();
    
    let answerType: MessageType = 'text-answer';
    let answerContent = "I am designed to provide accurate information based on the data I have been given. My information about Joshua Biong is drawn directly from the details you provided. Can I help clarify anything else about him?";

    if (lowerQuestion.includes('who is joshua') || lowerQuestion === 'who is joshua biong?') {
       answerType = 'answer';
       answerContent = 'profile';
    } else if (lowerQuestion.includes('devignlabs')) {
       answerType = 'devignlabs-answer';
       answerContent = 'devignlabs';
    } else if (lowerQuestion.includes('tech stack') || lowerQuestion.includes('technologies')) {
       answerType = 'tech-stack-answer';
       answerContent = 'tech-stack';
    } else if (lowerQuestion.includes('projects') || lowerQuestion.includes('work')) {
       answerType = 'projects-answer';
       answerContent = 'projects';
    } else if (lowerQuestion.includes('blog') || lowerQuestion.includes('writings') || lowerQuestion.includes('articles')) {
       answerType = 'blog-answer';
       answerContent = 'blog';
    } else if (lowerQuestion.includes('learning curve') || lowerQuestion.includes('age of ai')) {
       answerType = 'blog-post-answer';
       answerContent = 'learning-in-age-of-ai'; 
    } else if (lowerQuestion.includes('scalable ui') || lowerQuestion.includes('ui components') || lowerQuestion.includes('scalable')) {
       answerType = 'blog-post-answer';
       answerContent = 'scalable-ui-components';
    } else if (lowerQuestion.includes('tailwind') || lowerQuestion.includes('css')) {
       answerType = 'blog-post-answer';
       answerContent = 'tailwind-conquered-web';
    } else if (lowerQuestion.includes('contact')) {
       answerContent = "You can contact Joshua via LinkedIn, Twitter, or GitHub. Check the links in his profile!";
    }

    if (answerType === 'blog-post-answer') {
        const finalId = id || answerContent;
        window.history.pushState({ postId: finalId }, '', `/blog/${finalId}`);
    } else {
        window.history.pushState(null, '', '/');
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: answerType, content: answerContent }]);
      setIsLoading(false);
    }, 1800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleQuestionClick(inputValue);
    setInputValue('');
  };

  const hasConversation = messages.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors flex flex-col relative overflow-x-hidden">
      {hasConversation && (
        <Header onBack={() => {
            setMessages([]);
            window.history.pushState(null, '', '/');
        }} />
      )}
      
      <main className={`flex-1 flex flex-col ${hasConversation ? 'pt-20 pb-32' : 'pb-6'}`}>
        {!hasConversation ? (
          /* Landing State */
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <h1 className="text-3xl md:text-3xl font-semibold text-foreground mb-8 md:mb-12 text-center animate-fade-in max-w-sm md:max-w-none">
              What would you like to know?
            </h1>
            
            {/* Desktop-only Suggetions Centered */}
            <div className="hidden md:flex flex-wrap gap-3 justify-center max-w-2xl mb-8">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-foreground hover:bg-bubble-bg hover:border-foreground-muted/50 transition-all active:scale-95"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* Mobile/Floating Input Section */}
            <div className="w-full max-w-2xl md:relative fixed bottom-0 left-0 right-0 p-6 md:p-0 md:static bg-gradient-to-t from-background via-background to-transparent md:bg-none z-20">
              {/* Mobile suggestions directly above input */}
              <div className="flex overflow-x-auto gap-2 mb-4 md:hidden no-scrollbar pb-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-background text-xs font-medium text-foreground active:bg-bubble-bg"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <div className={`relative flex items-center bg-bubble-bg border border-border rounded-[28px] px-2 py-2 shadow-sm transition-all duration-300 ${isFocused ? 'shadow-md border-foreground-muted/30' : ''}`}>
                  {/* Plus Button */}
                  <button type="button" className="w-10 h-10 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </button>
                  
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask anything"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="flex-1 bg-transparent outline-none px-3 text-foreground placeholder:text-foreground-muted text-[16px]"
                  />

                  <div className="flex items-center gap-1 shrink-0 px-1">
                    {/* Mic Button */}
                    <button type="button" className="w-10 h-10 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    </button>
                    
                    {/* Send Button */}
                    <button 
                      type="submit" 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${inputValue.trim() ? 'bg-foreground text-background scale-100' : 'bg-foreground/5 text-foreground-muted/50 scale-95 cursor-not-allowed'}`}
                      disabled={!inputValue.trim()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        ) : (
          /* Conversation State */
          <div className="flex-1 px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              {messages.map((msg, index) => {
                const isLastQuestion = msg.type === 'question' && index === messages.findLastIndex(m => m.type === 'question');
                return (
                <div key={index} className="animate-fade-in scroll-mt-32" ref={isLastQuestion ? lastQuestionRef : null}>
                  {msg.type === 'question' ? (
                    <div className="flex justify-end mb-8">
                      <div className="bg-foreground/10 text-black px-4 py-[10px] rounded-2xl max-w-md text-md">
                        {msg.content}
                      </div>
                    </div>
                  ) : msg.type === 'answer' ? (
                    <div className="space-y-8 mb-12">
                      <ProfileAnswer onQuestionClick={handleQuestionClick} />
                      <PeopleAlsoAsk />
                    </div>
                  ) : msg.type === 'devignlabs-answer' ? (
                    <div className="space-y-8 mb-12">
                      <DevignlabsAnswer />
                      <PeopleAlsoAsk />
                    </div>
                  ) : msg.type === 'tech-stack-answer' ? (
                    <div className="space-y-8 mb-12">
                      <TechStackAnswer />
                      <PeopleAlsoAsk />
                    </div>
                  ) : msg.type === 'projects-answer' ? (
                    <div className="space-y-8 mb-12">
                      <ProjectsAnswer />
                      <PeopleAlsoAsk />
                    </div>
                  ) : msg.type === 'blog-answer' ? (
                    <div className="space-y-8 mb-12">
                      <BlogAnswer onQuestionClick={handleQuestionClick} />
                      <PeopleAlsoAsk />
                    </div>
                  ) : msg.type === 'blog-post-answer' ? (
                    <div className="space-y-8 mb-12">
                      <BlogPostAnswer postId={msg.content} onQuestionClick={handleQuestionClick} />
                      <PeopleAlsoAsk />
                    </div>
                  ) : (
                    <div className="flex justify-start mb-12">
                      <div className="flex gap-4 max-w-2xl">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shrink-0 mt-1">
                          <span className="font-bold text-xs">AI</span>
                        </div>
                        <div className="bg-bubble-bg text-foreground px-5 py-4 rounded-2xl text-base leading-relaxed border border-border">
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
              })}
              
              <div ref={messagesEndRef} />

              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center gap-2 text-foreground-muted ml-0.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground-muted animate-bounce-noticeable" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground-muted animate-bounce-noticeable" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground-muted animate-bounce-noticeable" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>
            
            {/* Fixed bottom input when in conversation */}
            <div className="fixed bottom-0 left-0 right-0 z-10 px-6 pb-6 pt-24 bg-gradient-to-t from-background from-20% to-transparent animate-slide-up">
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className={`relative flex items-center bg-bubble-bg border border-border rounded-[28px] px-2 py-2 shadow-sm transition-all duration-300 ${isFocused ? 'shadow-md border-foreground-muted/30' : ''}`}>
                  <button type="button" className="w-10 h-10 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </button>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Ask a follow-up..."
                    className="flex-1 bg-transparent outline-none px-3 text-foreground placeholder:text-foreground-muted text-[16px]"
                  />
                  <div className="flex items-center gap-1 shrink-0 px-1">
                    <button type="button" className="w-10 h-10 flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    </button>
                    <button 
                      type="submit" 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${inputValue.trim() ? 'bg-foreground text-background scale-100' : 'bg-foreground/5 text-foreground-muted/50 scale-95 cursor-not-allowed'}`}
                      disabled={!inputValue.trim()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      {!hasConversation && (
        <footer className="hidden md:block py-4 text-center text-xs text-foreground-muted">
          Designed with 💙
        </footer>
      )}
    </div>
  );
}
