import Star from "./Star";

interface IProps {
    review: string;
    author: string;
    position: string;
    stars: number;
    image: string;
    imagePosition?: "right" | "left";
}

function CarouselItem({ review, author, position, stars, image, imagePosition = "right" }: IProps) {
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
            <div className="flex gap-8 justify-between">
                <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <Star counter={stars} />
                        <p className="text-lg italic">“{review}”</p>
                    </div>
                    <div>
                        <p>{author}</p>
                        <p className="text-gray-400 font-light text-sm">{position}</p>
                    </div>
                </div>
                <div className="hidden md:block h-96">
                    <img src={image} alt="Gambar Ilustrasi Review 1" />
                </div>
            </div>
        )
    }
}

export default CarouselItem;