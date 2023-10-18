import { BsArrowRight } from "react-icons/bs";

interface IProps {
    text: string;
}

function ButtonArrow({ text }: IProps) {
    return (
        <button className="flex gap-4 items-center bg-gray-400 text-white text-sm px-8 py-3 w-fit rounded-full">{ text } <BsArrowRight size={20} /></button>
    )
}

export default ButtonArrow;