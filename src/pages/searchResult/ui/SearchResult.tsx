import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../../entities/book";
import { IBookDescription } from "../../../entities/book/model/types";
import {
	selectSearchData,
	selectSearchLoading,
	selectSearchPage,
} from "../../../features/search/model/searchSelector";
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
	const { searchValue } = useParams<{ searchValue: string }>();

	useEffect(() => {
		if (searchValue) {
			dispatch(
				fetchSearchResult({ searchStr: searchValue, page: currentPage })
			);
		}
	},[dispatch, searchValue, currentPage]);

	let content;
	if (loading === "loading") {
		content = <p>Loading...</p>;
	} else if (loading === "successful") {
		content = data?.books?.map((item: IBookDescription) => {
			return <Book key={item.title} item={item} />;
		});
	}

	return (
		<>
			<Header />
			<div className="container">
				<p className="search-result__title">
					You searched for <strong> : {searchValue}</strong>
				</p>
				<div className="search-result__list">{content}</div>
				<Pagination totalBooks={data.total} />
			</div>
			<Footer />
		</>
	);
};
