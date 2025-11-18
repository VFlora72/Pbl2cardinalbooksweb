import vivekaImage from 'figma:asset/952ab4c975c0c3af3f622198e70e51a3814f5751.png';

interface VivekaProfilePageProps {
  onNavigate: (page: string) => void;
}

export function VivekaProfilePage({ onNavigate }: VivekaProfilePageProps) {
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
          VIVEKA FLORA
        </h2>

        <div className="bg-white border-l-4 border-[#B22222] p-10 shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 border-4 border-[#B22222] overflow-hidden">
                <img 
                  src={vivekaImage} 
                  alt="Viveka Flora" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1">
              <p className="leading-relaxed text-lg text-gray-800">
                Viveka Flora graduated from Ball State with a major in International Business. 
                After founding Cardinal Books, she now manages the business partnerships and 
                international affairs within the bookstore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
