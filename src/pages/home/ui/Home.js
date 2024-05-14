import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { PreviewCategory } from "../../../widgets/previewCategory";
import { selectPreviewCategoryBooks, selectPreviewCategoryLoading, } from "../../../widgets/previewCategory/model/previewCategoriesSelector";
import { fetchPreviewCategory } from "../../../widgets/previewCategory/model/previewCategoriesThunk";
import { Slider } from "../../../widgets/slider";
import "./Home.scss";
export const Home = () => {
    const TITLE_OF_BOOKS = ["Android", "Javascript", "Python"];
    const dispatch = useAppDispatch();
    const previewBooks = useAppSelector(selectPreviewCategoryBooks);
    const loading = useAppSelector(selectPreviewCategoryLoading);
    useEffect(() => {
        TITLE_OF_BOOKS.forEach((title) => {
            dispatch(fetchPreviewCategory({ category: title, page: 1 }));
        });
    }, [dispatch]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Slider, {}), _jsx(PreviewCategory, { data: previewBooks, loading: loading }), _jsx(Footer, {})] }));
};
