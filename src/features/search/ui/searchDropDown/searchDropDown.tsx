import { ICartItem } from "../../../../pages/cart/model/types";
import { useAppSelector } from "../../../../shared/store/store";
import {
	selectSearchData,
	selectSearchLoading,
} from "../../model/searchSelector";
import "./searchDropDown.scss";

export const SearchDropDown = () => {
	const data = useAppSelector(selectSearchData);
	const loading = useAppSelector(selectSearchLoading);

	let content;

	if (!data?.books?.length) {
		content = (
			<p className="dropdown-search__title">
				Enter search terms, at least 3 characters
			</p>
		);
	} else if (loading === "loading") {
		content = <p>loading...</p>;
	} else if (loading === "successful") {
		content = data.books.map((item: ICartItem) => {
			return (
				<div key={item.title} className="dropdown-search-item">
					<img
						className="dropdown-search-item__img"
						src={item.image}
						alt={item.title}
					/>
					<p className="dropdown-search-item__title">{item.title}</p>
				</div>
			);
		});
	}

	return <div className="dropdown-search">{content}</div>;
};
