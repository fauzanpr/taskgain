import type { IReview } from "@interfaces/homepage";
import CarouselItem from "./CarouselItem"

interface IProps {
    imagePosition?: "left" | "right";
    data: IReview[];
};

function Carousel({ imagePosition = "right", data }: IProps) {
    if (imagePosition === "right") {
        return (
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-fit overflow-hidden rounded-lg md:h-[55vh]">
                    {data.map(d => <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <CarouselItem stars={d.stars} author={d.author} position={d.position} review={d.review} imagePosition={imagePosition} />
                    </div>)}-
                </div>
                {/* <!-- Slider controls --> */}
                <div className="flex absolute left-1/3 bottom-4 z-30">
                    <button type="button" className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200  group-hover:bg-gray-300 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 group-hover:bg-gray-300 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        )
    } else if (imagePosition === "left") {
        return (
            <div id="controls-carousel" className="relative w-full" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <CarouselItem stars={4} author="Wouter H." position="Chapter Lead" review="I often have meetings where we bring together a large group of offline and online stakeholders. StoriesOnBoard has helped me structure this meeting while we are brainstorming on product design and the E2E process. The result is easily improved during follow-up meetings or exported to an Excel or pdf and shared within the organization." imagePosition={imagePosition} />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <CarouselItem stars={5} author="Fauzan P." position="Ordinary Human" review="INI KEREN POL" imagePosition={imagePosition} />
                    </div>
                </div>
                {/* <!-- Slider controls --> */}
                <div className="flex absolute right-0 bottom-4 z-30">
                    <button type="button" className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200  group-hover:bg-gray-300 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 group-hover:bg-gray-300 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel
