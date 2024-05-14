import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { selectCartData } from "../../../../pages/cart/model/CartSelector";
import { useAppSelector } from "../../../../shared/store/store";
import "./dropDownCart.scss";
export const DropDownCart = () => {
    const data = useAppSelector(selectCartData);
    const totalPrice = data.reduce((sum, item) => {
        const price = Number(item.price.slice(1));
        sum += price * item.quantity;
        return sum;
    }, 0);
    let content;
    if (data.length > 0) {
        content = data.map((item) => {
            return (_jsx("li", { className: "dropdown-cart__item", children: _jsxs(Link, { to: item.url, className: "dropdown-cart__item-link", children: [_jsx("img", { className: "dropdown-cart__item-img", src: item.image, alt: item.title }), _jsxs("div", { className: "dropdown-cart__item-info", children: [_jsx("p", { className: "dropdown-cart__item-title", children: item.title }), _jsxs("p", { className: "dropdown-cart__item-quantity", children: [_jsx("strong", { children: "Quantity : " }), _jsx("span", { className: "red", children: item.quantity })] }), _jsxs("p", { className: "dropdown-cart__item-price", children: [_jsx("strong", { children: "Price :" }), " ", _jsx("span", { className: "red", children: item.price })] })] })] }) }, item.title));
        });
    }
    else {
        content = _jsx("p", { className: "dropdown-cart__empty", children: "Your cart is empty" });
    }
    return (_jsxs("div", { className: "dropdown-cart", children: [_jsx("ol", { className: "dropdown-cart__list", children: content }), _jsxs("p", { className: "dropdown-cart__price", children: ["Subtotal : ", _jsxs("span", { className: "red", children: ["$", totalPrice] })] }), _jsx(Link, { className: "dropdown-cart__link", to: "/cart", children: "View Cart" })] }));
};
