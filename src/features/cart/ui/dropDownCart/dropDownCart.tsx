import { Link } from "react-router-dom";
import { selectCartData } from "../../../../pages/cart/model/CartSelector";
import { ICartItem } from "../../../../pages/cart/model/types";
import { useAppSelector } from "../../../../shared/store/store";
import "./dropDownCart.scss";

export const DropDownCart = () => {
	const data = useAppSelector(selectCartData);
	const totalPrice = data.reduce((sum: number, item: ICartItem) => {
		const price = Number(item.price.slice(1));
		sum += price * item.quantity;
		return sum;
	}, 0);

	let content;
	if (data.length > 0) {
		content = data.map((item: ICartItem) => {
			return (
				<li key={item.title} className="dropdown-cart__item">
					<Link to={item.url} className="dropdown-cart__item-link">
						<img
							className="dropdown-cart__item-img"
							src={item.image}
							alt={item.title}
						/>
						<div className="dropdown-cart__item-info">
							<p className="dropdown-cart__item-title">{item.title}</p>
							<p className="dropdown-cart__item-quantity">
								<strong>Quantity : </strong>
								<span className="red">{item.quantity}</span>
							</p>
							<p className="dropdown-cart__item-price">
								<strong>Price :</strong>{" "}
								<span className="red">{item.price}</span>
							</p>
						</div>
					</Link>
				</li>
			);
		});
	} else {
		content = <p className="dropdown-cart__empty">Your cart is empty</p>;
	}
	return (
		<div className="dropdown-cart">
			<ol className="dropdown-cart__list">{content}</ol>
			<p className="dropdown-cart__price">
				Subtotal : <span className="red">${totalPrice}</span>
			</p>
			<Link className="dropdown-cart__link" to="/cart">
				View Cart
			</Link>
		</div>
	);
};
