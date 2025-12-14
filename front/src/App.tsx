import BookList from "./components/BookList";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <BookList query="достоевский" />
    </main>
  );
}

export default App;
