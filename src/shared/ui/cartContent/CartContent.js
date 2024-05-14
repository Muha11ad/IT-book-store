import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./CartContent.scss";
import { selectCartData } from "../../../pages/cart/model/CartSelector";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { changeQuantity, removeFromCart, } from "../../../pages/cart/model/CartSlice";
export const CartContent = () => {
    const data = useAppSelector(selectCartData);
    const dispatch = useAppDispatch();
    /*Functions start*/
    const deleteOrder = (e, item) => {
        e.preventDefault();
        dispatch(removeFromCart(item));
    };
    const increase = (e, index, quantity) => {
        e.preventDefault();
        quantity = quantity + 1;
        dispatch(changeQuantity({ index, quantity }));
    };
    const decrease = (e, index, quantity) => {
        e.preventDefault();
        quantity = quantity - 1;
        dispatch(changeQuantity({ index, quantity }));
    };
    /*Functions endpoint*/
    let content;
    if (data.length) {
        content = data.map((item, index) => {
            return (_jsx("tr", { className: "table__body-row", children: _jsxs(Link, { to: "/", className: "table__body-row-link", children: [_jsx("td", { className: "table__body-item", children: _jsxs("div", { className: "table__body-image-wrapper", children: [_jsx("img", { className: "table__body-image", src: item.image, alt: item.title }), _jsx("p", { className: "table__body-title", children: item.title })] }) }), _jsx("td", { className: "table__body-item-price", children: item.price }), _jsxs("td", { className: "table__body-item-btns", children: [_jsx("button", { className: "table__body-item-button btn-increment", onClick: (e) => {
                                        increase(e, index, item.quantity || 0);
                                    }, children: "+" }), _jsx("span", { children: item.quantity }), _jsx("button", { disabled: item.quantity === 1 ? true : false, className: "table__body-item-button btn-decrement", onClick: (e) => {
                                        decrease(e, index, item.quantity || 0);
                                    }, children: "-" }), _jsx("button", { className: "table__body-item-button btn-delete", onClick: (e) => {
                                        deleteOrder(e, item);
                                    }, children: "X" })] })] }) }, index));
        });
    }
    return _jsx("tbody", { className: "table__body", children: content });
};
