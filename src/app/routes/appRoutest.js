import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { AllBooks } from "../../pages/allBooks/indext";
import { BookInfo } from "../../pages/bookInfo";
import { Cart } from "../../pages/cart/ui/Cart";
import { Category } from "../../pages/category";
import { Home } from "../../pages/home";
import { SearchResult } from "../../pages/searchResult";
export const AppRouter = () => {
    return (_jsx(_Fragment, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/book/:title", element: _jsx(Category, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/search/:searchValue", element: _jsx(SearchResult, {}) }), _jsx(Route, { path: "/books", element: _jsx(AllBooks, {}) }), _jsx(Route, { path: "/description/:isbn13", element: _jsx(BookInfo, {}) })] }) }));
};
