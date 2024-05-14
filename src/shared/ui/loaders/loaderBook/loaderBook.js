import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Skeleton from "react-loading-skeleton";
import "./loaderBook.scss";
export const LoaderBook = () => {
    return (_jsxs("li", { className: "book-skeleton animation-pulse", children: [_jsx("div", { className: "book-skeleton__img skeleton animation-pulse", children: _jsx(Skeleton, {}) }), _jsxs("div", { className: "book-skeleton__info ", children: [_jsx("h3", { className: "book-skeleton__title skeleton animation-pulse", children: _jsx(Skeleton, {}) }), _jsx("p", { className: "book-skeleton__subtitle skeleton animation-pulse", children: _jsx(Skeleton, {}) }), _jsx("p", { className: "book-skeleton__price skeleton animation-pulse", children: _jsx(Skeleton, {}) })] })] }));
};
