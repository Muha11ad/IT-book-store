import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./footerList.scss";
export const FooterList = ({ data, titleOfList }) => {
    return (_jsxs("ul", { className: "footer-list", children: [_jsx("li", { className: "footer-list__title", children: titleOfList }), data?.map((book, index) => {
                return (_jsx("li", { className: "footer-list__item", children: _jsxs(Link, { className: clsx("footer-list__link", book.image ? "link-with-image" : ""), to: book.link, children: [book.image ? _jsx("img", { src: book.image, alt: book.name }) : null, book.name] }) }, index));
            })] }));
};
