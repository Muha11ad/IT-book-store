import "./CartContent.scss";
import { selectCartData } from "../../../pages/cart/model/CartSelector";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { ICartItem } from "../../../pages/cart/model/types";
import {
	changeQuantity,
	removeFromCart,
} from "../../../pages/cart/model/CartSlice";

export const CartContent = () => {
	const data = useAppSelector(selectCartData);
	const dispatch = useAppDispatch();
	/*Functions start*/
	const deleteOrder = (e: any, item: ICartItem) => {
		e.preventDefault();
		dispatch(removeFromCart(item));
	};

	const increase = (e: any, index: number, quantity: number) => {
		e.preventDefault();
		quantity = quantity + 1;
		dispatch(changeQuantity({ index, quantity }));
	};
	const decrease = (e: any, index: number, quantity: number) => {
		e.preventDefault();
		quantity = quantity - 1;
		dispatch(changeQuantity({ index, quantity }));
	};

	/*Functions endpoint*/

	let content;
	if (data.length) {
		content = data.map((item: ICartItem, index: number) => {
			return (
				<tr key={index} className="table__body-row">
					<Link to="/" className="table__body-row-link">
						<td className="table__body-item">
							<div className="table__body-image-wrapper">
								<img
									className="table__body-image"
									src={item.image}
									alt={item.title}
								/>
								<p className="table__body-title">{item.title}</p>
							</div>
						</td>
						<td className="table__body-item-price">{item.price}</td>
						<td className="table__body-item-btns">
							<button
								className="table__body-item-button btn-increment"
								onClick={(e) => {
									increase(e, index, item.quantity || 0);
								}}
							>
								+
							</button>
							<span>{item.quantity}</span>
							<button
								disabled={item.quantity === 1 ? true : false}
								className="table__body-item-button btn-decrement"
								onClick={(e) => {
									decrease(e, index, item.quantity || 0);
								}}
							>
								-
							</button>
							<button
								className="table__body-item-button btn-delete"
								onClick={(e) => {
									deleteOrder(e, item);
								}}
							>
								X
							</button>
						</td>
					</Link>
				</tr>
			);
		});
	}
	return <tbody className="table__body">{content}</tbody>;
};
