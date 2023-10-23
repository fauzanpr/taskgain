// import { BsArrowRight } from "react-icons/bs";
import ArrowRight from "@assets/icon/arrow-right.svg";

interface IProps {
    text: string;
}       

function ButtonArrow({ text }: IProps) {
    return (
        <button className="flex gap-4 items-center bg-gray-400 text-white text-sm px-8 py-3 w-fit rounded-full">{ text } <img src={ArrowRight.src} alt="Panah ke kanan" /></button>
        // <button className="flex gap-4 items-center bg-gray-400 text-white text-sm px-8 py-3 w-fit rounded-full">{ text }</button>
    )
}

export default ButtonArrow;