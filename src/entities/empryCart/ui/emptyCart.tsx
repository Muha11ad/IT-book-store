import { Link } from "react-router-dom";
import "./emptyCart.scss";

export const EmptyCart = () => {
	return (
		<div className="emptyCart-wrapper">
			<p className="emptyCart__title"> You have not added to cart </p>
			<Link to="/" className="emptyCart__linkr">Let's explore books</Link>
		</div>
	);
};
