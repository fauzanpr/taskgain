import type { IValueSection } from "@interfaces/homepage"
import type { Dispatch, SetStateAction } from "react";

interface IProps extends IValueSection {
    isActive: boolean;
    setImageActive: Dispatch<SetStateAction<number>>;
};

function ValueCard({ id, title, description, isActive, setImageActive }: IProps) {
    return (
        <div className={`flex items-start gap-4 p-8 border-l-4 hover:border-gray-500 cursor-pointer hover:bg-gray-50 ${isActive ? "bg-gray-50 border-gray-500" : "border-l-white"}`} onClick={() => setImageActive(id)}>
            <div className="bg-gray-300 rounded-full w-1/12 text-gray-300 text-center">p</div>
            <div>
                <h3 className="text-xl mb-4 font-semibold">{ title }</h3>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default ValueCard