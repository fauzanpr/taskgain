import Carousel from "@components/Carousel";
import type { IValueSection } from "@interfaces/homepage"
import type { Dispatch, SetStateAction } from "react";

interface IProps extends IValueSection {
    isActive: boolean;
    setImageActive: Dispatch<SetStateAction<number>>;
    iconOn: string;
    iconOff: string;
};

function ValueCard({ id, title, description, isActive, setImageActive, iconOn, iconOff }: IProps) {
    return (
        <div className={`flex items-start gap-4 p-8 border-l-4 hover:border-primary cursor-pointer hover:bg-gray-50 ${isActive ? "bg-gray-50 border-primary" : "border-l-white"}`} onClick={() => setImageActive(id)}>
            { isActive ? <img src={iconOn} alt={title} /> : <img src={iconOff} alt={title} /> }
            <div>
                <h3 className="text-lg xl:text-xl mb-4 font-semibold">{ title }</h3>
                <p className="text-sm xl:text-base">{ description }</p>
            </div>
        </div>
    )
}

export default ValueCard