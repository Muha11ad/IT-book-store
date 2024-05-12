import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import { FC } from "react";
import { setPage } from "../../../../pages/category/model/categoriesSlice";
import { useAppDispatch } from "../../../store/store";

interface IPaginationProps {
	totalBooks: number;
}

export const Pagination: FC<IPaginationProps> = ({ totalBooks }) => {
	let pageCount = Math.ceil(totalBooks / 10);
	const dispatch = useAppDispatch();
	return (
		<ReactPaginate
			pageCount={pageCount}
			pageClassName="page-item"
			pageLinkClassName="page-link"
			className="pagination__list"
			previousLinkClassName="previos-link"
			previousClassName="previos-btn"
			nextClassName="next-btn"
			nextLinkClassName="next-link"
			disabledClassName="disabled-btn"
			activeClassName="active-link"
			onPageChange={(selectedPage: { selected: number }) => {
				dispatch(setPage(selectedPage.selected + 1));
			}}
		/>
	);
};
