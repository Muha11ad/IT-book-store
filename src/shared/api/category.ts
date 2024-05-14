import { apiInstanse } from "./base";
const BASE_URL = "search";
export const getCategory = (category: string, page: number) => {
	return apiInstanse.get(`${BASE_URL}/${category}/${page}`);
};
