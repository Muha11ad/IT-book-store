import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../shared/store/store";
import { selectSearchData, selectSearchLoading, } from "../../model/searchSelector";
import "./searchDropDown.scss";
export const SearchDropDown = (searchValue) => {
    const data = useAppSelector(selectSearchData);
    const loading = useAppSelector(selectSearchLoading);
    let content;
    if (!data?.books?.length) {
        content = (_jsx("p", { className: "dropdown-search__title", children: "Enter search terms, at least 3 characters" }));
    }
    else if (loading === "loading") {
        content = _jsx("p", { children: "loading..." });
    }
    else if (loading === "successful") {
        content = data.books.slice(0, 5).map((item) => {
            return (_jsx("div", { className: "dropdown-search-item", children: _jsxs(Link, { to: item.url, className: "dropdown-search-item__link", children: [_jsx("img", { className: "dropdown-search-item__img", src: item.image, alt: item.title }), _jsx("p", { className: "dropdown-search-item__title", children: item.title })] }) }, item.title));
        });
        content.push(_jsx(Link, { className: "dropdown-search__link", to: `/search/${searchValue.searchValue}`, children: "See more" }, 1));
    }
    return _jsx("div", { className: "dropdown-search", children: content });
};
