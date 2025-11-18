export function StoreHoursPage() {
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
          STORE HOURS
        </h2>

        <div className="bg-white border-l-4 border-[#B22222] p-12 shadow-lg">
          <div className="text-center">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-[#B22222] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="space-y-4">
              <p className="text-3xl tracking-wide">MONDAY - FRIDAY</p>
              <p className="text-5xl text-[#B22222]" style={{ fontFamily: 'Georgia, serif' }}>7AM - 5PM</p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <p className="text-gray-700">
                Visit us at our Muncie, Indiana location
              </p>
              <p className="text-gray-600 mt-2">
                1400 B. State, Muncie Indiana
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
