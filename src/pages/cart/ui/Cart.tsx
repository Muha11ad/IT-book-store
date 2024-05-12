import { EmptyCart } from "../../../entities/empryCart";
import { useAppSelector } from "../../../shared/store/store";
import { CartContent } from "../../../shared/ui/cartContent";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { selectCartData } from "../model/CartSelector";
import { ICartItem } from "../model/types";
import "./Cart.scss";

export const Cart = () => {
	const data = useAppSelector(selectCartData);

	const totalPrice = data.reduce((sum: number, item: ICartItem) => {
		const price = Number(item.price.slice(1));
		sum += price * item.quantity;
		return sum;
	}, 0);

	return (
		<>
			<Header />
			<div className="container cart-wrapper">
				{data.length ? (
					<table className="table">
						<tr className="table-row">
							<th className="table__heading">Product</th>
							<th className="table__heading">Price</th>
							<th className="table__heading">Quantity</th>
						</tr>
						<CartContent />
						<tr className="table-row">
							<td className="table__footer-item">
								Total price : <span className="cart-total-price">${totalPrice}</span>
							</td>
						</tr>
					</table>
				) : (
					<EmptyCart />
				)}
			</div>
			<Footer />
		</>
	);
};
