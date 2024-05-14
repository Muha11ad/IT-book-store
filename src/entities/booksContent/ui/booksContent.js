import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ALL_BOOKS_CONTENT } from "../../../shared/consts/allBooksContent";
import "./booksContent.scss";
export const BooksContent = () => {
    return (_jsx("div", { className: "books-wrapper", children: Object.entries(ALL_BOOKS_CONTENT).map(([category, items]) => (_jsxs("div", { className: "books-category-wrapper", children: [_jsx("h3", { className: "books__init-letter", children: category }), _jsx("div", { className: "books__line" }), _jsx("ol", { className: "books__list", children: items.map((item) => (_jsx("li", { className: "books__list-item", children: _jsx(Link, { className: "books__list-link", to: `/book/${item.link}`, children: item.title }) }, item.title))) })] }, category))) }));
};
