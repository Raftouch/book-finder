import { useEffect } from "react";

function App() {
  const getBooks = async () => {
    const res = await fetch("http://localhost:4000");
    const data = await res.text();
    console.log("data : ", data);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return <>Hi there</>;
}

export default App;
