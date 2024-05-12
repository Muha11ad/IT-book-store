import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./footerList.scss";

interface IFooterList {
	readonly name: string;
	readonly image?: string;
	readonly link: string;
}
interface IFooterListPops {
	data: IFooterList[];
	titleOfList: string;
}

export const FooterList: FC<IFooterListPops> = ({ data, titleOfList }) => {
	return (
		<ul className="footer-list">
			<li className="footer-list__title">{titleOfList}</li>
			{data?.map((book: IFooterList, index : number) => {
				return (
					<li key={index} className="footer-list__item">
						<Link
							className={clsx(
								"footer-list__link",
								book.image ? "link-with-image" : ""
							)}
							to={book.link}
						>
							{book.image ? <img src={book.image} alt={book.name} /> : null}
							{book.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
