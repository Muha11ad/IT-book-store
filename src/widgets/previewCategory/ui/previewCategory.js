import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../entities/book";
import { Carousel } from "../../../shared/ui/carousel";
import { LoaderBookPreview } from "../../../shared/ui/loaders/loaderBookPreview";
import "./previewCategory.scss";
export const PreviewCategory = (props) => {
    const { data, loading } = props;
    const navigate = useNavigate();
    const responsive = {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        1320: { items: 5 },
    };
    let content;
    const renderBooks = (items) => items?.map((book, index) => (_jsx(Book, { item: book }, `book-${index}`) // Generate unique key using index
    ));
    if (loading === "loading") {
        content = [...Array(3).keys()].map((i) => {
            return _jsx(LoaderBookPreview, {}, i);
        });
    }
    else if (loading === "successful") {
        content = Object.keys(data).map((categoriesTitle) => (_jsxs("div", { className: "preview-category-item", children: [_jsxs("div", { className: "preview-category-top", children: [_jsx("h3", { className: "preview-category__title", children: categoriesTitle }), _jsx("button", { onClick: () => navigate(`/book/${categoriesTitle}`), className: "preview-category__btn", children: "SEE MORE" })] }), _jsx(Carousel, { disableDotsControls: true, responsive: responsive, children: renderBooks(data[categoriesTitle]) })] }, categoriesTitle)));
    }
    return (_jsx("div", { className: "preview-category", children: _jsx("div", { className: "container", children: content }) }));
};
