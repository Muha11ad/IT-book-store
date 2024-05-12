import { Carousel } from "../../../shared/ui/carousel";
import { SLIDES } from "../../../shared/consts/contentSlider";
import "./Slider.scss";
import { Link } from "react-router-dom";

export const Slider = () => {
	let children = SLIDES.map((slide, index : number) => {
		return (
			<Link key={index} to={slide.url}>
				<img className="slide__img" src={slide.img} alt={slide.alt} />
			</Link>
		);
	});
	return (
		<div className="slider-wrapper">
			<Carousel>{children}</Carousel>
		  </div>
	);
};
