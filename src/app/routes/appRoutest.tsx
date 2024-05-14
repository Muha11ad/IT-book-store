import { Routes, Route } from "react-router-dom";
import { AllBooks } from "../../pages/allBooks/indext";
import { BookInfo } from "../../pages/bookInfo";
import { Cart } from "../../pages/cart/ui/Cart";
import { Category } from "../../pages/category";
import { Home } from "../../pages/home";
import { SearchResult } from "../../pages/searchResult";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/book/:title" element={<Category />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/search/:searchValue" element={<SearchResult />} />
				<Route path="/books" element={<AllBooks/>} />
				<Route path="/description/:isbn13" element={<BookInfo/>} />
			</Routes>
		</>
	);
};
