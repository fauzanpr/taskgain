import Star from "./Star";
import Review1 from "@assets/homepage/reviews/review-1.svg";

interface IProps {
    review: string;
    author: string;
    position: string;
    stars: number;
    imagePosition?: "right" | "left";
}

function CarouselItem({ review, author, position, stars, imagePosition = "right" }: IProps) {
    if (imagePosition === "left") {
        return (
            <div className="flex gap-8">
                <div className="bg-gray-400 h-96 w-1/2 rounded-xl" />
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Star counter={stars} />
                        <p className="text-lg italic">“{review}”</p>
                    </div>
                    <div>
                        <p>{author}</p>
                        <p className="text-gray-400 font-light text-sm">{position}</p>
                    </div>
                </div>
            </div>
        )
    } else if (imagePosition === "right") {
        return (
            <div className="flex gap-8">
                <div className="w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Star counter={stars} />
                        <p className="text-lg italic">“{review}”</p>
                    </div>
                    <div>
                        <p>{author}</p>
                        <p className="text-gray-400 font-light text-sm">{position}</p>
                    </div>
                </div>
                <div className="h-96">
                    <img src={Review1.src} alt="Gambar Ilustrasi Review 1" />
                </div>
            </div>
        )
    }
}

export default CarouselItem;