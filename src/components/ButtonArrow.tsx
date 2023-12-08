// import { BsArrowRight } from "react-icons/bs";
import ArrowRight from "@assets/icon/arrow-right.svg";
import ArrowRightUp from "@assets/icon/arrow-leftup.svg";

interface IProps {
    text: string;
    type?: "normal" | "rightup"
}

function ButtonArrow({ text, type = "normal" }: IProps) {
    if (type === "normal") {
        return (
            <button className="transition-all flex gap-4 items-center bg-primary hover:bg-primaryHover text-white text-sm px-8 py-3 w-fit rounded-full">{text} <img src={ArrowRight.src} alt="Panah ke kanan" /></button>
        )
    } else if (type === "rightup") {
        return (
            <button className="transition-all flex gap-4 items-center bg-primary hover:bg-primaryHover text-white text-sm px-8 py-3 w-fit rounded-full">{text} <img src={ArrowRightUp.src} alt="Panah ke kanan" /></button>
        )
    }
}

export default ButtonArrow;