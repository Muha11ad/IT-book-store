import { createSelector } from "@reduxjs/toolkit";

const selectBase = createSelector(
	(state: any) => state,
	(state) => state.book
);

export const selectBookInfoData = createSelector(
	selectBase,
	(state: any) => state.data
);
export const selectBookInfoLoading = createSelector(
	selectBase,
	(state: any) => state.loading
);
