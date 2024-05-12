import "./CartContent.scss";
import {
	selectCartCount,
	selectCartData,
} from "../../../pages/cart/model/CartSelector";
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { IBookDescription } from "../../../entities/book/model/types";

export const CartContent = () => {
	const data = useAppSelector(selectCartData);
	const count = useAppSelector(selectCartCount);
	let content;
	if (data.length) {
		content = data.map((item: IBookDescription, index: number) => {
			return (
				<tr key={index} className="table__body-row">
					<Link to="/" className="table__body-row-link">
						<td className="table__body-item">
							<div className="table__body-image-wrapper">
								<img className="table__body-image" src={item.image} alt={item.title} />
								<p className="table__body-title">{item.title}</p>
							</div>
						</td>
						<td className="table__body-item-price">{item.price}</td>
						<td className="table__body-item-btns">
							<button className="table__body-item-button btn-increment">+</button>
							<span>{count}</span>
							<button className="table__body-item-button btn-decrement">-</button>
							<button className="table__body-item-button btn-delete">X</button>
						</td>
					</Link>
				</tr>
			);
		});
	}
	return <tbody className="table__body">{content}</tbody>;
};
