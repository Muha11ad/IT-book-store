import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDescription } from "../../../entities/book/model/types";

interface ICart {
	data: IBookDescription[];
	count: number;
}
const LocalStorage: any = localStorage.getItem("cart");
const initialState: ICart = {
	data: JSON.parse(LocalStorage) || [],
	count: 0,
};
export const CartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		getCount(state, action: PayloadAction<number>) {
			state.count += action.payload;
		},
		addToCart(state, action: PayloadAction<IBookDescription>) {
			state.data = [...state.data, action.payload];
		},
		setToLocalStorage(state) {
			localStorage.setItem("cart", JSON.stringify(state.data));
		},
		removeFromCart(state, action: PayloadAction<IBookDescription>) {
			state.data = state.data.filter((book) => book.isbn13!== action.payload.isbn13);
            localStorage.setItem("cart", JSON.stringify(state.data));
		}
	},
});

export const { getCount, addToCart, setToLocalStorage } = CartSlice.actions;
export default CartSlice.reducer;
