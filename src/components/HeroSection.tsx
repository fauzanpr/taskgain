interface IProps {
    title: string;
    description: string;
};

function HeroSection({ title, description }: IProps) {
    return (
        <div className="flex flex-col gap-8 text-center xl:w-2/3 mx-auto">
            <h2 className="text-5xl font-medium">
                { title }
            </h2>
            <p className="text-lg font-normal text-gray-500">
                { description }
            </p>
        </div>

    )
}

export default HeroSection