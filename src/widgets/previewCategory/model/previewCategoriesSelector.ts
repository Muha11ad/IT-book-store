import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: any) => state,
	(state) => state.previewCategory
);

export const selectPreviewCategoryBooks = createSelector(
	selectBase,
	(state: any) => state.books
);
export const selectPreviewCategoryLoading = createSelector(
	selectBase,
	(state: any) => state.loading
);
export const selectPreviewCategoryError = createSelector(
	selectBase,
	(state: any) => state.error
);

