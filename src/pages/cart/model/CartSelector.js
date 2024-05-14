import { createSelector } from "@reduxjs/toolkit";
const selectBase = createSelector((state) => state, (state) => state.cart);
export const selectCartData = createSelector(selectBase, (state) => state.data);
export const selectCartCount = createSelector(selectBase, (state) => state.count);
