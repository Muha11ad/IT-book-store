import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Author.scss";
import { Link } from "react-router-dom";
import { Carousel } from "../../../shared/ui/carousel";
import authorImg from "../../../shared/assets/defaultAuthor.png";
import arrowImg from "../../../shared/icons/arrowRight.svg";
const AuthorContent = (props) => {
    const { author } = props;
    return (_jsxs("div", { className: "author-wrapper", children: [_jsx("h3", { className: "author__title", children: "Author" }), _jsxs("div", { className: "author__bio", children: [_jsx("img", { className: "author__img", src: authorImg, alt: author }), _jsx("p", { className: "author__name", children: author })] }), _jsxs(Link, { className: "author__link", to: `/search/${author}`, children: ["Read more ", _jsx("img", { src: arrowImg, alt: "Arrow right" })] })] }));
};
export const Author = (props) => {
    const { authors } = props;
    const responsive = {
        1320: { items: 1 },
    };
    // Check if authors exist before rendering
    if (authors) {
        const authorsContent = authors.map((item) => {
            return _jsx(AuthorContent, { author: item });
        });
        return authors.length > 1 ? (_jsx(Carousel, { responsive: responsive, autoWidth: true, disableDotsControls: true, className: "author__carousel", children: authorsContent })) : (_jsx(AuthorContent, { author: authors[0] }));
    }
    else {
        return _jsx("p", { children: "Loading authors..." });
    }
};
