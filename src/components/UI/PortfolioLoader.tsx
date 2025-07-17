import React, { useState, useEffect } from 'react';

interface PortfolioLoaderProps {
  onLoadComplete?: () => void;
  duration?: number;
}

const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({ 
  onLoadComplete, 
  duration = 3000 
}) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onLoadComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] transition-opacity duration-500 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="relative w-28 h-28 mx-auto">
            <div className="absolute inset-0 border-4 border-transparent border-t-[#5eead4] border-r-[#2dd4bf] rounded-full animate-spin-slow"></div>
            <div className="absolute inset-3 bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] rounded-full animate-pulse-scale">
              <div className="absolute inset-2 bg-[#1b263b] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#5eead4] rounded-full animate-glow"></div>
              </div>
            </div>
            <div className="absolute inset-0 animate-spin-reverse">
              <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#2dd4bf] rounded-full animate-bounce"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 -ml-1 -mb-1 bg-[#5eead4] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#5eead4] mb-2 animate-fade-in">Prepping Akanksha’s Awesomeness… 🚀</h2>
          <p className="text-[#84ccf9] text-lg animate-fade-in-delay">Launching into the creative cosmos…</p>
        </div>

        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-sm text-[#5eead4] mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#0d1b2a] rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#5eead4] to-[#2dd4bf] rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white opacity-20 animate-shimmer"></div>
            </div>
          </div>
        </div>

        <div className="text-[#84ccf9] text-sm space-y-1">
          <div className={`transition-opacity duration-500 ${progress > 20 ? 'opacity-100' : 'opacity-50'}`}>✓ Calibrating cosmic creativity</div>
          <div className={`transition-opacity duration-500 ${progress > 50 ? 'opacity-100' : 'opacity-50'}`}>✓ Aligning UI orbits</div>
          <div className={`transition-opacity duration-500 ${progress > 80 ? 'opacity-100' : 'opacity-50'}`}>✓ Infusing nebula-grade animations</div>
          <div className={`transition-opacity duration-500 ${progress > 95 ? 'opacity-100' : 'opacity-50'}`}>✓ Final countdown to liftoff!</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoader;
