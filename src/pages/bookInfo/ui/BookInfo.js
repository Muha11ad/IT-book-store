import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookContent } from "../../../entities/bookContent";
import { useAppDispatch } from "../../../shared/store/store";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { fetchBook } from "../model/bookInfoThunk";
import "./BookInfo.scss";
export const BookInfo = () => {
    const dispatch = useAppDispatch();
    const { isbn13 } = useParams();
    useEffect(() => {
        if (isbn13) {
            dispatch(fetchBook({ isbn13: Number(isbn13) }));
        }
    }, [dispatch, isbn13]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: "container", children: _jsx(BookContent, {}) }), _jsx(Footer, {})] }));
};
