import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "./types";

interface ICart {
	data: ICartItem[];
}
const LocalStorage: any = localStorage.getItem("cart");
const initialState: ICart = {
	data: JSON.parse(LocalStorage) || [],
};
export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state: { data: ICartItem[] }, action: PayloadAction<ICartItem>) {
			const existingIndex = state.data.findIndex(
				(item) => item.isbn13 === action.payload.isbn13
			);
			if (existingIndex !== -1) {
				state.data[existingIndex].quantity =
					(state.data[existingIndex].quantity || 0) + 1;
			} else {
				// New item, add with quantity 1
				state.data.push({ ...action.payload, quantity: 1 });
			}
			localStorage.setItem("cart", JSON.stringify(state.data));
		},
		changeQuantity(
			state,
			action: PayloadAction<{ index: number; quantity: number }>
			) {
				state.data[action.payload.index].quantity = action.payload.quantity;
				localStorage.setItem("cart", JSON.stringify(state.data));
		},
		removeFromCart(state, action: PayloadAction<ICartItem>) {
			state.data = state.data.filter(
				(book) => book.isbn13 !== action.payload.isbn13
			);
			localStorage.setItem("cart", JSON.stringify(state.data));
		},
	},
});

export const { addToCart, removeFromCart, changeQuantity } =
	CartSlice.actions;
export default CartSlice.reducer;
