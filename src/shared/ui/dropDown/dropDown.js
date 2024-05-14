import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import "./dropDown.scss";
export const DropDown = (props) => {
    const { labelElement, isOpen, content, isArrow = false, className } = props;
    let isOpenDropDown = isOpen ? "dropdown_open" : "dropdown_close";
    if (isOpen === undefined) {
        isOpenDropDown = "dropdown_opening-state_hover";
    }
    return (_jsxs("div", { className: clsx("dropdown", isOpenDropDown, isArrow && "dropdown_with-arrow", className), children: [_jsx("div", { className: "dropdown__label", children: labelElement }), _jsx("div", { className: "dropdown__wrapper-content", children: _jsx("div", { className: "dropdown__content", children: content }) })] }));
};
