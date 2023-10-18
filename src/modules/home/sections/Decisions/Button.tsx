import { BsArrowRight } from "react-icons/bs";

function Button() {
    return (
        <button className="flex gap-4 mx-auto items-center bg-gray-400 text-white px-8 py-3 w-fit rounded-full">All Product Features <BsArrowRight size={25} /></button>
    )
}

export default Button