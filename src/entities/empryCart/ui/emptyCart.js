import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./emptyCart.scss";
export const EmptyCart = () => {
    return (_jsxs("div", { className: "emptyCart-wrapper", children: [_jsx("p", { className: "emptyCart__title", children: " You have not added to cart " }), _jsx(Link, { to: "/", className: "emptyCart__linkr", children: "Let's explore books" })] }));
};
