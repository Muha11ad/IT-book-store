import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../../entities/book";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { LoaderBook } from "../../../shared/ui/loaders/loaderBook";
import { Pagination } from "../../../shared/ui/pagination";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { selectCategoryData, selectCategoryLoading, selectCategoryPage, } from "../model/categoriesSelector";
import { fetchCategory } from "../model/categoriesThunk";
import "./Category.scss";
export const Category = () => {
    let data = useAppSelector(selectCategoryData);
    const loading = useAppSelector(selectCategoryLoading);
    const page = useAppSelector(selectCategoryPage);
    const dispatch = useAppDispatch();
    const { title } = useParams();
    useEffect(() => {
        if (title) {
            dispatch(fetchCategory({ category: title, page: page }));
        }
    }, [dispatch, title, page]);
    //making content
    let content;
    if (loading === "loading") {
        // Display skeleton while loading
        content = [...Array(10).keys()].map((i) => {
            return _jsx(LoaderBook, {}, i);
        });
    }
    else if (loading == "successful") {
        content = data.books.map((book, index) => (_jsx(Book, { item: book }, index)));
    }
    else if (loading == "rejected") {
        content = _jsx("p", { children: "something went wrong" });
    }
    //making content
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("div", { className: "container category-wrapper", children: [_jsx("ul", { className: "category__list", children: content }), _jsx(Pagination, { totalBooks: data.total })] }), _jsx(Footer, {})] }));
};
