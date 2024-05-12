import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: any) => state,
	(state) => state.category
);

export const selectCategoryData = createSelector(
	selectBase,
	(state: any) => state.data
);
export const selectCategoryLoading = createSelector(
	selectBase,
	(state: any) => state.loading
);
export const selectCategoryError = createSelector(
	selectBase,
	(state: any) => state.error
);
export const selectCategoryPage = createSelector(
	selectBase,
	(state: any) => state.page
);

