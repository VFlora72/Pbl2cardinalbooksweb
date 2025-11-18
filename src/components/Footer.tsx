export function Footer() {
  return (
    <footer className="bg-[#B22222] text-black border-t-4 border-[#8B0000] p-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="mb-3">FAQ</p>
            <ul className="text-sm space-y-2">
              <li>• How do I place an order?</li>
              <li>• What are your store hours?</li>
              <li>• Do you offer gift cards?</li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-2">©1966 Cardinal Books</p>
            <p className="text-sm">All Rights Reserved</p>
          </div>
          
          <div className="md:text-right">
            <p className="mb-3">LOCATION</p>
            <p className="text-sm">1400 B. State</p>
            <p className="text-sm">Muncie Indiana</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
