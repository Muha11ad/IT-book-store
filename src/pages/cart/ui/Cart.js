import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { EmptyCart } from "../../../entities/empryCart";
import { useAppSelector } from "../../../shared/store/store";
import { CartContent } from "../../../shared/ui/cartContent";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import { selectCartData } from "../model/CartSelector";
import "./Cart.scss";
export const Cart = () => {
    const data = useAppSelector(selectCartData);
    const totalPrice = data.reduce((sum, item) => {
        const price = Number(item.price.slice(1));
        sum += price * item.quantity;
        return sum;
    }, 0);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: "container cart-wrapper", children: data.length ? (_jsxs("table", { className: "table", children: [_jsxs("tr", { className: "table-row", children: [_jsx("th", { className: "table__heading", children: "Product" }), _jsx("th", { className: "table__heading", children: "Price" }), _jsx("th", { className: "table__heading", children: "Quantity" })] }), _jsx(CartContent, {}), _jsx("tr", { className: "table-row", children: _jsxs("td", { className: "table__footer-item", children: ["Total price : ", _jsxs("span", { className: "cart-total-price", children: ["$", totalPrice] })] }) })] })) : (_jsx(EmptyCart, {})) }), _jsx(Footer, {})] }));
};
