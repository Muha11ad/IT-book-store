import "./carousel.scss";
import AliceCarousel, { Responsive } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import clsx from "clsx";
import { FC, useRef, useState } from "react";

interface ICarousel {
	/** List of elements for the carousel. */
	readonly children: JSX.Element[] | Element[];
	/** The number of visible elements in the carousel. Default 1. */
	readonly autoWidth?: boolean;
	readonly responsive?: Responsive;
	readonly disableDotsControls?: boolean;
	/** Additional styles. */
	readonly className?: string;
}

export const Carousel: FC<ICarousel> = (props) => {
	const { children, autoWidth, responsive, disableDotsControls, className } =
		props;

	const carousel = useRef<AliceCarousel>(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSlideChanged = (e: any) => setCurrentIndex(e.item);

	return (
		<div className={clsx("carousel", className)}>
			<AliceCarousel
				mouseTracking
				ref={carousel}
				items={children}
				autoWidth={autoWidth}
				disableButtonsControls
				responsive={responsive}
				onSlideChanged={handleSlideChanged}
				disableDotsControls={disableDotsControls}
				
			/>
			<button
				className="carousel-prev-btn"
				disabled={currentIndex === 0}
				onClick={(e) => carousel?.current?.slidePrev(e)}
			>
				{"\u27E8"}
			</button>
			<button
				className="carousel-next-btn"
				disabled={currentIndex === children.length - 1}
				onClick={(e) => carousel?.current?.slideNext(e)}
			>
				{"\u27E9"}
			</button>
		</div>
	);
};
