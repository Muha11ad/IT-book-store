import { createSelector } from "@reduxjs/toolkit";
const selectBase = createSelector((state) => state, (state) => state.book);
export const selectBookInfoData = createSelector(selectBase, (state) => state.data);
export const selectBookInfoLoading = createSelector(selectBase, (state) => state.loading);
