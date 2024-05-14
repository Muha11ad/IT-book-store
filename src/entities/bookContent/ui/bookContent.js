import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { selectBookInfoData } from "../../../pages/bookInfo/model/bookInfoSelector";
import { useAppSelector } from "../../../shared/store/store";
import { AddToCart } from "../../../shared/ui/addToCart";
import { Rating } from "../../../shared/ui/rating";
import { Author } from "../../author";
import "./bookContent.scss";
export const BookContent = () => {
    const data = useAppSelector(selectBookInfoData);
    const { image, title, authors, publisher, isbn10, isbn13, pages, year, rating, desc, url, price, } = data;
    const authorsArray = authors?.split(", ");
    let authorLinks;
    if (authorsArray) {
        authorLinks = authorsArray.map((author, index) => (_jsxs("div", { className: "book-info__link-wrapper", children: [_jsx(Link, { className: "book-info__link", to: `/search/${author}`, children: author }), index < authorsArray.length - 1 && ", "] }, index)));
    }
    return (_jsxs("div", { className: "book-wrapper", children: [_jsxs("div", { className: "book-content", children: [_jsx("img", { className: "book__img", src: image, alt: title }), _jsxs("div", { className: "book-info", children: [_jsx(Rating, { value: Number(rating), className: "book-details__rating" }), _jsx("h3", { className: "book-info__title", children: title }), authorLinks, _jsxs("ul", { className: "book-info__list", children: [_jsxs("li", { className: "books-info__item", children: ["Publisher : ", publisher] }), _jsxs("li", { className: "books-info__item", children: ["Published : ", year] }), _jsxs("li", { className: "books-info__item", children: ["Pages : ", pages] }), _jsxs("li", { className: "books-info__item", children: ["isbn10 : ", isbn10] }), _jsxs("li", { className: "books-info__item", children: ["isbn13 : ", isbn13] })] }), _jsxs("div", { className: "book-info__bottom", children: [_jsxs("p", { className: "book-info__price", children: ["Price : ", _jsxs("span", { className: "red", children: [" ", price, " "] })] }), _jsx(AddToCart, { item: data })] })] }), _jsx("div", { className: "book__carousel", children: _jsx(Author, { authors: authorsArray }) })] }), _jsxs("div", { className: "book__description", children: [_jsx("p", { className: "book__description-title", children: "Description" }), _jsx("div", { className: "line" }), _jsxs("div", { className: "book__description-subtitle", children: [_jsx("span", { children: desc }), " ", _jsx(Link, { to: url, children: "Read more" })] })] })] }));
};
