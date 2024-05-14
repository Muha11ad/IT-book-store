import { FC } from "react";
import { addToCart } from "../../../pages/cart/model/CartSlice";
import { ICartItem } from "../../../pages/cart/model/types";
import { useAppDispatch } from "../../store/store";
import "./addToCart.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddToCart: FC<any> = (props) => {
	const added = () => toast.success("This product has been added to cart");
	const cartImg = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			viewBox="0 0 24 24"
			fill="#707070"
			className="btn-img"
		>
			<path d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
		</svg>
	);

	const { item } = props;
	const dispatch = useAppDispatch();
	function pushItem(item: ICartItem) {
		dispatch(addToCart(item));
	}
	return (
		<button
			className="btn"
			onClick={() => {
				pushItem(item);
				added();
			}}
		>
			<ToastContainer     autoClose={1000}
/>
			{cartImg}
			Add to cart
		</button>
	);
};
