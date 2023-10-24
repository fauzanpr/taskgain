import Star from "./Star";

interface IProps {
    review: string;
    author: string;
    position: string;
    stars: number;
}

function CarouselItem({ review, author, position, stars }: IProps) {
    return (
        <div className="flex gap-8">
            <div className="w-1/2 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                    <Star counter={stars} />
                    <p className="text-lg italic">“{ review }”</p>
                </div>
                <div>
                    <p>{ author }</p>
                    <p className="text-gray-400 font-light text-sm">{ position }</p>
                </div>
            </div>
            <div className="bg-gray-400 h-96 w-1/2 rounded-xl" />
        </div>
    )
}

export default CarouselItem;