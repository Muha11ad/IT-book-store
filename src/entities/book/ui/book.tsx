import { IBookPreview } from "../model/types";
import { Link } from "react-router-dom";
import "./book.scss";
import { AddToCart } from "../../../shared/ui/addToCart";
export const Book = ({ item }: any) => {
	const { image, title, price, subtitle, isbn13, categoryId }: IBookPreview =
		item;
	function cutText(text: string) {
		if (text.length > 20) return (text = `${text.substring(0, 20)}...`);
		else return text;
	}
	const isFreeBook = price === "$0.00" ? true : false;
	console.log( typeof price);
	
	return (
		<div className="book-wrapper" id={categoryId}>
			<Link to={`/description/${isbn13}`} className="book__link">
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
				<AddToCart item={item} />
			</div>
		{
			isFreeBook ? (
                <div className="book-free">
                    <p className="book-free__text">Free Book</p>
                </div>
            ) : ""
		}
		</div>
	);
};
