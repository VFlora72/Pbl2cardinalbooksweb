import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { CatalogPage } from './components/CatalogPage';
import { ReturnsPage } from './components/ReturnsPage';
import { StoreHoursPage } from './components/StoreHoursPage';
import { BookDetailPage } from './components/BookDetailPage';
import { MadisonProfilePage } from './components/MadisonProfilePage';
import { VivekaProfilePage } from './components/VivekaProfilePage';
import { SeanProfilePage } from './components/SeanProfilePage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  const handleNavigate = (page: string, bookId?: number) => {
    setCurrentPage(page);
    if (bookId !== undefined) {
      setSelectedBookId(bookId);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Navigation */}
      <nav className="bg-[#B22222]">
        <div className="flex">
          <button
            onClick={() => handleNavigate('home')}
            className={`px-8 py-4 transition-colors ${
              currentPage === 'home' ? 'bg-[#8B0000] text-white' : 'text-black hover:bg-[#8B0000] hover:text-white'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavigate('about')}
            className={`px-8 py-4 transition-colors ${
              currentPage === 'about' ? 'bg-[#8B0000] text-white' : 'text-black hover:bg-[#8B0000] hover:text-white'
            }`}
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleNavigate('catalog')}
            className={`px-8 py-4 transition-colors ${
              currentPage === 'catalog' || currentPage === 'book-detail' ? 'bg-[#8B0000] text-white' : 'text-black hover:bg-[#8B0000] hover:text-white'
            }`}
          >
            CATALOG
          </button>
          <button
            onClick={() => handleNavigate('returns')}
            className={`px-8 py-4 transition-colors ${
              currentPage === 'returns' ? 'bg-[#8B0000] text-white' : 'text-black hover:bg-[#8B0000] hover:text-white'
            }`}
          >
            RETURNS & EXCHANGES
          </button>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'catalog' && <CatalogPage onNavigate={handleNavigate} />}
        {currentPage === 'returns' && <ReturnsPage onNavigate={handleNavigate} />}
        {currentPage === 'hours' && <StoreHoursPage />}
        {currentPage === 'madison-profile' && <MadisonProfilePage onNavigate={handleNavigate} />}
        {currentPage === 'viveka-profile' && <VivekaProfilePage onNavigate={handleNavigate} />}
        {currentPage === 'sean-profile' && <SeanProfilePage onNavigate={handleNavigate} />}
        {currentPage === 'book-detail' && selectedBookId && (
          <BookDetailPage bookId={selectedBookId} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}