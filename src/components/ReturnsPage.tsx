interface ReturnsPageProps {
  onNavigate: (page: string) => void;
}

export function ReturnsPage({ onNavigate }: ReturnsPageProps) {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Branding */}
      <div className="text-center mb-12 pb-6 border-b-4 border-[#B22222]">
        <h1 className="text-5xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          CARDINAL BOOKS
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl mb-8 text-center text-[#8B0000]" style={{ fontFamily: 'Georgia, serif' }}>
          RETURNS & EXCHANGES
        </h2>

        <div className="bg-white border-l-4 border-[#B22222] p-8 mb-8 shadow-lg">
          <h3 className="text-2xl mb-6 text-[#8B0000]">HOW TO RETURN YOUR BOOKS:</h3>
          
          <div className="mb-6 pl-4">
            <div className="flex items-start mb-2">
              <span className="text-[#B22222] mr-3">•</span>
              <div>
                <p className="mb-2">1. IN-PERSON RETURNS</p>
                <p className="text-sm text-gray-700 ml-6">
                  Visit our store location at 1400 B. State, Muncie Indiana during business hours.
                  Bring your receipt or proof of purchase.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 pl-4">
            <div className="flex items-start mb-2">
              <span className="text-[#B22222] mr-3">•</span>
              <div>
                <p className="mb-2">2. ONLINE RETURNS</p>
                <p className="text-sm text-gray-700 ml-6">
                  Submit a return request through our online portal. You will receive a return 
                  shipping label via email. Include your receipt or order confirmation number.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 pl-4">
            <div className="flex items-start mb-2">
              <span className="text-[#B22222] mr-3">•</span>
              <div>
                <p className="mb-2">3. PHONE RETURNS</p>
                <p className="text-sm text-gray-700 ml-6">
                  Call our bookstore to initiate a return. Our staff will guide you through the 
                  process. Have your receipt or proof of purchase ready.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#FFF5F5] border-2 border-[#B22222]">
            <p className="text-center text-gray-800">
              <strong className="text-[#8B0000]">IMPORTANT:</strong> Please bring your receipt or proof of checkout/rental/purchase 
              for all returns and exchanges.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('hours')}
            className="bg-[#B22222] hover:bg-[#8B0000] text-white px-12 py-4 transition-colors shadow-md"
          >
            VIEW STORE HOURS
          </button>
        </div>
      </div>
    </div>
  );
}
