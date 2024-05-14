import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BooksContent } from '../../../entities/booksContent';
import { Footer } from '../../../widgets/footer';
import { Header } from '../../../widgets/header';
import './AllBooks.scss';
export const AllBooks = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: 'container', children: _jsx(BooksContent, {}) }), _jsx(Footer, {})] }));
};
