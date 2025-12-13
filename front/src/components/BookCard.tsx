import type { Book } from "../types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  console.log("Book cover : ", book.cover);
  return (
    <li>
      <h3>{book.title}</h3>
      <p>{book.author?.join(", ")}</p>
      <p>{book.year}</p>
      {book.cover ? (
        <img src={book.cover} alt="book img" width={114} height={180} />
      ) : (
        <p>No book cover available</p>
      )}
    </li>
  );
}
