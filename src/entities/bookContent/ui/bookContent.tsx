import { Link } from "react-router-dom";
import { selectBookInfoData } from "../../../pages/bookInfo/model/bookInfoSelector";
import { useAppSelector } from "../../../shared/store/store";
import { AddToCart } from "../../../shared/ui/addToCart";
import { Rating } from "../../../shared/ui/rating";
import { Author } from "../../author";
import "./bookContent.scss";

export const BookContent = () => {
	const data = useAppSelector(selectBookInfoData);
	const {
		image,
		title,
		authors,
		publisher,
		isbn10,
		isbn13,
		pages,
		year,
		rating,
		desc,
		url,
		price,
	} = data;

	const authorsArray = authors?.split(", ");

	let authorLinks;
	if (authorsArray) {
		authorLinks = authorsArray.map((author: string, index: number) => (
			<div className="book-info__link-wrapper" key={index}>
				<Link className="book-info__link" to={`/search/${author}`}>
					{author}
				</Link>
				{index < authorsArray.length - 1 && ", "}
			</div>
		));
	}

	return (
		<div className="book-wrapper">
			<div className="book-content">
				<img className="book__img" src={image} alt={title} />
				<div className="book-info">
					<Rating value={Number(rating)} className="book-details__rating" />
					<h3 className="book-info__title">{title}</h3>
					{authorLinks}
					<ul className="book-info__list">
						<li className="books-info__item">Publisher : {publisher}</li>
						<li className="books-info__item">Published : {year}</li>
						<li className="books-info__item">Pages : {pages}</li>
						<li className="books-info__item">isbn10 : {isbn10}</li>
						<li className="books-info__item">isbn13 : {isbn13}</li>
					</ul>
					<div className="book-info__bottom">
						<p className="book-info__price">
							Price : <span className="red"> {price} </span>
						</p>
						<AddToCart item={data} />
					</div>
				</div>
				<div className="book__carousel">
					<Author authors={authorsArray} />
				</div>
			</div>
			<div className="book__description">
				<p className="book__description-title">Description</p>
				<div className="line"></div>
				<div className="book__description-subtitle">
					<span>{desc}</span> <Link to={url}>Read more</Link>
				</div>
			</div>
		</div>
	);
};
