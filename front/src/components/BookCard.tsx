import type { Book } from "../types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <li>
      <h3>{book.title}</h3>
      <p>{book.author?.join(", ")}</p>
      <p>{book.year}</p>
    </li>
  );
}
