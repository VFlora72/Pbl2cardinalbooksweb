import { ImageWithFallback } from './figma/ImageWithFallback';
import seanImage from 'figma:asset/ebc4517546235373749dc6db257a07a99eee8ae3.png';

interface SeanProfilePageProps {
  onNavigate: (page: string) => void;
}

export function SeanProfilePage({ onNavigate }: SeanProfilePageProps) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Branding */}
      <div className="text-center mb-12 pb-6 border-b-4 border-[#B22222]">
        <h1 className="text-5xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          CARDINAL BOOKS
        </h1>
      </div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-8">
        <button 
          onClick={() => onNavigate('about')}
          className="text-[#B22222] hover:text-[#8B0000] underline"
        >
          ← Back to About Us
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl mb-8 text-center text-[#8B0000]" style={{ fontFamily: 'Georgia, serif' }}>
          SEAN DOYLE
        </h2>

        <div className="bg-white border-l-4 border-[#B22222] p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 border-4 border-[#B22222] overflow-hidden">
                <img 
                  src={seanImage}
                  alt="Sean Doyle" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1">
              <p className="leading-relaxed text-lg text-gray-800">
                Sean Doyle graduated from Ball State with a major in Construction. His previous 
                experience in Business Admin led him to co-founding Cardinal Books, along with 
                building the original building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}