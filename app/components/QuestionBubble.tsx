'use client';

interface QuestionBubbleProps {
  question: string;
  onClick: () => void;
  isActive?: boolean;
}

export default function QuestionBubble({ question, onClick, isActive }: QuestionBubbleProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 border
        ${isActive 
          ? 'bg-foreground text-background border-foreground shadow-sm' 
          : 'bg-bubble-bg text-foreground border-border hover:bg-bubble-hover hover:border-foreground-muted/30'
        }
        active:scale-95
      `}
    >
      {question}
    </button>
  );
}
