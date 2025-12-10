import { useEffect, useState } from "react";
import type { Book, BookData } from "../types/book";
import { apiUrl } from "../utils/api";
import BookCard from "./BookCard";

interface BookListProps {
  query: string;
}

export default function BookList({ query }: BookListProps) {
  const [bookData, setBookData] = useState<BookData>();
  const [books, setBooks] = useState<Book[]>([]);

  const getBooks = async () => {
    try {
      const res = await fetch(`${apiUrl}?q=${query}`);
      const data: BookData = await res.json();
      console.log("data : ", data);

      if (!data) throw new Error("No books available");

      const books: Book[] = data.books;
      setBookData(data);
      setBooks(books);
    } catch (error) {
      console.log(error);
      setBooks([]);
    }
  };

  useEffect(() => {
    getBooks();
  }, [query]);

  return (
    <div>
      <h1>Book List</h1>
      <p>Total Results: {bookData?.total}</p>
      {books ? (
        <ul>
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
