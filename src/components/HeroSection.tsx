import ButtonArrow from "./ButtonArrow";
import HeroImg from "@assets/hero-img.svg";

interface IProps {
    title: string;
    description: string;
    type?: string;
};

function HeroSection({ title, description, type = "default" }: IProps) {
    if (type === "default") {
        return (
            <div className="flex flex-col gap-8 text-center xl:w-2/3 mx-auto">
                <h2 className="text-5xl font-medium">
                    {title}
                </h2>
                <p className="text-lg font-normal text-gray-500">
                    {description}
                </p>
            </div>

        )
    } else if (type === "full") {
        return (
            <div className="flex flex-col gap-8 text-center mx-auto pt-44">
                <div className="xl:w-2/3 mx-auto flex flex-col gap-8">
                    <h2 className="text-5xl font-medium">
                        {title}
                    </h2>
                    <p className="text-lg font-normal text-gray-500">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center">
                    <ButtonArrow text="See Our Resources" />
                </div>
                <img src={HeroImg.src} alt="Hero image" />
            </div>
        )
    }
}

export default HeroSection