import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: any) => state,
	(state) => state.cart
);

export const selectCartData = createSelector(
	selectBase,
	(state: any) => state.data
);
export const selectCartCount = createSelector(
	selectBase,
	(state: any) => state.count
);
