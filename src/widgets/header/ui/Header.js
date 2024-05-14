import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Search } from "../../../features/search";
import { Cart } from "../../../features/cart";
import { Navigation } from "../../../features/nav";
import menuImg from "../../../shared/icons/menu.svg";
import { useState } from "react";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (_jsxs(_Fragment, { children: [_jsx("header", { className: "header", children: _jsxs("div", { className: "container header__wrapper", children: [_jsx("div", { className: "header__title-wrapper", children: _jsx(Link, { to: "/", children: _jsx("h2", { className: "header__title", children: "IT Bookstore" }) }) }), _jsx("div", { className: "header__search", children: _jsx(Search, {}) }), _jsx("div", { className: "header__link", children: _jsx(Cart, {}) }), _jsx("button", { className: "dropdown-btn", onClick: () => setIsOpen(!isOpen), children: _jsx("img", { className: "dropdown-btn__img", src: menuImg, alt: "menu burger" }) })] }) }), _jsx(Navigation, { isOpen: isOpen, setIsOpen: setIsOpen })] }));
};
