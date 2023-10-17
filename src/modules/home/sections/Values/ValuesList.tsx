import { useState } from "react";
import ValueCard from "./ValueCard";
import { valueConstant } from "src/utils/constant";

const images = [
    {
        id: 1,
        element: <div className="bg-gray-500 w-1/2" />
    },
    {
        id: 2,
        element: <div className="bg-blue-100 w-1/2" />
    },
    {
        id: 3,
        element: <div className="bg-green-100 w-1/2" />
    }
];

function ValuesList() {
    const [imageActive, setImageActive] = useState(1);
    const getImageActive = () => {
        return images.find(image => imageActive === image.id);
    };
    return (
        <div className="flex gap-8">
            { getImageActive()?.element }
            <div className="w-1/2">
                {valueConstant.map((value) => {
                    return <>
                        <ValueCard setImageActive={setImageActive} isActive={value.id === imageActive} title={value.title} description={value.description} id={value.id} key={value.id} />
                        { value.id !== 3 && <hr /> }
                    </>
                })}
            </div>
        </div>
    )
}

export default ValuesList;