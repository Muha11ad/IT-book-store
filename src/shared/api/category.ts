import { apiInstanse } from "./base";
const BASE_URL = "search";
export const getCategory = (category: string, page: number = 1) => {
	return apiInstanse.get(`${BASE_URL}/${category}/${page}`);
};
