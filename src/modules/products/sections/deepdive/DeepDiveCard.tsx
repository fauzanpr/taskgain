import ArrowDark from "@assets/product/deepdive/arrowdark.svg";
import ArrowLight from "@assets/product/deepdive/arrowLight.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

interface IProps {
    title: string;
    description: string;
    reader: string;
    color: string;
};

function Arrow({ isHover }: { isHover: boolean }) {
    if (isHover) return <img src={ArrowLight.src} alt="Arrow dark right" width={30} />;
    return <img src={ArrowDark.src} alt="Arrow dark right" width={30} />;
}

function DeepDiveCard({ title, description, reader, color }: IProps) {
    const [isHover, setIsHover] = useState(false);
    let col;
    if (color === "blue") {
        col = "bg-blue-500";
    } else if (color === "green") {
        col = "bg-green-500";
    } else if (color === "yellow") {
        col = "bg-yellow-500";
    } else if (color === "red") {
        col = "bg-red-500";
    }
    
    return (
        <div className="flex flex-col gap-6 p-8 shadow-md">
            <div className="flex justify-between items-center">
                <div className={`h-4 w-4 rounded-full ${col || "bg-gray-500"}`} />
                <p className="text-gray-500 font-light">{reader}</p>
            </div>
            <h3 className="text-3xl font-semibold">{title}</h3>
            <div className="flex items-start justify-between gap-4">
                <p className="text-gray-400 w-3/4">{description}</p>
                <button className="transition-all border w-1/4 border-gray-500 px-6 rounded-full hover:bg-primary hover:border-primary hover:text-white flex justify-center items-center">
                    <IoIosArrowRoundForward size={40} />
                </button>
            </div>
        </div>
    )
}

export default DeepDiveCard