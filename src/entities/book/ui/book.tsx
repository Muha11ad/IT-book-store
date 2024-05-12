import { IBookPreview } from "../model/types";
import { Link } from "react-router-dom";
import "./book.scss";
import cartImg from "../../../shared/icons/bag.svg";
import { addToCart } from "../../../pages/cart/model/CartSlice";
import { useAppDispatch } from "../../../shared/store/store";
import { ICartItem } from "../../../pages/cart/model/types";
export const Book = ({ item }: any) => {
	const { image, title, price, subtitle, isbn13, categoryId }: IBookPreview =
		item;
	const dispatch = useAppDispatch();
	function cutText(text: string) {
		if (text.length > 20) return (text = `${text.substring(0, 20)}...`);
		else return text;
	}

	function pushItem(item: ICartItem) {
		dispatch(addToCart(item));
	}

	return (
		<div className="book-wrapper" id={categoryId}>
			<Link to={`/books/${isbn13}`} className="book__link">
				<img className="book__img" src={image} alt={title} />
				<div className="book-info">
					<h3 className="book__title">{cutText(title)}</h3>
					<p className="book__subtitle">{cutText(subtitle)}</p>
					<p className="book__price">{price}</p>
				</div>
			</Link>
			<div className="book-dropdown">
				<p className="book__price">{price}</p>
				<h3 className="book__title">{cutText(title)}</h3>
				<p className="book__subtitle">{cutText(subtitle)}</p>
				<button
					className="book__btn"
					onClick={() => {
						pushItem(item);
						console.log();
					}}
				>
					<img className="book__btn-img" src={cartImg} alt="Icon of bag" />
					Add to cart
				</button>
			</div>
		</div>
	);
};
