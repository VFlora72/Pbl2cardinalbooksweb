import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { books, bookImages } from './booksData';

interface CatalogPageProps {
  onNavigate: (page: string, bookId?: number) => void;
}

export function CatalogPage({ onNavigate }: CatalogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Branding */}
      <div className="text-center mb-12 pb-6 border-b-4 border-[#B22222]">
        <h1 className="text-5xl tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
          CARDINAL BOOKS
        </h1>
      </div>

      {/* Search Section */}
      <div hidden className="max-w-3xl mx-auto mt-20 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl text-[#8B0000] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            BOOK SEARCH
          </h2>
          <p className="text-gray-600">Find your next great read</p>
        </div>
        
        <div className="bg-white border-4 border-[#B22222] p-2 shadow-lg mb-6">
          <input
            type="text"
            placeholder="Search by year, author, title, or keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 outline-none text-center bg-white text-black placeholder:text-gray-400"
          />
        </div>
        
        {searchQuery && (
          <div className="text-center mb-4">
            <button 
              onClick={() => setSearchQuery('')}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-2 transition-colors"
            >
              CLEAR SEARCH
            </button>
          </div>
        )}
      </div>

      {/* Book Images Section */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h3 className="text-2xl text-[#8B0000]" style={{ fontFamily: 'Georgia, serif' }}>
            {searchQuery ? 'SEARCH RESULTS' : 'FEATURED COLLECTION'}
          </h3>
          <div className="w-32 h-1 bg-[#B22222] mx-auto mt-4"></div>
        </div>

        {(() => {
          const filteredBooks = searchQuery
            ? books.filter(book => 
                book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.year.toString().includes(searchQuery)
              )
            : books;

          if (filteredBooks.length === 0) {
            return (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No books found matching "{searchQuery}"</p>
                <p className="text-gray-500 mt-2">Try a different search term</p>
              </div>
            );
          }

          return (
            <>
              {searchQuery && (
                <p className="text-center mb-6 text-gray-600">
                  Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book, index) => (
                  <div 
                    key={book.id}
                    onClick={() => onNavigate('book-detail', book.id)}
                    className="bg-white border-4 border-[#B22222] shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="p-4">
                      <ImageWithFallback
                        src={bookImages[(book.id - 1) % bookImages.length]}
                        alt={book.title}
                        className="w-full h-64 object-cover border-2 border-gray-200"
                      />
                    </div>
                    <div className="px-4 pb-4 border-t-2 border-[#B22222] pt-4">
                      <p className="tracking-wide mb-1">{book.title}</p>
                      <p className="text-sm text-gray-600">by {book.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </div>
  );
}
