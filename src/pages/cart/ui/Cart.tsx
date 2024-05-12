import { CartContent } from "../../../shared/ui/cartContent";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import "./Cart.scss";

export const Cart = () => {
	return (
		<>
			<Header />
			<div className="container">
				<table className="table">
					<tr className="table-row">
						<th className="table__heading">Product</th>
						<th className="table__heading">Price</th>
						<th className="table__heading">Quantity</th>
					</tr>
					<CartContent />
					<tr className="table-row">
						<td className="table__footer-item">Total</td>
						<td className="table__footer-item"></td>
					</tr>
				</table>
			</div>
			<Footer />
		</>
	);
};
