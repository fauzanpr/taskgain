import { FaArrowRightLong } from "react-icons/fa6";

function Button() {
    return (
        <button className="flex gap-4 mx-auto items-center bg-gray-400 text-white px-8 py-3 w-fit rounded-full">All Product Features <FaArrowRightLong size={20} /></button>
    )
}

export default Button