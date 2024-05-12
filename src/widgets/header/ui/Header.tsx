import "./Header.scss";
import { Link } from "react-router-dom";
import { Search } from "../../../features/search";
import { Cart } from "../../../features/cart";
import { Navigation } from "../../../features/nav";
import menuImg from "../../../shared/icons/menu.svg"
import { useState } from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
	return (
		<>
			<header className="header">
				<div className="container header__wrapper">
					<div className="header__title-wrapper">
						<Link to="/">
							<h2 className="header__title">IT Bookstore</h2>
						</Link>
					</div>
					<div className="header__search">
						<Search />
					</div>
					<div className="header__link">
						<Cart />
					</div>
          <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
              <img className="dropdown-btn__img" src={menuImg} alt="menu burger" />
          </button>
				</div>
			</header>
			<Navigation isOpen={isOpen} setIsOpen={setIsOpen}  />
		</>
	);
};
