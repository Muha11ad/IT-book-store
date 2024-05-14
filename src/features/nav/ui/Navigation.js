import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { CONTENT_NAVIGATION_MENU } from "../../../shared/consts/contentNavMenu";
import "./Navigation.scss";
export const Navigation = ({ isOpen, setIsOpen }) => {
    let content = CONTENT_NAVIGATION_MENU.map((book, index) => {
        return (_jsx(NavLink, { className: ({ isActive }) => isActive ? "active__link" : "inactive__link", to: book.link, children: book.title }, index));
    });
    return (_jsxs("nav", { className: isOpen ? "nav" : "nav-open", children: [_jsx("div", { className: "container nav-wrapper", children: content }), _jsx("button", { className: "nav__hide-btn", onClick: () => setIsOpen(!isOpen), children: _jsx("span", { children: "X" }) })] }));
};
