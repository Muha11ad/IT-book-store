import { apiInstanse } from "./base";
const BASE_URL = "books";
export const getBook = (isbn13) => {
    return apiInstanse.get(`${BASE_URL}/${isbn13}`);
};
