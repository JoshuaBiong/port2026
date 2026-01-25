'use client';

import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onBack?: () => void;
}

export default function Header({ onBack }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto max-w-4xl px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Back arrow and logo */}
          <div className="flex items-center gap-4">
            {onBack && (
              <button 
                onClick={onBack}
                className="p-1 text-foreground-muted hover:text-foreground transition-colors"
                aria-label="Go back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            )}
            
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-foreground text-background font-semibold text-xs">
                JB
              </div>
              <span className="font-medium text-foreground text-sm">Joshua Biong</span>
            </div>
          </div>

          {/* Right side - Share button */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>
            
            <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-foreground-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
