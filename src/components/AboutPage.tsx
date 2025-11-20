import madisonImage from 'figma:asset/dc073e499ea0b079612136159f3eea13d9edcd6a.png';
import seanImage from 'figma:asset/ebc4517546235373749dc6db257a07a99eee8ae3.png';
import vivekaImage from 'figma:asset/952ab4c975c0c3af3f622198e70e51a3814f5751.png';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Branding */}
      <div className="text-center mb-12 pb-6 border-b-4 border-[#B22222]">
        <h1 className="text-5xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          CARDINAL BOOKS
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl mb-8 text-center text-[#8B0000]" style={{ fontFamily: 'Georgia, serif' }}>
          OUR STORY: A LEGACY OF KNOWLEDGE
        </h2>

        {/* Story Paragraph */}
        <div className="bg-white border-l-4 border-[#B22222] p-10 mb-12 shadow-lg">
          <p className="leading-relaxed text-lg text-gray-800">
            Cardinal Books was established in 1966, Its founders were an amazing group of students: 
            Madison Freeze, Viveka Flora, Sean Doyle, and Max Nothere. The bookstore gained its 
            success from the multitude of educational books it possessed, as well as the passionate 
            minds behind it. Unfortunately in 2023, Max disappeared and never showed up to Cardinal 
            Books ever again. But, Madison, Sean, and Viveka carry on today to bring you amazing 
            books that get better every year.
          </p>
        </div>

        {/* Founder Photo Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <button 
            onClick={() => onNavigate('madison-profile')}
            className="bg-white border-4 border-[#B22222] p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
              <img 
                src={madisonImage} 
                alt="Madison Freeze" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center">Madison Freeze</p>
          </button>
          
          <button 
            onClick={() => onNavigate('viveka-profile')}
            className="bg-white border-4 border-[#B22222] p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
              <img 
                src={vivekaImage} 
                alt="Viveka Flora" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center">Viveka Flora</p>
          </button>
          
          <button 
            onClick={() => onNavigate('sean-profile')}
            className="bg-white border-4 border-[#B22222] p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-left"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3 overflow-hidden">
              <img 
                src={seanImage} 
                alt="Sean Doyle" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <p className="text-center">Sean Doyle</p>
          </button>
          
          <div className="bg-white border-4 border-[#B22222] p-4 shadow-md hover:shadow-xl transition-shadow">
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-3">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-center text-gray-500">Max Nothere</p>
          </div>
        </div>
      </div>
    </div>
  );
}