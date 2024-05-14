import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../../entities/book";
import { selectSearchData, selectSearchLoading, selectSearchPage, } from "../../../features/search/model/searchSelector";
import { fetchSearchResult } from "../../../features/search/model/searchThunk";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { Pagination } from "../../../shared/ui/pagination";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import "./SearchResult.scss";
export const SearchResult = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectSearchData);
    const currentPage = useAppSelector(selectSearchPage);
    const loading = useAppSelector(selectSearchLoading);
    const { searchValue } = useParams();
    useEffect(() => {
        if (searchValue) {
            dispatch(fetchSearchResult({ searchStr: searchValue, page: currentPage }));
        }
    }, [dispatch, searchValue, currentPage]);
    let content;
    if (loading === "loading") {
        content = _jsx("p", { children: "Loading..." });
    }
    else if (loading === "successful") {
        content = data?.books?.map((item) => {
            return _jsx(Book, { item: item }, item.title);
        });
    }
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("div", { className: "container", children: [_jsxs("p", { className: "search-result__title", children: ["You searched for ", _jsxs("strong", { children: [" : ", searchValue] })] }), _jsx("div", { className: "search-result__list", children: content }), _jsx(Pagination, { totalBooks: data.total })] }), _jsx(Footer, {})] }));
};
