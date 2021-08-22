import { useState } from "react";

import "../styles/Home.css";
import { Book } from "../types";
import BookForm from "./BookForm";

const Home = () => {
  const [genre, setGenre] = useState<string | undefined>();
  const [book, setBook] = useState<Book | undefined>();

  return (
    <div className="home">
      <BookForm
        genre={genre}
        setGenre={setGenre}
        book={book}
        setBook={setBook}
      />
    </div>
  );
};

export default Home;
