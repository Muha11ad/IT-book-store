import slide1 from "../../shared/assets/slide1.png"
import slide2 from "../../shared/assets/slide2.png"
import slide3 from "../../shared/assets/slide3.png"

export interface ISlides {
    img: string;
    url: string;
    alt: string;
}

export const SLIDES: ISlides[] = [
    {
        img: slide1,
        url: '/books/description/9780137843749',
        alt: 'Learn Enough JavaScript to Be Dangerous.',
    },
    {
        img: slide2,
        url: '/books/description/9780137843459',
        alt: 'Learn Enough Developer Tools to Be Dangerous.',
    },
    {
        img: slide3,
        url: '/books/description/9781593275723',
        alt: 'Rails Crash Course.',
    },
]