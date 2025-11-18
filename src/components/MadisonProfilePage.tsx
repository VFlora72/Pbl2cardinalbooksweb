import madisonImage from 'figma:asset/dc073e499ea0b079612136159f3eea13d9edcd6a.png';

interface MadisonProfilePageProps {
  onNavigate: (page: string) => void;
}

export function MadisonProfilePage({ onNavigate }: MadisonProfilePageProps) {
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
          MADISON FREEZE
        </h2>

        <div className="bg-white border-l-4 border-[#B22222] p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 border-4 border-[#B22222] overflow-hidden">
                <img 
                  src={madisonImage} 
                  alt="Madison Freeze" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1">
              <p className="leading-relaxed text-lg text-gray-800">
                Madison graduated from Ball State with a major in Business Management and Leadership. 
                She was a part of the Chi Omega sorority for all 4 years. Since then she has graduated 
                law school and helps with the legal side of Cardinal Books.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
