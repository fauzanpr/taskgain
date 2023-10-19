import type { IFaq } from "@interfaces/homepage";
import { type Dispatch, type SetStateAction } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IProps extends IFaq {
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
};

function Accordion({ id, title, description, open, setOpen }: IProps) {
    return (
        <>
            <div className={`${open === id && "bg-gray-50 rounded-lg"} px-4 hover:bg-gray-50`}>
                <div className={`flex items-center justify-between text-xl px-2 py-6 border-gray-100 cursor-pointer ${open !== id && "border-b-2"}`} onClick={() => {
                    if (open === id) setOpen(-1);
                    else setOpen(id);
                }}>
                    <p className="font-semibold">{title}</p>
                    {open === id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <p className={`${open !== id && "hidden"} p-2`}>{description}</p>
            </div>
        </>
    )
}

export default Accordion