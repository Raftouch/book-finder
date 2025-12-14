import type { Book } from "../types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
      <div className="flex justify-center mb-4">
        {book.cover ? (
          <img
            src={book.cover}
            alt={book.title}
            className="w-[114px] h-[180px] object-cover rounded"
          />
        ) : (
          <div className="w-[114px] h-[180px] bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded">
            No cover
          </div>
        )}
      </div>

      <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
        {book.title}
      </h3>

      <p className="text-sm text-gray-600 mb-1">
        {book.author?.join(", ") || "Unknown author"}
      </p>

      <p className="text-sm text-gray-500">{book.year || "—"}</p>
    </li>
  );
}
