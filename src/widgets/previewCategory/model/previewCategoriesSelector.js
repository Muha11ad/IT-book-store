import { createSelector } from "@reduxjs/toolkit";
const selectBase = createSelector((state) => state, (state) => state.previewCategory);
export const selectPreviewCategoryBooks = createSelector(selectBase, (state) => state.books);
export const selectPreviewCategoryLoading = createSelector(selectBase, (state) => state.loading);
export const selectPreviewCategoryError = createSelector(selectBase, (state) => state.error);
