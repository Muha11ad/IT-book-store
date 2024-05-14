import { Link } from "react-router-dom";
import { ALL_BOOKS_CONTENT } from "../../../shared/consts/allBooksContent";
import "./booksContent.scss";

export const BooksContent = () => {
  return (
    <div className="books-wrapper">
      {Object.entries(ALL_BOOKS_CONTENT).map(([category, items]) => (
        <div className="books-category-wrapper" key={category}>
          <h3 className="books__init-letter">{category}</h3>
          <div className="books__line"></div>
          <ol className="books__list">
            {items.map((item) => (
              <li key={item.title} className="books__list-item">
                <Link className="books__list-link" to={`/book/${item.link}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};
