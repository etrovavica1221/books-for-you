import axios from "axios";

import "../styles/BookForm.css";
import { Book, DataResponse } from "../types";

interface StatProps {
  genre: string | undefined;
  setGenre: (value: string) => void;
  book: Book | undefined;
  setBook: (getBook: Book) => void;
}

const BookForm = ({ genre, setGenre, book, setBook }: StatProps) => {
  const onValueChange = (e: React.FormEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    setGenre(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    apiCall();
  };

  const apiCall = () => {
    return axios

      .get<DataResponse>(
        `https://www.googleapis.com/books/v1/volumes?q=` + genre
      )
      .then(({ data }): void => {
        let getBook: Book = data.items[0].volumeInfo;
        setBook(getBook);
      })
      .catch((err) => console.log(err));
  };

  const isBook = (book: Book | undefined) => {
    if (typeof book === "object") {
      return book;
    } else {
      throw new Error("Error!");
    }
  };

  return (
    <div className="formContainer">
      {!book ? (
        <>
          <h1 className="title">Book match:</h1>
          <form>
            <fieldset>
              <legend>What are your favourite genre?</legend>
              <input
                type="radio"
                name="genre"
                id="ANTIQUES"
                value="ANTIQUES"
                onChange={onValueChange}
              />
              <label htmlFor="ANTIQUES">ANTIQUES&amp;COLLECTIBLES</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="ARCHITECTURE"
                value="ARCHITECTURE"
                onChange={onValueChange}
              />
              <label htmlFor="ARCHITECTURE">ARCHITECTURE</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="ART"
                value="ART"
                onChange={onValueChange}
              />
              <label htmlFor="ART">ART</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="BIBLES"
                value="BIBLES"
                onChange={onValueChange}
              />
              <label htmlFor="BIBLES">BIBLES</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="BIOGRAPHY"
                value="BIOGRAPHY"
                onChange={onValueChange}
              />
              <label htmlFor="BIOGRAPHY">BIOGRAPHY&amp;AUTOBIOGRAPHY</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="MIND"
                value="MIND"
                onChange={onValueChange}
              />
              <label htmlFor="MIND">BODY, MIND&amp;SPIRIT</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="BUSINESS"
                value="BUSINESS"
                onChange={onValueChange}
              />
              <label htmlFor="BUSINESS">BUSINESS&amp;ECONOMICS</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="COMICS"
                value="COMICS"
                onChange={onValueChange}
              />
              <label htmlFor="COMICS">COMICS&amp;GRAPHIC NOVELS</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="COMPUTERS"
                value="COMPUTERS"
                onChange={onValueChange}
              />
              <label htmlFor="COMPUTERS">COMPUTERS</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="DRAMA"
                value="DRAMA"
                onChange={onValueChange}
              />
              <label htmlFor="DRAMA">DRAMA</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="FICTION"
                value="FICTION"
                onChange={onValueChange}
              />
              <label htmlFor="FICTION">FICTION</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="HISTORY"
                value="HISTORY"
                onChange={onValueChange}
              />
              <label htmlFor="HISTORY">HISTORY</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="HUMOR"
                value="HUMOR"
                onChange={onValueChange}
              />
              <label htmlFor="HUMOR">HUMOR</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="PHILOSOPHY"
                value="PHILOSOPHY"
                onChange={onValueChange}
              />
              <label htmlFor="PHILOSOPHY">PHILOSOPHY </label>
              <br />
              <input
                type="radio"
                name="genre"
                id="PSYCHOLOGY"
                value="PSYCHOLOGY"
                onChange={onValueChange}
              />
              <label htmlFor="PSYCHOLOGY">PSYCHOLOGY</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="TRAVEL"
                value="TRAVEL"
                onChange={onValueChange}
              />
              <label htmlFor="TRAVEL">TRAVEL</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="CRIME"
                value="CRIME"
                onChange={onValueChange}
              />
              <label htmlFor="CRIME">TRUE CRIME</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="YOUNG ADULT FICTION"
                value="YOUNG ADULT FICTION"
                onChange={onValueChange}
              />
              <label htmlFor="YOUNG ADULT FICTION">YOUNG ADULT FICTION</label>
              <br />
              <input
                type="radio"
                name="genre"
                id="YOUNG ADULT NONFICTION"
                value="YOUNG ADULT NONFICTION"
                onChange={onValueChange}
              />
              <label htmlFor="YOUNG ADULT NONFICTION">
                YOUNG ADULT NONFICTION
              </label>
              <br />
            </fieldset>
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </>
      ) : (
        <div>
          Your book is {isBook(book).title} by{" "}
          {isBook(book).authors.map((author) => {
            return <p key={author}>{author}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default BookForm;
