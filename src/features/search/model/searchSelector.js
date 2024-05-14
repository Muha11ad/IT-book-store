import { createSelector } from "@reduxjs/toolkit";
const selectBase = createSelector((state) => state, (state) => state.search);
export const selectSearchData = createSelector(selectBase, (state) => state.data);
export const selectSearchLoading = createSelector(selectBase, (state) => state.loading);
export const selectSearchPage = createSelector(selectBase, (state) => state.page);
