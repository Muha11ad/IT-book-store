import { jsx as _jsx } from "react/jsx-runtime";
import { Carousel } from "../../../shared/ui/carousel";
import { SLIDES } from "../../../shared/consts/contentSlider";
import "./Slider.scss";
import { Link } from "react-router-dom";
export const Slider = () => {
    let children = SLIDES.map((slide, index) => {
        return (_jsx(Link, { to: slide.url, children: _jsx("img", { className: "slide__img", src: slide.img, alt: slide.alt }) }, index));
    });
    return (_jsx("div", { className: "slider-wrapper", children: _jsx(Carousel, { children: children }) }));
};
