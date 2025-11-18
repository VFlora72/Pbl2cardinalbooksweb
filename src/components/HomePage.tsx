import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  const handleCardinalClick = () => {
    if (isRunning) {
      // Stop the animation and reset position
      setIsRunning(false);
      setPosition({ x: 0, y: 0 });
      setTargetPosition({ x: 0, y: 0 });
    } else {
      // Start the animation
      setIsRunning(true);
    }
  };

  useEffect(() => {
    if (!isRunning) return;

    const moveToRandomPosition = () => {
      const maxX = window.innerWidth - 160; // cardinal width
      const maxY = window.innerHeight - 160; // cardinal height
      
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      
      setTargetPosition({ x: newX, y: newY });
    };

    moveToRandomPosition();
    const interval = setInterval(moveToRandomPosition, 2000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const animate = () => {
      setPosition(prev => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 5) {
          return prev;
        }

        const speed = 5;
        const ratio = speed / distance;

        return {
          x: prev.x + dx * ratio,
          y: prev.y + dy * ratio
        };
      });
    };

    const animationFrame = setInterval(animate, 20);
    return () => clearInterval(animationFrame);
  }, [isRunning, targetPosition]);

  return (
    <div className="p-8 bg-gray-50 relative">
      {/* Animated Cardinal */}
      {isRunning && (
        <div 
          className="fixed w-40 h-40 z-50 transition-transform"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: position.x > targetPosition.x ? 'scaleX(-1)' : 'scaleX(1)',
            pointerEvents: 'none'
          }}
        >
          <svg viewBox="0 0 32 32" className="w-full h-full">
            {/* Crest */}
            <rect x="14" y="4" width="2" height="2" fill="#B22222"/>
            <rect x="12" y="5" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="5" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="5" width="2" height="2" fill="#B22222"/>
            <rect x="12" y="6" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="6" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="6" width="2" height="2" fill="#B22222"/>
            
            {/* Head and face mask */}
            <rect x="10" y="7" width="2" height="2" fill="#000000"/>
            <rect x="12" y="7" width="2" height="2" fill="#000000"/>
            <rect x="14" y="7" width="2" height="2" fill="#000000"/>
            <rect x="16" y="7" width="2" height="2" fill="#000000"/>
            <rect x="18" y="7" width="2" height="2" fill="#000000"/>
            
            <rect x="10" y="8" width="2" height="2" fill="#000000"/>
            <rect x="12" y="8" width="2" height="2" fill="#FFFFFF"/>
            <rect x="14" y="8" width="2" height="2" fill="#000000"/>
            <rect x="16" y="8" width="2" height="2" fill="#000000"/>
            <rect x="18" y="8" width="2" height="2" fill="#000000"/>
            
            {/* Beak */}
            <rect x="8" y="9" width="2" height="2" fill="#FFA500"/>
            <rect x="10" y="9" width="2" height="2" fill="#000000"/>
            <rect x="12" y="9" width="2" height="2" fill="#000000"/>
            <rect x="14" y="9" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="9" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="9" width="2" height="2" fill="#B22222"/>
            
            <rect x="6" y="10" width="2" height="2" fill="#FFA500"/>
            <rect x="8" y="10" width="2" height="2" fill="#FFA500"/>
            <rect x="10" y="10" width="2" height="2" fill="#000000"/>
            <rect x="12" y="10" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="10" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="10" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="10" width="2" height="2" fill="#B22222"/>
            
            {/* Body */}
            <rect x="10" y="11" width="2" height="2" fill="#B22222"/>
            <rect x="12" y="11" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="11" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="11" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="11" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="11" width="2" height="2" fill="#B22222"/>
            
            <rect x="10" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="12" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="12" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="12" width="2" height="2" fill="#B22222"/>
            
            <rect x="12" y="13" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="13" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="13" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="13" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="13" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="13" width="2" height="2" fill="#B22222"/>
            
            <rect x="12" y="14" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="14" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="14" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="14" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="14" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="14" width="2" height="2" fill="#B22222"/>
            
            {/* Belly */}
            <rect x="12" y="15" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="15" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="15" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="15" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="15" width="2" height="2" fill="#B22222"/>
            
            <rect x="12" y="16" width="2" height="2" fill="#B22222"/>
            <rect x="14" y="16" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="16" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="16" width="2" height="2" fill="#B22222"/>
            
            {/* Tail */}
            <rect x="14" y="17" width="2" height="2" fill="#B22222"/>
            <rect x="16" y="17" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="17" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="17" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="17" width="2" height="2" fill="#B22222"/>
            
            <rect x="16" y="18" width="2" height="2" fill="#B22222"/>
            <rect x="18" y="18" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="18" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="18" width="2" height="2" fill="#B22222"/>
            <rect x="24" y="18" width="2" height="2" fill="#B22222"/>
            
            <rect x="18" y="19" width="2" height="2" fill="#B22222"/>
            <rect x="20" y="19" width="2" height="2" fill="#B22222"/>
            <rect x="22" y="19" width="2" height="2" fill="#B22222"/>
            <rect x="24" y="19" width="2" height="2" fill="#B22222"/>
            
            {/* Legs */}
            <rect x="12" y="17" width="2" height="2" fill="#000000"/>
            <rect x="14" y="18" width="2" height="2" fill="#000000"/>
            <rect x="10" y="18" width="2" height="2" fill="#000000"/>
            <rect x="12" y="19" width="2" height="2" fill="#000000"/>
          </svg>
        </div>
      )}

      {/* Banner */}
      <div className="border-8 border-[#B22222] bg-white p-12 mb-12 shadow-lg">
        <div className="flex items-center justify-center gap-8">
          {/* Pixel Cardinal */}
          <div 
            className="w-40 h-40 flex-shrink-0 cursor-pointer hover:scale-110 transition-transform"
            onClick={handleCardinalClick}
          >
            <svg viewBox="0 0 32 32" className="w-full h-full">
              {/* Crest */}
              <rect x="14" y="4" width="2" height="2" fill="#B22222"/>
              <rect x="12" y="5" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="5" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="5" width="2" height="2" fill="#B22222"/>
              <rect x="12" y="6" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="6" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="6" width="2" height="2" fill="#B22222"/>
              
              {/* Head and face mask */}
              <rect x="10" y="7" width="2" height="2" fill="#000000"/>
              <rect x="12" y="7" width="2" height="2" fill="#000000"/>
              <rect x="14" y="7" width="2" height="2" fill="#000000"/>
              <rect x="16" y="7" width="2" height="2" fill="#000000"/>
              <rect x="18" y="7" width="2" height="2" fill="#000000"/>
              
              <rect x="10" y="8" width="2" height="2" fill="#000000"/>
              <rect x="12" y="8" width="2" height="2" fill="#FFFFFF"/>
              <rect x="14" y="8" width="2" height="2" fill="#000000"/>
              <rect x="16" y="8" width="2" height="2" fill="#000000"/>
              <rect x="18" y="8" width="2" height="2" fill="#000000"/>
              
              {/* Beak */}
              <rect x="8" y="9" width="2" height="2" fill="#FFA500"/>
              <rect x="10" y="9" width="2" height="2" fill="#000000"/>
              <rect x="12" y="9" width="2" height="2" fill="#000000"/>
              <rect x="14" y="9" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="9" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="9" width="2" height="2" fill="#B22222"/>
              
              <rect x="6" y="10" width="2" height="2" fill="#FFA500"/>
              <rect x="8" y="10" width="2" height="2" fill="#FFA500"/>
              <rect x="10" y="10" width="2" height="2" fill="#000000"/>
              <rect x="12" y="10" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="10" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="10" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="10" width="2" height="2" fill="#B22222"/>
              
              {/* Body */}
              <rect x="10" y="11" width="2" height="2" fill="#B22222"/>
              <rect x="12" y="11" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="11" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="11" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="11" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="11" width="2" height="2" fill="#B22222"/>
              
              <rect x="10" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="12" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="12" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="12" width="2" height="2" fill="#B22222"/>
              
              <rect x="12" y="13" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="13" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="13" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="13" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="13" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="13" width="2" height="2" fill="#B22222"/>
              
              <rect x="12" y="14" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="14" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="14" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="14" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="14" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="14" width="2" height="2" fill="#B22222"/>
              
              {/* Belly */}
              <rect x="12" y="15" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="15" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="15" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="15" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="15" width="2" height="2" fill="#B22222"/>
              
              <rect x="12" y="16" width="2" height="2" fill="#B22222"/>
              <rect x="14" y="16" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="16" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="16" width="2" height="2" fill="#B22222"/>
              
              {/* Tail */}
              <rect x="14" y="17" width="2" height="2" fill="#B22222"/>
              <rect x="16" y="17" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="17" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="17" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="17" width="2" height="2" fill="#B22222"/>
              
              <rect x="16" y="18" width="2" height="2" fill="#B22222"/>
              <rect x="18" y="18" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="18" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="18" width="2" height="2" fill="#B22222"/>
              <rect x="24" y="18" width="2" height="2" fill="#B22222"/>
              
              <rect x="18" y="19" width="2" height="2" fill="#B22222"/>
              <rect x="20" y="19" width="2" height="2" fill="#B22222"/>
              <rect x="22" y="19" width="2" height="2" fill="#B22222"/>
              <rect x="24" y="19" width="2" height="2" fill="#B22222"/>
              
              {/* Legs */}
              <rect x="12" y="17" width="2" height="2" fill="#000000"/>
              <rect x="14" y="18" width="2" height="2" fill="#000000"/>
              <rect x="10" y="18" width="2" height="2" fill="#000000"/>
              <rect x="12" y="19" width="2" height="2" fill="#000000"/>
            </svg>
          </div>
          
          {/* Title */}
          <div className="text-center">
            <h1 className="text-7xl tracking-wider mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              CARDINAL BOOKS
            </h1>
            <p className="text-[#B22222] text-2xl tracking-widest">EST. 1966</p>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="max-w-3xl mx-auto mb-12 text-center bg-white p-8 rounded-lg shadow-md border-t-4 border-[#B22222]">
        <p className="mb-4 text-lg">
          Welcome to Cardinal Books - Your Premier Source for Educational Literature
        </p>
        <p className="text-gray-700">
          Since 1966, we have been serving the community with quality books and exceptional service.
          Explore our website to discover our vast catalog and learn more about our story.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          onClick={() => onNavigate('catalog')}
          className="bg-white border-4 border-[#B22222] p-8 text-center hover:bg-[#FFF5F5] transition-colors cursor-pointer shadow-lg"
        >
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-[#B22222]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-xl mb-3 tracking-wide">EXPLORE CATALOG</p>
          <p className="text-sm text-gray-600">Browse our extensive collection of educational books</p>
        </div>
        
        <div 
          onClick={() => onNavigate('returns')}
          className="bg-white border-4 border-[#B22222] p-8 text-center hover:bg-[#FFF5F5] transition-colors cursor-pointer shadow-lg"
        >
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-[#B22222]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </div>
          <p className="text-xl mb-3 tracking-wide">RETURNS & EXCHANGES</p>
          <p className="text-sm text-gray-600">View our return and exchange policies</p>
        </div>
      </div>
    </div>
  );
}
