import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../../../entities/book";
import { IBookDescription } from "../../../entities/book/model/types";
import { useAppDispatch, useAppSelector } from "../../../shared/store/store";
import { LoaderBook } from "../../../shared/ui/loaders/loaderBook";
import { Pagination } from "../../../shared/ui/pagination";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import {
	selectCategoryData,
	selectCategoryLoading,
	selectCategoryPage,
} from "../model/categoriesSelector";
import { fetchCategory } from "../model/categoriesThunk";
import "./Category.scss";

export const Category = () => {
	let data = useAppSelector(selectCategoryData);
	const loading = useAppSelector(selectCategoryLoading);
	const page = useAppSelector(selectCategoryPage);
	const dispatch = useAppDispatch();
	const { title } = useParams<{ title: string }>();
	useEffect(() => {
		if (title) {
			dispatch(fetchCategory({category : title, page: page }));
		}
	}, [dispatch, title, page]);

	//making content
	let content;
	if (loading === "loading") {
		// Display skeleton while loading
		content = [...Array(10).keys()].map(i => {
			return <LoaderBook key={i} />;
		});
	} else if (loading == "successful") {
		content = data.books.map((book: IBookDescription, index: number) => (
			<Book item={book} key={index} />
		));
	} else if (loading == "rejected") {
		content = <p>something went wrong</p>;
	}
	//making content

	return (
		<>
			<Header />
			<div className="container category-wrapper">
				<ul className="category__list">{content}</ul>
				<Pagination totalBooks={data.total}/>
			</div>
			<Footer />
		</>
	);
};
