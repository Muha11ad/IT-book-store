import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./carousel.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import clsx from "clsx";
import { useRef, useState } from "react";
export const Carousel = (props) => {
    const { children, autoWidth, responsive, disableDotsControls, className } = props;
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleSlideChanged = (e) => setCurrentIndex(e.item);
    return (_jsxs("div", { className: clsx("carousel", className), children: [_jsx(AliceCarousel, { mouseTracking: true, ref: carousel, items: children, autoWidth: autoWidth, disableButtonsControls: true, responsive: responsive, onSlideChanged: handleSlideChanged, disableDotsControls: disableDotsControls }), _jsx("button", { className: "carousel-prev-btn", disabled: currentIndex === 0, onClick: (e) => carousel?.current?.slidePrev(e), children: "\u27E8" }), _jsx("button", { className: "carousel-next-btn", disabled: currentIndex === children.length - 1, onClick: (e) => carousel?.current?.slideNext(e), children: "\u27E9" })] }));
};
