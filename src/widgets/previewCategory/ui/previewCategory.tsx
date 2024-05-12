import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../entities/book";
import { IPreviewCategory } from "../../../shared/consts/types/types";
import { Carousel } from "../../../shared/ui/carousel";
import { LoaderBookPreview } from "../../../shared/ui/loaders/loaderBookPreview";
import "./previewCategory.scss";

export const PreviewCategory: FC<IPreviewCategory> = (props) => {
	const { data, loading } = props;
	const navigate = useNavigate();

	const responsive = {
		0: { items: 1 },
		576: { items: 2 },
		768: { items: 3 },
		1320: { items: 5 },
	};
	let content;

	const renderBooks = (items: any) =>
		items?.map((book: any, index: number) => (
			<Book item={book} key={`book-${index}`} /> // Generate unique key using index
		));

	if (loading === "loading") {
		content = [...Array(3).keys()].map((i) => {
			return <LoaderBookPreview key={i} />;
		});
	} else if (loading === "successful") {
		content = Object.keys(data).map((categoriesTitle: any) => (
			<div key={categoriesTitle} className="preview-category-item">
				<div className="preview-category-top">
					<h3 className="preview-category__title">{categoriesTitle}</h3>
					<button
						onClick={() => navigate(`/book/${categoriesTitle}`)}
						className="preview-category__btn"
					>
						SEE MORE
					</button>
				</div>
				<Carousel disableDotsControls responsive={responsive}>
					{renderBooks(data[categoriesTitle])}
				</Carousel>
			</div>
		));
	}
	return (
		<div className="preview-category">
			<div className="container">{content}</div>
		</div>
	);
};
