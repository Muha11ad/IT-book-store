import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./cart.scss";
import { Link } from "react-router-dom";
import { DropDown } from "../../../../shared/ui/dropDown";
import { DropDownCart } from "../dropDownCart/dropDownCart";
import cartImg from "../../../../shared/icons/bag.svg";
import { useAppSelector } from "../../../../shared/store/store";
import { selectCartData } from "../../../../pages/cart/model/CartSelector";
export const Cart = () => {
    const data = useAppSelector(selectCartData);
    return (_jsx("div", { className: "cart-wrapper", children: _jsx(DropDown, { labelElement: _jsxs(Link, { className: "cart-link", to: "/cart", children: [_jsx("img", { className: "cart-img", src: cartImg, alt: "Shopping bag" }), _jsx("span", { className: "cart-count", children: data.length + 1 })] }), content: _jsx(DropDownCart, {}), isArrow: true }) }));
};
