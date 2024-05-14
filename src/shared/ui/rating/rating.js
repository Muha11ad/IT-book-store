import { jsx as _jsx } from "react/jsx-runtime";
import { Rating as ReactRating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ratingStyles = {
    itemShapes: Star,
    activeFillColor: "#f59e0b",
    inactiveFillColor: "#ffedd5",
};
export const Rating = (props) => {
    const { value, maxWidth = 110, className } = props;
    return (_jsx(ReactRating, { style: { maxWidth }, value: value, itemStyles: ratingStyles, readOnly: true, className: className }));
};
