import ArrowRightDark from "@assets/icon/arrow-right-dark.svg";

interface IProps {
    title: string;
    description: string;
    reader: string;
    color: string;
};

function DeepDiveCard({ title, description, reader, color }: IProps) {
    let col;
    if (color === "blue") {
        col = "bg-blue-500";
    } else if (color === "green") {
        col = "bg-green-500";
    } else if (color === "yellow") {
        col = "bg-yellow-500";
    } else if (color === "red") {
        col = "bg-red-500";
    }
    return (
        <div className="flex flex-col gap-6 p-8 shadow-md">
            <div className="flex justify-between items-center">
                <div className={`h-4 w-4 rounded-full ${col || "bg-gray-500"}`} />
                <p className="text-gray-500 font-light">{reader}</p>
            </div>
            <h3 className="text-3xl font-semibold">{title}</h3>
            <div className="flex justify-between gap-4">
                <p className="text-gray-400">{description}</p>
                <button className="border border-gray-500 px-6 rounded-full hover:bg-gray-300">
                    <img src={ArrowRightDark.src} alt="Arrow right" />
                </button>
            </div>
        </div>
    )
}

export default DeepDiveCard