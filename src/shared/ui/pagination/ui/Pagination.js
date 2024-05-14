import { jsx as _jsx } from "react/jsx-runtime";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { setPage } from "../../../../pages/category/model/categoriesSlice";
import { useAppDispatch } from "../../../store/store";
import { setSearchPage } from "../../../../features/search/model/searchSlice";
export const Pagination = ({ totalBooks }) => {
    let pageCount = Math.ceil(totalBooks / 10);
    const dispatch = useAppDispatch();
    return (_jsx(ReactPaginate, { pageCount: pageCount, pageClassName: "page-item", pageLinkClassName: "page-link", className: "pagination__list", previousLinkClassName: "previos-link", previousClassName: "previous-btn", nextClassName: "next-btn", nextLinkClassName: "next-link", disabledClassName: "disabled-btn", activeClassName: "active-link", onPageChange: (selectedPage) => {
            dispatch(setPage(selectedPage.selected + 1));
            dispatch(setSearchPage(selectedPage.selected + 1));
        } }));
};
