'use client';

import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import ProfileAnswer from "./components/ProfileAnswer";
import PeopleAlsoAsk from "./components/PeopleAlsoAsk";
import DevignlabsAnswer from "./components/DevignlabsAnswer";
import TechStackAnswer from "./components/TechStackAnswer";
import ProjectsAnswer from "./components/ProjectsAnswer";
import QuestionBubble from "./components/QuestionBubble";

const suggestedQuestions = [
  "Who is Joshua Biong?",
  "What does he do at Devignlabs?",
  "What projects is he working on?",
];

type MessageType = 'question' | 'answer' | 'text-answer' | 'devignlabs-answer' | 'tech-stack-answer' | 'projects-answer';

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
    // Scroll to the last question when a new answer is added
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.type !== 'question') {
        scrollToLastQuestion();
    }
  }, [messages]);

  const handleQuestionClick = (question: string) => {
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
    } else if (lowerQuestion.includes('contact')) {
       answerContent = "You can contact Joshua via LinkedIn, Twitter, or GitHub. Check the links in his profile!";
    }

    // Simulate typing effect
    setTimeout(() => {
      setMessages(prev => [...prev, { type: answerType, content: answerContent }]);
      setIsLoading(false);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleQuestionClick(inputValue);
    setInputValue('');
  };

  const hasConversation = messages.length > 0;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors flex flex-col">
      {hasConversation && <Header onBack={() => setMessages([])} />}
      
      <main className="flex-1 flex flex-col">
        {!hasConversation ? (
          /* Landing State */
          <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center animate-fade-in">
              What would you like to know?
            </h1>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-6">
              <div className="relative flex items-center bg-bubble-bg border border-border rounded-full px-4 py-3 shadow-sm hover:shadow-md transition-shadow">
                <button type="button" className="p-1 text-foreground-muted hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything"
                  className="flex-1 bg-transparent outline-none px-3 text-foreground placeholder:text-foreground-muted"
                />
                <button type="button" className="p-1 text-foreground-muted hover:text-foreground transition-colors mr-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </button>
                <button 
                  type="submit" 
                  className="w-8 h-8 rounded-full bg-accent hover:bg-accent-hover flex items-center justify-center text-white transition-colors disabled:opacity-50"
                  disabled={!inputValue.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                </button>
              </div>
            </form>

            {/* Suggested Questions */}
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
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
          </div>
        ) : (
          /* Conversation State */
          <div className="flex-1 pt-20 pb-32 px-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-8">
              {messages.map((msg, index) => {
                const isLastQuestion = msg.type === 'question' && index === messages.findLastIndex(m => m.type === 'question');
                
                return (
                <div key={index} className="animate-fade-in scroll-mt-32" ref={isLastQuestion ? lastQuestionRef : null}>
                  {msg.type === 'question' ? (
                    <div className="flex justify-end mb-8">
                      <div className="bg-foreground text-background px-4 py-2 rounded-2xl max-w-md text-sm">
                        {msg.content}
                      </div>
                    </div>
                  ) : msg.type === 'answer' ? (
                    <div className="space-y-8 mb-12">
                      <ProfileAnswer />
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
                <div className="flex items-center gap-2 text-foreground-muted ml-1">
                  <div className="w-2 h-2 rounded-full bg-foreground-muted animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-foreground-muted animate-pulse delay-100" />
                  <div className="w-2 h-2 rounded-full bg-foreground-muted animate-pulse delay-200" />
                </div>
              )}
            </div>
          </div>
        )}
        


        {/* Fixed bottom input when in conversation */}
        {hasConversation && (
          <div className="fixed bottom-0 left-0 right-0 z-10 px-6 pb-6 pt-24 bg-gradient-to-t from-background from-20% to-transparent animate-slide-up">
            <form 
              onSubmit={handleSubmit} 
              className={`mx-auto transition-all duration-300 ease-out ${isActive ? 'max-w-2xl mb-2 scale-105 opacity-100' : 'max-w-xl scale-95 opacity-90 hover:opacity-100 hover:scale-[0.97]'}`}
            >
              <div className={`relative flex items-center bg-bubble-bg border border-border rounded-full px-4 py-3 shadow-sm transition-all duration-300 ${isActive ? 'shadow-md ring-1 ring-border' : ''}`}>
                <button type="button" className="p-1 text-foreground-muted hover:text-foreground transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Ask a follow-up..."
                  className="flex-1 bg-transparent outline-none px-3 text-foreground placeholder:text-foreground-muted"
                />
                <button 
                  type="submit" 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${inputValue.trim() || isActive ? 'bg-accent hover:bg-accent-hover' : 'bg-border text-foreground-muted cursor-not-allowed'}`}
                  disabled={!inputValue.trim()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      {!hasConversation && (
        <footer className="py-4 text-center text-xs text-foreground-muted">
          Designed with 💙
        </footer>
      )}
    </div>
  );
}
