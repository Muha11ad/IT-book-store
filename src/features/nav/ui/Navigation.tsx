import { NavLink } from "react-router-dom";
import { CONTENT_NAVIGATION_MENU } from "../../../shared/consts/contentNavMenu";
import "./Navigation.scss";
export const Navigation = ({ isOpen, setIsOpen }: any) => {
	let content = CONTENT_NAVIGATION_MENU.map((book, index) => {
		return (
			<NavLink
				key={index}
				className={({ isActive }) =>
					isActive ? "active__link" : "inactive__link"
				}
				to={book.link}
			>
				{book.title}
			</NavLink>
		);
	});

	return (
		<nav className={isOpen ? "nav" : "nav-open"}>
			<div className="container nav-wrapper">{content}</div>
			<button className="nav__hide-btn" onClick={() => setIsOpen(!isOpen)}>
				<span>X</span>
			</button>
		</nav>
	);
};
