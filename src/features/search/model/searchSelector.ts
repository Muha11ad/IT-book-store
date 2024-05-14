import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: any) => state,
	(state) => state.search
);

export const selectSearchData = createSelector(
	selectBase,
	(state: any) => state.data
);
export const selectSearchLoading = createSelector(
	selectBase,
	(state: any) => state.loading
);
export const selectSearchPage = createSelector(
	selectBase,
	(state: any) => state.page
);
