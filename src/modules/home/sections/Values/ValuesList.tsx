import { useState } from "react";
import ValueCard from "./ValueCard";
import { valueConstant } from "src/utils/constant";
import option1 from "src/assets/option1.svg";
import imgEmbrace from "src/assets/homepage/values/imgEmbrace.svg";
import imgLess from "src/assets/homepage/values/imgLess.svg"

const images = [
    {
        id: 1,
        element: <img src={option1.src} alt="Opsi 1" />,
    },
    {
        id: 2,
        element: <img src={imgLess.src} alt="Image Save" />,
    },
    {
        id: 3,
        element: <img src={imgEmbrace.src} alt="Image Save" />,
    }
];

const icons = [

]

function ValuesList() {
    const [imageActive, setImageActive] = useState(1);
    const getImageActive = () => {
        return images.find(image => imageActive === image.id);
    };
    return (
        <div className="flex gap-8 items-center">
            { getImageActive()?.element }
            <div className="w-1/2">
                {valueConstant.map((value) => {
                    return <>
                        <ValueCard iconOff={value.iconOff} iconOn={value.iconOn} setImageActive={setImageActive} isActive={value.id === imageActive} title={value.title} description={value.description} id={value.id} key={value.id} />
                        { value.id !== 3 && <hr /> }
                    </>
                })}
            </div>
        </div>
    )
}

export default ValuesList;