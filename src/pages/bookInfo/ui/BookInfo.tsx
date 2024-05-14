import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BookContent } from "../../../entities/bookContent";
import { useAppDispatch } from "../../../shared/store/store";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { fetchBook } from "../model/bookInfoThunk";
import "./BookInfo.scss";

export const BookInfo = () => {
	const dispatch = useAppDispatch();
	const { isbn13 } = useParams<{ isbn13: string }>();

	useEffect(() => {
		if (isbn13) {
			dispatch(fetchBook({ isbn13: Number(isbn13) }));
		}
	}, [dispatch, isbn13]);

	return (
		<>
			<Header />
			<div className="container">
				<BookContent />
				
			</div>
			<Footer />
		</>
	);
};
