import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FooterList } from "../../../entities/footerList";
import { ABOUT_ME_CONTENT, POPULAR_BOOKS_CONTENT, USEFUL_LINKS, } from "../../../shared/consts/footerContent";
import "./footer.scss";
export const Footer = () => {
    return (_jsx("footer", { children: _jsxs("div", { className: " container footer-wrapper", children: [_jsx(FooterList, { titleOfList: "Popular Books", data: POPULAR_BOOKS_CONTENT }), _jsx(FooterList, { titleOfList: "About me", data: ABOUT_ME_CONTENT }), _jsx(FooterList, { titleOfList: "Useful link", data: USEFUL_LINKS })] }) }));
};
