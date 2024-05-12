import "./cart.scss";
import { Link } from "react-router-dom";
import { DropDown } from "../../../../shared/ui/dropDown";
import { DropDownCart } from "../dropDownCart/dropDownCart";
import cartImg from "../../../../shared/icons/bag.svg";
import { useAppSelector } from "../../../../shared/store/store";
import { selectCartCount } from "../../../../pages/cart/model/CartSelector";

export const Cart = () => {
	const count = useAppSelector(selectCartCount);
	return (
		<div className="cart-wrapper">
			<DropDown
				labelElement={
					<Link className="cart-link" to="/cart">
						<img className="cart-img" src={cartImg} alt="Shopping bag" />
						<span className="cart-count">{count}</span>
					</Link>
				}
				content={<DropDownCart />}
				isArrow={true}
			/>
		</div>
	);
};
