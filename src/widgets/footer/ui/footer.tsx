import { FooterList } from "../../../entities/footerList";
import {
	ABOUT_ME_CONTENT,
	POPULAR_BOOKS_CONTENT,
	USEFUL_LINKS,
} from "../../../shared/consts/footerContent";
import "./footer.scss";

export const Footer = () => {
	return (
		<footer>
			<div className=" container footer-wrapper">
				<FooterList titleOfList={"Popular Books"} data={POPULAR_BOOKS_CONTENT}/>
				<FooterList titleOfList={"About me"} data={ABOUT_ME_CONTENT} />
				<FooterList titleOfList={"Useful link"} data={USEFUL_LINKS} />
			</div>
		</footer>
	);
};
