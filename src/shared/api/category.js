import { apiInstanse } from "./base";
const BASE_URL = "search";
export const getCategory = (category, page) => {
    return apiInstanse.get(`${BASE_URL}/${category}/${page}`);
};
