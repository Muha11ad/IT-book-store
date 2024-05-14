import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./book.scss";
import { AddToCart } from "../../../shared/ui/addToCart";
export const Book = ({ item }) => {
    const { image, title, price, subtitle, isbn13, categoryId } = item;
    function cutText(text) {
        if (text.length > 20)
            return (text = `${text.substring(0, 20)}...`);
        else
            return text;
    }
    const isFreeBook = price === "$0.00" ? true : false;
    console.log(typeof price);
    return (_jsxs("div", { className: "book-wrapper", id: categoryId, children: [_jsxs(Link, { to: `/description/${isbn13}`, className: "book__link", children: [_jsx("img", { className: "book__img", src: image, alt: title }), _jsxs("div", { className: "book-info", children: [_jsx("h3", { className: "book__title", children: cutText(title) }), _jsx("p", { className: "book__subtitle", children: cutText(subtitle) }), _jsx("p", { className: "book__price", children: price })] })] }), _jsxs("div", { className: "book-dropdown", children: [_jsx("p", { className: "book__price", children: price }), _jsx("h3", { className: "book__title", children: cutText(title) }), _jsx("p", { className: "book__subtitle", children: cutText(subtitle) }), _jsx(AddToCart, { item: item })] }), isFreeBook ? (_jsx("div", { className: "book-free", children: _jsx("p", { className: "book-free__text", children: "Free Book" }) })) : ""] }));
};
