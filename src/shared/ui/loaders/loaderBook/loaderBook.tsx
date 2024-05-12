import Skeleton from "react-loading-skeleton";
import "./loaderBook.scss";
export const LoaderBook = () => {
	return (
		<li className="book-skeleton animation-pulse">
			<div className="book-skeleton__img skeleton animation-pulse">
				<Skeleton />
			</div>
			<div className="book-skeleton__info ">
				<h3 className="book-skeleton__title skeleton animation-pulse">
					<Skeleton />
				</h3>
				<p className="book-skeleton__subtitle skeleton animation-pulse">
					<Skeleton />
				</p>
				<p className="book-skeleton__price skeleton animation-pulse">
					<Skeleton />
				</p>
			</div>
		</li>
	);
};
