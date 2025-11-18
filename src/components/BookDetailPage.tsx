import { ImageWithFallback } from './figma/ImageWithFallback';
import { books, bookImages } from './booksData';

interface BookDetailPageProps {
  bookId: number;
  onNavigate: (page: string) => void;
}

export function BookDetailPage({ bookId, onNavigate }: BookDetailPageProps) {

  const book = books.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Book not found</h2>
          <button 
            onClick={() => onNavigate('catalog')}
            className="bg-[#B22222] hover:bg-[#8B0000] text-white px-8 py-3 transition-colors"
          >
            BACK TO CATALOG
          </button>
        </div>
      </div>
    );
  }

  const imageIndex = (book.id - 1) % bookImages.length;

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
          onClick={() => onNavigate('catalog')}
          className="bg-[#B22222] hover:bg-[#8B0000] text-white px-6 py-2 transition-colors"
        >
          ← BACK TO CATALOG
        </button>
      </div>

      {/* Book Details */}
      <div className="max-w-5xl mx-auto bg-white border-4 border-[#B22222] p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Book Image */}
          <div className="border-4 border-gray-200 p-4">
            <ImageWithFallback
              src={bookImages[imageIndex]}
              alt={book.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Book Information */}
          <div>
            <h2 className="text-3xl text-[#8B0000] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {book.title}
            </h2>
            <div className="mb-6 space-y-3">
              <div className="border-b-2 border-gray-200 pb-2">
                <span className="text-gray-600">Author:</span>
                <p className="mt-1">{book.author}</p>
              </div>
              <div className="border-b-2 border-gray-200 pb-2">
                <span className="text-gray-600">Year:</span>
                <p className="mt-1">{book.year}</p>
              </div>
              <div className="border-b-2 border-gray-200 pb-2">
                <span className="text-gray-600">ISBN:</span>
                <p className="mt-1">{book.isbn}</p>
              </div>
              <div className="border-b-2 border-gray-200 pb-2">
                <span className="text-gray-600">Pages:</span>
                <p className="mt-1">{book.pages}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl text-[#8B0000] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>

            <div className="border-t-2 border-[#B22222] pt-6">
              <p className="mb-4">
                <span className="px-4 py-2 bg-green-100 border-2 border-green-600">
                  IN STOCK
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Visit our store in Muncie, Indiana to purchase this book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
