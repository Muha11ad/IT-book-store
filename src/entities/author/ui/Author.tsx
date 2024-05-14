import "./Author.scss";
import { Link } from "react-router-dom";
import { Carousel } from "../../../shared/ui/carousel";
import authorImg from "../../../shared/assets/defaultAuthor.png";
import arrowImg from "../../../shared/icons/arrowRight.svg";
import { FC } from "react";

interface IAuthor {
	authors: string[];
}

const AuthorContent = (props: { author: string }) => {
	const { author } = props;
	return (
		<div className="author-wrapper">
			<h3 className="author__title">Author</h3>
			<div className="author__bio">
				<img className="author__img" src={authorImg} alt={author} />
				<p className="author__name">{author}</p>
			</div>
			<Link className="author__link" to={`/search/${author}`}>
				Read more <img src={arrowImg} alt="Arrow right" />
			</Link>
		</div>
	);
};

export const Author: FC<IAuthor> = (props) => {
	const { authors } = props;
	const responsive = {
		1320: { items: 1 },
	};
	// Check if authors exist before rendering
	if (authors) {
		const authorsContent = authors.map((item) => {
			return <AuthorContent author={item} />;
		});

		return authors.length > 1 ? (
			<Carousel
				responsive={responsive}
				autoWidth
				disableDotsControls
				className="author__carousel"
			>
				{authorsContent}
			</Carousel>
		) : (
			<AuthorContent author={authors[0]} />
		);
	} else {
		return <p>Loading authors...</p>;
	}
};
