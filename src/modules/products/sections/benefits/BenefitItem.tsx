import type { Dispatch, SetStateAction } from "react";
import ArrowUp from "@assets/icon/up.svg";
import ArrowDown from "@assets/icon/down.svg";

interface IProps {
    id: string;
    title: string;
    description: string;
    open: string;
    setOpen: Dispatch<SetStateAction<string>>;
};

function BenefitItem({ id, title, description, open, setOpen }: IProps) {
    return (
        <div onClick={() => {
            if (open === id) {
                setOpen("");
            } else {
                setOpen(id);
            }
        }} className={`hover:bg-gray-50 cursor-pointer flex flex-col gap-2 py-6 ${open === id ? "border-b-2 border-gray-700" : "border-b border-gray-300"}`}>
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <p className="text-2xl text-gray-400 font-medium">{id}</p>
                    <p className="text-2xl">{title}</p>
                </div>
                {open === id ? <img src={ArrowUp.src} alt="Arrow up" /> : <img src={ArrowDown.src} alt="Arrow down" />}
            </div>
            <div className={`${open === id ? "flex" : "hidden"} gap-4`}>
                <p className="text-2xl text-white font-medium cursor-default">01</p>
                <p className="text-gray-500 font-light">{description}</p>
            </div>
        </div>
    )
}

export default BenefitItem