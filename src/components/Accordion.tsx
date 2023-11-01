import type { IFaq } from "@interfaces/homepage";
import { type Dispatch, type SetStateAction } from "react";
import ArrowUp from "@assets/icon/up.svg";
import ArrowDown from "@assets/icon/down.svg";

interface IProps extends IFaq {
    type?: "fill" | "line";
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
};

function Accordion({ id, title, description, open, setOpen, type }: IProps) {
    return (
        <>
            <div className={`${(open === id || type === "fill") && "bg-gray-50 rounded-lg"} px-4 hover:bg-gray-50`}>
                <div className={`flex items-center justify-between text-xl px-2 py-6 border-gray-100 cursor-pointer ${open !== id && type !== "fill" && "border-b-2"}`} onClick={() => {
                    if (open === id) setOpen(-1);
                    else setOpen(id);
                }}>
                    <p className="font-semibold">{title}</p>
                    {open === id ? <img src={ArrowUp.src} alt="panah ke atas" /> : <img src={ArrowDown.src} alt="panah ke bawah" /> }
                </div>
                <p className={`${open !== id && "hidden"} p-2`}>{description}</p>
            </div>
        </>
    )
}

export default Accordion