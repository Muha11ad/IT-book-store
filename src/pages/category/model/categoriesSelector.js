import { createSelector } from "@reduxjs/toolkit";
const selectBase = createSelector((state) => state, (state) => state.category);
export const selectCategoryData = createSelector(selectBase, (state) => state.data);
export const selectCategoryLoading = createSelector(selectBase, (state) => state.loading);
export const selectCategoryError = createSelector(selectBase, (state) => state.error);
export const selectCategoryPage = createSelector(selectBase, (state) => state.page);
